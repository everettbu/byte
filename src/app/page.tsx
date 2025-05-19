import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Subscribe from "../components/Subscribe";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-16 px-4 relative bg-[url('/hero.jpg')] bg-cover bg-[center_20%]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-background/70 to-background z-0" />
        <div className="text-center space-y-6 relative z-10 -mt-32">
          <h1 className="text-6xl font-bold text-white tracking-tight">
            Welcome to Weekly Bytes
          </h1>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Subscribe Section */}
      <Subscribe />

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 bg-background">
        <div className="container mx-auto px-4">
          <nav className="mb-4">
            <ul className="flex justify-center space-x-6">
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
