"use client"

import { useState } from "react"
import { MapPin, Phone, Gift } from "lucide-react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
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
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-card-foreground">
                  상담 예약이 완료되었습니다
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  빠른 시일 내에 연락드리겠습니다.
                </p>
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
                      학부모 성함
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="홍길동"
                      className="rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      연락처
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="010-0000-0000"
                      className="rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="grade" className="text-sm font-medium text-foreground">
                      자녀 학년
                    </label>
                    <select
                      id="grade"
                      className="rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
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
                      rows={3}
                      placeholder="궁금한 점을 자유롭게 적어주세요."
                      className="resize-none rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 rounded-md bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    상담 예약하기
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
