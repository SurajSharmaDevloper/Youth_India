import React from "react";
import mail_box from "../../assets/mailbox.png";
import {
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Logo from "../base/Logo";
import bg from "../../assets/Crowd-Silhoutte-PNG-Isolated-File.png";
import bg1 from "../../assets/newsletter-img.jpg";
import NewsletterBanner from "../blocks/NewsLetterCTA";

export default function Footer() {
  return (
    <>
      <NewsletterBanner />
      <div className="w-full h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">

      </div>
      <footer className="bg-secondary relative text-white pt-[100px] pb-8 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute -top-20 left-0 w-[250px] h-[250px] bg-blue-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-accent/10 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* BRAND */}
            <div>
              <div className="bg-neutral-100 rounded-lg mb-4 w-fit p-1 hover:scale-105 transition">
                <Logo />
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                A common platform of Indian youth working for social transformation,
                development, and an equitable future.
              </p>

              {/* SOCIAL */}
              <div className="flex gap-3">
                {[Facebook, Linkedin, Twitter, Youtube].map((Icon, i) => (
                  <div
                    key={i}
                    className="group bg-white/10 p-2 rounded-lg hover:bg-accent transition cursor-pointer hover:scale-110"
                  >
                    <Icon
                      size={16}
                      className="group-hover:text-white transition"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ORGANISATION */}
            <div>
              <h3 className="font-semibold mb-5 text-lg">Organisation</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                {["About Us", "Executive Committee", "Objectives", "Initiatives"].map(
                  (item, i) => (
                    <li
                      key={i}
                      className="group flex items-center gap-2 hover:text-white cursor-pointer transition"
                    >
                      <ArrowRight
                        size={14}
                        className="text-accent group-hover:translate-x-1 transition"
                      />
                      <span className="group-hover:translate-x-1 transition">
                        {item}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* ENGAGE */}
            <div>
              <h3 className="font-semibold mb-5 text-lg">Engage</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                {["What We Do", "Major Activities", "Upcomings", "Donate"].map(
                  (item, i) => (
                    <li
                      key={i}
                      className="group flex items-center gap-2 hover:text-white cursor-pointer transition"
                    >
                      <ArrowRight
                        size={14}
                        className="text-accent group-hover:translate-x-1 transition"
                      />
                      <span className="group-hover:translate-x-1 transition">
                        {item}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="font-semibold mb-5 text-lg">Connect</h3>

              <div className="space-y-4 text-sm text-gray-300 mb-6">

                <div className="flex items-center gap-3 hover:text-white transition">
                  <Mail size={16} className="text-accent" />
                  <span>info@youngindia.org</span>
                </div>

                <div className="flex items-center gap-3 hover:text-white transition">
                  <Phone size={16} className="text-accent" />
                  <span>+91 98765 43210</span>
                </div>

                <div className="flex items-start gap-3 hover:text-white transition">
                  <MapPin size={16} className="text-accent mt-1" />
                  <span>Young India Office<br />
                    At/P.O. – Konark, Dist. – Puri,
                    <br />Odisha, Pin – 752111</span>
                </div>
                <div className="flex items-start gap-3 hover:text-white transition">

                </div>

              </div>

              {/* NEWSLETTER */}
              {/* */}
            </div>

          </div>

          {/* DIVIDER */}
          <div className="border-t border-white/10 my-10"></div>

          {/* BOTTOM */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">

            <p className="text-center md:text-left">
              © 2026 Young India. All rights reserved.
            </p>

            {/* MINI STRIP */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-1 bg-accent rounded"></span>
              <span className="w-6 h-1 bg-white/30 rounded"></span>
              <span className="w-6 h-1 bg-green-500 rounded"></span>
            </div>

          </div>
        </div>

        {/* Background Image */}
        <img
          className="absolute bottom-0 left-0 w-full opacity-30 pointer-events-none"
          src={bg}
          alt=""
        />
      </footer>
    </>

  );
}