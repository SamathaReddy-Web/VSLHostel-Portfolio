import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & About */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-white p-1 rounded-full inline-block">
                <img 
                  src="https://res.cloudinary.com/ds9pcviv3/image/upload/v1776182580/ChatGPT_Image_Apr_14_2026_09_32_42_PM_obi2ei.png" 
                  alt="VSL Women's PG Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="font-bold text-white text-2xl">
                VSL Women's PG
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Affordable, safe, and comfortable women's PG located in the heart of Nanakramguda. Your home away from home.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
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
                <a href="#rooms" className="hover:text-primary transition-colors">Rooms & Pricing</a>
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
                  Vinayak Nagar, Nanakramguda,<br />
                  Hyderabad,<br />
                  Telangana – 500032
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
                <a href="mailto:Venkatanaidu561@gmail.com" className="hover:text-white transition-colors">
                  Venkatanaidu561@gmail.com
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
