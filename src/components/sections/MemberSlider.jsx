import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { ChevronLeft, ChevronRight } from "lucide-react";
import MemberCard from "../blocks/MemberCard";
import SectionHeading from "../blocks/SectionHeading";

const MemberSlider = ({ members }) => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => {
        swiperRef.current?.slideNext();
    };

    const prev = () => {
        swiperRef.current?.slidePrev();
    };

    return (
        <div className="py-16 px-6 max-w-7xl mx-auto ">
            <SectionHeading
                title="Executive "
                highlight="Committee"
                description=""
                label="Our Committee Members"
            />
            <hr />

            {/* SLIDER */}
            <Swiper
                className="mt-8"
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={4}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.realIndex);
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1400: { slidesPerView: 4 },

                }}
            >
                {members.map((member, index) => (
                    <SwiperSlide key={index}>
                        <MemberCard {...member} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* 🔥 CUSTOM PAGINATION (YOUR STYLE) */}
            <div className="flex justify-center items-center mt-8 gap-5">

                {/* PREV */}
                <button
                    onClick={prev}
                    className="bg-blue-100 text-primary p-2 rounded-full hover:bg-blue-200 transition"
                >
                    <ChevronLeft size={18} />
                </button>

                {/* DOTS */}
                <div className="flex justify-center items-center gap-2">
                    {members.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => swiperRef.current?.slideToLoop(i)}
                            className={`h-2 w-2 rounded-full cursor-pointer transition ${activeIndex === i ? "bg-primary scale-125" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>

                {/* NEXT */}
                <button
                    onClick={next}
                    className="bg-primary text-white p-2 rounded-full hover:bg-[#004182] transition"
                >
                    <ChevronRight size={18} />
                </button>

            </div>
        </div>
    );
};

export default MemberSlider;