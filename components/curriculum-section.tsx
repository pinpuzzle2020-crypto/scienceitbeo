import { GraduationCap, School } from "lucide-react"

export function CurriculumSection() {
  return (
    <section id="curriculum" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Curriculum Roadmap
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            학년별 로드맵
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Middle School */}
          <div className="relative overflow-hidden rounded-lg border border-border bg-card p-8 lg:p-10">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/5" />
            <div className="relative">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                  <School className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">
                    Middle School
                  </p>
                  <h3 className="text-xl font-bold text-card-foreground">
                    중등부
                  </h3>
                </div>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                과학적 사고의 틀을 마련합니다.
              </p>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3 text-sm text-card-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  교과 개념 완성 + 고등 과학 연계 심화 학습
                </li>
                <li className="flex items-start gap-3 text-sm text-card-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  수행평가 및 탐구 보고서 완벽 대비
                </li>
              </ul>
            </div>
          </div>

          {/* High School */}
          <div className="relative overflow-hidden rounded-lg border border-primary/30 bg-card p-8 lg:p-10">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10" />
            <div className="relative">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">
                    High School
                  </p>
                  <h3 className="text-xl font-bold text-card-foreground">
                    고등부
                  </h3>
                </div>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                내신 만점부터 수능 1등급까지.
              </p>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3 text-sm text-card-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong className="text-foreground">통합과학:</strong>{" "}
                    개정 교육과정 핵심 개념 및 유형 정복
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-card-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong className="text-foreground">{"물/화/생/지:"}</strong>{" "}
                    과목별 킬러 문항 집중 공략 및 모의고사 실전 훈련
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
