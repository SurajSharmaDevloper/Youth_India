import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router";
import partner_1 from "../../assets/partner-1.jpg"
import partner_2 from "../../assets/partner-2.jpg"
import partner_3 from "../../assets/partner-3.jpg"
import partner_4 from "../../assets/partner-4.jpg"
import partner_5 from "../../assets/partner-5.jpg"
import partner_6 from "../../assets/partner-6.jpg"
import partner_7 from "../../assets/partner-7.jpg"
import partner_8 from "../../assets/partner-19.jpg"
import partner_9 from "../../assets/partner-8.jpg"
import partner_10 from "../../assets/partner-9.jpg"
import partner_11 from "../../assets/partner-10.jpg"
import partner_12 from "../../assets/partner-11.jpg"
import partner_13 from "../../assets/partner-12.jpg"
import partner_14 from "../../assets/partner-13.jpg"
import partner_15 from "../../assets/partner-14.jpg"
import partner_16 from "../../assets/partner-15.jpg"
import partner_17 from "../../assets/partner-16.jpg"
import partner_18 from "../../assets/partner-17.jpg"
import partner_19 from "../../assets/partner-18.jpg"
import SectionHeading from "./SectionHeading";

const logos = [
    partner_1, partner_2, partner_3, partner_4, partner_5, partner_6, partner_7, partner_8, partner_9, partner_10, partner_11, partner_12, partner_13, partner_14, partner_15, partner_16, partner_17, partner_18, partner_19
];

export default function PartnerSlider() {
    const trackRef = useRef();
    const [paused, setPaused] = useState(false);

    // 🔥 TRUE CONTINUOUS SCROLL
    useEffect(() => {
        const container = trackRef.current;
        let animationFrame;

        const speed = 0.5; // lower = smoother

        const scroll = () => {
            if (!paused) {
                container.scrollLeft += speed;

                // 🔁 RESET WITHOUT GLITCH
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0;
                }
            }

            animationFrame = requestAnimationFrame(scroll);
        };

        scroll();

        return () => cancelAnimationFrame(animationFrame);
    }, [paused]);

    return (
        <div className="w-full px-6 md:px-12 lg:px-20 bg-blue-50/60">
            <div className="max-w-7xl mx-auto py-20 rounded-2xl">
                <div className="flex w-full max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-2 justify-between items-end">
                    <div className="max-w-4xl">
                        <SectionHeading
                            label="OUR NETWORKS"
                            title="Our"
                            highlight=" Partners"
                            description="Young India works in alliance with government bodies, civil society organizations, media institutions, and academic partners to drive sustainable development."
                        />
                    </div>


                </div>
                <hr className='mt-5 mb-5 hr-line' />

                <div
                    className="relative overflow-hidden rounded-2xl mx-5 md:mx-0"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >


                    {/* TRACK */}
                    <div
                        ref={trackRef}
                        className="flex gap-12 items-center overflow-x-hidden"
                    >
                        {/* DOUBLE CONTENT */}
                        {[...logos, ...logos].map((logo, i) => (
                            <div
                                key={i}
                                className="min-w-[200px] p-5 border border-blue-100 rounded-xl bg-white flex justify-center items-center"
                            >
                                <img
                                    src={logo}
                                    alt="logo"
                                    className="object-contain opacity-70 hover:opacity-100 transition"
                                />
                            </div>
                        ))}
                    </div>

                </div>
                <div className="bg-blue-100 border border-blue-200 rounded-2xl mt-12 border border-blue-100 p-6 text-center">
                    <h3 className="font-bold text-primary text-lg mb-2">Become a Partner</h3>
                    <p className="text-sm text-slate-500 mb-4">Join our network of organizations committed to youth empowerment and social transformation.</p>
                    <Link to="/partners" className="group relative bg-primary text-white px-6 py-2.5 rounded-md font-medium overflow-hidden inline-flex items-center gap-2">
                        <span className="relative z-10 flex items-center gap-2">Know More <span className="group-hover:translate-x-1 transition"><i className="fa-solid fa-arrow-right"></i></span></span>
                        <span className="absolute inset-0 bg-secondary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                    </Link>

                </div>
            </div>

        </div>
    );
}