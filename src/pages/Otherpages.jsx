// ─── OurPartners.jsx ───────────────────────────────────────────────────────
import React from "react";
import Breadcrumb from "../components/blocks/Breadcrumb";
import banner from "../assets/breadcrumb-banner.jpg";
import PageLayout from "../components/sections/PageLayout";
import SectionHeading from "../components/blocks/SectionHeading";
import museumImage from "../assets/Rural-Museum-at-Konark.jpg"
import RadioNamaskarBanner from "../assets/Radio-namaskar-main.jpeg"
import Partner1 from "../assets/ministry_of_information_and_broadcasting.jpg"
import Partner2 from "../assets/Ministry_of_panchayati_raj.jpg"
import Partner3 from "../assets/ministry_of_rural_development.jpg"
import Partner4 from "../assets/Ministry_of_culture.jpg"
import Partner5 from "../assets/Unesco.jpg"
import Partner6 from "../assets/Unicef.jpg"
import Partner7 from "../assets/british_high_commission_new_delhi.jpg"
import Partner8 from "../assets/department_for_international_development.jpg"
import Partner9 from "../assets/U.S_department_of_state.jpg"
import Partner10 from "../assets/internet_society.jpg"
import Partner11 from "../assets//actionaid.jpg"
import Partner12 from "../assets/ASW.jpg"
import Partner13 from "../assets/commonwealth_education_media_center_for_asia.jpg"
import Partner14 from "../assets/Internews.jpg"
import Partner15 from "../assets/CAPARAT.jpg"


const partnerCategories = [
    {
        category: "Government & International Agencies",
        icon: <i class="fa-solid fa-building-columns"></i>,
        partners: [
            { name: "Ministry of Information and Broadcasting", role: "Provides media outreach and public awareness support", location: "New Delhi, India", logo: Partner1 },
            { name: "Ministry of Panchayati Raj", role: "Strengthens grassroots governance and rural participation", location: "New Delhi, India", logo: Partner2 },
            { name: "Ministry of Rural Development", role: "Supports rural development and poverty alleviation programs", location: "New Delhi, India", logo: Partner3 },
            { name: "Ministry of Culture", role: "Promotes cultural heritage and community engagement", location: "New Delhi, India", logo: Partner4 },
            { name: "UNESCO", role: "Supports education, culture, and global development initiatives", location: "Paris, France", logo: Partner5 },
            { name: "UNICEF", role: "Protects children’s rights and supports their development", location: "New York, USA", logo: Partner6 },
            { name: "British High Commission", role: "Supports international cooperation and development initiatives", location: "New Delhi", logo: Partner7 },
            { name: "Department of International Development", role: "Funds development programs and poverty reduction initiatives", location: "London, UK", logo: Partner8 },

            { name: "U.S Department of State", role: "Supports diplomacy and international development initiatives", location: "Orissa, India", logo: Partner9 },

            { name: "Internet Society", role: "Supports digital infrastructure and internet governance", location: "Reston, Virginia, USA", logo: Partner10 },


        ],
    },
    {
        category: "Civil Society & NGOs",
        icon: <i class="fa-solid fa-handshake"></i>,
        partners: [
            { name: "ActionAid Association(India)", role: "Promotes social justice and community empowerment", location: "New Delhi, India", logo: Partner11 },
            { name: "ASW", role: "Represents social work initiatives and community support programs", location: "Multi-state", logo: Partner12 },
            { name: "Commonwealth Education Media Center For Asia", role: "Promotes education through media and capacity building", location: "New Delhi, India", logo: Partner13 },
            { name: "InterNews", role: "Supports independent media and information access initiatives", location: "Arcata, California, USA", logo: Partner14 },
            { name: "CAPART", role: "Promotes rural development through voluntary organizations", location: "New Delhi, India", logo: Partner15 },

        ],
    },

];

