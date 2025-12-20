import { Card } from "@/components/ui/card"
import { Heart, Leaf, Sparkles, Target } from "lucide-react"

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Holistic Approach",
      description: "Addressing mind, body, and spirit for complete wellness transformation.",
    },
    {
      icon: Target,
      title: "Personalized Plans",
      description: "Custom strategies tailored to your unique goals and lifestyle.",
    },
    {
      icon: Leaf,
      title: "Sustainable Habits",
      description: "Building lasting changes that fit naturally into your daily life.",
    },
    {
      icon: Sparkles,
      title: "Empowering Growth",
      description: "Guiding you to discover your inner strength and potential.",
    },
  ]

  return (
    <section id="about" className="py-20 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground text-balance">
              Your Partner in Wellness
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              With over a decade of experience in holistic health coaching, I'm dedicated to helping individuals like
              you discover their healthiest, most vibrant selves. My approach combines evidence-based practices with
              intuitive guidance, creating a supportive space for transformation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 border-border bg-card hover:shadow-lg transition-shadow">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
