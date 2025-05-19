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
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

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
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center h-16">
                <div className="flex-shrink-0">
                  <Link href="/" className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
                    Weekly Bytes
                  </Link>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                  <Link href="/news" className="text-muted-foreground hover:text-primary transition-colors">
                    News
                  </Link>
                  <Link href="/tips" className="text-muted-foreground hover:text-primary transition-colors">
                    Tips
                  </Link>
                  <Link href="/hacks" className="text-muted-foreground hover:text-primary transition-colors">
                    Hacks
                  </Link>
                </div>
              </div>
            </div>
      </body>
    </html>
  );
}
