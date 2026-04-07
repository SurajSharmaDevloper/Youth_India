import React, { useEffect, useState } from "react";
import banner_1 from "../../assets/banner-1.png"
import banner_2 from "../../assets/banner-2.png"
import banner_3 from "../../assets/banner-3.png"
import banner_4 from "../../assets/banner-4.jpg"
import banner_5 from "../../assets/banner-5.png"
import banner_6 from "../../assets/banner-6.png"



const slides = [
    {
        id: 1,
        image: banner_1,
        title: "Build This Earth with",
        highlight: "Heart’s True Vision",
        desc: "A seed is gently first planted, so it slowly starts to grow a tree, then blossoms and bears fruit with nature’s help.",
    },
    {
        id: 2,
        image: banner_2,
        title: "Together We Grow",
        highlight: "A Greener Future",
        desc: "Empowering communities through sustainable practices and climate-smart agriculture.",
    },
    {
        id: 3,
        image: banner_3,
        title: "Together We Grow",
        highlight: "A Greener Future",
        desc: "Empowering communities through sustainable practices and climate-smart agriculture.",
    },
    {
        id: 4,
        image: banner_4,
        title: "Together We Grow",
        highlight: "A Greener Future",
        desc: "Empowering communities through sustainable practices and climate-smart agriculture.",
    },
    {
        id: 5,
        image: banner_5,
        title: "Together We Grow",
        highlight: "A Greener Future",
        desc: "Empowering communities through sustainable practices and climate-smart agriculture.",
    },
    {
        id: 6,
        image: banner_6,
        title: "Together We Grow",
        highlight: "A Greener Future",
        desc: "Empowering communities through sustainable practices and climate-smart agriculture.",
    }
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const i = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(i);
    }, []);

    return (
        <section className="relative w-full h-[80vh] overflow-hidden">

            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000
          ${index === current ? "opacity-100 z-10" : "opacity-0"}`}
                >
                    {/* Background */}
                    <img
                        src={`${slide.image}?auto=format&fit=crop&w=1600&q=80`}
                        className="w-full h-full object-cover"
                        alt=""
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-20 text-white max-w-5xl mx-auto">

                        {/* Badge */}
                        <div className="mb-6">
                            <span className="bg-white/10 border border-white/40 backdrop-blur px-4 py-2 rounded-full text-sm flex items-center gap-2 w-fit">
                                Social Transformation & Development
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center leading-tight mb-4">
                            Young India is working for over 37 years to bring
                            <br />
                            <span className="text-yellow-400">
                                Social Transformation & Development
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-200 mb-6 text-center text-md">
                            "Young India works for Social Transformation & Development connecting grassroots communities, amplifying unheard voices, and building a more equitable India, one village at a time."
                        </p>

                        {/* CTA + Avatars */}
                        {/* <div className="flex items-center gap-6 flex-wrap">

                            <button className="flex items-center gap-3 bg-white/10 backdrop-blur px-6 py-3 rounded-full hover:bg-white/20 transition">
                                Become One Today
                                <span className="bg-yellow-400 text-black w-8 h-8 flex items-center justify-center rounded-full">
                                    →
                                </span>
                            </button>

                        </div> */}
                    </div>
                </div>
            ))}

            {/* Social Sidebar */}
            <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
                <a href="https://www.facebook.com/YoungIndiaIND" className="w-10 h-10 text-white bg-black/40 backdrop-blur rounded-full flex items-center justify-center hover:bg-[#0061B0] transition">
                    <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="https://x.com/YoungIndiaIN" className="w-10 h-10 text-white bg-black/40 backdrop-blur rounded-full flex items-center justify-center hover:bg-[#0061B0] transition">
                    <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://www.instagram.com/youngindiaindia/" className="w-10 h-10 text-white bg-black/40 backdrop-blur rounded-full flex items-center justify-center hover:bg-[#0061B0] transition">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/" className="w-10 h-10 text-white bg-black/40 backdrop-blur rounded-full flex items-center justify-center hover:bg-[#0061B0] transition">
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>
            </div>

            {/* Dots */}
            <div className="absolute bottom-6 bg-black/30 rounded-2xl p-3 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-10 flex gap-3 z-20">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-3 h-3 rounded-full transition 
            ${current === i ? "bg-yellow-400 w-6" : "bg-white/50"}`}
                    ></button>
                ))}
            </div>
        </section>
    );
}