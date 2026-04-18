import React from "react";
import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Portofolio", href: "#portofolio" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out">
      <nav className="flex items-center justify-between max-w-6xl mx-auto w-[90%] py-4">
        {/* Logo */}
        <a href="#home" className="text-2xl md:text-3xl font-bold mr-6">
          Dendi Portofolio <span className="text-primary text-3xl"></span>
        </a>
        {/* Navigation Links */}
        <div className="hidden min-[825px]:flex items-center gap-4 bg-base shadow-lg opacity-80 px-8 py-3 rounded-b-full">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
