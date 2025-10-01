import Hero from "@/components/hero"
import Services from "@/components/services"
import Software from "@/components/software"
import Portfolio from "@/components/portfolio"
import InfoSection from "@/components/info-section"
import AnimatedBackground from "@/components/animated-background"
import CursorGlow from "@/components/cursor-glow"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <AnimatedBackground />
      <CursorGlow />
      <Navigation />
      <Hero />
      <Services />
      <Software />
      <Portfolio />
      <InfoSection />
    </main>
  )
}
