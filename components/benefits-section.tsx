import { Bell, Shield, MessageSquare } from "lucide-react"

const benefits = [
  {
    icon: Bell,
    title: "Lembretes Inteligentes",
    description: "Notificações automáticas para medicação, consultas e atividades importantes do dia a dia.",
    gradient: "from-blue-500 via-blue-600 to-cyan-500",
    bgGradient: "from-blue-500/10 via-blue-600/5 to-cyan-500/10",
    iconBg: "bg-blue-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    icon: Shield,
    title: "Resposta a Emergências",
    description:
      "Acesso rápido a contatos de emergência e notificações instantâneas para a família em situações críticas.",
    gradient: "from-red-500 via-rose-600 to-pink-500",
    bgGradient: "from-red-500/10 via-rose-600/5 to-pink-500/10",
    iconBg: "bg-red-500/20",
    borderColor: "border-red-500/30",
  },
  {
    icon: MessageSquare,
    title: "Voz para Texto",
    description: "Comandos de voz ilimitados que facilitam a comunicação e reduzem o tempo investido em cuidados.",
    gradient: "from-green-500 via-emerald-600 to-teal-500",
    bgGradient: "from-green-500/10 via-emerald-600/5 to-teal-500/10",
    iconBg: "bg-green-500/20",
    borderColor: "border-green-500/30",
  },
]

export function BenefitsSection() {
  return (
    <section
      className="px-4 pt-6 pb-10 sm:py-24 sm:px-6 lg:px-8 border-b border-border/40"
      aria-labelledby="benefits-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <h2
            id="benefits-heading"
            className="sm:text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-3xl text-balance leading-tight my-[30px]"
          >
            Lidar com idosos é difícil. Eles esquecem medicações, horários, refeições — e a família nunca sabe se está tudo bem.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Conheça as nossas soluções. Esteja presente mesmo distante.    
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`group relative overflow-hidden rounded-3xl border-2 ${benefit.borderColor} bg-card p-6 sm:p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-${benefit.gradient.split("-")[1]}-500/20`}
            >
              {/* Animated gradient background */}
              <div
                className={`absolute inset-0 -z-10 bg-gradient-to-br ${benefit.bgGradient} opacity-50 transition-opacity duration-500 group-hover:opacity-100`}
              />

              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`h-full w-full bg-gradient-to-r ${benefit.gradient} opacity-10 blur-xl`} />
              </div>

              <div className="relative z-10">
                <div className="mb-6">
                  <div
                    className={`flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.gradient} backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}
                  >
                    <benefit.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" strokeWidth={2.5} />
                  </div>
                </div>

                <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-foreground group-hover:to-muted-foreground transition-all duration-300">
                  {benefit.title}
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>

              {/* Decorative corner accent */}
              <div
                className={`absolute -top-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br ${benefit.gradient} opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-40 group-hover:scale-150`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
