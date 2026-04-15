import { ShieldCheck, MapPin, Heart } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Vasantha Lakshmi</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Your Safe & Comfortable Home Away From Home
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Vasantha Lakshmi Women&apos;s PG provides a safe, comfortable, and affordable living space exclusively for students and working professional women. We pride ourselves on offering a home-like environment where residents can focus on their studies or careers with peace of mind.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Located strategically in Nanakramguda, we are just minutes away from major IT hubs, the Financial District, Hitech City, and top educational colleges.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-light/30 p-3 rounded-xl text-primary">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Highly Secure</h4>
                  <p className="text-gray-600 text-sm mt-1">24/7 CCTV & supervised premises</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary-light/30 p-3 rounded-xl text-primary">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Prime Location</h4>
                  <p className="text-gray-600 text-sm mt-1">Near IT parks & metro station</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src="https://res.cloudinary.com/dkny5wde0/image/upload/q_auto/f_auto/v1776291593/Screenshot_2026-04-16_033559_t1w1jq.png" 
              alt="Comfortable living space" 
              className="rounded-3xl shadow-xl w-full h-[500px] object-cover"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
              <div className="bg-secondary/10 p-4 rounded-full text-secondary">
                <Heart size={32} />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">4.4/5</p>
                <p className="text-gray-500 font-medium">Happy Residents</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
