import React from 'react'
import HeroSlider from '../components/sections/HeroSlider'
import StatsDark from '../components/blocks/StatsDark'
import FocusCards from '../components/blocks/FocusCards'
import TestimonialSlider from '../components/blocks/TestimonialSlider'
import CardSlider from '../components/blocks/CardSlider'
import PartnerSlider from '../components/blocks/PartnerSlider'

const Home2 = () => {
    return (
        <main className='w-full font-sans bg-gray-50 overflow-hidden'>
            {/* Hero Section */}
            <section className='relative w-full shadow-2xl'>
                <HeroSlider />
                {/* Subtle gradient overlay on bottom of Hero for smooth transition to dark Stats section */}
                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#0f172a] to-transparent z-10 pointer-events-none"></div>
            </section>

            {/* Stats section seamlessly blending with the dark hero bottom */}
            <div className="relative z-20">
                <StatsDark />
            </div>

            {/* Focus Cards Section - Curved Top & Vibrant accents */}
            <section className='relative w-full py-20 bg-white'>
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0061b0] opacity-5 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-10 -left-20 w-72 h-72 bg-[#f97316] opacity-5 rounded-full blur-[80px]"></div>
                </div>

                <div className='container mx-auto px-5 relative z-10'>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-[#f97316] font-bold tracking-widest uppercase text-sm mb-3 block">What We Do</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#004182] mb-4">Areas of Focus</h2>
                        <div className="w-16 h-1.5 bg-[#0061b0] mx-auto rounded-full"></div>
                        <p className="mt-4 text-gray-500 text-lg">Empowering youth and building strong foundations for a brighter tomorrow.</p>
                    </div>
                    
                    <div className="transform transition-all duration-500 hover:-translate-y-1">
                        <FocusCards />
                    </div>
                </div>
            </section>

            {/* Initiatives Section - Card Slider with Soft Gray Background */}
            <section className='w-full py-24 bg-[#f8fafc] relative'>
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className='container mx-auto px-5 relative z-10'>
                     <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div className="max-w-2xl">
                            <span className="text-[#0061b0] font-bold tracking-widest uppercase text-sm mb-3 block">Our Programs</span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a202c]">Key Initiatives</h2>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <button className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0061b0] font-semibold rounded-full border border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all">
                                View All 
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </button>
                        </div>
                    </div>
                    
                    <div className="rounded-[2.5rem] p-6 md:p-10 bg-white shadow-xl shadow-[#004182]/5 border border-gray-100">
                        <CardSlider />
                    </div>
                </div>
            </section>

            {/* Testimonials - Primary Color Dark UI */}
            <section className='relative w-full py-24 bg-[#0061b0] text-white overflow-hidden'>
                {/* Background Textures/Shapes */}
                <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>
                
                <div className='container mx-auto px-5 relative z-10'>
                    <div className="text-center mb-16">
                        <span className="text-[#f97316] font-bold tracking-widest uppercase text-sm mb-3 block">Testimonials</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Impact Stories</h2>
                        <div className="w-16 h-1.5 bg-[#f97316] mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="glass-panel rounded-3xl p-8 max-w-6xl mx-auto backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl">
                        <TestimonialSlider />
                    </div>
                </div>
            </section>

            {/* Partners - Clean & Minimal */}
            <section className='w-full py-16 bg-white border-t border-gray-100'>
                <div className='container mx-auto px-5'>
                    <div className="text-center mb-10">
                        <p className="text-sm font-semibold text-gray-400 tracking-widest uppercase">Trusted By Incredible Partners</p>
                    </div>
                    <div className='h-full w-full opacity-70 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0' >
                        <PartnerSlider />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home2
