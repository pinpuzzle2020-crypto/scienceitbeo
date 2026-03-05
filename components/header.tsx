"use client"

import { useState } from "react"
import { Menu, X, FlaskConical } from "lucide-react"

const navLinks = [
  { label: "핵심 강점", href: "#strengths" },
  { label: "커리큘럼", href: "#curriculum" },
  { label: "관리 시스템", href: "#process" },
  { label: "상담 안내", href: "#contact" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <FlaskConical className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold tracking-tight text-foreground">
            하이엔드 과학학원
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            상담 예약
          </a>
        </nav>

        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-md bg-primary px-5 py-2.5 text-center text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              onClick={() => setMobileOpen(false)}
            >
              상담 예약
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
