import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, Phone, Clock, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">
            Need <span className="text-gradient-primary">Help</span>?
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We're here to assist you with any questions about your PC build, order, or technical support.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <AnimatedSection delay={100}>
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help..."
                    className="mt-2 min-h-32"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background font-bold"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Information */}
          <div className="space-y-6">
            <AnimatedSection delay={200}>
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Support</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Get a response within 24 hours
                    </p>
                    <a href="mailto:info@arcanerigs.com" className="text-primary hover:underline">
                      info@arcanerigs.com
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone Support</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Talk to our team directly
                    </p>
                    <a href="tel:+15551234567" className="text-secondary hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Support Hours</h3>
                    <p className="text-muted-foreground text-sm">
                      Monday - Friday: 9:00 AM - 8:00 PM PST<br />
                      Saturday: 10:00 AM - 6:00 PM PST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">AI Assistant</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Get instant answers to common questions
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10"
                    >
                      <a href="/chatbot">Chat Now</a>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* FAQ Section */}
        <AnimatedSection delay={600}>
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">How long does it take to build my PC?</h3>
                <p className="text-muted-foreground">
                  Most builds are completed within 3-5 business days after order confirmation. 
                  Custom configurations may take up to 7 business days.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">What warranty do you offer?</h3>
                <p className="text-muted-foreground">
                  All builds come with a 3-year comprehensive warranty covering parts and labor. 
                  Individual components have manufacturer warranties that vary by brand.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Can I upgrade my PC later?</h3>
                <p className="text-muted-foreground">
                  Absolutely! We design all builds with upgradeability in mind. Contact us for upgrade 
                  consultations and we'll help you enhance your system.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Support;
