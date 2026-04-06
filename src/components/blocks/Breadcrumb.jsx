import React from "react";


const Breadcrumb = ({
    title = "ABOUT US",
    subtitle = "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore",
    breadcrumbs = ["Home", "About"],
    bgImage = "/images/about-bg.jpg",
}) => {
    // Split title to highlight last word (US)
    const words = title.split(" ");
    const lastWord = words.pop();

    return (
        <div
            className="relative w-full h-[250px] md:h-[300px] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-3xl">

                {/* Title */}
                <h1 className="text-white text-3xl md:text-5xl font-extrabold tracking-wide">
                    {words.join(" ")}{" "}
                    <span
                        className="text-primary drop-shadow-sm"
                        style={{
                            WebkitTextStroke: "1px white",
                        }}
                    >
                        {lastWord}
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-gray-200 text-sm md:text-base mt-4 leading-relaxed">
                    {subtitle}
                </p>

                {/* Breadcrumb */}
                <div className="flex items-center justify-center gap-2 mt-6 text-sm md:text-base">
                    {breadcrumbs.map((item, index) => (
                        <React.Fragment key={index}>
                            <span
                                className={`${index === breadcrumbs.length - 1
                                    ? "text-primary drop-shadow-sm"
                                    : "text-white"
                                    } font-bold`}
                                style={{
                                    WebkitTextStroke:
                                        index === breadcrumbs.length - 1 ? "0.1px white" : "0px transparent",
                                }}
                            >
                                {item.toUpperCase()}
                            </span>

                            {index !== breadcrumbs.length - 1 && (
                                <span className="text-white opacity-70">›</span>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default Breadcrumb;