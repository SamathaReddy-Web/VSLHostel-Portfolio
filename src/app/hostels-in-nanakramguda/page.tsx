import Home from "../page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Hostels in Nanakramguda | Vasantha Lakshmi Women's PG",
  description: "Find the best and most affordable hostels in Nanakramguda. VSL Women's PG provides a highly secure, comfortable experience with great food and WiFi near IT Hubs.",
  alternates: {
    canonical: "https://www.vslhostel.in/hostels-in-nanakramguda",
  }
};

export default function Page() {
  return <Home />;
}
