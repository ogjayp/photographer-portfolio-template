import { siteConfig } from "@/lib/site-config"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
          <div className="grid lg:grid-cols-2">
            {/* Content */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <p className="text-sm tracking-widest uppercase text-muted-foreground mb-2">{siteConfig.about.title}</p>
              <h2 className="font-serif text-3xl sm:text-4xl tracking-tight mb-8 text-balance">
                The story behind the lens
              </h2>
              <div className="space-y-4">
                {siteConfig.about.description.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-border">
                {siteConfig.about.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-2xl sm:text-3xl tracking-tight">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square lg:aspect-auto">
              <img
                src="/professional-photographer-working-with-camera-behi.jpg"
                alt="Photographer at work"
                className="object-cover w-full h-full absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
