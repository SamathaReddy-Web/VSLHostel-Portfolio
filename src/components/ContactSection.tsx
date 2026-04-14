"use client";

import { Phone, Mail, MessageSquare, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        console.error("Failed to send message via Resend");
        setStatus("idle");
        alert("Failed to send the message. Please contact us via phone or WhatsApp.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("idle");
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-neutral-bg -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions or want to schedule a visit? Reach out to us through any of the channels below or fill out the form.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 border border-gray-100">
          
          {/* Contact Info Panel */}
          <div className="lg:col-span-2 bg-primary p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-primary-light mb-12">
                We're always open to answer your queries and provide the best accommodation services.
              </p>

              <div className="space-y-8">
                <a href="tel:+919573779268" className="flex items-center gap-4 group">
                  <div className="p-3 bg-white/10 rounded-full group-hover:bg-white group-hover:text-primary transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-primary-light">Call Us Directly</p>
                    <p className="font-semibold text-lg tracking-wide">+91 95737 79268</p>
                  </div>
                </a>

                <a href="https://wa.me/919573779268" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="p-3 bg-white/10 rounded-full group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-primary-light">WhatsApp Message</p>
                    <p className="font-semibold text-lg tracking-wide">Click to Chat</p>
                  </div>
                </a>

                <a href="mailto:Venkatanaidu561@gmail.com" className="flex items-center gap-4 group">
                  <div className="p-3 bg-white/10 rounded-full group-hover:bg-white group-hover:text-primary transition-all duration-300 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div className="min-w-0 pr-2">
                    <p className="text-sm text-primary-light">Email Address</p>
                    <p className="font-semibold text-[15px] sm:text-[17px] truncate" title="Venkatanaidu561@gmail.com">
                      Venkatanaidu561@gmail.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 p-10 lg:p-14">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Request</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                    placeholder="+91"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Your Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none"
                  placeholder="Tell us what kind of room you are looking for..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className={`w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 ${
                  status === "success" 
                    ? "bg-green-500" 
                    : status === "submitting"
                    ? "bg-primary/70 cursor-not-allowed"
                    : "bg-primary hover:bg-primary-dark"
                }`}
              >
                {status === "idle" && (
                  <>
                    Send Request <ArrowRight size={20} />
                  </>
                )}
                {status === "submitting" && "Sending..."}
                {status === "success" && "Message Sent!"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
