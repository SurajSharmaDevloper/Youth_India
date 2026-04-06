import React, { useState } from 'react';
import { Mail, Sparkles, ArrowRight, Check } from 'lucide-react';
import Button from '../base/Button';

export default function NewsletterCTA() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setTimeout(() => {
                setEmail('');
                setSubmitted(false);
            }, 2500);
        }
    };

    return (
        <section className="relative  overflow-hidden py-16 px-4 sm:px-6 bg-gray-100  md:px-12 lg:px-20 " >
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br ">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Animated grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)',
                backgroundSize: '50px 50px'
            }}></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Content & Benefits */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 mb-2">
                                <Sparkles className="text-orange-400 w-5 h-5" />
                                <span className="text-orange-400 text-sm font-bold tracking-widest uppercase">Stay Connected</span>
                            </div>
                            <h2 className="text-5xl lg:text-5xl font-extrabold text-neutral-700 leading-tight">
                                Never Miss <span className="text-secondary">What Matters</span>
                            </h2>
                            <p className="text-lg text-neutral-700 leading-relaxed">
                                Join thousands of young changemakers receiving exclusive updates, success stories, and opportunities to shape India's future.
                            </p>
                        </div>

                        {/* Social proof */}
                        <div className="flex items-center gap-6 ">
                            <div className="flex -space-x-3">
                                {[0, 1, 2].map((i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full bg-gradient-to-br bg-primary  border-2 border-neutral-200 flex items-center justify-center text-white font-bold text-xs"
                                    >
                                        {String.fromCharCode(65 + i)}
                                    </div>
                                ))}
                            </div>
                            <p className=" flex flex-col items-start  ">
                                <span className="font-bold text-3xl m-0 -mb-2 text-neutral-700 ">50K+</span><span className=' m-0 text-md text-neutral-500 font-medium'> changemakers subscribe</span>
                            </p>
                        </div>
                    </div>

                    {/* Right: Form Card with Visual */}
                    <div className="relative">
                        {/* Floating card */}
                        <div className="relative">

                            <div className="relative bg-gradient-to-br from-white to-blue-100 rounded-3xl p-8 backdrop-blur-xl border border-white/10 shadow-2xl">

                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl -ml-8 -mb-8"></div>

                                <div className="relative z-10 ">
                                    {/* Header */}
                                    <div>
                                        <h3 className="text-2xl font-black text-secondary">
                                            Your Journey Starts Here
                                        </h3>
                                        <p className="text-sm mb-3 text-neutral-600">
                                            Get curated content delivered weekly
                                        </p>
                                    </div>
                                    <hr />

                                    {/* Form */}
                                    <form onSubmit={handleSubmit} className="space-y-4 mt-5">
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-4  w-5 h-5 text-neutral-400/80 transition-all " />
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="your.email@example.com"
                                                required
                                                className="w-full pl-12 pr-4 py-3 bg-white/20 border border-neutral-300 rounded-xl text-neutral-700 placeholder-slate-400 focus:outline-none focus:ring-2   transition-all duration-300 "
                                            />
                                        </div>

                                        {/* Checkbox */}
                                        <label className="flex items-center gap-3 cursor-pointer group/check">
                                            <input
                                                type="checkbox"
                                                defaultChecked
                                                className="w-5 h-5 rounded-lg bg-white/10 border border-white/20 cursor-pointer accen-blue-900 transition-all group-hover/check:bg-white/15"
                                            />
                                            <span className="text-xs text-neutral-700">
                                                I agree to receive amazing content weekly
                                            </span>
                                        </label>

                                        {/* Submit Button */}
                                        <Button
                                            type="submit"
                                            disabled={submitted}
                                            className="w-full flex justify-center items-center transition-colors "

                                        >
                                            <div className="flex items-center justify-center gap-2">
                                                {submitted ? (
                                                    <>
                                                        <Check className="w-5 h-5 animate-bounce" />
                                                        <span>Welcome aboard!</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span>Subscribe Now</span>
                                                        <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                                                    </>
                                                )}
                                            </div>
                                        </Button>
                                    </form>

                                    {/* Footer text */}
                                    <p className="text-xs mt-3 text-slate-400 text-center">
                                        No spam. Unsubscribe anytime.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Floating elements for visual interest */}
                        <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-pink-400 to-emerald-400 rounded-2xl opacity-10 blur-xl animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                        <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-tr from-cyan-400 to-pink-400 rounded-2xl opacity-10 blur-xl animate-bounce"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}