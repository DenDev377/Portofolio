import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 md:mt-24 border-t border-outer pt-8 pb-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo or Brand */}
        <div className="text-center md:text-left">
          <a href="#home" className="text-xl md:text-2xl font-bold">
            Dendi <span className="text-primary text-2xl">.</span>
          </a>
          <p className="text-gray-500 text-sm mt-2">
            Desain antarmuka & pengembangan web penuh gairah.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/50 border border-outer flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/50 border border-outer flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-lg" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/50 border border-outer flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            aria-label="Twitter"
          >
            <FaTwitter className="text-lg" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/50 border border-outer flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="text-lg" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8">
        <p className="text-gray-400 text-sm">
          &copy; {currentYear} Dendi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
