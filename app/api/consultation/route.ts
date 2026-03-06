import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // 기본 유효성 검사
    if (!body.name || !body.phone || !body.grade) {
      return NextResponse.json(
        { error: "필수 항목을 모두 입력해 주세요." },
        { status: 400 }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY 환경변수가 설정되지 않았습니다.")
      return NextResponse.json(
        { error: "이메일 서버 설정 오류가 발생했습니다. 관리자에게 문의해 주세요." },
        { status: 500 }
      )
    }

    // 이메일 내용 구성
    const htmlContent = `
      <h2>새로운 상담 예약이 접수되었습니다.</h2>
      <table border="1" cellpadding="10" style="border-collapse: collapse;">
        <tr>
          <td style="background-color: #f8f9fa;"><strong>학부모 성함</strong></td>
          <td>${body.name}</td>
        </tr>
        <tr>
          <td style="background-color: #f8f9fa;"><strong>연락처</strong></td>
          <td>${body.phone}</td>
        </tr>
        <tr>
          <td style="background-color: #f8f9fa;"><strong>자녀 학년</strong></td>
          <td>${body.grade}</td>
        </tr>
        <tr>
          <td style="background-color: #f8f9fa;"><strong>문의 사항</strong></td>
          <td>${body.message ? body.message.replace(/\n/g, "<br>") : "없음"}</td>
        </tr>
      </table>
      <p style="margin-top: 20px; color: #666; font-size: 12px;">본 메일은 하이엔드 과학학원 웹사이트에서 자동 발송되었습니다.</p>
    `

    // Resend를 통해 이메일 전송
    const { data, error } = await resend.emails.send({
      from: "상담예약 알림 <onboarding@resend.dev>", // Resend 테스트 발신자 (또는 등록된 도메인)
      to: ["pinpuzzle2020@gmail.com"], // 수신자 이메일
      subject: `[상담예약] ${body.name} 학부모님 - ${body.grade}`,
      html: htmlContent,
    })

    if (error) {
      throw new Error(`이메일 전송 실패: ${error.message}`)
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("상담 예약 처리 오류:", error)
    return NextResponse.json(
      { error: "상담 예약 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." },
      { status: 500 }
    )
  }
}
