import React from "react";
import Breadcrumb from "../components/blocks/Breadcrumb";
import banner from "../assets/breadcrumb-banner.jpg";
import PageLayout from "../components/sections/PageLayout";
import SectionHeading from "../components/blocks/SectionHeading";
import { Link } from "react-router";
import radionamaskarIcon from "../assets/radio-namaskar.jpg";
import volIndia from "../assets/Youth_india.jpg";
import SuchnaAward from "../assets/soochna-awards.jpg";
import NamNetwork from "../assets/NamaskarIndia.jpg"
import OMA from "../assets/Oma.jpg"
import RuralIndia from "../assets/rural_media.jpg";
import ESHG from "../assets/card-4.jpg";
import youthFest from "../assets/konark_youth_fest.webp";


const initiatives = [
    {
        icon: radionamaskarIcon,
        title: "Radio Namaskar",
        subtitle: "Community Radio Station",
        status: "Active",
        statusColor: "bg-green-100 text-green-700",
        url: "http://www.radionamaskar.org",
        desc: "Odisha's first community radio station, established at Konark by Young India. Broadcasting local content covering rural economics, governance, health, agriculture, and culture. Now available online — becoming India's first community internet radio.",
        highlights: ["First community radio of Odisha", "Special web portal — radionamaskar.org", "Internship program for media students", "Local youth & intellectuals involved"],
    },
    {
        icon: volIndia,
        title: "Volunteers India",
        subtitle: "National Volunteer Database",
        status: "Active",
        statusColor: "bg-green-100 text-green-700",
        url: "http://www.volunteersindia.in",
        desc: "The only portal of its kind in India — a comprehensive database of Indian volunteers committed to sustainable development. Bridges the data gap by connecting volunteers with communities, organizations, and development initiatives nationwide.",
        highlights: ["Only national volunteer database", "Promotes sustainable development", "Connects marginalized communities", "Open registration for all volunteers"],
    },
    {
        icon: SuchnaAward,
        title: "Suchana Shree Award",
        subtitle: "RTI Excellence Recognition",
        status: "Active",
        statusColor: "bg-green-100 text-green-700",
        url: "#",
        desc: "A state-level award for RTI crusaders of Odisha, initiated by Young India. Recognizes effective RTI practices that have had sound development impact on the lives of communities and citizens at the grassroots level. Fighting corruption through information.",
        highlights: ["State-level RTI recognition award", "Identifies grassroots RTI champions", "Promotes anti-corruption culture", "Annual award ceremony"],
    },
    {
        icon: NamNetwork,
        title: "NAMASKAR Network",
        subtitle: "Youth Organizations Network",
        status: "Active",
        statusColor: "bg-green-100 text-green-700",
        url: "#",
        desc: "A vibrant networking platform of youth organizations across India led by Young India. NAMASKAR coordinates collective action on RTI propagation, youth governance, voluntarism, and social transformation with member organizations from multiple states.",
        highlights: ["Multi-state youth network", "RTI propagation focus", "Collective action platform", "Membership open to youth orgs"],
    },
    {
        icon: OMA,
        title: "Odisha Media Award (OMA)",
        subtitle: "Media Excellence Initiative",
        status: "Active",
        statusColor: "bg-green-100 text-green-700",
        url: "#",
        desc: "Young India collaborates with journalists and development activists to recognize media persons who contribute positively to democracy, highlight social issues, and amplify voices of marginalized communities in Odisha. OMA promotes responsible developmental journalism.",
        highlights: ["Recognizes development journalism", "Promotes democratic media", "Collaboration with journalists", "Amplifies marginalized voices"],
    },
    {
        icon: RuralIndia,
        title: "Rural Museum at Konark",
        subtitle: "Cultural Heritage Preservation",
        status: "Active",
        statusColor: "bg-green-100 text-green-700",
        url: "/rural-museum",
        desc: "A unique rural museum at Konark that preserves and celebrates the cultural heritage, traditional crafts, agricultural practices, and folk art of Odisha's rural communities. An effort to ensure that India's rich rural legacy is not lost to time.",
        highlights: ["Cultural heritage preservation", "Traditional crafts showcase", "Folk art collection", "Open every Sunday"],
    },
    {
        icon: ESHG,
        title: "e-SHG Platform",
        subtitle: "Digital Self Help Groups",
        status: "Coming Soon",
        statusColor: "bg-orange-100 text-orange-700",
        url: "/e-shg",
        desc: "An upcoming digital platform to connect, empower, and strengthen Self Help Groups (SHGs) across rural Odisha. The e-SHG platform will provide digital tools for financial management, capacity building, market linkage, and peer support for SHG members.",
        highlights: ["Digital SHG management tools", "Financial empowerment", "Market linkage support", "Rural women focused"],
    },
    {
        icon: youthFest,
        title: "Konark Youth Fest",
        subtitle: "Annual National Youth Congregation",
        status: "Annual",
        statusColor: "bg-blue-100 text-blue-700",
        url: "#",
        desc: "A national-level youth gathering organized every December at Konark. Brings together youth from across India to celebrate unity, fight social evils, and showcase performing arts — fostering nationalism, scientific temper, and cultural heritage.",
        highlights: ["National-level event every December", "Youth from across India", "Performing arts showcase", "Anti-social evils campaigns"],
    },
];

