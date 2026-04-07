import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router";
import {
    ChevronLeft,
    ChevronRight,
    ArrowRight,
    CalendarDays,
    Share2,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import card_1 from '../../assets/card-1.jpg'
import card_2 from '../../assets/card-2.jpg'
import card_3 from '../../assets/card-3.jpg'
import card_4 from '../../assets/card-4.jpg'

const data = [
    {
        tag: "Innovation",
        title: "Young India Social Innovation Summit 2016 concludes",
        desc: "While the world is abuzz with entrepreneurship and its role for societal development, we cannot deny the role…",
        img: card_1,
        date: "20",
        month: "Sep",
        year: "2016",
        shares: "236",
    },
    {
        tag: "Innovation",
        title: "Young India Social Innovation Summit 2016 in Sept",
        desc: "Young India Social Innovation Summit 2016 is taking place at Bhubaneswar on 29 & 30 Sept. It will…",
        img: card_2,
        date: "15",
        month: "Aug",
        year: "2016",
        shares: "232",
    },
    {
        tag: "Media",
        title: "Odisha Media Award ( OMA ) 2015 concluded",
        desc: "Odisha Media Award (OMA) is an attempt by Young India with a group of journalists and development activists…",
        img: card_3,
        date: "05",
        month: "Apr",
        year: "2016",
        shares: "432",
    },
    {
        tag: "Community",
        title: "CHALA GAON KU JiBA (Let us go to village)",
        desc: "‘Villages are the spirit of India.’ Through the cities are the central place of business, education, health, technology…",
        img: card_4,
        date: "20",
        month: "Mar",
        year: "2016",
        shares: "456",
    },
];

export default function PerfectSlider() {
    const sliderRef = useRef();
    const [index, setIndex] = useState(data.length);
    const [hover, setHover] = useState(false);
    const [width, setWidth] = useState(100);

    const extended = [...data, ...data, ...data];

    // ✅ RESPONSIVE WIDTH FIX (3 / 2 / 1)
    const getWidth = () => {
        if (window.innerWidth >= 1024) return 100 / 3; // 3 cards
        if (window.innerWidth >= 768) return 50;       // 2 cards
        return 100;                                    // 1 card
    };

    useEffect(() => {
        const resize = () => setWidth(getWidth());
        resize(); // run once
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);



    // MOVE
    useEffect(() => {
        const slider = sliderRef.current;
        slider.style.transition = "transform 0.6s ease";
        slider.style.transform = `translateX(-${index * width}%)`;
    }, [index, width]);

    // TRUE INFINITE LOOP
    useEffect(() => {
        const slider = sliderRef.current;

        const handleEnd = () => {
            if (index >= data.length * 2 || index <= 0) {
                slider.style.transition = "none";
                setIndex(data.length);
            }
        };

        slider.addEventListener("transitionend", handleEnd);
        return () => slider.removeEventListener("transitionend", handleEnd);
    }, [index]);


    const next = () => setIndex((p) => p + 1);
    const prev = () => setIndex((p) => p - 1);

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="w-full px-6 md:px-12 lg:px-20 bg-white">
            <div className=" max-w-7xl mx-auto py-20 relative">
                <div className="flex w-full max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-2 justify-between items-end ">
                    <SectionHeading
                        label="Latest Updates"
                        title="News "
                        highlight="& Stories"
                        description="Stay informed with the latest from Young India's work, events, and community impact across India."
                    />
                    <Link onClick={handleClick} to="/news-and-stories" className="flex items-center gap-1 border border-blue-600 text-blue-600 px-3 py-1.5 rounded-xl text-sm hover:bg-blue-600 hover:text-white transition">View All</Link>
                </div>
                <hr className="mt-5 hr-line " />


                {/* TOP RIGHT BUTTONS */}


                {/* SLIDER */}
                <div
                    className="overflow-hidden mt-8"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <div ref={sliderRef} className="flex">

                        {extended.map((item, i) => (
                            <div
                                key={i}
                                className="p-4"
                                style={{ flex: `0 0 ${width}%` }}
                            >
                                <div className="bg-stone-100 border border-blue-200 rounded-2xl shadow-md h-[480px] flex flex-col overflow-hidden hover:shadow-lg transition">

                                    {/* IMAGE */}
                                    <div className="relative h-[200px] w-full flex-shrink-0">
                                        <img
                                            src={item.img}
                                            className="w-full h-full object-cover object-center"
                                            alt={item.title}
                                        />

                                        <div className="absolute top-4 left-4 bg-black/40 px-3 py-1 text-white border rounded-full text-xs">
                                            {item.tag}
                                        </div>
                                    </div>

                                    {/* CONTENT */}
                                    <div className="p-5 flex flex-col flex-grow">

                                        {/* DATE */}
                                        <div className="mb-3">
                                            <div className="flex items-center gap-2 border border-gray-300 p-1.5 rounded-lg w-fit px-3 text-xs text-gray-600">
                                                <CalendarDays size={14} />
                                                {item.date} | {item.month} | {item.year}
                                            </div>
                                        </div>

                                        {/* TITLE (2 LINES FIXED) */}
                                        <h3 className="text-lg font-semibold text-primary mb-2 line-clamp-2 min-h-[44px]">
                                            {item.title}
                                        </h3>

                                        {/* DESC (3 LINES FIXED) */}
                                        <p className="text-sm text-gray-500 mb-4 line-clamp-3 min-h-[66px]">
                                            {item.desc}
                                        </p>

                                        {/* FOOTER */}
                                        <div className="mt-auto flex justify-between items-center">
                                            <button className="flex items-center gap-2 bg-primary text-white px-3 py-1.5 rounded-xl text-sm hover:bg-[#004182] hover:text-white transition">
                                                Read More <ArrowRight size={14} />
                                            </button>

                                            <div className="flex items-center gap-1 text-sm text-gray-600">
                                                <Share2 size={14} />
                                                {item.shares}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>

                {/* PAGINATION */}
                <div className="flex justify-center items-center  mt-6 gap-5">
                    <button
                        onClick={prev}
                        className="bg-blue-100 text-primary p-2 rounded-full hover:bg-blue-200"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <div className="flex justify-center items-center gap-2">
                        {data.map((_, i) => (
                            <div
                                key={i}
                                className={`h-2 w-2 rounded-full ${index % data.length === i ? "bg-primary" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>


                    <button
                        onClick={next}
                        className="bg-primary text-white p-2 rounded-full hover:bg-[#004182]"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>

            </div>
        </div>
    );
}