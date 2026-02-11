import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { ValueComparison } from "@/components/landing/value-comparison"
import { WhyChooseUs } from "@/components/landing/why-choose-us"
import { ReserveSeat } from "@/components/landing/reserve-seat"
import { BonusesSection } from "@/components/landing/bonuses-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export default function Page() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <ValueComparison />
      <WhyChooseUs />
      <ReserveSeat />
      <BonusesSection />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
