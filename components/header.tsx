"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const scrollToHero = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center">
            <Image src="/aurora-logo.png" alt="Aurora Logo" width={32} height={32} className="h-8 w-8 rounded-md" />
          </div>
          <span className="text-xl font-bold text-foreground">Aurora</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" className="text-sm">
            <Link href="/modos">Saiba mais</Link>
          </Button>
          <Button
            onClick={scrollToHero}
            className="text-xs sm:text-sm bg-gradient-to-r from-blue-400 to-blue-600 hover:opacity-90"
          >
            Quero uma demo
          </Button>
        </div>
      </nav>
    </header>
  )
}
