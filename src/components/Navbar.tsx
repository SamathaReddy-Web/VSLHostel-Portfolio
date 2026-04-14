"use client";

import { useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Rooms", href: "#rooms" },
    { name: "Facilities", href: "#facilities" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-white font-bold text-xl px-3 py-1 rounded-md">
              VL
            </div>
            <span className="font-semibold text-gray-800 text-lg hidden sm:block">
              Women's PG
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919573779268"
              className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <PhoneCall size={18} />
              <span>Call Us</span>
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-primary-light/20 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919573779268"
              className="mt-4 flex items-center justify-center gap-2 bg-primary text-white px-3 py-2 rounded-md font-medium w-full"
            >
              <PhoneCall size={18} />
              Call +91 95737 79268
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
