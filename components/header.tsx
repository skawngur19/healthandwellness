"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <span className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">Serenity</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get Started
            </Button>
          </nav>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
