import React, { useRef, useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import Button from "../base/Button";
import { NavLink } from "react-router";

const DetailsGrid = () => {
    const cardRef = useRef(null);
    const counterRef = useRef(null);

    const [count, setCount] = useState(0);

    // 🎯 3D Tilt Effect
    const handleMouseMove = (e) => {
        const { left, top, width, height } =
            cardRef.current.getBoundingClientRect();

        const x = (e.clientX - left - width / 2) / 25;
        const y = (e.clientY - top - height / 2) / 25;

        cardRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    };

    const reset = () => {
        cardRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    };

    // 🔢 Counter Animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const end = 37;
                    const duration = 1200;
                    const increment = end / (duration / 16);

                    const counter = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setCount(end);
                            clearInterval(counter);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);

                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) observer.observe(counterRef.current);
    }, []);

    return (
        <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden">

            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            {/* Glow Effects */}
            <div className="absolute w-[300px] h-[300px] bg-blue-500/20 blur-3xl rounded-full -top-20 -left-20"></div>
            <div className="absolute w-[250px] h-[250px] bg-orange-500/20 blur-3xl rounded-full bottom-0 right-0"></div>

            <div className="max-w-7xl  mx-auto grid lg:grid-cols-5 gap-20 items-center relative z-10">

                {/* LEFT */}
                <div className="relative col-span-2  max-[1050px]:col-span-5 flex justify-center items-center">

                    {/* Wrapper for layering */}
                    <div className="relative w-full max-w-[420px]">

                        {/* 🔷 BACKGROUND OFFSET BLOCK (THIS IS THE KEY) */}
                        <div className="absolute top-6 left-6 w-full h-full bg-blue-600 rounded-xl z-0"></div>

                        {/* IMAGE CARD */}
                        <div
                            ref={cardRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={reset}
                            className="relative z-10 transition-transform duration-300"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Glow Border */}
                            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-400/30 to-orange-400/30 rounded-xl blur-lg opacity-70"></div>

                            {/* Image */}
                            <img
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                                alt="about"
                                className="relative w-full h-[300px] md:h-[400px] object-cover rounded-xl shadow-2xl"
                            />

                            {/* COUNTER CARD */}
                            <div
                                ref={counterRef}
                                className="absolute -bottom-6 right-6 px-8 py-4 bg-orange-500 rounded-lg shadow-xl flex items-center gap-3 group hover:scale-105 transition"
                            >
                                <h3 className="text-4xl font-bold text-white">{count}+</h3>
                                <p className="text-white text-sm leading-tight">
                                    Years <br /> Experience
                                </p>

                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 rounded-lg transition"></div>
                            </div>
                        </div>

                    </div>
                </div>


                {/* RIGHT */}
                <div className="col-span-3 max-[1050px]:col-span-5">
                    <SectionHeading
                        title="Who "
                        highlight="We Are"
                        description=""
                        label="About us"
                    />

                    <p className="text-gray-600 mb-6 leading-relaxed text-[15px]">
                        Young India is a national-level voluntary organization established
                        in 1989, formed by National Youth Awardees, NSS Awardees, and
                        dedicated social activists committed to driving social
                        transformation and community development. The organization focuses
                        on empowering youth, promoting national integration, and encouraging
                        active participation in building an inclusive society through
                        training, research, and grassroots initiatives. With a strong belief
                        in collective action, Young India works to uplift communities,
                        especially in rural and underserved areas, by fostering awareness,
                        leadership, and sustainable development practices.
                    </p>

                    <Button> <NavLink to="/donate">Donation Now</NavLink></Button>
                </div>
            </div>
        </section>
    );
};

export default DetailsGrid;