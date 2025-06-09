import React from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="pt-16 pb-12 px-4 relative overflow-hidden">
      {/* Flowing Lines from sides */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left side lines */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <div className="flex flex-col space-y-8">
            <div className="relative">
              <div className="h-1 bg-border" style={{ width: 'calc(50vw - 448px)' }}></div>
              <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" style={{ width: 'calc(50vw - 448px)' }}>
                <div className="absolute top-0 left-0 w-2 h-1 bg-primary animate-flow-right"></div>
              </div>
            </div>
            <div className="relative">
              <div className="h-1 bg-border" style={{ width: 'calc(50vw - 448px)' }}></div>
              <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" style={{ width: 'calc(50vw - 448px)' }}>
                <div className="absolute top-0 left-0 w-2 h-1 bg-primary animate-flow-right-delay"></div>
              </div>
            </div>
            <div className="relative">
              <div className="h-1 bg-border" style={{ width: 'calc(50vw - 448px)' }}></div>
              <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" style={{ width: 'calc(50vw - 448px)' }}>
                <div className="absolute top-0 left-0 w-2 h-1 bg-primary animate-flow-right-delay2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side lines */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <div className="flex flex-col space-y-8">
            <div className="relative">
              <div className="h-1 bg-border" style={{ width: 'calc(50vw - 448px)' }}></div>
              <div className="absolute top-0 right-0 h-1 bg-gradient-to-l from-transparent via-primary to-transparent opacity-60" style={{ width: 'calc(50vw - 448px)' }}>
                <div className="absolute top-0 right-0 w-2 h-1 bg-primary animate-flow-left"></div>
              </div>
            </div>
            <div className="relative">
              <div className="h-1 bg-border" style={{ width: 'calc(50vw - 448px)' }}></div>
              <div className="absolute top-0 right-0 h-1 bg-gradient-to-l from-transparent via-primary to-transparent opacity-60" style={{ width: 'calc(50vw - 448px)' }}>
                <div className="absolute top-0 right-0 w-2 h-1 bg-primary animate-flow-left-delay"></div>
              </div>
            </div>
            <div className="relative">
              <div className="h-1 bg-border" style={{ width: 'calc(50vw - 448px)' }}></div>
              <div className="absolute top-0 right-0 h-1 bg-gradient-to-l from-transparent via-primary to-transparent opacity-60" style={{ width: 'calc(50vw - 448px)' }}>
                <div className="absolute top-0 right-0 w-2 h-1 bg-primary animate-flow-left-delay2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Computer Chip Container */}
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="relative">
          {/* Chip Body */}
          <div className="relative mx-auto max-w-4xl">
            {/* Corner notches for chip look */}
            <div className="absolute -top-1 -left-1 w-8 h-8 border-l-2 border-t-2 border-primary opacity-60"></div>
            <div className="absolute -top-1 -right-1 w-8 h-8 border-r-2 border-t-2 border-primary opacity-60"></div>
            <div className="absolute -bottom-1 -left-1 w-8 h-8 border-l-2 border-b-2 border-primary opacity-60"></div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-r-2 border-b-2 border-primary opacity-60"></div>

            {/* Main chip container */}
            <div className="relative bg-card/80 backdrop-blur-sm border-2 border-border rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-md flex items-center justify-center min-h-64 sm:min-h-80 md:min-h-96">
              {/* Circuit pattern overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-4 left-4 w-16 h-0.5 bg-primary"></div>
                <div className="absolute top-4 left-4 w-0.5 h-8 bg-primary"></div>
                <div className="absolute top-4 right-4 w-16 h-0.5 bg-primary"></div>
                <div className="absolute top-4 right-4 w-0.5 h-8 bg-primary"></div>
                <div className="absolute bottom-4 left-4 w-16 h-0.5 bg-primary"></div>
                <div className="absolute bottom-4 left-4 w-0.5 h-8 bg-primary"></div>
                <div className="absolute bottom-4 right-4 w-16 h-0.5 bg-primary"></div>
                <div className="absolute bottom-4 right-4 w-0.5 h-8 bg-primary"></div>
              </div>

              {/* Hero Content */}
              <div className="relative z-10 text-center space-y-8 w-full">
                {/* Main Message */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h1 className="font-bold leading-tight text-center transform -translate-x-2 sm:whitespace-nowrap" style={{ fontSize: 'clamp(1.1rem, 4vw + 1rem, 3.5rem)' }}>
                      The AI insights that actually
                    </h1>
                    <h2 className="font-bold leading-tight text-center transform -translate-x-2 text-secondary sm:whitespace-nowrap" style={{ fontSize: 'clamp(1.1rem, 4vw + 1rem, 3.5rem)' }}>
                      move your business forward
                    </h2>
                  </div>
                  
                  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                    Cut through the AI hype. Every week, get the 3 trends, 2 tools, and 1 strategy 
                    that successful leaders are using right now.
                  </p>
                </div>

                {/* Simple CTA */}
                <div className="pt-2">
                  <Button size="lg" className="text-base px-8 py-6 shadow-lg">
                    Start Reading Weekly Bytes
                  </Button>
                </div>

                {/* Simple proof */}
                <p className="text-sm text-muted-foreground -mt-16">
                  Read by founders, VPs, and decision makers at top companies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes flow-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(calc(50vw - 448px)); }
        }
        
        @keyframes flow-left {
          0% { transform: translateX(100%); }
          100% { transform: translateX(calc(-50vw + 448px)); }
        }

        .animate-flow-right {
          animation: flow-right 3s ease-in-out infinite;
        }
        
        .animate-flow-right-delay {
          animation: flow-right 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        .animate-flow-right-delay2 {
          animation: flow-right 3s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-flow-left {
          animation: flow-left 3s ease-in-out infinite;
        }
        
        .animate-flow-left-delay {
          animation: flow-left 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        .animate-flow-left-delay2 {
          animation: flow-left 3s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
