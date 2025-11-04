import AnimatedSection from "@/components/AnimatedSection";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "James Martinez",
    role: "Pro Gamer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    rating: 5,
    text: "ArcaneRigs built me the perfect gaming setup. I'm hitting 240 FPS consistently in Valorant. The team really knows their stuff!",
    game: "Valorant Pro Player",
  },
  {
    id: 2,
    name: "Emily Watson",
    role: "Content Creator",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    rating: 5,
    text: "My rendering times have been cut in half! The workstation they built handles 4K editing like a breeze. Absolutely worth every penny.",
    game: "YouTube Content Creator",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 5,
    text: "Perfect workstation for running multiple VMs and heavy development work. The team helped me choose exactly what I needed.",
    game: "Full Stack Developer",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "3D Artist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    rating: 5,
    text: "Blender renders that used to take hours now finish in minutes. This machine is a beast! Customer service was amazing too.",
    game: "Blender 3D Artist",
  },
  {
    id: 5,
    name: "David Park",
    role: "Streamer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    rating: 5,
    text: "Stream quality has never been better. Zero dropped frames, crystal clear encoding. My viewers love the upgrade!",
    game: "Twitch Partner",
  },
  {
    id: 6,
    name: "Lisa Anderson",
    role: "Game Developer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    rating: 5,
    text: "Compiling Unreal Engine projects is so much faster now. The build quality is exceptional and cable management is pristine.",
    game: "Indie Game Developer",
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">
            What Our <span className="text-gradient-primary">Customers Say</span>
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what gamers, creators, and professionals say about their ArcaneRigs builds.
          </p>
        </AnimatedSection>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <AnimatedSection delay={100}>
            <div className="text-center glass-card p-6 rounded-2xl">
              <p className="text-5xl font-bold text-gradient-primary mb-2">4.9</p>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="text-center glass-card p-6 rounded-2xl">
              <p className="text-5xl font-bold text-gradient-primary mb-2">2.5k+</p>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="text-center glass-card p-6 rounded-2xl">
              <p className="text-5xl font-bold text-gradient-primary mb-2">98%</p>
              <p className="text-muted-foreground">Would Recommend</p>
            </div>
          </AnimatedSection>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} delay={index * 100}>
              <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-all h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-primary">{testimonial.game}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                
                <p className="text-muted-foreground text-sm flex-grow">
                  "{testimonial.text}"
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Before/After Section */}
        <AnimatedSection delay={600}>
          <div className="glass-card p-8 rounded-2xl mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Performance <span className="text-gradient-accent">Benchmarks</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Before ArcaneRigs</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• GTA V: 45 FPS (Medium Settings)</li>
                  <li>• Cyberpunk 2077: 30 FPS (Low Settings)</li>
                  <li>• Blender Render: 45 minutes</li>
                  <li>• Video Export (4K): 2 hours</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gradient-primary">After ArcaneRigs</h3>
                <ul className="space-y-3 text-primary font-semibold">
                  <li>• GTA V: 165 FPS (Ultra Settings) ⚡</li>
                  <li>• Cyberpunk 2077: 120 FPS (High Settings) ⚡</li>
                  <li>• Blender Render: 8 minutes ⚡</li>
                  <li>• Video Export (4K): 25 minutes ⚡</li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Testimonials;
