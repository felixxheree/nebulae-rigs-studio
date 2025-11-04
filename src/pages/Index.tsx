import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Gamepad2, Palette, Briefcase, Zap, Shield, Wrench } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(210_100%_60%/0.1),transparent_50%)]" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-gradient-primary leading-tight">
              Play. Create. Dominate.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Build your dream gaming rig with top-tier components. From GTA V to Cyberpunk 2077 — 
              experience ultimate performance with ArcaneRigs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background font-bold text-lg px-8 py-6 glow-primary"
              >
                <Link to="/builder">Build Your PC</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/10 font-bold text-lg px-8 py-6"
              >
                <Link to="/shop">Find a Store</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-20 container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Built for <span className="text-gradient-accent">Every Purpose</span>
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Whether you're gaming, creating content, or handling professional workloads — 
            we've got the perfect rig for you.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedSection delay={100}>
            <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <Gamepad2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Gaming PCs</h3>
              <p className="text-muted-foreground mb-6">
                Play top titles with 144+ FPS. Optimized for GTA V, Valorant, Cyberpunk 2077, and more. 
                Dominate every match with ultra-high settings.
              </p>
              <Link to="/builder" className="text-primary font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                Build Gaming PC <span className="ml-2 group-hover:ml-0">→</span>
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                <Palette className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Creator PCs</h3>
              <p className="text-muted-foreground mb-6">
                Handle 3D rendering, video editing, and design workflows effortlessly. 
                Perfect for Blender, Premiere Pro, and DaVinci Resolve.
              </p>
              <Link to="/builder" className="text-secondary font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                Build Creator PC <span className="ml-2 group-hover:ml-0">→</span>
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                <Briefcase className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Workstation PCs</h3>
              <p className="text-muted-foreground mb-6">
                For professionals who demand power. Handle simulations, AI models, and complex data workloads 
                with enterprise-grade performance.
              </p>
              <Link to="/builder" className="text-accent font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                Build Workstation <span className="ml-2 group-hover:ml-0">→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-transparent to-card/50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Why <span className="text-gradient-primary">ArcaneRigs</span>?
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Top-Tier Components</h3>
                <p className="text-muted-foreground">
                  We only use premium parts from NVIDIA, AMD, Intel, and leading manufacturers.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-4">3-Year Warranty</h3>
                <p className="text-muted-foreground">
                  Every build comes with comprehensive warranty and lifetime support.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wrench className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">Expert Assembly</h3>
                <p className="text-muted-foreground">
                  Built by certified technicians with years of experience in PC building.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4">
        <AnimatedSection>
          <div className="glass-card p-12 rounded-3xl text-center glow-primary">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your <span className="text-gradient-accent">Dream PC</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start customizing your perfect rig now. Choose every component and see your total price in real-time.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background font-bold text-lg px-12 py-6"
            >
              <Link to="/builder">Start Building Now</Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Index;
