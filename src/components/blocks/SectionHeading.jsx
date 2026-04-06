import React from "react";

export default function SectionHeading({
    label = "OUR WORK",
    title = "Our Focus Areas",
    highlight = "Focus Areas",
    description = "Ten critical domains driving inclusive development and social justice across India's communities.",
}) {
    // Split title to apply highlight
    const parts = title.split(highlight);

    return (
        <div className="max-w-7xl">

            {/* Top Label */}
            <div className="flex items-center gap-3 mb-2">
                <span className="w-10 h-[2px] bg-accent"></span>
                <p className="text-sm tracking-[0.2em] text-accent font-semibold uppercase">
                    {label}
                </p>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight">
                {parts[0]}
                <span className="text-[#0061B0]">{highlight}</span>
                {parts[1]}
            </h2>

            {/* Description */}
            <p className="mt-2 text-gray-600 text-sm leading-relaxed ">
                {description}
            </p>

        </div>
    );
}