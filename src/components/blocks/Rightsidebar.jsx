import React from "react";
import { Link } from "react-router";
import Button from "../base/Button";

const news = [
    {
        date: "25 Mar 2026",
        title: "NHRC seeks report on omission of names in Odisha voter list",
        tag: "Governance",
    },
    {
        date: "18 Mar 2026",
        title: "The issues like gender discrimination and social negligence have greater visibility in rural India",
        tag: "Social",
    },
    {
        date: "10 Mar 2026",
        title: "Radio Namaskar accepting applications for Radio Internship Program",
        tag: "Internship",
    },
    {
        date: "02 Mar 2026",
        title: "Women joined hands in Odisha to create water reservoir",
        tag: "Environment",
    },
    {
        date: "22 Feb 2026",
        title: "Literacy rate in Odisha is 70% as compared to 74% national average",
        tag: "Education",
    },
    {
        date: "15 Feb 2026",
        title: "Young India conducts RTI awareness camp in Puri district",
        tag: "RTI",
    },
];

const announcements = [
    "📢 Konark Youth Fest 2026 registrations open — Apply before Dec 15",
    "📢 e-SHG platform launching soon — Stay tuned for updates",
    "📢 Rural Museum at Konark opens to public every Sunday",
    "📢 Community Radio Internship applications now open at Radio Namaskar",
];

const tagColors = {
    Governance: "bg-blue-100 text-blue-700",
    Social: "bg-purple-100 text-purple-700",
    Internship: "bg-orange-100 text-orange-700",
    Environment: "bg-green-100 text-green-700",
    Education: "bg-yellow-100 text-yellow-700",
    RTI: "bg-red-100 text-red-700",
};

export default function RightSidebar() {
    return (
        <aside className="w-full space-y-6">
            <div className="flex justify-between bg-white p-3 items-center border  border-blue-100 rounded-lg gap-2">
                <input type="text" placeholder="Search..." className="w-full bg-blue-50 border border-blue-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary search-input" />
                <Button className="Search-btn " >
                    Search
                </Button>
            </div>

            {/* News & Announcements */}
            <div className="bg-white rounded-2xl border border-blue-100 overflow-hidden shadow-sm">
                <div className="bg-primary px-4 py-3 flex items-center gap-2">
                    <span className="w-1.5 h-5 bg-orange-400 rounded-full" />
                    <h3 className="text-sm font-bold text-white uppercase tracking-wide">
                        News & Updates
                    </h3>
                </div>
                <div className="divide-y divide-blue-50">
                    {news.map((item, i) => (
                        <div key={i} className="p-3 hover:bg-blue-50/50 transition-colors group cursor-pointer">
                            <div className="flex items-center gap-2 mb-1">
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${tagColors[item.tag] || "bg-slate-100 text-slate-600"}`}>
                                    {item.tag}
                                </span>
                                <span className="text-[10px] text-slate-400">{item.date}</span>
                            </div>
                            <p className="text-xs text-slate-700 font-medium leading-snug group-hover:text-primary transition-colors">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="px-4 py-3 border-t border-blue-50">
                    <Link to="/news" className="text-xs font-bold text-primary hover:text-secondary transition-colors flex items-center gap-1">
                        View all news →
                    </Link>
                </div>
            </div>

            {/* Announcements */}
            <div className="bg-white rounded-2xl border border-blue-100 overflow-hidden shadow-sm">
                <div className="bg-primary px-4 py-3 flex items-center gap-2">
                    <span className="w-1.5 h-5 bg-orange-400 rounded-full" />
                    <h3 className="text-sm font-bold text-white uppercase tracking-wide">
                        Announcements
                    </h3>
                </div>
                <div className="">
                    {announcements.map((item, i) => (
                        <div key={i} className="text-xs text-slate-700 p-2.5 border-b border-blue-100 leading-snug hover:border-blue-300 transition-colors cursor-pointer">
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* Ad Banner 1 */}
            <div className="rounded-2xl overflow-hidden border bg-red-500 border-blue-100 shadow-sm">
                <div className="bg-gradient-to-br from-primary to-blue-800 p-5 text-center">
                    <p className="text-[10px] text-blue-50 uppercase tracking-widest mb-1">Support Us</p>
                    <h4 className="text-white font-black text-base mb-2 leading-tight">
                        Empower a Youth Today
                    </h4>
                    <p className="text-blue-50 text-xs mb-4 leading-relaxed">
                        Your donation directly funds education, health, and skill development programs.
                    </p>
                    <Link
                        to="/donate"
                        className="inline-block px-5 py-2 rounded-lg bg-orange-500 hover:bg-orange-400 text-white text-xs font-black transition-colors shadow-lg"
                    >
                        Donate Now ❤
                    </Link>
                </div>
            </div>

            {/* Ad Banner 2 — Radio Namaskar */}
            <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-sm bg-white">
                <div className="bg-primary px-4 py-2 border-b border-blue-100">
                    <p className="text-[10px] text-white uppercase tracking-widest font-bold">Featured</p>
                </div>
                <div className="p-4 text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h4 className="font-black text-primary text-sm mb-1">Radio Namaskar</h4>
                    <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                        Odisha's first community radio — now streaming online at radionamaskar.org
                    </p>
                    <a
                        href="http://www.radionamaskar.org"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block px-4 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-primary text-xs font-bold hover:bg-blue-100 transition-colors"
                    >
                        Listen Live →
                    </a>
                </div>
            </div>

            {/* Ad Banner 3 — Volunteers India */}
            <div className="rounded-2xl overflow-hidden border border-orange-100 bg-orange-50 shadow-sm">
                <div className="p-4 text-center">
                    <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <h4 className="font-black text-orange-700 text-sm mb-1">Volunteers India</h4>
                    <p className="text-xs text-orange-600 mb-3 leading-relaxed">
                        Join India's largest volunteer database — register at volunteersindia.in
                    </p>
                    <a
                        href="http://www.volunteersindia.in"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block px-4 py-1.5 rounded-lg bg-orange-500 text-white text-xs font-black hover:bg-orange-400 transition-colors"
                    >
                        Register Now →
                    </a>
                </div>
            </div>

        </aside>
    );
}