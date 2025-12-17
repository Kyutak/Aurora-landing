"use client"
import { Button } from "@/components/ui/button"
import type React from "react"
import { ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { useState } from "react"

export function HeroSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")
  
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name }),
      })
  
      if (!response.ok) {
        const data = await response.json()
        setSubmitStatus("error")
        setErrorMessage(data.message || "Erro ao processar solicitação")
        return
      }
  
      const data = await response.json()
  
      if (data.success) {
        setSubmitStatus("success")
        setName("")
        setEmail("")
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
        setErrorMessage(data.message || "Erro ao processar solicitação")
      }
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
      setSubmitStatus("error")
      setErrorMessage("Erro de conexão. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }


  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[linear-gradient(189deg,_#ffffff_0%,_#d6fff7_50%,_#ffffff_100%)] px-4 py-24 sm:px-6 md:py-32 lg:py-40"
      aria-labelledby="hero-heading"
    >
      <BackgroundBeams className="absolute inset-0" />

      <div className="mx-auto max-w-4xl relative z-10">
        <div className="text-center animate-fade-in-up space-y-0.5 my-[-39px]">
          <h1
            id="hero-heading"
            className="font-bold tracking-tight text-foreground text-balance text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-5xl my-5"
          >
            Cuidado inteligente para{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {"quem cuidou"} <br />
              {"de você"}
            </span>
          </h1>

          <p className="text-lg text-muted-foreground text-pretty leading-relaxed sm:text-lg md:text-2xl max-w-2xl mx-auto my-[23px] py-0">
            {"Rotinas e funções totalmente personalizáveis. Menos preocupação para você, mais autonomia para o idoso"}
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 pt-4">
            <div className="space-y-3">
              <Input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isSubmitting}
                className="h-12 text-base bg-background/80 backdrop-blur-sm border-border/50 focus:border-primary"
                aria-label="Seu nome"
              />
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                className="h-12 text-base bg-background/80 backdrop-blur-sm border-border/50 focus:border-primary"
                aria-label="Seu e-mail"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="relative w-full h-12 text-base bg-gradient-to-r from-primary to-secondary hover:scale-105 hover:shadow-2xl transition-all duration-300 overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10">{isSubmitting ? "Enviando..." : "Quero entrar na lista de espera"}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
            </Button>

            {submitStatus === "success" && (
              <p className="text-sm text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/20 p-3 rounded-lg">
                Sucesso! Você entrou na lista de espera.
              </p>
            )}

            {submitStatus === "error" && (
              <p className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/20 p-3 rounded-lg">
                {errorMessage}
              </p>
            )}

            {submitStatus === "idle" && (
              <p className="text-xs text-muted-foreground">Seja um dos primeiros. Garanta seu acesso exclusivo </p>
            )}
          </form>
          <div className="flex justify-center mt-8 sm:hidden">
            <ChevronDown
              className="
                w-8 h-8
                text-muted-foreground
                animate-bounce-slow
                opacity-70
              "
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
