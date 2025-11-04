import AnimatedSection from "@/components/AnimatedSection";
import { Users, Wrench, Award } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Lead Technician",
    description: "15+ years in PC building and custom configurations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Hardware Specialist",
    description: "Expert in GPU optimization and cooling solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "Quality Assurance",
    description: "Ensures every build meets our premium standards",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Emma Thompson",
    role: "Customer Success",
    description: "Here to help you find your perfect configuration",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "David Park",
    role: "Systems Engineer",
    description: "Specializes in workstation and server builds",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Lisa Anderson",
    role: "Technical Support",
    description: "Providing lifetime support for all our customers",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">
            Meet Our <span className="text-gradient-primary">Expert Team</span>
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our certified technicians bring decades of combined experience in PC building and optimization.
          </p>
        </AnimatedSection>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <AnimatedSection delay={100}>
            <div className="glass-card p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <p className="text-4xl font-bold text-gradient-primary mb-2">25+</p>
              <p className="text-muted-foreground">Expert Technicians</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="glass-card p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-secondary" />
              </div>
              <p className="text-4xl font-bold text-gradient-primary mb-2">10k+</p>
              <p className="text-muted-foreground">PCs Built Annually</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="glass-card p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <p className="text-4xl font-bold text-gradient-primary mb-2">100%</p>
              <p className="text-muted-foreground">Quality Guaranteed</p>
            </div>
          </AnimatedSection>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={member.id} delay={index * 100}>
              <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-all group">
                <div className="aspect-square rounded-xl overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Assembly Capacity */}
        <AnimatedSection delay={400}>
          <div className="glass-card p-8 rounded-2xl mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Assembly Capacity</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              With state-of-the-art facilities and expert technicians, we can handle high-volume orders 
              while maintaining our strict quality standards.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="flex justify-between mb-2 text-sm">
                <span className="text-muted-foreground">Current Capacity</span>
                <span className="font-bold text-primary">85% Utilized</span>
              </div>
              <div className="h-4 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full animate-glow-pulse"
                  style={{ width: "85%" }}
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Team;
