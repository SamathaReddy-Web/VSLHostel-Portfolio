import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & About */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-white p-0.5 rounded-full inline-block shadow-sm">
                <img 
                  src="https://res.cloudinary.com/ds9pcviv3/image/upload/v1776275480/ChatGPT_Image_Apr_15_2026_11_21_08_PM_g893u2.png" 
                  alt="VSL Women's PG Logo" 
                  className="w-10 h-10 object-contain rounded-full"
                />
              </div>
              <span className="font-bold text-white text-2xl">
                VSL Women's PG
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Affordable, safe, and comfortable women's PG located in the heart of Nanakramguda. Your home away from home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-primary transition-colors">Rooms</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-primary transition-colors">Facilities</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <span>
                  C992+F35, Serilingampally,<br />
                  K.V, Nanakramguda,<br />
                  Hyderabad, Telangana – 500032
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <a href="tel:+919573779268" className="hover:text-white transition-colors">
                  +91 95737 79268
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <a href="mailto:venkatanaidu561@gmail.com" className="hover:text-white transition-colors">
                  venkatanaidu561@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} VSL Women's PG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
