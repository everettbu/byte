'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundTexture } from "@/components/BackgroundTexture";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <BackgroundTexture />
        <nav className={`fixed w-full bg-background/95 backdrop-blur-md z-[100] transition-transform duration-300 border-b border-border ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center py-4">
              <div className="mb-4">
                <Link href="/" className="text-5xl font-bold hover:text-primary transition-colors pb-4 block" style={{color: '#002E22'}}>
                  Weekly Bytes
                </Link>
              </div>
              <div className="flex items-center space-x-8">
                <Link 
                  href="/money-finance" 
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Money & Finance
                </Link>
                <Link 
                  href="/marketing-growth" 
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Marketing & Growth
                </Link>
                <Link 
                  href="/tools-tech" 
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Tools & Tech
                </Link>
                <Link 
                  href="/trends-news" 
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Trends & News
                </Link>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Add padding-top to account for fixed navbar */}
        <div className="pt-32">
          {children}
        </div>
      </body>
    </html>
  );
}
