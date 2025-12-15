"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggleButton from "@/components/ui/theme-toggle-button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {

  useEffect(() => {
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b ">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-tight hover:text-blue-500 transition-colors">
          sohaib.dev
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Theme Toggle */}
        <ThemeToggleButton
           variant="circle-blur" start="top-right"
        />

      </div>
    </header>
  );
}
