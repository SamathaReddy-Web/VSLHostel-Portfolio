import { MapPin, Navigation } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="location" className="py-20 bg-neutral-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Prime Location</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Conveniently situated in the heart of Gachibowli, ensuring easy daily commutes and close proximity to major landmarks.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-3">
          <div className="p-8 lg:p-12 space-y-8 col-span-1 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col justify-center">
            
            <div>
              <div className="flex items-center gap-3 text-primary mb-3">
                <MapPin size={24} />
                <h3 className="text-xl font-bold text-gray-900">Address</h3>
              </div>
              <p className="text-gray-600 leading-relaxed pl-9">
                Vasantha Lakshmi Women's PG<br/>
                Vinayak Nagar, Nanakramguda,<br/>
                Gachibowli, Hyderabad,<br/>
                Telangana – 500032
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 text-primary mb-3">
                <Navigation size={24} />
                <h3 className="text-xl font-bold text-gray-900">Nearby Landmarks</h3>
              </div>
              <ul className="space-y-3 pl-9">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="text-gray-600">Financial District (2 km)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="text-gray-600">DLF Cyber City (4 km)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="text-gray-600">Raidurg Metro Station (5 km)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="text-gray-600">Wipro Circle (1.5 km)</span>
                </li>
              </ul>
            </div>

            <a 
              href="https://maps.google.com/?q=Nanakramguda+Gachibowli+Hyderabad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 w-full block text-center py-4 bg-primary-light/20 hover:bg-primary text-primary-dark hover:text-white font-semibold rounded-xl transition-colors duration-300"
            >
              Get Directions
            </a>

          </div>

          <div className="col-span-1 lg:col-span-2 min-h-[400px]">
             {/* Using a Google Maps embed iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15228.618037303358!2d78.33785641755106!3d17.404368551475727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb945bbee9f9fb%3A0xa67dc7e780c85ca0!2sNanakramguda%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
