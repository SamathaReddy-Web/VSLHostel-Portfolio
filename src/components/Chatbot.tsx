"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, Bot, User, ChevronDown } from "lucide-react";

type Message = {
  id: string;
  type: "bot" | "user";
  text: string;
};

// Knowledge Base & Keyword Matching
const QA_PAIRS = [
  {
    keywords: ["price", "cost", "rent", "fee", "pricing", "charges"],
    answer: "We offer Single, Double, Triple, and Four sharing rooms. Please contact us at +91 95737 79268 or via WhatsApp for current availability and exact pricing.",
  },
  {
    keywords: ["room", "sharing", "single", "double", "triple", "four", "bed"],
    answer: "We have various accommodations: Single Sharing (Ultimate privacy), Double Sharing (Perfect balance), Triple Sharing (Economical), and Four Sharing (Maximum affordability). All include premium amenities like AC, Wi-Fi, and regular housekeeping.",
  },
  {
    keywords: ["food", "meal", "breakfast", "lunch", "dinner", "mess", "veg"],
    answer: "Yes, we provide 3 hygienic meals a day with both Veg and Non-Veg options.",
  },
  {
    keywords: ["wifi", "internet"],
    answer: "We provide high-speed, unlimited Wi-Fi to all our residents, perfect for work and study.",
  },
  {
    keywords: ["ac", "air condition", "cooler"],
    answer: "Yes, we offer well air-conditioned rooms for a comfortable stay.",
  },
  {
    keywords: ["laundry", "washing machine", "wash", "clothes"],
    answer: "We have fully automated washing machines available for your laundry needs.",
  },
  {
    keywords: ["facility", "facilities", "amenity", "amenities", "include"],
    answer: "Our premium facilities include: High-Speed WiFi, 3 Meals/Day, AC Rooms, Washing Machines, 24/7 Geysers, TV, Secure Lockers, RO Drinking Water, and 24/7 Power Backup.",
  },
  {
    keywords: ["location", "address", "where", "near", "distance"],
    answer: "We are located at C992+F35, Serilingampally, K.V, Nanakramguda, Hyderabad. We are very close to the Financial District (2 km), DLF Cyber City (4 km), and Wipro Circle (1.5 km).",
  },
  {
    keywords: ["contact", "phone", "number", "call", "whatsapp", "email", "reach"],
    answer: "You can reach us directly or via WhatsApp at +91 95737 79268, or email us at Venkatanaidu561@gmail.com.",
  },
  {
    keywords: ["book", "join", "admission", "register"],
    answer: "To book a room or schedule a visit, please fill out the contact form on our website or call/WhatsApp us directly at +91 95737 79268.",
  },
  {
    keywords: ["safe", "safety", "security", "cctv", "guard"],
    answer: "Your safety is our priority. We offer a highly secure environment with 24/7 CCTV surveillance, supervised premises, and personal secure lockers.",
  },
  {
    keywords: ["hi", "hello", "hey", "greetings"],
    answer: "Hello! Welcome to Vasantha Lakshmi Women's PG. How can I help you today? You can ask me about our rooms, facilities, location, or pricing.",
  },
  {
    keywords: ["bye", "thank", "thanks"],
    answer: "You're very welcome! If you have any more questions, feel free to ask. Have a great day!",
  }
];

const getBotResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();
  
  // Find highest matching keyword score
  let bestMatch = null;
  let maxScore = 0;

  for (const pair of QA_PAIRS) {
    let score = 0;
    for (const keyword of pair.keywords) {
      if (lowerInput.includes(keyword)) {
        score++;
      }
    }
    if (score > maxScore) {
      maxScore = score;
      bestMatch = pair;
    }
  }

  if (bestMatch) {
    return bestMatch.answer;
  }

  return "I can help with hostel-related queries. Please ask about our rooms, pricing, amenities, location, or booking. For other specific queries, please contact +91 95737 79268.";
};

const QUICK_REPLIES = [
  "What are the room types?",
  "Do you provide food?",
  "Where are you located?",
  "What are the facilities?",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", type: "bot", text: "Hi there! 👋 I'm the Vasantha Lakshmi PG Assistant. How can I help you today?" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = { id: Date.now().toString(), type: "user", text: text };
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate network delay and add bot response
    setTimeout(() => {
      const botResponse = getBotResponse(text);
      const botMsg: Message = { id: (Date.now() + 1).toString(), type: "bot", text: botResponse };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 600); // 600ms delay for natural feel
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary-dark text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center animate-bounce"
          aria-label="Open Chat"
          style={{ animationDuration: '2s' }}
        >
          <MessageSquare size={28} />
        </button>
      </div>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 z-50 w-[90vw] sm:w-[380px] h-[550px] max-h-[85vh] bg-white rounded-2xl shadow-[0_5px_40px_rgba(0,0,0,0.16)] flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-50 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-primary p-4 text-white flex items-center justify-between shadow-md relative z-10">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <Bot size={24} />
            </div>
            <div>
              <h3 className="font-bold text-[16px] leading-tight">VL Hostel Assistant</h3>
              <p className="text-primary-light text-xs mt-0.5 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Online
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white transition-colors p-1"
            aria-label="Close Chat"
          >
            <ChevronDown size={28} />
          </button>
        </div>

        {/* Messages Layout */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-3 max-w-[85%] ${msg.type === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-auto shadow-sm ${msg.type === 'user' ? 'bg-secondary text-white' : 'bg-primary text-white'}`}>
                {msg.type === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`p-3 rounded-2xl text-[15px] leading-relaxed shadow-sm ${
                msg.type === 'user' 
                  ? 'bg-secondary text-white rounded-br-sm' 
                  : 'bg-white text-gray-700 border border-gray-100 rounded-bl-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 max-w-[85%] self-start">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-auto shadow-sm">
                <Bot size={16} />
              </div>
              <div className="p-4 bg-white border border-gray-100 rounded-2xl rounded-bl-sm flex items-center gap-1 shadow-sm">
                <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        {messages.length < 3 && !isTyping && (
          <div className="px-4 pb-2 bg-gray-50 flex flex-wrap gap-2">
            {QUICK_REPLIES.map((reply, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(reply)}
                className="text-xs bg-white border border-primary/20 text-gray-700 px-3 py-1.5 rounded-full hover:bg-primary-light/10 hover:border-primary/50 hover:text-primary transition-all shadow-sm"
              >
                {reply}
              </button>
            ))}
          </div>
        )}

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-gray-100">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
            className="flex items-center gap-2 relative"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about facilities, rooms..."
              className="flex-1 bg-gray-100 text-gray-700 px-4 py-3 rounded-full outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-[15px]"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className={`p-3 rounded-full flex items-center justify-center transition-all shadow-sm ${
                inputValue.trim() && !isTyping 
                  ? 'bg-primary text-white hover:bg-primary-dark translate-x-0' 
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              <Send size={18} className={inputValue.trim() && !isTyping ? "ml-0.5" : ""} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
