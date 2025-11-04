import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Check, ChevronRight } from "lucide-react";
import { cpuData, gpuData, ramData, storageData, motherboardData, psuData, caseData } from "@/data/components";

type Step = "cpu" | "gpu" | "ram" | "storage" | "motherboard" | "psu" | "case";

const Builder = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>("cpu");
  const [selections, setSelections] = useState<Record<Step, any>>({
    cpu: null,
    gpu: null,
    ram: null,
    storage: null,
    motherboard: null,
    psu: null,
    case: null,
  });

  const steps: { key: Step; label: string }[] = [
    { key: "cpu", label: "CPU" },
    { key: "gpu", label: "GPU" },
    { key: "ram", label: "RAM" },
    { key: "storage", label: "Storage" },
    { key: "motherboard", label: "Motherboard" },
    { key: "psu", label: "PSU" },
    { key: "case", label: "Case" },
  ];

  const getCurrentData = () => {
    switch (currentStep) {
      case "cpu": return cpuData;
      case "gpu": return gpuData;
      case "ram": return ramData;
      case "storage": return storageData;
      case "motherboard": return motherboardData;
      case "psu": return psuData;
      case "case": return caseData;
      default: return [];
    }
  };

  const handleSelect = (item: any) => {
    setSelections({ ...selections, [currentStep]: item });
    const currentIndex = steps.findIndex(s => s.key === currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].key);
    }
  };

  const calculateTotal = () => {
    return Object.values(selections).reduce((sum, item) => sum + (item?.price || 0), 0);
  };

  const allSelected = Object.values(selections).every(item => item !== null);

  const getStepTitle = () => {
    switch (currentStep) {
      case "cpu": return "Choose Your Processor";
      case "gpu": return "Select Your Graphics Card";
      case "ram": return "Pick Your Memory";
      case "storage": return "Choose Storage";
      case "motherboard": return "Select Motherboard";
      case "psu": return "Choose Power Supply";
      case "case": return "Pick Your Case";
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <div key={step.key} className="flex items-center">
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => setCurrentStep(step.key)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                      selections[step.key]
                        ? "bg-primary text-background"
                        : currentStep === step.key
                        ? "bg-primary/20 text-primary border-2 border-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {selections[step.key] ? <Check className="w-6 h-6" /> : index + 1}
                  </button>
                  <span className={`text-sm mt-2 ${currentStep === step.key ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`h-1 w-8 md:w-16 mx-2 ${selections[step.key] ? "bg-primary" : "bg-muted"}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">
            {getStepTitle()}
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            Step {steps.findIndex(s => s.key === currentStep) + 1} of {steps.length}
          </p>
        </AnimatedSection>

        {/* Component Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {getCurrentData().map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 50}>
              <div
                onClick={() => handleSelect(item)}
                className={`glass-card p-6 rounded-2xl cursor-pointer transition-all hover:scale-105 ${
                  selections[currentStep]?.id === item.id ? "ring-2 ring-primary glow-primary" : ""
                }`}
              >
                <div className="aspect-square bg-muted/50 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.specs}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">${item.price}</span>
                  {selections[currentStep]?.id === item.id && (
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-background" />
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Summary Bar */}
        <div className="fixed bottom-0 left-0 right-0 glass-card border-t border-primary/20 py-4 z-40">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Price</p>
              <p className="text-3xl font-bold text-gradient-primary">${calculateTotal()}</p>
            </div>
            <Button
              onClick={() => navigate("/checkout")}
              disabled={!allSelected}
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background font-bold"
            >
              Continue to Checkout <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
