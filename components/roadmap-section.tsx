"use client"

import { MapPin, Heart, Calendar, Utensils, Activity, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

const features = [
  {
    Icon: MapPin,
    name: "Localização em tempo real",
    description: "Rastreamento seguro para maior tranquilidade da família.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    Icon: Heart,
    name: "Check-in de humor e sono",
    description: "Acompanhamento diário do bem-estar emocional e físico.",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    Icon: Calendar,
    name: "Agenda de compromissos",
    description: "Todas as consultas médicas organizadas em um só lugar.",
    gradient: "from-blue-500 to-green-500",
    bgGradient: "from-blue-500/10 to-green-500/10",
  },
  {
    Icon: Utensils,
    name: "Controle nutricional",
    description: "Dietas personalizadas e lembretes de alimentação.",
    gradient: "from-green-500 to-teal-500",
    bgGradient: "from-green-500/10 to-teal-500/10",
  },
  {
    Icon: Activity,
    name: "Speech-to-text ilimitado",
    description: "Conversão de voz para texto sem limites de uso.",
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-500/10 to-blue-500/10",
  },
]

export function RoadmapSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="px-4 sm:py-24 sm:px-6 lg:px-8 my-[-61px] py-[65px]" aria-labelledby="roadmap-heading" id="demo">
      <div className="mx-auto max-w-7xl">
        <div className="text-center sm:mb-16 space-y-[15px] py-[31px] mb-[19px] mt-[29px]">
          <h2
            id="roadmap-heading"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            O que vem por aí...
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estamos constantemente melhorando para oferecer o melhor suporte possível
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="outline" 
            size="icon" 
            neon={false}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-background/90 backdrop-blur-sm border-2 transition-all duration-300 shadow-lg hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:border-primary active:scale-95 flex items-center justify-center" 
            onClick={() => scroll("left")} 
            aria-label="Scroll left" 
          > 
            <ChevronLeft className="h-5 w-5 px-0 mx-0" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            neon={false}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-background/90 backdrop-blur-sm border-2 transition-all duration-300 shadow-lg hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:border-primary active:scale-95 flex items-center justify-center"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-2 -mx-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className="group/card relative flex-shrink-0 w-[280px] sm:w-[320px] overflow-hidden rounded-3xl border-2 border-border bg-card p-6 sm:p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-primary/30"
              >
                {/* Animated gradient background */}
                <div
                  className={`absolute inset-0 -z-10 bg-gradient-to-br ${feature.bgGradient} opacity-50 transition-opacity duration-500 group-hover/card:opacity-100`}
                />

                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} backdrop-blur-sm transition-all duration-500 group-hover/card:scale-110 group-hover/card:rotate-6 shadow-lg`}
                  >
                    <feature.Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" strokeWidth={2.5} />
                  </div>
                </div>

                <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-foreground">{feature.name}</h3>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>

                {/* Decorative corner accent */}
                <div
                  className={`absolute -top-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br ${feature.gradient} opacity-20 blur-2xl transition-all duration-500 group-hover/card:opacity-40 group-hover/card:scale-150`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
