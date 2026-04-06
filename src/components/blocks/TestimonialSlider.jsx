import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const testimonials = [
    {
        company: "LEXMARK",
        text: "It is a long established fact that a reader will be distracted by the readable content of a page.",
        user: "Stark Joseph",
        role: "San Francisco",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        company: "BERENDSEN",
        text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
        user: "Stark Joseph",
        role: "San Francisco",
        avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
        company: "GOOGLE",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        user: "Aman Verma",
        role: "Delhi, India",
        avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    },
    {
        company: "MICROSOFT",
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        user: "Riya Sharma",
        role: "Mumbai",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
        company: "AMAZON",
        text: "There are many variations of passages of Lorem Ipsum available.",
        user: "Karan Mehta",
        role: "Pune",
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    },
];

export default function TestimonialSlider() {
    const sliderRef = useRef();
    const [index, setIndex] = useState(testimonials.length);
    const [isHovered, setIsHovered] = useState(false);

    const extended = [...testimonials, ...testimonials, ...testimonials];

    const getWidth = () => {
        if (window.innerWidth >= 1280) return 25;
        if (window.innerWidth >= 1024) return 25;
        if (window.innerWidth >= 768) return 33.33;
        if (window.innerWidth >= 640) return 50;
        return 100;
    };

    const [width, setWidth] = useState(getWidth());

    useEffect(() => {
        const resize = () => setWidth(getWidth());
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    // AUTO SLIDE
    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, 2500); // smooth timing

        return () => clearInterval(interval);
    }, [isHovered]);

    // UPDATE POSITION
    useEffect(() => {
        const slider = sliderRef.current;

        slider.style.transition = "transform 0.6s ease-in-out";
        slider.style.transform = `translateX(-${index * width}%)`;
    }, [index, width]);

    // INFINITE LOOP FIX
    useEffect(() => {
        const slider = sliderRef.current;

        const handleEnd = () => {
            if (index >= testimonials.length * 2) {
                slider.style.transition = "none";
                setIndex(testimonials.length);
            }
            if (index <= 0) {
                slider.style.transition = "none";
                setIndex(testimonials.length);
            }
        };

        slider.addEventListener("transitionend", handleEnd);
        return () => slider.removeEventListener("transitionend", handleEnd);
    }, [index]);

    const next = () => setIndex((p) => p + 1);
    const prev = () => setIndex((p) => p - 1);

    return (
        <div className="w-full px-6 md:px-12 lg:px-20 bg-blue-50/60">
            <div className="max-w-7xl mx-auto py-20 ">

                {/* HEADER */}
                <div className="flex  max-[550px]:flex-col max-[550px]:items-start max-[550px]:gap-5  justify-between items-center mb-5">
                    <SectionHeading
                        label="Impact Stories"
                        title="Stories That Inspire"
                        highlight="That Inspire"
                        description="Real lives transformed by collective action, community resolve, and the power of Indian youth."
                    />


                    <div className="flex gap-3">
                        <button
                            onClick={prev}
                            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                        >
                            <ChevronLeft size={18} />
                        </button>

                        <button
                            onClick={next}
                            className="bg-primary text-white p-2 rounded-full hover:bg-[#004182]"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>

                </div>
                <hr className="mb-10 hr-line" />

                {/* SLIDER */}
                <div
                    className="overflow-hidden bg-blue-300 rounded-xl"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div ref={sliderRef} className="flex">

                        {extended.map((item, i) => (
                            <div
                                key={i}
                                className="p-4"
                                style={{ flex: `0 0 ${width}%` }}
                            >
                                <div className="bg-gray-100 p-6 rounded-xl h-full flex flex-col justify-between">

                                    {/* COMPANY */}
                                    <div className="font-bold text-sm mb-3">
                                        {item.company}
                                    </div>

                                    {/* TEXT */}
                                    <p className="text-gray-600 text-sm mb-6">
                                        {item.text}
                                    </p>

                                    {/* USER */}
                                    <div className="flex items-center justify-between">

                                        <div className="flex items-center gap-3">
                                            <img
                                                src={item.avatar}
                                                className="w-10 h-10 rounded-full"
                                            />
                                            <div>
                                                <p className="text-sm font-medium">
                                                    {item.user}
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    {item.role}
                                                </p>
                                            </div>
                                        </div>

                                        {/* RATING */}
                                        <div className="text-yellow-400 text-sm">
                                            ★★★★★
                                        </div>

                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div >
    );
}