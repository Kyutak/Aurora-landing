"use client"

import { useState } from "react"
import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BackgroundBeams } from "@/components/ui/background-beams"

export function HeroSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !email.trim()) {
      setSubmitStatus("error")
      setErrorMessage("Preencha nome e e-mail corretamente.")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
        }),
      })

      const text = await response.text()
      let data: any = null

      if (text) {
        try {
          data = JSON.parse(text)
        } catch {
          throw new Error("Resposta inválida do servidor")
        }
      }

      if (!response.ok) {
        throw new Error(data?.message || "Erro ao processar solicitação")
      }

      setSubmitStatus("success")
      setName("")
      setEmail("")
      setTimeout(() => setSubmitStatus("idle"), 5000)

    } catch (err) {
      console.error("Error submitting form:", err)
      setSubmitStatus("error")
      setErrorMessage(
        err instanceof Error ? err.message : "Erro de conexão. Tente novamente."
      )
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
        <div className="text-center animate-fade-in-up space-y-1">
          <h1
            id="hero-heading"
            className="font-bold tracking-tight text-foreground text-balance text-5xl sm:text-6xl lg:text-7xl my-5"
          >
            Cuidado inteligente para{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              quem cuidou <br /> de você
            </span>
          </h1>

          <p className="text-lg text-muted-foreground sm:text-xl md:text-2xl max-w-2xl mx-auto my-6">
            Rotinas e funções totalmente personalizáveis. Menos preocupação para você,
            mais autonomia para o idoso.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 pt-4">
            <Input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isSubmitting}
              required
            />

            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              required
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12"
            >
              {isSubmitting ? "Enviando..." : "Quero entrar na lista de espera"}
            </Button>

            {submitStatus === "success" && (
              <p className="text-sm text-green-600">
                Sucesso! Você entrou na lista de espera.
              </p>
            )}

            {submitStatus === "error" && (
              <p className="text-sm text-red-600">
                {errorMessage}
              </p>
            )}

            {submitStatus === "idle" && (
              <p className="text-xs text-muted-foreground">
                Seja um dos primeiros. Garanta seu acesso exclusivo.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
