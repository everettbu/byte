import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-16 px-4 relative bg-[url('/hero.jpg')] bg-cover bg-[center_20%]">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-background/70 to-background z-0" />
      <div className="text-center space-y-6 relative z-10 -mt-32">
        <h1 className="text-6xl font-bold text-white tracking-tight">
          Hi mom!
        </h1>
      </div>
    </section>
  );
}
