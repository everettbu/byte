import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Subscribe() {
  return (
    <section className="py-4 border-b border-border overflow-hidden relative" style={{backgroundColor: '#002E22'}}>
      {/* Animated text that moves across full screen */}
      <div className="absolute top-0 left-0 w-full h-full flex items-start pt-6 overflow-hidden z-0">
        <h2 className="text-3xl font-bold text-white whitespace-nowrap animate-scroll absolute">
          Feeling overwhelmed by AI and business trends? Know what matters weekly.
        </h2>
      </div>
      
      {/* Form content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col items-center gap-4 max-w-4xl mx-auto text-center">
          <div className="h-12"> {/* Spacer for text height */}
          </div>
          
          <form className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Your Email"
              className="w-56 bg-background border-gray-300 placeholder-gray-500 text-gray-900 focus:ring-primary"
            />
            <Button
              type="submit"
              className="px-6 py-2 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100vw);
          }
          85% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
