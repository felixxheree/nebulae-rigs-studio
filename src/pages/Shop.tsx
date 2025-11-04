import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Clock, Package } from "lucide-react";

const stores = [
  {
    id: 1,
    name: "ArcaneRigs Silicon Valley",
    address: "123 Tech Street, Silicon Valley, CA 94025",
    eta: "Pickup available tomorrow",
    inStock: true,
  },
  {
    id: 2,
    name: "ArcaneRigs Downtown",
    address: "456 Innovation Ave, San Francisco, CA 94102",
    eta: "Pickup available today",
    inStock: true,
  },
  {
    id: 3,
    name: "ArcaneRigs Tech Hub",
    address: "789 Circuit Blvd, San Jose, CA 95110",
    eta: "Pickup available in 2 days",
    inStock: false,
  },
];

const Shop = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">
            Find a <span className="text-gradient-primary">Store Near You</span>
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Visit our physical locations to see components in person and talk to our expert staff.
          </p>
        </AnimatedSection>

        {/* Map Section */}
        <AnimatedSection delay={100}>
          <div className="glass-card rounded-2xl overflow-hidden mb-12">
            <div className="w-full h-96 bg-muted/50 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=600&fit=crop"
                alt="Store locations map"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-2xl font-bold glass-card px-6 py-3 rounded-xl">
                  Interactive Map Coming Soon
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Store List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((store, index) => (
            <AnimatedSection key={store.id} delay={index * 100}>
              <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-all">
                <h3 className="text-xl font-bold mb-4">{store.name}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{store.address}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{store.eta}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Package className="w-5 h-5 text-accent flex-shrink-0" />
                    <p className="text-sm">
                      {store.inStock ? (
                        <span className="text-accent font-semibold">In Stock</span>
                      ) : (
                        <span className="text-muted-foreground">Limited Stock</span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Hours:</span> Mon-Sat 9AM-8PM
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    <span className="font-semibold text-foreground">Phone:</span> +1 (555) {1000 + store.id * 100}-{4567 + store.id}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
