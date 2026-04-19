import { PiChatDotsBold } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Portofolio", href: "#portofolio" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out">
      <nav className="flex items-center justify-between max-w-6xl mx-auto w-[90%] py-4">
        {/* Logo */}
        <a href="#home" className="text-2xl md:text-3xl font-bold mr-6">
          Dendi <span className="text-primary text-3xl"></span>
        </a>
        {/* Navigation Links */}
        <div className="hidden min-[825px]:flex items-center gap-4 bg-base shadow-lg opacity-80 px-8 py-3 rounded-b-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              className="hover:text-primary transition-all duration-300 ease-in-out"
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Desktop tombol ayo berbicara */}
        <a
          href="#"
          className="hidden min-[825px]:flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-all duration-300 ease-in-out"
        >
          Ayo Berbicara <PiChatDotsBold className="text-lg " />
        </a>

        {/* Tombol menu untuk mobile */}
        <button
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          className="min-[825px]:hidden flex p-2 text-gray-700 hover:text-gray-900 transition-colors"
        >
          {isMenuOpen ? (
            <RiCloseLine className="text-2xl" />
          ) : (
            <MdMenu className="text-2xl" />
          )}
        </button>
      </nav>
      {/* Mobile menu (hidden by default) */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="min-[825px]:hidden fixed w-full top-20 z-40"
        >
          <div className="bg-white shadow-lg rounded-2xl mx-4 mt-2 p-6">
            <div className="flex flex-col items-start gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  className="text-content text-[18px] font-bold hover:text-content-alter py-3 border-b border-gray-100 transition-all duration-300 ease-in-out"
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              {/* Tombol ayo berbicara untuk mobile */}
              <a
                href="#contact"
                className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-all duration-300 ease-in-out"
                onClick={() => setIsMenuOpen(false)}
              >
                Ayo Berbicara <PiChatDotsBold className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
