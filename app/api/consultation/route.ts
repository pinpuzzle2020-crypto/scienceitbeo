import { NextRequest, NextResponse } from "next/server"

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

        const scriptUrl = process.env.GOOGLE_SCRIPT_URL

        if (!scriptUrl) {
            console.error("GOOGLE_SCRIPT_URL 환경변수가 설정되지 않았습니다.")
            return NextResponse.json(
                { error: "서버 설정 오류가 발생했습니다. 관리자에게 문의해 주세요." },
                { status: 500 }
            )
        }

        // Google Apps Script Web App으로 데이터 전송
        const response = await fetch(scriptUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: body.name,
                phone: body.phone,
                grade: body.grade,
                message: body.message || "",
            }),
        })

        if (!response.ok) {
            throw new Error(`Google Script 응답 오류: ${response.status}`)
        }

        const result = await response.json()

        if (result.result === "success") {
            return NextResponse.json({ success: true })
        } else {
            throw new Error(result.message || "알 수 없는 오류")
        }
    } catch (error) {
        console.error("상담 예약 처리 오류:", error)
        return NextResponse.json(
            { error: "상담 예약 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." },
            { status: 500 }
        )
    }
}
