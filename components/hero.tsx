import Link from "next/link"
import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig, portfolioItems } from "@/lib/site-config"

export function Hero() {
  const featuredImages = portfolioItems.filter((item) => item.featured).slice(0, 3)

  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-8 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">{siteConfig.hero.greeting}</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-balance mb-6">
              {siteConfig.hero.headline}
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-10 text-pretty">
              {siteConfig.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="px-8">
                <Link href={siteConfig.cta.href}>{siteConfig.cta.label}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 bg-transparent">
                <Link href="#work">View Portfolio</Link>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-12 grid-rows-6 gap-3 h-[500px] lg:h-[600px]">
              {/* Large main image */}
              <div className="col-span-7 row-span-6 relative rounded-lg overflow-hidden">
                <Image
                  src={featuredImages[0]?.image || "/placeholder.svg?height=600&width=400&query=portrait photography"}
                  alt={featuredImages[0]?.title || "Featured work"}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Top right image */}
              <div className="col-span-5 row-span-3 relative rounded-lg overflow-hidden">
                <Image
                  src={featuredImages[1]?.image || "/placeholder.svg?height=300&width=300&query=landscape photography"}
                  alt={featuredImages[1]?.title || "Featured work"}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Bottom right image */}
              <div className="col-span-5 row-span-3 relative rounded-lg overflow-hidden">
                <Image
                  src={featuredImages[2]?.image || "/placeholder.svg?height=300&width=300&query=automotive photography"}
                  alt={featuredImages[2]?.title || "Featured work"}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#work" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown className="w-5 h-5" />
          <span className="sr-only">Scroll to portfolio</span>
        </Link>
      </div>
    </section>
  )
}
