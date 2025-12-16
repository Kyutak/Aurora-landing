import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function FinalCtaSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 md:py-28" aria-labelledby="final-cta-heading">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary via-accent to-secondary p-8 sm:p-12 md:p-16 text-center shadow-2xl">
          <div
            className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse-glow"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-pulse-glow animation-delay-1000"
            aria-hidden="true"
          />

          <div className="relative space-y-6 sm:space-y-8">
            <Sparkles className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary-foreground animate-pulse" />

            <h2
              id="final-cta-heading"
              className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl md:text-4xl lg:text-5xl text-balance"
            >
              Por que escolher a Aurora  
            </h2>

            <p className="text-base sm:text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty leading-relaxed">
              Combinamos acessibilidade com automações inteligentes. Simples para o idoso, claro para a família.                             
            </p>
            <Button
              size="lg"
              className="text-base sm:text-lg h-12 sm:h-16 px-8 sm:px-12 bg-background text-primary hover:bg-background/90 shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold hover:scale-105 group"
              aria-label="Conhecer as soluções do Aurora"
            >
              <Link 
                href="/modos" 
                className="flex items-center"
                scroll={false} // Adiciona esse atributo para evitar o comportamento padrão de scroll
              >
                Conheça as soluções
                <ArrowRight
                  className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
