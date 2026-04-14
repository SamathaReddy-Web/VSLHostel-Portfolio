import { PhoneCall } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-16">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
          alt="Hostel Room"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg leading-tight">
          Affordable & Safe <br className="hidden md:block" />
          <span className="text-primary-light">Women's PG in Gachibowli</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 drop-shadow-md">
          Comfortable living near IT hubs & colleges. Experience a home-like environment with modern amenities, hygienic food, and strong security.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="tel:+919573779268"
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-transform hover:scale-105 shadow-xl"
          >
            <PhoneCall size={20} />
            <span>Call Now</span>
          </a>
          
          <a
            href="https://wa.me/919573779268"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-semibold text-lg transition-transform hover:scale-105 shadow-xl"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}
