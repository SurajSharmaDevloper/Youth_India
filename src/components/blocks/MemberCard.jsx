import React from "react";

const degreeMap = {
    "B.A": "Bachelor of Arts",
    "B.Sc": "Bachelor of Science",
    "B.Com": "Bachelor of Commerce",
    "M.A": "Master of Arts",
    "M.Sc": "Master of Science",
};

// 🎨 Color Generator (based on name)
const getColorFromName = (name) => {
    const colors = [
        "bg-blue-500",
        "bg-purple-500",
        "bg-pink-500",
        "bg-indigo-500",
        "bg-green-500",
        "bg-yellow-500",
        "bg-teal-500",
    ];

    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    const index = Math.abs(hash) % colors.length;
    return colors[index];
};

const MemberCard = ({
    name,
    role,
    qualification,
    gender,
    address,
    src = null,
}) => {
    const getInitials = (name) => {
        return name
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 2)
            .toUpperCase();
    };

    const fullQualification = degreeMap[qualification] || qualification;

    const bgColor = getColorFromName(name);

    return (
        <div className="bg-white border border-blue-100 min-w-[250px] member-card max-w-[380px] h-[380px] rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300 flex flex-col justify-between">

            {/* HEADER */}
            <div>
                <div className={`relative w-full h-[180px] rounded-xl overflow-hidden flex items-center justify-center  ${bgColor} `}>

                    {/* IMAGE OR INITIAL */}
                    {src ? (
                        <img
                            src={src}
                            alt={name}
                            className='w-[150px] rounded-full h-[150px] object-cover'
                            onError={(e) => {
                                e.target.style.display = "none";
                            }}
                        />
                    ) : null}

                    {/* Fallback Avatar */}
                    {!src && (
                        <div
                            className={`w-full h-full flex items-center justify-center text-white text-5xl font-bold ${bgColor}`}
                        >
                            {getInitials(name)}
                        </div>
                    )}

                    {/* Gender Icon */}
                    <span className="absolute top-2 left-2 bg-white w-6 h-6 flex items-center justify-center rounded-md shadow">
                        <i
                            className={`fa-solid ${gender === "Female"
                                ? "fa-venus text-pink-500"
                                : "fa-mars text-blue-500"
                                }`}
                        ></i>
                    </span>
                </div>

                {/* NAME + ROLE */}
                <div className="text-center mt-3 w-full min-w-0">
                    <h2 className="text-lg font-semibold text-gray-800 truncate" title={name}>
                        {name}
                    </h2>
                    <p className="text-xs text-gray-500 truncate" title={role}>
                        {role}
                    </p>
                </div>

                <hr className="my-3" />

                {/* DETAILS */}
                <div className="space-y-2 text-sm text-gray-600">

                    {/* Address */}
                    <div className="flex items-center gap-2 w-full min-w-0">
                        <span className="w-4 h-4 flex items-center justify-center">
                            <i className="fa-solid fa-location-dot text-blue-600"></i>
                        </span>
                        <p className="truncate text-xs" title={address}>
                            {address}
                        </p>
                    </div>

                    {/* Qualification */}
                    <div className="flex items-center gap-2 w-full min-w-0">
                        <span className="w-4 h-4 flex items-center justify-center">
                            <i className="fa-solid fa-graduation-cap text-blue-600"></i>
                        </span>
                        <p
                            className="truncate text-xs"
                            title={`${qualification} (${fullQualification})`}
                        >
                            {qualification} ({fullQualification})
                        </p>
                    </div>
                </div>
            </div>

            {/* SOCIAL LINKS */}
            <div>
                <hr className="my-3" />

                <div className="flex justify-center gap-4 text-blue-600">
                    <a href="#" className="hover:scale-110 transition">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#" className="hover:scale-110 transition">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" className="hover:scale-110 transition">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div >
    );
};

export default MemberCard;