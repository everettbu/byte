import React from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          {/* Main Message */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              The AI insights that actually
              <br />
              <span className="text-secondary">move your business forward</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Cut through the AI hype. Every week, get the 3 trends, 2 tools, and 1 strategy 
              that successful leaders are using right now.
            </p>
          </div>

          {/* Simple CTA */}
          <div className="pt-6">
            <Button size="lg" className="text-base px-8 py-6">
              Start Reading Weekly Bytes
            </Button>
          </div>

          {/* Simple proof */}
          <p className="text-sm text-muted-foreground pt-4">
            Read by founders, VPs, and decision makers at top companies
          </p>
        </div>
      </div>
    </section>
  );
}
