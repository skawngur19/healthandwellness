import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Marketing Executive",
      content:
        "Working with this coach has been life-changing. I've lost 30 pounds, gained energy, and finally found a sustainable approach to wellness that fits my busy lifestyle.",
      rating: 5,
    },
    {
      name: "James Cooper",
      role: "Software Engineer",
      content:
        "The personalized approach and genuine care made all the difference. I've learned to manage stress better and create healthy habits that actually stick.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Small Business Owner",
      content:
        "I was skeptical about coaching at first, but the results speak for themselves. Better sleep, more energy, and a complete transformation in how I approach my health.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Client Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hear from clients who have transformed their lives through personalized wellness coaching.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border-border bg-card hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed text-pretty">"{testimonial.content}"</p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
