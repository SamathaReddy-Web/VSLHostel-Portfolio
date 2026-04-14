import { Wifi, Snowflake, Droplets, WashingMachine, Tv, Lock, Utensils, Coffee, Zap } from "lucide-react";

export default function FacilitiesSection() {
  const facilities = [
    { icon: <Wifi size={32} />, name: "High-Speed WiFi", desc: "Unlimited internet for work and study" },
    { icon: <Utensils size={32} />, name: "3 Meals/Day", desc: "Hygienic Veg & Non-Veg food options" },
    { icon: <Snowflake size={32} />, name: "AC Rooms", desc: "Well air-conditioned living spaces" },
    { icon: <WashingMachine size={32} />, name: "Washing Machine", desc: "Fully automated laundry facilities" },
    { icon: <Droplets size={32} />, name: "Geyser & Shower", desc: "24/7 Hot and cold water supply" },
    { icon: <Tv size={32} />, name: "Television", desc: "Entertainment in common areas" },
    { icon: <Lock size={32} />, name: "Secure Lockers", desc: "Personal lockers for valuables" },
    { icon: <Coffee size={32} />, name: "Drinking Water", desc: "RO purified drinking water" },
    { icon: <Zap size={32} />, name: "Power Backup", desc: "Uninterrupted power supply with 24/7 generator backup" },
  ];

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Facilities</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Everything you need for a comfortable stay is included. We ensure well-maintained amenities for all our residents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((fac, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-6 flex flex-col justify-start hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] border border-gray-100 hover:border-primary/30"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-primary-light/10 rounded-xl flex flex-shrink-0 items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {fac.icon}
                </div>
                <div className="flex-1 mt-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight tracking-tight">{fac.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{fac.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
