import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Subscribe from "../components/Subscribe";


export default function Home() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Subscribe Section */}
      <Subscribe />

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 bg-background">
        <div className="container mx-auto px-4">
          <nav className="mb-4">
            <ul className="flex justify-center space-x-6">
              <li>
              </li>
              <li>
                <a href="/baboon-jokes" className="text-muted-foreground hover:text-foreground transition">
                  Baboon Jokes
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}