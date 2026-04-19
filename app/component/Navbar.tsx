import { PiChatDotsBold } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import { useState, useEffect, useRef } from "react";
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
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isMenuOpen) return;
    // focus close button when menu opens
    closeButtonRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);
  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out">
      <nav className="flex items-center justify-between max-w-6xl mx-auto w-[90%] py-4">
        {/* Logo */}
        <a href="#home" className="text-2xl md:text-3xl font-bold mr-6">
          Dendi <span className="text-primary text-3xl"></span>
        </a>
        {/* Navigation Links */}
        <div className="hidden min-[825px]:flex items-center gap-4 bg-white/10 backdrop-blur-sm shadow-lg opacity-80 px-8 py-3 rounded-b-full">
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
          href="#contact"
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
      {/* Off-canvas drawer (mobile) */}
      {isMenuOpen && (
        <div className="min-[825px]:hidden fixed inset-0 z-40">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer */}
          <aside className="absolute right-0 top-0 h-full w-3/4 sm:w-96 bg-white p-6 shadow-xl transform transition-transform duration-300">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-bold">Menu</span>
              <button
                ref={closeButtonRef}
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-md text-gray-700 hover:text-gray-900"
                aria-label="Tutup menu"
              >
                <RiCloseLine className="text-2xl" />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
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

              <a
                href="#contact"
                className="mt-2 inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-all duration-300 ease-in-out"
                onClick={() => setIsMenuOpen(false)}
              >
                Ayo Berbicara <PiChatDotsBold className="text-lg" />
              </a>
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}
