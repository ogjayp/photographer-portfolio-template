"use client"

import { useState } from "react"
import Image from "next/image"
import { portfolioItems, categories } from "@/lib/site-config"
import { cn } from "@/lib/utils"

const bentoPositions = [
  { className: "col-span-2 row-span-2", aspectRatio: "aspect-square" },
  { className: "col-span-1 row-span-1", aspectRatio: "aspect-square" },
  { className: "col-span-1 row-span-1", aspectRatio: "aspect-square" },
  { className: "col-span-1 row-span-1", aspectRatio: "aspect-square" },
  { className: "col-span-1 row-span-1", aspectRatio: "aspect-square" },
  { className: "col-span-2 row-span-1", aspectRatio: "aspect-[2/1]" },
]

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filteredItems =
    activeCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="work" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-2">Portfolio</p>
            <h2 className="font-serif text-3xl sm:text-4xl tracking-tight">Selected Work</h2>
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 text-sm tracking-wide transition-colors rounded-sm",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-auto gap-0.5">
          {filteredItems.map((item, index) => {
            const position = bentoPositions[index % bentoPositions.length]
            return (
              <div
                key={item.id}
                className={cn("group relative overflow-hidden cursor-pointer", position.className)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className={cn("relative w-full", position.aspectRatio)}>
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className={cn(
                      "object-cover transition-transform duration-700",
                      hoveredId === item.id && "scale-105",
                    )}
                  />
                  {/* Overlay */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-foreground/0 transition-all duration-300 flex items-end p-6",
                      hoveredId === item.id && "bg-foreground/40",
                    )}
                  >
                    <div
                      className={cn(
                        "translate-y-4 opacity-0 transition-all duration-300",
                        hoveredId === item.id && "translate-y-0 opacity-100",
                      )}
                    >
                      <p className="text-xs tracking-widest uppercase text-primary-foreground/70 mb-1">
                        {item.category}
                      </p>
                      <h3 className="text-lg font-serif text-primary-foreground">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
