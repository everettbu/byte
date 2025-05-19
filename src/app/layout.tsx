'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <nav className={`fixed w-full bg-white/80 backdrop-blur-md z-50 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <Link href="/" className="text-xl font-semibold text-gray-900 hover:text-gray-600 transition-colors">
                  Weekly Bytes
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link 
                  href="/news" 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  News
                </Link>
                <Link 
                  href="/tips" 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Tips
                </Link>
                <Link 
                  href="/hacks" 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Hacks
                </Link>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Add padding-top to account for fixed navbar */}
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
