import React from "react";
import SectionHeading from "./SectionHeading";
import { Book, Globe, Monitor, Check } from "lucide-react";
import Button from "../base/Button";

const WhatWeDo = () => {
    return (
        <section className="bg-blue-50/60 py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute -top-20 left-0 w-[250px] h-[250px] bg-blue-500/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-orange-500/10 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* 🔥 Section Heading */}
                <div className="mb-3 w-full max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-4 flex justify-between items-end ">
                    <SectionHeading
                        title="What "
                        highlight="We Do"
                        description="Driving change through research, advocacy, and capacity building initiatives."
                        label="Our Work"
                    />
                    <Button>
                        See The Major Activities
                    </Button>
                </div>
                <hr />

                {/* GRID */}
                <div className="mt-8 grid lg:grid-cols-2 gap-10">

                    {/* 🔷 CARD 1 */}
                    <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition duration-300">

                        {/* Tag */}
                        <span className="inline-block bg-black text-white text-xs px-4 py-1 mb-4 tracking-wider">
                            CDSR UNIT
                        </span>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Research & Advocacy
                        </h3>

                        <div className="w-12 h-[3px] bg-blue-600 mb-5"></div>

                        {/* Text */}
                        <p className="text-gray-600 mb-5 leading-relaxed">
                            The 'CDSR' team primarily conducts in-depth research studies on
                            various social aspects. Research serves as our primary tool to
                            identify issues for advocacy.
                        </p>

                        <p className="text-gray-700 font-medium mb-6">
                            Shared with Government agencies, NGOs, Researchers & Academicians:
                        </p>

                        {/* Icons */}
                        <div className="flex gap-8">
                            <div className="flex flex-col items-center text-blue-600 group-hover:scale-110 transition">
                                <Book size={28} />
                                <span className="text-sm mt-2 text-gray-600">Publications</span>
                            </div>

                            <div className="flex flex-col items-center text-blue-600 group-hover:scale-110 transition">
                                <Globe size={28} />
                                <span className="text-sm mt-2 text-gray-600">Website</span>
                            </div>

                            <div className="flex flex-col items-center text-blue-600 group-hover:scale-110 transition">
                                <Monitor size={28} />
                                <span className="text-sm mt-2 text-gray-600">Media</span>
                            </div>
                        </div>
                    </div>

                    {/* 🟠 CARD 2 */}
                    <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition duration-300">

                        {/* Tag */}
                        <span className="inline-block bg-black text-white text-xs px-4 py-1 mb-4 tracking-wider">
                            SUPPORT UNIT
                        </span>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Training & Capacity Building
                        </h3>

                        <div className="w-12 h-[3px] bg-blue-600 mb-5"></div>

                        {/* Text */}
                        <p className="text-gray-600 mb-5 leading-relaxed">
                            Young India provides a wide variety of methods to enhance and
                            strengthen capacity at individual, institutional, and community
                            levels.
                        </p>

                        {/* List */}
                        <div className="space-y-3 mb-6">
                            {[
                                "Structured training (Short & Long duration)",
                                "Exposure visits & Field placements",
                                "Systematic reflection of experiences",
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <Check className="text-blue-600 mt-1" size={18} />
                                    <p className="text-gray-700 text-sm">{item}</p>
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <p className="text-gray-600 text-sm">
                            A dedicated team of{" "}
                            <span className="font-semibold text-gray-800">
                                10 expert Development Activists
                            </span>{" "}
                            are involved in this initiative.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;