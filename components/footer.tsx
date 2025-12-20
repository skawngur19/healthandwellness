export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-semibold text-foreground">Serenity</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering individuals to achieve optimal health, balance, and vitality through personalized wellness
              coaching.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">One-on-One Coaching</li>
              <li className="text-sm text-muted-foreground">Nutrition Guidance</li>
              <li className="text-sm text-muted-foreground">Mindfulness Training</li>
              <li className="text-sm text-muted-foreground">Corporate Wellness</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">hello@serenitycoach.com</li>
              <li className="text-sm text-muted-foreground">+1 (555) 123-4567</li>
              <li className="text-sm text-muted-foreground">San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            {currentYear} Serenity Wellness Coaching. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
