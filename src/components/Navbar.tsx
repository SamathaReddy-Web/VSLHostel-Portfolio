"use client";

import { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Rooms", href: "#rooms" },
    { name: "Facilities", href: "#facilities" },
    { name: "Contact", href: "#contact" },
  ];

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const link of navLinks) {
        const sectionId = link.href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="bg-white p-0.5 rounded-full inline-block shadow-sm border border-gray-100">
              <Image 
                src="https://res.cloudinary.com/ds9pcviv3/image/upload/v1776275480/ChatGPT_Image_Apr_15_2026_11_21_08_PM_g893u2.png" 
                alt="Vasantha Lakshmi Women's PG Nanakramguda Logo" 
                width={40}
                height={40}
                className="w-10 h-10 object-contain rounded-full"
              />
            </div>
            <span className="font-bold text-gray-900 text-xl hidden sm:block">
              VSL Women's PG
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors duration-200 ${
                  activeSection === link.href.substring(1)
                    ? "text-primary font-bold"
                    : "text-gray-600 hover:text-primary"
                }`}
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
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  activeSection === link.href.substring(1)
                    ? "text-primary bg-primary-light/10 font-bold"
                    : "text-gray-600 hover:text-primary hover:bg-primary-light/20"
                }`}
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
