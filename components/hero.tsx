"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 overflow-hidden">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Transform Your Life
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
              Discover Your Path to Wellness
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
              Personalized coaching to help you achieve lasting health, balance, and vitality. Together, we'll create
              sustainable habits that transform your life from the inside out.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base"
                onClick={scrollToContact}
              >
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