export default function OurInitiatives() {
    return (
        <section className="w-full min-h-screen">
            <Breadcrumb
                title="OUR INITIATIVES"
                subtitle="Transformative programmes and platforms that drive lasting social change across India."
                breadcrumbs={["Home", "Our Initiatives"]}
                bgImage={banner}
            />

            <PageLayout>
                <SectionHeading
                    label="What We've Built"
                    title="Our "
                    highlight="Initiatives"
                    description="Young India has pioneered several first-of-their-kind initiatives in Odisha and India — from community radio to digital volunteer networks."
                />
                <hr className="mt-3 mb-8" />

                <div className="space-y-5">
                    {initiatives.map((init, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 overflow-hidden group"
                        >
                            <div className="p-4">
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                                    <div className="w-full md:w-[200px] h-[200px] rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-2xl group-hover:bg-primary/10 transition-colors">
                                        <img className="w-full h-full object-cover rounded-lg" src={init.icon} alt="" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                                            <h3 className="text-primary text-xl font-bold">{init.title}</h3>
                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${init.statusColor}`}>
                                                {init.status}
                                            </span>
                                        </div>
                                        <p className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wide">
                                            {init.subtitle}
                                        </p>
                                        <hr />
                                        <p className="text-xs mt-2 text-slate-600 leading-relaxed mb-4">{init.desc}</p>

                                        {/* Highlights */}
                                        <div className="grid grid-cols-2 gap-2 mb-4">
                                            {init.highlights.map((h, hi) => (
                                                <div key={hi} className="flex items-center gap-2 text-xs text-primary">
                                                    <span className="w-1 h-1 rounded-full bg-orange-400 flex-shrink-0" />
                                                    {h}
                                                </div>
                                            ))}
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="h-0.5 bg-gradient-to-r from-primary/20 via-blue-200/30 to-transparent" />
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="bg-blue-100 mt-5 rounded-2xl border border-blue-100 p-6 text-center">
                    <h3 className="font-black text-primary text-lg mb-2">Want to be part of an initiative?</h3>
                    <p className="text-sm text-slate-500 mb-4">
                        Join as a volunteer, partner, or intern and help us scale our impact across India.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link
                            to="/contact"
                            className="group relative bg-primary text-white px-6 py-2.5 rounded-md font-medium overflow-hidden inline-flex items-center gap-2"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Get Involved
                                <span className="group-hover:translate-x-1 transition">→</span>
                            </span>
                            <span className="absolute inset-0 bg-secondary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                        </Link>
                        <Link
                            to="/donate"
                            className="px-6 py-2.5 rounded-md font-medium border border-primary text-primary hover:bg-blue-50 transition-colors text-sm"
                        >
                            Support Our Work
                        </Link>
                    </div>
                </div>
            </PageLayout>
        </section>
    );
}