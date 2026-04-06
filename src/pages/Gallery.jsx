import React, { useState, useCallback } from "react";
import Breadcrumb from "../components/blocks/Breadcrumb";
import banner from "../assets/breadcrumb-banner.jpg";
import SectionHeading from "../components/blocks/SectionHeading";
import Pagination from "../components/base/Pagination";

// ── Dropdown Options ─────────────────────────────────────────
const tabs = [
    { id: "all", label: "All Photos", icon: "🖼️" },
    { id: "our-work", label: "Our Work", icon: "🌍" },
    { id: "volunteer", label: "Volunteer", icon: "🙋" },
    { id: "youth-fest", label: "Youth Fest", icon: "🎪" },
    { id: "radio", label: "Radio Namaskar", icon: "📻" },
    { id: "museum", label: "Rural Museum", icon: "🏛️" },
    { id: "training", label: "Training", icon: "🎓" },
    { id: "community", label: "Community", icon: "👥" },
];
const photos = [
    { id: 1, tab: "our-work", title: "Photo 1", location: "Odisha", aspect: "landscape" },
    { id: 2, tab: "volunteer", title: "Photo 2", location: "India", aspect: "portrait" },
    { id: 3, tab: "community", title: "Photo 3", location: "Delhi", aspect: "square" },
    { id: 4, tab: "training", title: "Photo 4", location: "Mumbai", aspect: "landscape" },
    { id: 5, tab: "radio", title: "Photo 5", location: "Puri", aspect: "portrait" },
    { id: 6, tab: "museum", title: "Photo 6", location: "Konark", aspect: "square" },
    { id: 7, tab: "museum", title: "Photo 7", location: "Konark", aspect: "square" },
    { id: 8, tab: "museum", title: "Photo 8", location: "Konark", aspect: "square" },
    { id: 9, tab: "museum", title: "Photo 9", location: "Konark", aspect: "square" },
    { id: 10, tab: "museum", title: "Photo 10", location: "Konark", aspect: "square" },
    { id: 11, tab: "museum", title: "Photo 11", location: "Konark", aspect: "square" },
    { id: 12, tab: "museum", title: "Photo 12", location: "Konark", aspect: "square" },
    { id: 13, tab: "museum", title: "Photo 13", location: "Konark", aspect: "square" },
    { id: 14, tab: "museum", title: "Photo 14", location: "Konark", aspect: "square" },
    { id: 15, tab: "museum", title: "Photo 15", location: "Konark", aspect: "square" },

];

const dims = {
    landscape: { w: 800, h: 500 },
    portrait: { w: 400, h: 600 },
    square: { w: 500, h: 500 },
};

const dummyImages = [
    "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
    "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
    "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
    "https://images.pexels.com/photos/34950/pexels-photo.jpg",
    "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg",
    "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg",
    "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg",
    "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
    "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
    "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
    "https://images.pexels.com/photos/34950/pexels-photo.jpg",
    "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg",
    "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg",
    "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg",


];

