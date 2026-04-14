import { Users, User, UserPlus, CheckCircle2 } from "lucide-react";

export default function RoomsSection() {
  const rooms = [
    {
      title: "Single Sharing",
      icon: <User size={40} className="text-secondary mb-4" />,
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Complete privacy and comfort for focused studying or unwinding after a long day at work.",
      highlights: ["Private space", "Dedicated study desk", "Premium mattress"],
    },
    {
      title: "Double Sharing",
      icon: <Users size={40} className="text-secondary mb-4" />,
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Perfect balance of companionship and personal space. Ideal for friends or collogues.",
      highlights: ["Spacious layout", "Individual wardrobes", "Shared amenities"],
      popular: true,
    },
    {
      title: "Triple Sharing",
      icon: <UserPlus size={40} className="text-secondary mb-4" />,
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Highly social and economical option without compromising on comfort and basic needs.",
      highlights: ["Budget-friendly", "Community vibe", "Ample storage"],
    },
  ];

  return (
    <section id="rooms" className="py-20 bg-neutral-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Accommodation Options</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choose a living arrangement that best suits your lifestyle and budget. All our rooms are well-ventilated and fully furnished.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-3xl shadow-lg overflow-hidden border ${room.popular ? 'border-primary ring-2 ring-primary/20 scale-105 z-10' : 'border-gray-100'} transition-transform duration-300 hover:shadow-xl`}
            >
              {room.popular && (
                <div className="bg-primary text-white text-center py-2 text-sm font-bold tracking-wider uppercase">
                  Most Popular
                </div>
              )}
              <div className="h-64 overflow-hidden relative group">
                <img 
                  src={room.image} 
                  alt={room.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-6 text-white text-2xl font-bold">
                  {room.title}
                </div>
              </div>
              
              <div className="p-8">
                {room.icon}
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {room.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {room.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                      <span className="font-medium">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="https://wa.me/919573779268" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 text-center rounded-xl font-semibold transition-colors ${
                    room.popular 
                    ? 'bg-primary hover:bg-primary-dark text-white' 
                    : 'bg-primary-light/30 hover:bg-primary hover:text-white text-primary-dark'
                  }`}
                >
                  Inquire Availability
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
