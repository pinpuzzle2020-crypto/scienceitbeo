import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <Image
        src="/images/hero-science.jpg"
        alt="과학 실험실"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-background/75" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
          <span className="text-xs font-medium tracking-wide text-primary">
            2022 개정 교육과정 완벽 대응
          </span>
        </div>

        <h1 className="text-balance text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          바뀐 교육과정,
          <br />
          <span className="text-primary">흔들리지 않는 1등급</span>의 기준
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          2022 개정 교육과정 완벽 분석 완료. 10년 이상 경력의 대치동급 베테랑
          강사진이 소수정예 밀착 케어로 결과의 차이를 만듭니다.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="w-full rounded-md bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
          >
            개정 교육과정 설명회 예약
          </a>
          <a
            href="#contact"
            className="w-full rounded-md border border-border bg-secondary px-8 py-3.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-border sm:w-auto"
          >
            무료 학습 진단 신청
          </a>
        </div>
      </div>
    </section>
  )
}