export function OurPartners() {
    return (
        <section className="w-full min-h-screen ">
            <Breadcrumb
                title="OUR PARTNERS"
                subtitle="Building a movement for social transformation through powerful alliances."
                breadcrumbs={["Home", "Our Partners"]}
                bgImage={banner}
            />
            <PageLayout>
                <SectionHeading
                    label="Alliances"
                    title="Our "
                    highlight="Partners"
                    description="Young India works in alliance with government bodies, civil society organizations, media institutions, and academic partners to drive sustainable development."
                />
                <hr className="mt-3 mb-8" />

                <div className="space-y-6">
                    {partnerCategories.map((cat, ci) => (
                        <div key={ci} className=" rounded-2xl border border-blue-100 shadow-sm overflow-hidden">
                            <div className="flex items-center bg-primary gap-3 px-6 py-4 bg-blue-50/60 border-b border-blue-100">
                                <span className="text-xl text-white">{cat.icon}</span>
                                <h3 className="font-bold text-white text-sm uppercase tracking-wide">{cat.category}</h3>
                            </div>
                            <div className="divide-y divide-blue-100">
                                {cat.partners.map((p, pi) => (
                                    <div key={pi} className="flex bg-white items-center justify-between px-6 py-4 hover:bg-blue-50/40 transition-colors group">
                                        <div className="flex items-center gap-8">
                                            <div className="w-32 border-slate-300 p-1.5 border rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                                <span className="text-xs font-bold text-primary"><img className="rounded-xl" src={p.logo} alt={p.name} srcset="" /></span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">{p.name}</p>
                                                <p className="text-xs text-slate-400">{p.role}</p>
                                            </div>
                                        </div>
                                        <span className="text-[10px] font-semibold text-primary bg-blue-50 border border-blue-100 rounded-lg px-2.5 py-1 hidden sm:block">{p.location}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-blue-50 rounded-2xl mt-8 border border-blue-100 p-6 text-center">
                    <h3 className="font-bold text-primary text-lg mb-2">Become a Partner</h3>
                    <p className="text-sm text-slate-500 mb-4">Join our network of organizations committed to youth empowerment and social transformation.</p>
                    <a href="mailto:youngindia@hotmail.com" className="group relative bg-primary text-white px-6 py-2.5 rounded-md font-medium overflow-hidden inline-flex items-center gap-2">
                        <span className="relative z-10 flex items-center gap-2">Partner With Us <span className="group-hover:translate-x-1 transition">→</span></span>
                        <span className="absolute inset-0 bg-secondary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                    </a>
                </div>
            </PageLayout>
        </section>
    );
}

// ─── CommunityRadioInternship.jsx ──────────────────────────────────────────
export function CommunityRadioInternship() {
    const fields = ["Rural Economics", "Local Governance", "Women & Child Development", "Human Rights", "Agriculture", "Environment", "Media Production", "Community Journalism"];

    return (
        <section className="w-full min-h-screen space-y-8">
            <Breadcrumb
                title="COMMUNITY RADIO INTERNSHIP"
                subtitle="Radio Namaskar accepting applications for Radio Internship Program from students & mid-term career media professionals."
                breadcrumbs={["Home", "Community Radio Internship"]}
                bgImage={banner}
            />
            <PageLayout>
                <SectionHeading
                    label="Radio Namaskar"
                    title="Community Radio "
                    highlight="Internship"
                    description="Join Odisha's first community radio station — an internship with real-world impact."
                />
                <hr className="mt-3 mb-8" />

                <div className="w-full h-[500px] bg-blue-50 rounded-2xl border border-blue-100 overflow-hidden shadow-sm">
                    <img className="object-cover w-full h-full" src={RadioNamaskarBanner} alt="Radio Namaskar" />

                </div>

                {/* About Radio Namaskar */}
                <div className="bg-white mt-8 rounded-2xl border border-blue-100 shadow-sm p-6">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-primary text-lg">About Radio Namaskar</h3>
                            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">90.4 FM · Konark, Odisha · radionamaskar.org</p>
                        </div>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        Radio Namaskar is the brainchild of Young India, established at Konark. It is the first community radio of Odisha and aims to ensure non-disruptive communication for all — particularly for people in remote areas. Radio Namaskar continues its programme episodes with involvement of local youths and intellectuals, and is going to be the first internet radio of the country through its portal.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {["First community radio of Odisha", "Special web portal online", "Local youth & intellectuals", "Becoming India's first internet radio", "Free studio facilities for interns", "Strong social commitment focus"].map((f, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-primary bg-blue-50 rounded-lg p-2 border border-blue-100">
                                <span className="w-1 h-1 bg-orange-400 rounded-full flex-shrink-0" />
                                {f}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Internship Details */}
                <div className="bg-white mt-8 rounded-2xl border border-blue-100 shadow-sm p-6">
                    <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
                        <span className="w-1 h-4 bg-orange-400 rounded-full" />
                        Internship Programme Details
                    </h3>
                    <hr />
                    <p className="text-sm mt-3 text-slate-600 mb-5 leading-relaxed">
                        Radio Namaskar has planned short-term internship programmes with free use of office facilities and studio. We accept interns who have a serious social commitment. Intended interns should be prepared and capable of hard and diligent field-based media activism.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                            <h4 className="font-bold text-primary text-sm mb-2">Who Can Apply</h4>
                            <ul className="space-y-1.5 text-xs text-slate-600">
                                <li className="flex items-start gap-2"><span className="text-orange-400 font-bold mt-0.5">•</span>Students pursuing media/journalism courses</li>
                                <li className="flex items-start gap-2"><span className="text-orange-400 font-bold mt-0.5">•</span>Mid-term career media professionals</li>
                                <li className="flex items-start gap-2"><span className="text-orange-400 font-bold mt-0.5">•</span>Those looking for a sabbatical internship</li>
                                <li className="flex items-start gap-2"><span className="text-orange-400 font-bold mt-0.5">•</span>Anyone with strong social commitment</li>
                            </ul>
                        </div>
                        <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                            <h4 className="font-bold text-primary text-sm mb-2">What We Offer</h4>
                            <ul className="space-y-1.5 text-xs text-slate-600">
                                <li className="flex items-start gap-2"><span className="text-orange-400 font-bold mt-0.5">•</span>Free use of office & studio facilities</li>
                                <li className="flex items-start gap-2"><span className="text-orange-400 font-bold mt-0.5">•</span>Real-world community media experience</li>
                                <li className="flex items-start gap-2"><span className="text-orange-400 font-bold mt-0.5">•</span>Field-based media activism training</li>
                                <li className="flex items-start gap-2"><span className="text-orange-400 font-bold mt-0.5">•</span>Certificate of completion</li>
                            </ul>
                        </div>
                    </div>

                    <h4 className="font-bold text-primary text-sm mb-3">Fields of Interest</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {fields.map((f, i) => (
                            <span key={i} className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-100 text-primary">
                                {f}
                            </span>
                        ))}
                    </div>
                    <p className="text-xs text-slate-400 italic">Prior relevant work experience and computing skills will be preferred.</p>
                </div>

                {/* How to Apply */}
                <div className="bg-white mt-8 border border-blue-100 rounded-2xl p-6 text-white">
                    <h3 className="font-bold text-lg text-primary mb-1">How to Apply</h3>
                    <p className="text-neutral-800 text-sm mb-2">There is no application form. To apply, send the following to our email:</p>
                    <hr />
                    <div className="space-y-2  mt-5 mb-5">
                        {[
                            "📄 Covering letter describing the reasons for applying",
                            "📋 Resume with information about field of interest & previous experience",
                        ].map((item, i) => (
                            <div key={i} className="flex bg-blue-50  items-start gap-2 text-sm text-blue-700 rounded-lg p-3">
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <a href="mailto:youngindia@hotmail.com" className="flex items-center gap-2 bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-colors">
                            <i class="fa-regular fa-envelope"></i> Apply via Email
                        </a>
                        <a href="http://www.radionamaskar.org" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-transparent hover:bg-blue-100 border border-primary text-primary px-5 py-2.5 rounded-lg font-bold text-sm transition-colors">
                            <i class="fa-solid fa-globe"></i> Visit Website
                        </a>
                    </div>
                    <p className="text-neutral-700 text-xs mt-4">📍 Radio Namaskar, At/P.O. – Konark, Dist. – Puri, Odisha – 752111</p>
                </div>
            </PageLayout>
        </section>
    );
}

// ─── ESHG.jsx ──────────────────────────────────────────────────────────────
export function ESHG() {
    return (
        <section className="w-full min-h-screen space-y-8">
            <Breadcrumb
                title="e-SHG PLATFORM"
                subtitle="A digital platform to empower Self Help Groups across rural Odisha — launching soon."
                breadcrumbs={["Home", "e-SHG"]}
                bgImage={banner}
            />
            <PageLayout>
                <SectionHeading
                    label="Coming Soon"
                    title="'e-SHG' will be "
                    highlight="Launched Soon"
                    description="Young India is developing a first-of-its-kind digital platform for Self Help Groups across rural India."
                />
                <hr className="mt-3 mb-8" />

                {/* Coming Soon Hero */}
                <div className="bg-white mb-8 rounded-2xl border border-blue-100 shadow-sm p-8 text-center">
                    <div className="w-20 h-20 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-5">
                        <span className="text-4xl">💻</span>
                    </div>
                    <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange-600 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-widest">
                        <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                        Launching Soon
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-3">e-SHG Digital Platform</h3>
                    <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                        Young India is developing a comprehensive digital platform to connect, empower, and strengthen Self Help Groups (SHGs) across rural Odisha and India.
                    </p>
                </div>

                {/* What is e-SHG */}
                <div className="bg-white mb-8 rounded-2xl border border-blue-100 shadow-sm p-6">
                    <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                        <span className="w-1 h-4 bg-orange-400 rounded-full" />
                        What is e-SHG?
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        Self Help Groups (SHGs) are the backbone of rural women's economic empowerment in India. However, most SHGs operate with limited digital tools, making financial management, communication, and market access a challenge. The e-SHG platform by Young India will bridge this gap by providing an accessible digital infrastructure specifically designed for rural SHG members.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { icon: "💰", title: "Financial Management", desc: "Digital ledgers, savings tracking, and loan management tools for SHG members." },
                            { icon: "📱", title: "Mobile-First Design", desc: "Designed for low-connectivity rural areas with a simple, multilingual interface." },
                            { icon: "🛒", title: "Market Linkage", desc: "Connect SHG products directly to buyers and e-commerce platforms." },
                            { icon: "📚", title: "Capacity Building", desc: "Online training modules on entrepreneurship, rights, and governance." },
                            { icon: "🤝", title: "Peer Network", desc: "Connect SHGs across districts for knowledge sharing and mutual support." },
                            { icon: "📊", title: "Progress Tracking", desc: "Monitor group performance, savings growth, and member development." },
                        ].map((f, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-blue-50/60 border border-blue-100">
                                <span className="text-xl flex-shrink-0">{f.icon}</span>
                                <div>
                                    <h4 className="font-bold text-primary text-sm">{f.title}</h4>
                                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Notify Me */}
                <div className="bg-primary  rounded-2xl p-6">
                    <h3 className="font-bold text-white text-lg mb-1">Get Notified at Launch</h3>
                    <p className="text-blue-200 text-sm mb-4">Register your interest and we'll notify you when e-SHG goes live.</p>
                    <div className="flex gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-4 max-w-[300px] py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-300 text-sm outline-none focus:ring-2 focus:ring-orange-400/40 focus:border-orange-400 transition-all"
                        />
                        <button className="px-5 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-400 text-white text-sm font-bold transition-colors flex-shrink-0">
                            Notify Me
                        </button>
                    </div>
                    <p className="text-blue-400 text-xs mt-3">📍 Young India, Konark, Puri, Odisha · youngindia@hotmail.com</p>
                </div>
            </PageLayout>
        </section>
    );
}

// ─── RuralMuseum.jsx ───────────────────────────────────────────────────────
export function RuralMuseum() {
    const exhibits = [
        { icon: "🏺", title: "Traditional Pottery", desc: "Ancient earthen pottery and terracotta art from rural Odisha communities." },
        { icon: "🧵", title: "Folk Textiles", desc: "Handloom weaving, tribal fabrics, and traditional textile-making tools." },
        { icon: "🌾", title: "Agricultural Heritage", desc: "Traditional farming tools, seed varieties, and agricultural practices of coastal Odisha." },
        { icon: "🎭", title: "Performing Arts", desc: "Masks, costumes, and instruments from Odisha's rich folk performance traditions." },
        { icon: "🖼️", title: "Pattachitra Art", desc: "Traditional Odishan scroll paintings depicting mythological and folk narratives." },
        { icon: "🏠", title: "Rural Architecture", desc: "Scale models and photographs of traditional rural housing and settlement patterns." },
    ];

    return (
        <section className="w-full min-h-screen space-y-8">
            <Breadcrumb
                title="RURAL MUSEUM AT KONARK"
                subtitle="Preserving the cultural heritage, traditions, and folk wisdom of rural Odisha for future generations."
                breadcrumbs={["Home", "Rural Museum"]}
                bgImage={banner}
            />
            <PageLayout>
                <SectionHeading
                    label="Cultural Heritage"
                    title="Rural Museum "
                    highlight="at Konark"
                    description="A unique cultural institution preserving the living heritage of rural Odisha."
                />
                <hr className="mt-3 mb-8" />

                {/* About */}
                <div className="w-full mb-8">
                    <img className="w-full object-cover rounded-lg " src={museumImage} alt="Rural Museum at Konark" />
                </div>
                <div className="bg-white mb-8 rounded-2xl border border-blue-100 shadow-sm p-6">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-blue-100 flex items-center justify-center flex-shrink-0 text-2xl">🏛️</div>
                        <div>
                            <h3 className="font-bold text-primary text-lg">About the Museum</h3>
                            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">Konark, Puri District, Odisha</p>
                        </div>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        The Rural Museum at Konark is a unique initiative by Young India to preserve and celebrate the cultural heritage, traditional crafts, agricultural practices, and folk art of Odisha's rural communities. Located near the iconic Sun Temple of Konark, the museum serves as a living repository of the region's rich rural legacy.
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                        The museum is an effort to ensure that India's rich rural legacy — threatened by rapid urbanization and cultural shift — is documented, preserved, and shared with future generations and visitors.
                    </p>

                    {/* Visit info */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                            { icon: "🕐", label: "Open Hours", value: "Sundays: 10 AM – 5 PM" },
                            { icon: "📍", label: "Location", value: "Konark, Puri, Odisha – 752111" },
                            { icon: "📞", label: "Contact", value: "(+91.6758) 236471" },
                        ].map((info, i) => (
                            <div key={i} className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-center">
                                <span className="text-xl block mb-1">{info.icon}</span>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">{info.label}</p>
                                <p className="text-xs font-bold text-primary mt-0.5">{info.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Exhibits */}
                <div className="bg-white mb-8 rounded-2xl border border-blue-100 shadow-sm p-6">
                    <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                        <span className="w-1 h-4 bg-orange-400 rounded-full" />
                        Museum Exhibits
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {exhibits.map((ex, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-blue-100 bg-blue-50/40 hover:border-blue-200 hover:bg-blue-50 transition-all group">
                                <span className="text-2xl flex-shrink-0">{ex.icon}</span>
                                <div>
                                    <h4 className="font-bold text-primary text-sm group-hover:text-blue-800 transition-colors">{ex.title}</h4>
                                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{ex.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Plan a Visit */}
                <div className="bg-primary  rounded-2xl p-6 text-white">
                    <h3 className="font-bold text-lg mb-1">Plan Your Visit</h3>
                    <p className="text-blue-200 text-sm mb-4">The Rural Museum is open every Sunday. Schools, colleges, and community groups are especially welcome. Contact us to arrange a guided tour.</p>
                    <div className="flex flex-wrap gap-3">
                        <a href="mailto:youngindia@hotmail.com" className="flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-colors">
                            ✉️ Book a Visit
                        </a>
                        <a href="tel:+916758236471" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-colors">
                            📞 Call Us
                        </a>
                    </div>
                </div>
            </PageLayout>
        </section>
    );
}