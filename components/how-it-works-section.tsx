"use client"
import { Timeline } from "@/components/ui/timeline"
import { UserPlus, Smartphone, Sparkles } from "lucide-react"

export function HowItWorksSection() {
  const data = [
    {
      title: "Passo 1",
      content: (
        <div className="space-y-4 opacity-100 border-background border-2 rounded-md border-none">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-lg">
              <UserPlus className="h-8 w-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">O familiar cria a conta</h3>
          </div>
          <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl">
            Cadastro simples e rápido no app ou web. Configure perfis e preferências em poucos minutos. Defina a rotina
            e lembretes personalizados.
          </p>
        </div>
      ),
    },
    {
      title: "Passo 2",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 text-secondary-foreground shadow-lg">
              <Smartphone className="h-8 w-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">O idoso instala o app</h3>
          </div>
          <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl">
            Disponível para Android com interface acessível. Botões e textos claros, navegação simplificada.
          </p>
        </div>
      ),
    },
    {
      title: "Passo 3",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent/70 text-accent-foreground shadow-lg">
              <Sparkles className="h-8 w-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">A rotina é automatizada</h3>
          </div>
          <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl">
            Com um clique, os lembretes inteligentes começam a funcionar. Tudo sincronizado entre familiar e idoso.
            Notificações pré-definidas, acompanhamento em tempo real e relatórios automáticos de atividades.
          </p>
        </div>
      ),
    },
  ]

  return (
    <section
      id="como-funciona"
      className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 px-4 sm:px-6 sm:py-20 md:py-28 py-[86px] overflow-hidden my-[34px]"
      aria-labelledby="how-it-works-heading"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(59, 130, 246, 0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgb(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 via-transparent to-blue-950/50" />

        {/* Animated dots */}
        <div className="absolute top-0 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-40" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping animation-delay-1000 opacity-40" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-300 rounded-full animate-ping animation-delay-2000 opacity-40" />

        {/* Gradient glow effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center space-y-3 sm:space-y-4 mb-[-13px]">
          <h2
            id="how-it-works-heading"
            className="font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl text-4xl"
          >
            Como funciona
          </h2>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto text-pretty leading-relaxed">
            Três passos simples que vão transformar seu dia-a-dia            
          </p>
        </div>
      </div>
      <Timeline data={data} />
    </section>
  )
}
