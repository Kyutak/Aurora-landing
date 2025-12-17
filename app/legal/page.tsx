"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function LegalPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
        setErrorMessage(data.message || "Erro ao enviar mensagem")
      }
    } catch (error) {
      console.error("[v0] Error submitting contact form:", error)
      setSubmitStatus("error")
      setErrorMessage("Erro de conexão. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Voltar para Home</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-4xl">
        {/* Termos de Uso */}
        <section id="termos" className="mb-16 scroll-mt-20">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Termos de Uso
          </h1>
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-4 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Bem-vindo ao Aurora. Ao utilizar nossos serviços, você concorda com os seguintes termos e condições.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Aceitação dos Termos</h2>
            <p className="leading-relaxed">
              Ao acessar e usar o Aurora, você aceita e concorda em ficar vinculado aos termos e condições deste acordo.
              Se você não concordar com qualquer parte destes termos, não poderá usar nossos serviços.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Descrição do Serviço</h2>
            <p className="leading-relaxed">
              O Aurora é um assistente inteligente desenvolvido para auxiliar no cuidado de idosos, oferecendo lembretes
              automáticos, resposta a emergências e funcionalidades de voz para texto. Nosso objetivo é facilitar o
              acompanhamento e cuidado à distância.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Uso Apropriado</h2>
            <p className="leading-relaxed">
              Você concorda em usar o Aurora apenas para fins legais e de acordo com estes Termos de Uso. Você não deve
              usar nossos serviços de maneira que possa danificar, desabilitar, sobrecarregar ou prejudicar qualquer
              servidor ou rede conectada ao Aurora.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Responsabilidades do Usuário</h2>
            <p className="leading-relaxed">
              O Aurora é uma ferramenta de auxílio e não substitui cuidados médicos profissionais ou supervisão
              presencial. Os usuários são responsáveis por buscar atendimento médico apropriado quando necessário e não
              devem depender exclusivamente do aplicativo para emergências médicas graves.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Modificações dos Termos</h2>
            <p className="leading-relaxed">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. Notificaremos os usuários sobre
              alterações significativas através do e-mail cadastrado ou através de avisos no aplicativo.
            </p>
          </div>
        </section>

        <div className="my-12 border-t" />

        {/* Política de Privacidade */}
        <section id="privacidade" className="mb-16 scroll-mt-20">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Política de Privacidade
          </h1>
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-4 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Sua privacidade é importante para nós. Esta política descreve como coletamos, usamos e protegemos suas
              informações pessoais.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Informações que Coletamos</h2>
            <p className="leading-relaxed">Coletamos informações que você nos fornece diretamente, incluindo:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Nome, e-mail e informações de contato</li>
              <li>Dados de uso do aplicativo e preferências</li>
              <li>Informações sobre lembretes e rotinas configuradas</li>
              <li>Gravações de voz quando você usa recursos de voz para texto</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Como Usamos suas Informações</h2>
            <p className="leading-relaxed">Usamos as informações coletadas para:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Fornecer, manter e melhorar nossos serviços</li>
              <li>Enviar lembretes e notificações personalizadas</li>
              <li>Responder às suas solicitações e fornecer suporte ao cliente</li>
              <li>Analisar o uso do aplicativo para melhorar a experiência do usuário</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Compartilhamento de Dados</h2>
            <p className="leading-relaxed">
              Não vendemos suas informações pessoais. Podemos compartilhar suas informações apenas nas seguintes
              circunstâncias:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Com seu consentimento explícito</li>
              <li>Com prestadores de serviços terceirizados que nos auxiliam na operação do Aurora</li>
              <li>Quando exigido por lei ou para proteger nossos direitos legais</li>
              <li>Em caso de fusão, aquisição ou venda de ativos</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Segurança dos Dados</h2>
            <p className="leading-relaxed">
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso
              não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia de dados, controles de
              acesso e auditorias regulares de segurança.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Seus Direitos</h2>
            <p className="leading-relaxed">
              Você tem o direito de acessar, corrigir, excluir ou restringir o uso de suas informações pessoais. Para
              exercer esses direitos, entre em contato conosco através da seção de contato abaixo.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Cookies e Tecnologias Similares</h2>
            <p className="leading-relaxed">
              Usamos cookies e tecnologias similares para melhorar sua experiência, analisar o uso do aplicativo e
              personalizar conteúdo. Você pode controlar o uso de cookies através das configurações do seu navegador.
            </p>
          </div>
        </section>

        <div className="my-12 border-t" />

        {/* Contato */}
        <section id="contato" className="scroll-mt-20">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Entre em Contato
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Tem dúvidas ou precisa de suporte? Envie-nos uma mensagem e retornaremos o mais breve possível.
          </p>

          <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-2xl p-6 sm:p-8 border">
            <div className="mt-8 pt-8 border-t flex items-center justify-center gap-2 text-muted-foreground">
              <Mail className="h-5 w-5" />
              <span>ou envie um e-mail para: </span>
              <a href="mailto:auroraai.enterprise@gmail.com" className="text-primary hover:underline font-medium">
                auroraai.enterprise@gmail.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
