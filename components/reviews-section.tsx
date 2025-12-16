import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Maria Silva",
    username: "Familiar cuidadora",
    body: "A Aurora ajudou muito! Minha mãe nunca mais esqueceu de tomar os remédios!",
    rating: 4,
  },
  {
    name: "João Santos",
    username: "Familiar cuidador",
    body: "Finalmente consigo acompanhar a rotina do meu pai mesmo morando longe. Essa tranquilidade não tem preço.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    username: "Cuidadora profissional",
    body: "Como cuidadora, o Aurora facilitou muito meu trabalho. Os relatórios automáticos são excelentes!",
    rating: 5,
  },
  {
    name: "Carlos Oliveira",
    username: "Familiar cuidador",
    body: "Interface simples e eficiente. Meu avô de 85 anos usa sem dificuldade alguma.",
    rating: 5,
  },
  {
    name: "Beatriz Lima",
    username: "Familiar cuidadora",
    body: "O sistema de emergência já nos salvou duas vezes. Recomendo para todas as famílias!",
    rating: 5,
  },
  {
    name: "Roberto Ferreira",
    username: "Familiar cuidador",
    body: "Melhor investimento que já fiz. A qualidade de vida da minha mãe melhorou muito.",
    rating: 4,
  },
]

const ReviewCard = ({
  name,
  username,
  body,
  rating,
}: {
  name: string
  username: string
  body: string
  rating: number
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-2xl border p-6",
        "border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80",
        "transition-all duration-300 hover:scale-105 hover:shadow-xl",
      )}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <blockquote className="text-sm leading-relaxed text-foreground">"{body}"</blockquote>
        <div className="flex flex-col mt-2 pt-3 border-t border-border/50">
          <figcaption className="text-base font-semibold text-foreground">{name}</figcaption>
          <p className="text-sm text-muted-foreground">{username}</p>
        </div>
      </div>
    </figure>
  )
}

export function ReviewsSection() {
  const firstRow = reviews.slice(0, reviews.length / 2)
  const secondRow = reviews.slice(reviews.length / 2)

  return (
    <section className="relative w-full py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            O que dizem sobre o{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Aurora</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Famílias e cuidadores que já transformaram suas rotinas
          </p>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center gap-4 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:60s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:60s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-background to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-background to-transparent"></div>
      </div>
    </section>
  )
}
