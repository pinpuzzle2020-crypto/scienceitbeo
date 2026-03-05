import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StrengthsSection } from "@/components/strengths-section"
import { CurriculumSection } from "@/components/curriculum-section"
import { ProcessSection } from "@/components/process-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StrengthsSection />
        <CurriculumSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
