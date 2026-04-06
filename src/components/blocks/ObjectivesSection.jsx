import React from "react";
import SectionHeading from "./SectionHeading";
import obj from "../../assets/our_objectives.png"

const objectives = [
    "To bring critical awareness among people on Local Self Governance, Human Rights, education, environment, health, gender, cultural heritage, gram swaraj and ensure their participation to accelerate the development process for sustainability.",
    "To organize, promote and capacitate the peoples’ organizations, like-minded NGOs and other networks for building solidarity and taking collaboration on efforts/action against anti people forces to establish alternative sustainable development.",
    "To promote peoples’ knowledge and human values like love, affection, brotherhood, cooperation, mutual understanding, secularism, gender equity and fight against untouchability.",
    "Providing/encouraging/undertaking social / educational / cultural and community development projects / activities/ programme.",
    "Initiation of feasible action programme for sustainable development in rural and urban areas, slums to improve the quality of individual life through self reliance and channel them to reach their optimum potential for growth and development.",
];

const ObjectivesSection = () => {
    return (
        <section className="bg-blue-50/60 py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16 items-start">

                {/* LEFT SIDE */}
                <div className="col-span-2 max-[1200px]:col-span-5 ">
                    <SectionHeading
                        title="Our "
                        highlight="Objectives"
                        description=" Our mission is driven by clear and impactful objectives focused on
                        social transformation, empowerment, and sustainable development.
                        These guiding principles help us create meaningful change across
                        communities."
                        label="What We Want To Achieve"
                    />
                    <div className="w-full flex justify-center items-center">
                        <img src={obj} alt="" />
                    </div>
                </div>

                {/* RIGHT SIDE LIST */}
                <div className="space-y-6 col-span-3 max-[1200px]:col-span-5">

                    {objectives.map((item, index) => (
                        <div
                            key={index}
                            className="group flex items-center gap-4 bg-white p-3 rounded-xl border border-blue-200"
                        >
                            {/* Custom Bullet */}
                            <div className="w-[55px] h-[55px] flex items-center justify-center shrink-0 bg-blue-900/40 rounded-xl">
                                <span className="text-primary text-3xl font-semibold">0{index + 1}</span>
                            </div>

                            {/* Text */}
                            <p className="text-gray-700 leading-relaxed text-[14px] group-hover:text-gray-900 transition">
                                {item}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default ObjectivesSection;