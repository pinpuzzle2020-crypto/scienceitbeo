import { ClipboardCheck, BookOpenCheck, Stethoscope, Send } from "lucide-react"

const steps = [
  {
    icon: ClipboardCheck,
    step: "Step 1",
    title: "복습 테스트",
    description: "등원 직후 지난 수업 복습 테스트를 실시합니다.",
  },
  {
    icon: BookOpenCheck,
    step: "Step 2",
    title: "본 수업 & 질의응답",
    description: "10년 경력 강사의 본 수업 및 실시간 질의응답이 진행됩니다.",
  },
  {
    icon: Stethoscope,
    step: "Step 3",
    title: "취약점 클리닉",
    description:
      "수업 종료 후 개별 취약점 클리닉을 진행합니다. 통과 시 하원합니다.",
  },
  {
    icon: Send,
    step: "Step 4",
    title: "학습 리포트 발송",
    description:
      "학부모님께 당일 학습 리포트 및 성적표를 발송합니다.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Management System
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-card-foreground lg:text-4xl">
            밀착 관리 프로세스
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            매일 반복되는 4단계 밀착 관리로, 배운 것을 확실하게 내 것으로
            만듭니다.
          </p>
        </div>

        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-16 hidden h-px bg-border lg:block" />

          {steps.map((item, i) => (
            <div key={item.step} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-background">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                {item.step}
              </p>
              <h3 className="mt-2 text-base font-bold text-card-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              {i < steps.length - 1 && (
                <div className="mx-auto mt-6 h-8 w-px bg-border lg:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
