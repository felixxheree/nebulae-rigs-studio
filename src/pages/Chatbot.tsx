import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AnimatedSection from "@/components/AnimatedSection";
import { Send, Bot } from "lucide-react";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
};

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your ArcaneRigs assistant. How can I help you today?",
      sender: "bot",
    },
    {
      id: 2,
      text: "You can ask me about:\n• PC component recommendations\n• Build compatibility\n• Order tracking\n• Technical support",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
    };

    setMessages([...messages, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: "Thanks for your question! This is a demo chatbot. In the full version, I'll be powered by Gemini API to provide real-time assistance with PC building, components, and orders.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);

    setInputValue("");
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">
            AI <span className="text-gradient-primary">Assistant</span>
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            Get instant answers to your questions about PC building, components, and orders.
          </p>
          <div className="text-center mb-8">
            <p className="text-sm text-accent bg-accent/10 inline-block px-4 py-2 rounded-full">
              ⚡ Note: This chatbot uses Gemini API (configured via environment variable)
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="glass-card rounded-2xl overflow-hidden h-[600px] flex flex-col">
            {/* Chat Header */}
            <div className="bg-primary/10 border-b border-primary/20 p-4 flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold">ArcaneRigs Assistant</h3>
                <p className="text-xs text-muted-foreground">Online • Powered by Gemini</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-6 py-3 ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-primary to-secondary text-background"
                        : "glass-card"
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-primary/20 p-4">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button
                  onClick={handleSend}
                  size="icon"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                AI responses may not be accurate. For important questions, contact our support team.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Chatbot;
