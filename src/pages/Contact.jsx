import React, { useState } from "react";
import Breadcrumb from "../components/blocks/Breadcrumb";
import banner from "../assets/breadcrumb-banner.jpg";
import SectionHeading from "../components/blocks/SectionHeading";

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Our Address",
    value: "Young India Foundation, Puri, Odisha – 752001",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 98765 43210",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "info@youngindia.org",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Working Hours",
    value: "Mon – Sat: 9:00 AM – 6:00 PM",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) return setErrors(errs);
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-lg border text-sm text-slate-800 placeholder-slate-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-[#0f2044]/20 focus:border-[#0f2044] ${errors[field] ? "border-red-300 bg-red-50" : "border-slate-200 bg-white hover:border-slate-300"
    }`;

  return (
    <section className="w-full min-h-screen bg-blue-50/60">
      <Breadcrumb
        title="CONTACT US"
        subtitle="We'd love to hear from you. Reach out for queries, partnerships, or to join our mission."
        breadcrumbs={["Home", "Contact"]}
        bgImage={banner}
      />

      {/* Section label + heading */}
      <div className=" py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Contact Us"
            title="Get In "
            highlight="Touch"
            description=" Whether you want to volunteer, partner, or simply learn more about our work — we're here."
          />
          <hr className="mt-5 mb-8" />

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {contactInfo.map((item, i) => (
              <div
                key={i}
                className="group flex gap-5 items-center bg-blue-100 border border-slate-100 rounded-2xl p-6 hover:shadow-lg hover:border-blue-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-[#0f2044] flex items-center justify-center text-white group-hover:bg-orange-500 transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-slate-700 leading-snug">
                    {item.value}
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Form card */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mb-5">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-slate-800 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 text-sm mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                    className="px-6 py-1.5 rounded-lg bg-[#0f2044] text-white font-bold text-sm hover:bg-[#1a3a6c] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-lg font-black text-slate-800 mb-0.5">Send Us a Message</h3>
                  <p className="text-xs text-slate-400 mb-3">Fill out the form and our team will respond promptly.</p>
                  <hr className="mb-5" />
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Full Name *</label>
                        <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass("name")} />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Email *</label>
                        <input name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" className={inputClass("email")} />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Phone</label>
                        <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 outline-none transition-all focus:ring-2 focus:ring-[#0f2044]/20 focus:border-[#0f2044] hover:border-slate-300" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Subject</label>
                        <select name="subject" value={form.subject} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 outline-none transition-all focus:ring-2 focus:ring-[#0f2044]/20 focus:border-[#0f2044]">
                          <option value="">Select a topic</option>
                          <option value="volunteer">Volunteer</option>
                          <option value="donate">Donation Query</option>
                          <option value="partnership">Partnership</option>
                          <option value="media">Media Inquiry</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Message *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us how we can help..." className={`${inputClass("message")} resize-none`} />
                      {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-lg bg-[#0f2044] hover:bg-[#1a3a6c] text-white font-bold text-sm transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-[#0f2044]/20"
                    >
                      {loading ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-300 shadow-sm min-h-[420px] relative">
              <iframe
                title="Young India Location"
                src="https://www.google.com/maps?q=Puri,Odisha&z=15&output=embed"
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ border: 0, filter: "grayscale(0.1) contrast(1.05)" }}
                loading="lazy"
              />
              <div className="absolute bottom-4 w-fit  right-4 bg-white rounded-xl p-4 shadow-lg border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0f2044] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-800">Young India Foundation</p>
                    <p className="text-xs text-slate-400">Puri, Odisha – 752001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="bg-[#0f2044] py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-xs font-semibold uppercase tracking-widest mb-5">
            Connect With Us
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">

            < a
              href="#"
              className="px-5 py-1.5 rounded-lg bg-white hover:bg-orange-500 flex items-center gap-2 text-blue-600 hover:text-white text-sm font-bold transition-all duration-200 hover:scale-105 border border-white/10 hover:border-orange-500"
            >
              <i class="fa-brands fa-facebook font-semibold text-lg"></i>
              Facebook
            </a>
            <a
              href="#"
              className="px-5 py-1.5 rounded-lg bg-white hover:bg-orange-500 flex items-center gap-2 text-neutral-800 hover:text-white text-sm font-bold transition-all duration-200 hover:scale-105 border border-white/10 hover:border-orange-500"
            >
              <i class="fa-brands fa-square-twitter font-semibold text-lg"></i>
              Twitter
            </a>
            <a
              href="#"
              className="px-5 py-1.5 rounded-lg bg-white hover:bg-orange-500 flex items-center gap-2 text-pink-600 hover:text-white text-sm font-bold transition-all duration-200 hover:scale-105 border border-white/10 hover:border-orange-500"
            >
              <i class="fa-brands fa-instagram font-semibold text-lg"></i>
              Instagram
            </a>
            <a
              href="#"
              className="px-5 py-1.5 rounded-lg bg-white hover:bg-orange-500 flex items-center gap-2 text-red-600 hover:text-white text-sm font-bold transition-all duration-200 hover:scale-105 border border-white/10 hover:border-orange-500"
            >
              <i class="fa-brands fa-youtube font-semibold text-lg"></i>
              YouTube
            </a>
            <a
              href="#"
              className="px-5 py-1.5 rounded-lg bg-white hover:bg-orange-500 flex items-center gap-2 text-blue-600 hover:text-white text-sm font-bold transition-all duration-200 hover:scale-105 border border-white/10 hover:border-orange-500"
            >
              <i class="fa-brands fa-linkedin font-semibold text-lg"></i>
              LinkedIn
            </a>

          </div>
        </div>
      </div>
    </section >
  );
}