export default function Gallery() {
    const [activeTab, setActiveTab] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [lightbox, setLightbox] = useState(null);
    const [lightboxIdx, setLightboxIdx] = useState(null);
    const [hoveredId, setHoveredId] = useState(null);

    const filtered =
        activeTab === "all"
            ? photos
            : photos.filter((p) => p.tab === activeTab);

    const ITEMS_PER_PAGE = 8;
    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const paginatedPhotos = filtered.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const openLightbox = useCallback((photo, idx) => {
        setLightbox(photo);
        setLightboxIdx(idx);
    }, []);

    const navLightbox = useCallback(
        (dir) => {
            const newIdx =
                (lightboxIdx + dir + filtered.length) % filtered.length;
            setLightbox(filtered[newIdx]);
            setLightboxIdx(newIdx);
        },
        [lightboxIdx, filtered]
    );

    return (
        <section className="w-full min-h-screen">
            <Breadcrumb
                title="GALLERY"
                subtitle="Visual stories from Young India's journey."
                breadcrumbs={["Home", "Gallery"]}
                bgImage={banner}
            />

            <div className="max-w-7xl mx-auto py-12 px-4">
                <SectionHeading
                    label="Our Moments"
                    title="Photo "
                    highlight="Gallery"
                    description="Browse through moments captured across events."
                />
                <hr className="mt-3 mb-8" />

                {/* 🔽 DROPDOWN FILTER */}
                <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
                    <div className="relative group">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border bg-white shadow-sm text-sm font-semibold">
                            {tabs.find((t) => t.id === activeTab)?.icon}
                            {tabs.find((t) => t.id === activeTab)?.label}
                            <span className="text-xs">▼</span>
                        </button>

                        <div className="absolute left-0 mt-2 w-56 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => {
                                        setActiveTab(tab.id);
                                        setCurrentPage(1);
                                    }}
                                    className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-100 ${activeTab === tab.id
                                        ? "bg-blue-50 text-blue-700 font-semibold"
                                        : ""
                                        }`}
                                >
                                    <span>{tab.icon}</span>
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <p className="text-xs text-slate-500">
                        Showing{" "}
                        <span className="font-bold text-primary">
                            {filtered.length}
                        </span>{" "}
                        photos
                    </p>
                </div>

                {/* 🧱 CUSTOM GRID LAYOUT */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {paginatedPhotos.map((photo, idx) => {
                        const globalIdx = filtered.findIndex(p => p.id === photo.id);
                        const isHovered = hoveredId === photo.id;

                        // Layout logic: Uneven widths (asymmetrical bento box style) repeating every 16 items
                        const spanPattern = [
                            "md:col-span-7", "md:col-span-5", // Row 1 (sum = 12)
                            "md:col-span-4", "md:col-span-5", "md:col-span-3", // Row 2 (sum = 12)
                            "md:col-span-3", "md:col-span-5", "md:col-span-4", // Row 3 (sum = 12)
                            "md:col-span-4", "md:col-span-3", "md:col-span-2", "md:col-span-3", // Row 4 (sum = 12)
                            "md:col-span-3", "md:col-span-2", "md:col-span-3", "md:col-span-4"  // Row 5 (sum = 12)
                        ];

                        const colSpan = `col-span-1 ${spanPattern[idx % 16]}`;

                        return (
                            <div
                                key={photo.id}
                                className={`relative rounded-xl overflow-hidden cursor-zoom-in group ${colSpan}`}
                                onMouseEnter={() => setHoveredId(photo.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                onClick={() => openLightbox(photo, globalIdx)}
                            >
                                <img
                                    src={dummyImages[globalIdx % dummyImages.length]}
                                    alt={photo.title}
                                    className="w-full h-64 object-cover"
                                />

                                {/* OVERLAY */}
                                <div
                                    className={`absolute   inset-0 bg-[#0f2044] transition-opacity duration-300 ${isHovered ? "opacity-60" : "opacity-0"
                                        }`}
                                />

                                {/* ICON */}
                                <div
                                    className={`absolute top-3 right-3 text-white text-xs py-1 px-2 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center transition ${isHovered
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 -translate-y-2"
                                        }`}
                                >
                                    {photo.tab}
                                </div>

                                {/* INFO */}
                                <div
                                    className={`absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#0f2044]/90 to-transparent transition ${isHovered
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-3"
                                        }`}
                                >
                                    <p className="text-white text-xs font-bold mb-1">
                                        {photo.title}
                                    </p>
                                    <p className="text-blue-200 text-[10px]">
                                        {photo.location}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>

            {/* 🔍 LIGHTBOX */}
            {lightbox && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
                    {/* Close Button */}
                    <button
                        onClick={() => setLightbox(null)}
                        className="absolute top-6 right-6 text-white hover:text-gray-300 text-3xl font-bold z-50 transition-colors"
                    >
                        ✕
                    </button>

                    {/* Previous Button */}
                    <button
                        onClick={() => navLightbox(-1)}
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 p-4 rounded-full text-4xl z-50 transition-all font-light flex items-center justify-center w-16 h-16"
                    >
                        ‹
                    </button>

                    {/* Main Image Area */}
                    <div className="relative max-w-6xl w-full mx-4 px-12 md:px-24 flex flex-col items-center">
                        <img
                            src={dummyImages[lightboxIdx % dummyImages.length]}
                            alt={lightbox.title || "Gallery image"}
                            className="max-w-full max-h-[80vh] object-contain rounded shadow-2xl"
                        />
                        <div className="text-center mt-6 text-white">
                            <h3 className="text-xl font-bold tracking-wide">{lightbox.title}</h3>
                            <p className="text-gray-400 text-sm mt-1">{lightbox.location} • {lightbox.tab}</p>
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={() => navLightbox(1)}
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 p-4 rounded-full text-4xl z-50 transition-all font-light flex items-center justify-center w-16 h-16"
                    >
                        ›
                    </button>
                </div>
            )}

        </section>
    );
}