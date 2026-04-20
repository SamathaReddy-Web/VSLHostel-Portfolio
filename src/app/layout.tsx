import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Best Women's PG & Hostels in Nanakramguda, Hyderabad",
  description: "Looking for affordable hostels in Nanakramguda? Vasantha Lakshmi Women's PG offers a safe, modern, and comfortable stay near IT hubs with food and WiFi.",
  keywords: ["Women hostels in Nanakramguda", "PG near Nanakramguda", "affordable hostels Nanakramguda", "women's PG in Gachibowli/Nanakramguda", "Women hostel Nanakramguda"],
  verification: {
    google: "AMsxl2nsLYAkivOvUd6Wu7_LXc-z-If6WvuT4CvPTPQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              "name": "Vasantha Lakshmi Women's PG",
              "description": "Affordable and safe women's PG & Hostel in Nanakramguda, Hyderabad with modern amenities, food, and strong security.",
              "url": "https://www.vslhostel.in/",
              "telephone": "+919573779268",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "C992+F35, Serilingampally, K.V",
                "addressLocality": "Nanakramguda, Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500032",
                "addressCountry": "IN"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
