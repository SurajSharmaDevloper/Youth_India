import React from "react";
import Breadcrumb from "../components/blocks/Breadcrumb";
import banner from "../assets/breadcrumb-banner.jpg";
import PageLayout from "../components/sections/PageLayout";
import SectionHeading from "../components/blocks/SectionHeading";
import { Link } from "react-router";

import card_1 from '../assets/card-1.jpg'
import card_2 from '../assets/card-2.jpg'
import card_3 from '../assets/card-3.jpg'
import card_4 from '../assets/card-4.jpg'
import { CalendarDays, SquareUser, ArrowRight } from "lucide-react";

const newsData = [
    {
        tag: "Innovation",
        title: "Young India Social Innovation Summit 2016 concludes",
        desc: "While the world is abuzz with entrepreneurship and its role for societal development, we cannot deny the role of social innovation in fostering inclusive growth. Young India Social Innovation Summit 2016 focused on grassroots innovations.",
        img: card_1,
        date: "20",
        month: "Sep",
        year: "2016",
        shares: "Young India Team",
    },
    {
        tag: "Innovation",
        title: "Young India Social Innovation Summit 2016 in Sept",
        desc: "Young India Social Innovation Summit 2016 is taking place at Bhubaneswar on 29 & 30 Sept. It will bring together thought leaders, practitioners, and passionate youths to interact and ideate.",
        img: card_2,
        date: "15",
        month: "Aug",
        year: "2016",
        shares: "Young India Team",
    },
    {
        tag: "Media",
        title: "Odisha Media Award ( OMA ) 2015 concluded",
        desc: "Odisha Media Award (OMA) is an attempt by Young India with a group of journalists and development activists to honor the unsung heroes of grassroots media who amplify the voices of the voiceless.",
        img: card_3,
        date: "05",
        month: "Apr",
        year: "2016",
        shares: "Young India Team",
    },
    {
        tag: "Community",
        title: "CHALA GAON KU JiBA (Let us go to village)",
        desc: "‘Villages are the spirit of India.’ Through the cities are the central place of business, education, health, technology, the real India lies in its villages. We invite youths to reconnect with their roots.",
        img: card_4,
        date: "20",
        month: "Mar",
        year: "2016",
        shares: "Young India Team",
    },
];

export default function NewsAndStories() {
    return (
        <section className="w-full min-h-screen">
            <Breadcrumb
                title="NEWS & STORIES"
                subtitle="Stay informed with the latest updates from Young India's work, events, and impact."
                breadcrumbs={["Home", "News & Stories"]}
                bgImage={banner}
            />

            <PageLayout>
                <SectionHeading
                    label="Latest Updates"
                    title="News "
                    highlight="& Stories"
                    description="Explore the milestones, success stories, and ongoing activities of Young India."
                />
                <hr className="mt-3 mb-10" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {newsData.map((item, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 overflow-hidden flex flex-col group">
                            
                            {/* IMAGE */}
                            <div className="relative h-[250px] w-full overflow-hidden">
                                <img
                                    src={item.img}
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                    alt={item.title}
                                />
                                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 text-white rounded-full text-xs font-semibold tracking-wide border border-white/20">
                                    {item.tag}
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div className="p-6 flex flex-col flex-grow">
                                {/* METADATA */}
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center gap-2 bg-blue-50 text-[#0061b0] px-3 py-1.5 rounded-lg text-xs font-medium border border-blue-100">
                                        <CalendarDays size={14} />
                                        {item.date} {item.month} {item.year}
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                                        <SquareUser size={14} />
                                        {item.shares}
                                    </div>
                                </div>

                                {/* TITLE */}
                                <h3 className="text-xl font-bold text-[#0061b0] mb-3 leading-snug group-hover:text-[#f97316] transition-colors">
                                    {item.title}
                                </h3>

                                {/* DESC */}
                                <p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">
                                    {item.desc}
                                </p>

                                {/* FOOTER / CTA */}
                                <div className="mt-auto pt-4 border-t border-slate-100">
                                    <button className="flex items-center gap-2 text-[#0061b0] font-semibold text-sm hover:text-[#004182] transition-colors group/btn">
                                        Read Full Story 
                                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="bg-blue-100 mt-12 rounded-2xl border border-blue-100 p-8 text-center">
                    <h3 className="font-bold text-[#0061b0] text-2xl mb-3">Have a story to share?</h3>
                    <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                        We believe every voice matters. If you've been part of our journey or have witnessed a positive change in your community, let us know!
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-[#0061b0] hover:bg-[#004182] text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
                    >
                        Contact Us Form
                    </Link>
                </div>
            </PageLayout>
        </section>
    );
}
