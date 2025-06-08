import React from "react";

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
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-md bg-white border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary w-56"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
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
          85.1% {
            transform: translateX(100vw);
          }
          100% {
            transform: translateX(100vw);
          }
        }
        
        .animate-scroll {
          animation: scroll 12s linear infinite;
        }
      `}</style>
    </section>
  );
}
