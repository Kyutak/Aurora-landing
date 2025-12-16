"use client"
import { useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Users, ArrowRight, Check, Sparkles, Bell, Shield, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function ModosPage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Forçar a rolagem para o topo
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow animation-delay-1000"></div>
      </div>

      <div className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 animate-fade-in-up">

            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              Como funcionam os{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                modos?
              </span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              O Aurora oferece dois modos pensados para facilitar o cuidado: um para o idoso e outro para a família.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <Card className="group p-6 sm:p-8 space-y-6 hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-card via-card to-primary/5 animate-fade-in-up animation-delay-200 hover:scale-105">
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent/70 shadow-lg group-hover:scale-110 transition-all duration-300">
                <Heart className="h-7 w-7 sm:h-8 sm:w-8 text-accent-foreground" />
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-card-foreground">Modo Idoso</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Interface simples e acessível. Receba lembretes por voz, acesse emergências rapidamente e mantenha
                  contato com sua família.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 group/item">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-success/20 flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-success" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground text-sm sm:text-base">
                      Botões grandes e fáceis de usar
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Interface adaptada para facilitar a navegação
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group/item">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-success/20 flex-shrink-0 mt-0.5">
                    <MessageSquare className="h-4 w-4 text-success" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground text-sm sm:text-base">Comandos por voz</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Interaja naturalmente sem precisar digitar
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group/item">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-success/20 flex-shrink-0 mt-0.5">
                    <Shield className="h-4 w-4 text-success" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground text-sm sm:text-base">Botão de emergência visível</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Ajuda rápida quando você precisar</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="group p-6 sm:p-8 space-y-6 hover:shadow-2xl transition-all duration-300 border-2 hover:border-secondary/50 bg-gradient-to-br from-card via-card to-secondary/5 animate-fade-in-up animation-delay-400 hover:scale-105">
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 shadow-lg group-hover:scale-110 transition-all duration-300">
                <Users className="h-7 w-7 sm:h-8 sm:w-8 text-secondary-foreground" />
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-card-foreground">Modo Familiar</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Configure lembretes, monitore rotinas e receba notificações sobre o bem-estar do seu ente querido.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 group/item">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-success/20 flex-shrink-0 mt-0.5">
                    <Bell className="h-4 w-4 text-success" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground text-sm sm:text-base">Criar e gerenciar lembretes</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Configure rotinas personalizadas facilmente
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group/item">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-success/20 flex-shrink-0 mt-0.5">
                    <Shield className="h-4 w-4 text-success" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground text-sm sm:text-base">
                      Receber alertas de emergência
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Seja notificado imediatamente em situações críticas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group/item">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-success/20 flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-success" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground text-sm sm:text-base">
                      Acompanhar rotina em tempo real
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Monitore o bem-estar com tranquilidade</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <Link href="/#hero" scroll={true}>
              <Button
                variant="ghost"
                className="relative group overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center">
                  <ArrowRight className="h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                  <span className="ml-2"> {/* Adiciona um espaçamento entre o ícone e o texto */}
                    Voltar para a página inicial
                  </span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
