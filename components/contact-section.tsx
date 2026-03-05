"use client"

import { useState } from "react"
import { MapPin, Phone, Gift, Loader2, CheckCircle2, AlertCircle } from "lucide-react"

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrorMessage("")

    const form = e.currentTarget
    const formData = new FormData(form)

    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const grade = formData.get("grade") as string
    const message = formData.get("message") as string

    // 클라이언트 유효성 검사
    if (!name.trim()) {
      setErrorMessage("학부모 성함을 입력해 주세요.")
      return
    }
    if (!phone.trim()) {
      setErrorMessage("연락처를 입력해 주세요.")
      return
    }
    if (!grade) {
      setErrorMessage("자녀 학년을 선택해 주세요.")
      return
    }

    setStatus("loading")

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, grade, message }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "서버 오류가 발생했습니다.")
      }

      setStatus("success")
    } catch (err) {
      setStatus("error")
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "상담 예약 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요."
      )
    }
  }

  return (
    <section id="contact" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Contact &amp; Inquiry
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              상담 안내
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              궁금한 점이 있으시면 언제든지 편하게 문의해 주세요. 전문
              상담사가 친절하게 안내해 드립니다.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">주소</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    서울특별시 강남구 대치동 123-45
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">전화</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    02-1234-5678
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <Gift className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    특별 혜택
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    지금 상담 예약 시, 개정 교육과정 분석 리포트를 무료로
                    증정합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-8 lg:p-10">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-card-foreground">
                  상담 예약이 완료되었습니다
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  입력하신 정보가 정상적으로 접수되었습니다.
                  <br />
                  빠른 시일 내에 연락드리겠습니다.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-medium text-primary transition-opacity hover:opacity-80"
                >
                  추가 상담 예약하기
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-bold text-card-foreground">
                  상담 예약 신청
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  아래 정보를 입력해 주시면 빠르게 연락드리겠습니다.
                </p>

                <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      학부모 성함 <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="홍길동"
                      required
                      disabled={status === "loading"}
                      className="rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      연락처 <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="010-0000-0000"
                      required
                      disabled={status === "loading"}
                      className="rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="grade" className="text-sm font-medium text-foreground">
                      자녀 학년 <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="grade"
                      name="grade"
                      required
                      disabled={status === "loading"}
                      className="rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        학년을 선택해 주세요
                      </option>
                      <option value="중1">중학교 1학년</option>
                      <option value="중2">중학교 2학년</option>
                      <option value="중3">중학교 3학년</option>
                      <option value="고1">고등학교 1학년</option>
                      <option value="고2">고등학교 2학년</option>
                      <option value="고3">고등학교 3학년</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      문의 사항 (선택)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="궁금한 점을 자유롭게 적어주세요."
                      disabled={status === "loading"}
                      className="resize-none rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  {/* 에러 메시지 */}
                  {(status === "error" || errorMessage) && (
                    <div className="flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3">
                      <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                      <p className="text-sm text-destructive">
                        {errorMessage || "오류가 발생했습니다. 다시 시도해 주세요."}
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="mt-2 flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        접수 중...
                      </>
                    ) : (
                      "상담 예약하기"
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
