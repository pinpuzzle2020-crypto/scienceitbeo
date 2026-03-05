import { Award, BookOpen, Users } from "lucide-react"

const strengths = [
  {
    icon: Award,
    number: "01",
    title: "10년+ 베테랑 강사진",
    description:
      "단순 전공자를 넘어선, 10년 이상 필드에서 검증된 전문 강사진의 노하우.",
    detail:
      "까다로운 서술형과 킬러 문항을 꿰뚫는 통찰력 있는 강의.",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "개정 교육과정 완벽 대응",
    description:
      "변화된 2022 개정 교육과정 및 통합과학의 핵심을 정확히 짚어주는 커리큘럼.",
    detail:
      "학교별 최신 기출 경향을 반영한 자체 제작 교재 시스템.",
  },
  {
    icon: Users,
    number: "03",
    title: "프리미엄 소수정예",
    description:
      "한 반 정원제. 대형 강의에서는 불가능한 1:1 끝장 피드백.",
    detail:
      "매 수업 후 당일 테스트 및 미통과 시 개별 클리닉 실시.",
  },
]

export function StrengthsSection() {
  return (
    <section id="strengths" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Core Strengths
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-card-foreground lg:text-4xl">
            3대 핵심 강점
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            결과로 증명하는, 차원이 다른 학습 환경을 제공합니다.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {strengths.map((item) => (
            <div
              key={item.number}
              className="group rounded-lg border border-border bg-background p-8 transition-colors hover:border-primary/40"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-3xl font-black text-border group-hover:text-primary/30">
                  {item.number}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
