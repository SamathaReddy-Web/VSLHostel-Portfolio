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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {facilities.map((fac, index) => (
            <div 
              key={index} 
              className="group bg-neutral-bg rounded-2xl p-6 text-center hover:bg-primary transition-colors duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary group-hover:text-white group-hover:bg-primary-dark transition-colors duration-300 mb-4 shadow-sm">
                {fac.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2">{fac.name}</h3>
              <p className="text-gray-500 text-sm group-hover:text-primary-light">{fac.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
