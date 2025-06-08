'use client'

import Hero from '../components/Hero'
import Subscribe from '../components/Subscribe'
import TopFive from '../components/TopFive'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Subscribe Banner */}
      <Subscribe />
      
      {/* Hero Section */}
      <Hero />

      <TopFive />

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
