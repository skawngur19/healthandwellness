"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export function Services() {
  const services = [
    {
      title: "One-on-One Coaching",
      description: "Personalized sessions focused on your unique wellness goals and challenges.",
      features: [
        "Weekly 60-minute sessions",
        "Customized wellness plan",
        "Email support between sessions",
        "Progress tracking tools",
      ],
    },
    {
      title: "Nutrition Guidance",
      description: "Evidence-based nutritional coaching to fuel your body and transform your health.",
      features: [
        "Personalized meal planning",
        "Grocery shopping guides",
        "Recipe recommendations",
        "Dietary lifestyle coaching",
      ],
    },
    {
      title: "Mindfulness & Stress Management",
      description: "Learn powerful techniques to reduce stress and cultivate inner peace.",
      features: [
        "Meditation practices",
        "Breathing techniques",
        "Stress reduction strategies",
        "Work-life balance coaching",
      ],
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Services Designed for You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive wellness programs tailored to support your journey toward optimal health and vitality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden border-border hover:shadow-xl transition-shadow">
              <div className="p-6 space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-4 bg-transparent" onClick={scrollToContact}>
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
