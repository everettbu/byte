import React from "react";

const features = [
  {
    title: "Curated news",
    description: "Hand picked articles about the latest in AI",
  },
  {
    title: "Actionable tips",
    description: "Short and sweet guides to boost productivity",
  },
  {
    title: "Weekly digest",
    description: "Never miss out with our once-a-week newsletter",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-background border-t border-border/40">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-10">Why Subscribe?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center space-y-2">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
