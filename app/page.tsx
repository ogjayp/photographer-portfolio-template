import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PortfolioGallery } from "@/components/portfolio-gallery"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PortfolioGallery />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
