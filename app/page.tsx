import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ReviewsSection } from "@/components/reviews-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <HeroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <RoadmapSection />
        <FinalCtaSection />
        <ReviewsSection />
        <Footer />
      </div>
    </main>
  )
}
