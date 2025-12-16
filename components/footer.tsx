import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="border-t bg-gradient-to-br from-secondary/5 via-background to-primary/5 px-4 py-10 sm:px-6 sm:py-12"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Image src="/aurora-logo.png" alt="Aurora Logo" width={24} height={24} className="rounded-sm mx-0 px-0 h-30px w-30px" />
              <p className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mx-[-4px]">
                Aurora
              </p>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Assistente para cuidado de idosos</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6" aria-label="Links do rodapé">
            <Link href="/legal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Termos de Uso
            </Link>
            <Link href="/legal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacidade
            </Link>
            <Link href="/legal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </Link>
          </nav>
        </div>

        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">© {currentYear} Aurora. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
