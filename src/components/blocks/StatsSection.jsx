import React, { useEffect, useState } from "react";

const stats = [
    { label: "States", value: 19, suffix: "+" },
    { label: "Districts", value: 207 },
    { label: "Villages", value: 32000, suffix: "+" },
    { label: "Lives Touched", value: 41000000, suffix: "+" },
];

function Counter({ end }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [end]);

    return <span>{count.toLocaleString()}</span>;
}

export default function StatsSection() {
    return (
        <section className="py-16 bg-gradient-to-r from-[#0061B0] to-[#004a87]">

            <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-center text-white
            hover:scale-105 transition duration-300 shadow-lg"
                    >
                        {/* Icon */}
                        <div className="mb-4 text-3xl">
                            {index === 0 && "🗺️"}
                            {index === 1 && "🏢"}
                            {index === 2 && "🌾"}
                            {index === 3 && "💛"}
                        </div>

                        {/* Number */}
                        <h2 className="text-3xl md:text-4xl font-bold">
                            <Counter end={item.value} />
                            {item.suffix}
                        </h2>

                        {/* Label */}
                        <p className="text-sm tracking-wide text-gray-200 mt-2 uppercase">
                            {item.label}
                        </p>
                    </div>
                ))}

            </div>
        </section>
    );
}