import React, { useState } from "react";
import Breadcrumb from "../components/blocks/Breadcrumb";
import banner from "../assets/breadcrumb-banner.jpg";
import PageLayout from "../components/sections/PageLayout";
import SectionHeading from "../components/blocks/SectionHeading";

const resources = [
    {
        category: "RTI Resources",
        icon: "📋",
        items: [
            { title: "Right to Information Act 2005 — Full Text", type: "PDF", size: "2.1 MB" },
            { title: "How to File an RTI Application — Step by Step Guide", type: "PDF", size: "850 KB" },
            { title: "Suchana Shree Award — RTI Crusaders of Odisha", type: "PDF", size: "1.2 MB" },
            { title: "RTI Success Stories from Odisha Communities", type: "PDF", size: "960 KB" },
        ],
    },
    {
        category: "Governance & Rights",
        icon: "⚖️",
        items: [
            { title: "Panchayati Raj — Local Self Governance Guide", type: "PDF", size: "1.8 MB" },
            { title: "NHRC Report — Voter List Omissions in Odisha", type: "PDF", size: "740 KB" },
            { title: "Human Rights — Know Your Rights Handbook", type: "PDF", size: "1.1 MB" },
            { title: "NAMASKAR Network — Youth Organizations Directory", type: "PDF", size: "630 KB" },
        ],
    },
    {
        category: "Development Publications",
        icon: "📚",
        items: [
            { title: "Annual Report 2024-25 — Young India", type: "PDF", size: "4.2 MB" },
            { title: "Rural Development Research Papers", type: "PDF", size: "2.8 MB" },
            { title: "Women Empowerment in Rural Odisha — Study", type: "PDF", size: "1.6 MB" },
            { title: "Youth Voluntarism in India — National Report", type: "PDF", size: "3.1 MB" },
        ],
    },
    {
        category: "Media & Newsletters",
        icon: "📰",
        items: [
            { title: "Young India Newsletter — March 2026", type: "PDF", size: "2.4 MB" },
            { title: "Radio Namaskar Programme Schedule", type: "PDF", size: "420 KB" },
            { title: "Odisha Media Award (OMA) — Press Kit", type: "PDF", size: "1.9 MB" },
            { title: "Community Development Media Guide", type: "PDF", size: "1.3 MB" },
        ],
    },
];

const quickLinks = [
    { label: "Download RTI Form", url: "#", icon: "📄" },
    { label: "Volunteer Registration", url: "http://www.volunteersindia.in", icon: "🙋" },
    { label: "Radio Namaskar Portal", url: "http://www.radionamaskar.org", icon: "📻" },
    { label: "NAMASKAR Network", url: "#", icon: "🌐" },
    { label: "OMA — Media Award", url: "#", icon: "🏆" },
    { label: "eNGO Network", url: "#", icon: "💻" },
];

export default function InformationDesk() {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", ...resources.map((r) => r.category)];

    const filtered = resources
        .filter((r) => activeCategory === "All" || r.category === activeCategory)
        .map((r) => ({
            ...r,
            items: r.items.filter((item) =>
                item.title.toLowerCase().includes(search.toLowerCase())
            ),
        }))
        .filter((r) => r.items.length > 0);

    return (
        <section className="w-full min-h-screen">
            <Breadcrumb
                title="INFORMATION DESK"
                subtitle="A resource hub for RTI, governance, development publications, and community tools."
                breadcrumbs={["Home", "Information Desk"]}
                bgImage={banner}
            />

            <PageLayout>
                {/* Heading */}
                <div>
                    <SectionHeading
                        label="Resource Centre"
                        title="Information "
                        highlight="Desk"
                        description="Access publications, RTI guides, research papers, and governance resources curated by Young India."
                    />
                    <hr className="mt-3 mb-8" />
                </div>

                {/* Quick Links */}
                <div className="bg-white rounded-2xl border border-blue-100 shadow-sm p-6">
                    <h3 className="text-sm font-bold text-xl text-primary uppercase tracking-wide mb-4 flex items-center gap-2">
                        <span className="w-1 h-4 bg-orange-400 rounded-full" />
                        Quick Links
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {quickLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 p-3 rounded-xl border border-blue-100 bg-blue-50/60 hover:bg-blue-100 hover:border-blue-200 transition-all group"
                            >
                                <span className="text-lg">{link.icon}</span>
                                <span className="text-xs font-bold text-primary group-hover:text-blue-800 leading-tight">
                                    {link.label}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Search + Filter */}
                <div className="bg-white mt-5 rounded-2xl border border-blue-100 shadow-sm p-6">
                    <h3 className="text-sm font-bold text-xl text-primary uppercase tracking-wide mb-4 flex items-center gap-2">
                        <span className="w-1 h-4 bg-orange-400 rounded-full" />
                        Browse Resources
                    </h3>

                    {/* Search */}
                    <div className="relative mb-4">
                        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search resources..."
                            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-blue-100 bg-blue-50/40 text-sm text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-200 focus:border-primary"
                        />
                    </div>

                    {/* Category filter */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${activeCategory === cat
                                    ? "bg-primary text-white"
                                    : "bg-blue-50 text-primary border border-blue-100 hover:border-blue-300"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <hr className="my-3" />

                    {/* Resource list */}
                    <div className="space-y-6">
                        {filtered.map((group, gi) => (
                            <div key={gi}>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-lg">{group.icon}</span>
                                    <h4 className="font-bold text-xl text-primary ">{group.category}</h4>
                                </div>
                                <div className="space-y-2">
                                    {group.items.map((item, ii) => (
                                        <div
                                            key={ii}
                                            className="flex items-center justify-between p-3 rounded-xl border border-blue-50 bg-blue-50/40 hover:border-blue-200 hover:bg-blue-50 transition-all group cursor-pointer"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-semibold text-slate-700 group-hover:text-primary transition-colors leading-snug">
                                                        {item.title}
                                                    </p>
                                                    <p className="text-[10px] text-slate-400 mt-0.5">{item.type} · {item.size}</p>
                                                </div>
                                            </div>
                                            <button className="flex-shrink-0 w-7 h-7 rounded-lg bg-blue-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all text-primary">
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        {filtered.length === 0 && (
                            <p className="text-center text-slate-400 text-sm py-8">No resources found for "{search}"</p>
                        )}
                    </div>
                </div>

                {/* Contact for info */}
                <div className="bg-blue-100 mt-5 border border-blue-200 rounded-2xl p-6 text-white">
                    <h3 className="text-primary font-bold text-lg mb-1">Can't find what you need?</h3>
                    <p className="text-neutral-500 text-sm mb-4">
                        Contact the Young India Information Desk directly at our Konark office.
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs">
                        <span className="flex items-center gap-1.5 bg-black/20 rounded-lg px-3 py-2">
                            📞 (+91.6758) 236471
                        </span>
                        <span className="flex items-center gap-1.5 bg-black/20 rounded-lg px-3 py-2">
                            ✉️ youngindia@hotmail.com
                        </span>
                        <span className="flex items-center gap-1.5 bg-black/20 rounded-lg px-3 py-2">
                            📍 Konark, Puri, Odisha – 752111
                        </span>
                    </div>
                </div>
            </PageLayout>
        </section>
    );
}