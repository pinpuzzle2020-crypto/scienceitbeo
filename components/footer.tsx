import { FlaskConical } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <FlaskConical className="h-5 w-5 text-primary" />
            <span className="text-sm font-bold text-card-foreground">
              하이엔드 과학학원
            </span>
          </div>

          <p className="text-center text-xs text-muted-foreground">
            {"서울특별시 강남구 대치동 123-45 | 대표: 홍길동 | 사업자등록번호: 000-00-00000"}
          </p>

          <p className="text-xs text-muted-foreground">
            {"© 2026 하이엔드 과학학원. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
