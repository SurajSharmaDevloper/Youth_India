import React, { useState } from "react";
import Breadcrumb from "../components/blocks/Breadcrumb";
import banner from "../assets/breadcrumb-banner.jpg";
import StatsDark from "../components/blocks/StatsDark";
import SectionHeading from "../components/blocks/SectionHeading";
import Button from "../components/base/Button";
import Hospital from "../assets/Hospital.png";
import Edu from "../assets/Educations.png";
import Skills from "../assets/Skill_dev.png";
import Fund from "../assets/Donate.png";

const presetAmounts = [500, 1000, 2500, 5000, 10000];

const causes = [
    {
        icon: Edu,
        title: "Education Support",
        desc: "Fund scholarships and school supplies for underprivileged youth.",
        raised: 285000,
        goal: 500000,
    },
    {
        icon: Hospital,
        title: "Health Camps",
        desc: "Provide free medical checkups and medicines in rural areas.",
        raised: 178000,
        goal: 300000,
    },
    {
        icon: Skills,
        title: "Skill Development",
        desc: "Vocational training programs to boost youth employment.",
        raised: 92000,
        goal: 200000,
    },
];


export default function Donate() {
    const [amount, setAmount] = useState(1000);
    const [customAmount, setCustomAmount] = useState("");
    const [cause, setCause] = useState("general");
    const [frequency, setFrequency] = useState("one-time");
    const [step, setStep] = useState(1);
    const [form, setForm] = useState({ name: "", email: "", phone: "", pan: "" });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const finalAmount = customAmount ? parseInt(customAmount) || 0 : amount;

    const handleAmountSelect = (val) => {
        setAmount(val);
        setCustomAmount("");
    };

    const validateStep2 = () => {
        const e = {};
        if (!form.name.trim()) e.name = "Required";
        if (!form.email.trim()) e.email = "Required";
        else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
        if (!form.phone.trim()) e.phone = "Required";
        return e;
    };

    const handleNext = () => {
        if (step === 1 && finalAmount < 1) return;
        if (step === 2) {
            const errs = validateStep2();
            if (Object.keys(errs).length) return setErrors(errs);
        }
        setStep((s) => s + 1);
    };

    const handleSubmit = async () => {
        setLoading(true);
        await new Promise((r) => setTimeout(r, 2000));
        setLoading(false);
        setSuccess(true);
    };

    const inputClass = (field) =>
        `w-full px-4 py-3 rounded-lg border text-sm text-slate-700 placeholder-slate-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-200 focus:border-primary ${errors[field]
            ? "border-red-300 bg-red-50"
            : "border-blue-100 bg-blue-50/40 hover:border-blue-200"
        }`;

    return (
        <section className="w-full min-h-screen bg-blue-50/60">
            <Breadcrumb
                title="DONATE"
                subtitle="Your generosity fuels our mission. Every rupee goes directly to empowering India's youth."
                breadcrumbs={["Home", "Donate"]}
                bgImage={banner}
            />

            <StatsDark />

            <div className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        label="Support Our Work"
                        title="Make a "
                        highlight="Difference"
                        description="Choose a cause and donate securely. 80G tax exemption available for all donations."
                    />
                    <hr className="mt-4 border-blue-100" />

                    <div className="grid grid-cols-1 mt-10 lg:grid-cols-3 gap-10">

                        {/* ── LEFT: Causes ── */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-extrabold text-primary uppercase tracking-wide mb-1">
                                Where Your <span className="text-secondary">Money Goes</span>
                            </h3>
                            <hr className="border-blue-100" />

                            {/* General fund card */}
                            <CauseCard
                                active={cause === "general"}
                                onClick={() => setCause("general")}
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={Fund}
                                        alt="General Fund"
                                        className="w-14 h-14 object-contain rounded-xl bg-white p-1 border border-blue-100"
                                    />
                                    <div>
                                        <h4 className={`font-bold text-sm ${cause === "general" ? "text-white" : "text-secondary"}`}>
                                            General Fund
                                        </h4>
                                        <p className={`text-xs mt-0.5 ${cause === "general" ? "text-blue-200" : "text-slate-400"}`}>
                                            Support all our programs equally.
                                        </p>
                                    </div>
                                </div>
                            </CauseCard>

                            {causes.map((c, i) => {
                                const pct = Math.round((c.raised / c.goal) * 100);
                                const active = cause === c.title;
                                return (
                                    <CauseCard key={i} active={active} onClick={() => setCause(c.title)}>
                                        <div className="flex items-start gap-3 mb-3">
                                            <img
                                                src={c.icon}
                                                alt={c.title}
                                                className="w-14 h-14 object-contain rounded-xl bg-blue-50 p-1 border border-blue-100 flex-shrink-0"
                                            />
                                            <div>
                                                <h4 className={`font-bold text-sm ${active ? "text-white" : "text-secondary"}`}>
                                                    {c.title}
                                                </h4>
                                                <p className={`text-xs mt-0.5 leading-relaxed ${active ? "text-blue-200" : "text-slate-400"}`}>
                                                    {c.desc}
                                                </p>
                                            </div>
                                        </div>
                                        {/* Progress bar */}
                                        <div className={`w-full h-1.5 rounded-full overflow-hidden ${active ? "bg-white/20" : "bg-blue-100"}`}>
                                            <div
                                                className={`h-full rounded-full transition-all duration-700 ${active ? "bg-orange-400" : "bg-secondary"}`}
                                                style={{ width: `${pct}%` }}
                                            />
                                        </div>
                                        <div className="flex justify-between mt-1.5">
                                            <span className={`text-[11px] font-semibold ${active ? "text-orange-300" : "text-secondary"}`}>
                                                ₹{(c.raised / 1000).toFixed(0)}K raised
                                            </span>
                                            <span className={`text-[11px] font-medium ${active ? "text-blue-200" : "text-slate-400"}`}>
                                                {pct}%
                                            </span>
                                        </div>
                                    </CauseCard>
                                );
                            })}


                        </div>

                        {/* ── RIGHT: Donation Form ── */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden">

                                {/* Steps header */}
                                <div className="flex border-b border-blue-100 bg-blue-50/40">
                                    {["Amount", "Your Info", "Payment"].map((label, i) => (
                                        <div
                                            key={i}
                                            className={`flex-1 py-4 text-center text-xs font-bold transition-all ${step === i + 1
                                                ? "text-secondary  bg-white"
                                                : step > i + 1
                                                    ? "text-green-600"
                                                    : "text-slate-400"
                                                }`}
                                        >
                                            <span
                                                className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-xs mr-1.5 font-black ${step === i + 1
                                                    ? "bg-secondary text-white"
                                                    : step > i + 1
                                                        ? "bg-green-100 text-green-600"
                                                        : "bg-blue-50 text-slate-400"
                                                    }`}
                                            >
                                                {step > i + 1 ? "✓" : i + 1}
                                            </span>
                                            {label}
                                        </div>
                                    ))}
                                </div>

                                <div className="p-8">
                                    {/* ── Success state ── */}
                                    {success ? (
                                        <div className="text-center py-12">
                                            <div className="w-20 h-20 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-5">
                                                <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-2xl font-black text-primary mb-2">Thank You!</h3>
                                            <p className="text-slate-500 text-sm mb-2">
                                                Your donation of{" "}
                                                <span className="font-black text-primary">₹{finalAmount.toLocaleString()}</span>{" "}
                                                has been received.
                                            </p>
                                            <p className="text-xs text-slate-400 mb-6">
                                                A receipt will be sent to <strong>{form.email}</strong>
                                            </p>
                                            <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-sm text-primary font-medium mb-6">
                                                🧾 Your donation qualifies for 80G tax exemption under the Income Tax Act.
                                            </div>
                                            <Button onClick={() => { setSuccess(false); setStep(1); setForm({ name: "", email: "", phone: "", pan: "" }); }}>
                                                Donate Again
                                            </Button>
                                        </div>
                                    ) : (
                                        <>
                                            {/* ── Step 1: Amount ── */}
                                            {step === 1 && (
                                                <div>
                                                    <h3 className="text-xl font-black text-neutral-700 mb-0.5">Choose Amount</h3>
                                                    <p className="text-xs text-slate-400 mb-6">Select or enter a custom donation amount in ₹</p>

                                                    {/* Frequency toggle */}
                                                    <div className="flex gap-2 mb-6 p-1 bg-blue-50 rounded-xl border border-blue-100">
                                                        {["one-time", "monthly"].map((f) => (
                                                            <button
                                                                key={f}
                                                                onClick={() => setFrequency(f)}
                                                                className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${frequency === f
                                                                    ? "bg-blue-900/80 text-white shadow-md"
                                                                    : "text-slate-500 hover:text-primary"
                                                                    }`}
                                                            >
                                                                {f === "one-time" ? "One-time" : "Monthly"}
                                                            </button>
                                                        ))}
                                                    </div>

                                                    {/* Preset amounts */}
                                                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-5">
                                                        {presetAmounts.map((val) => (
                                                            <button
                                                                key={val}
                                                                onClick={() => handleAmountSelect(val)}
                                                                className={`py-3 rounded-xl text-sm font-black transition-all duration-200 border ${amount === val && !customAmount
                                                                    ? "bg-blue-900/80 text-white border-primary shadow-lg shadow-primary/20"
                                                                    : "bg-blue-50/80 text-secondary border-blue-100 hover:border-primary hover:bg-blue-100"
                                                                    }`}
                                                            >
                                                                ₹{val >= 1000 ? val / 1000 + "K" : val}
                                                            </button>
                                                        ))}
                                                    </div>

                                                    {/* Custom amount */}
                                                    <div className="relative mb-6 flex items-center">
                                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-700 font-bold text-sm">₹</span>
                                                        <input
                                                            type="number"
                                                            value={customAmount}
                                                            onChange={(e) => { setCustomAmount(e.target.value); setAmount(0); }}
                                                            placeholder="Enter custom amount"
                                                            className="w-full pl-8 pr-4 py-3.5 rounded-xl border border-blue-100 bg-blue-50/40 text-neutral-700 font-bold text-sm outline-none focus:ring-2 focus:ring-blue-200 focus:border-primary hover:border-blue-200 transition-all"
                                                        />
                                                    </div>

                                                    {/* Summary box */}
                                                    <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 mb-6">
                                                        <div className="flex justify-between items-center">
                                                            <div>
                                                                <p className="text-xs text-primary font-bold uppercase tracking-wide">Donation Summary</p>
                                                                <p className="text-xs text-slate-400 mt-0.5">
                                                                    {frequency === "monthly" ? "Monthly" : "One-time"} ·{" "}
                                                                    {cause === "general" ? "General Fund" : cause}
                                                                </p>
                                                            </div>
                                                            <p className="text-2xl font-black text-neutral-600">
                                                                ₹{finalAmount.toLocaleString()}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <Button onClick={handleNext} disabled={finalAmount < 1} className="w-full flex justify-center items-center bg-secondary " >
                                                        Continue
                                                    </Button>
                                                </div>
                                            )}

                                            {/* ── Step 2: Info ── */}
                                            {step === 2 && (
                                                <div>
                                                    <h3 className="text-xl font-black text-primary mb-0.5">Your Details</h3>
                                                    <p className="text-xs text-slate-400 mb-6">Required for donation receipt & 80G certificate</p>

                                                    <div className="space-y-4">
                                                        {[
                                                            { name: "name", label: "Full Name *", placeholder: "As per PAN card", type: "text" },
                                                            { name: "email", label: "Email Address *", placeholder: "you@email.com", type: "email" },
                                                            { name: "phone", label: "Phone Number *", placeholder: "+91 XXXXX XXXXX", type: "tel" },
                                                            { name: "pan", label: "PAN Number (for 80G)", placeholder: "ABCDE1234F", type: "text" },
                                                        ].map((field) => (
                                                            <div key={field.name}>
                                                                <label className="block text-xs font-bold text-primary/70 uppercase tracking-wide mb-1.5">
                                                                    {field.label}
                                                                </label>
                                                                <input
                                                                    name={field.name}
                                                                    type={field.type}
                                                                    value={form[field.name]}
                                                                    onChange={(e) => {
                                                                        setForm({ ...form, [e.target.name]: e.target.value });
                                                                        setErrors({ ...errors, [e.target.name]: "" });
                                                                    }}
                                                                    placeholder={field.placeholder}
                                                                    className={inputClass(field.name)}
                                                                />
                                                                {errors[field.name] && (
                                                                    <p className="text-xs text-red-500 mt-1">{errors[field.name]}</p>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className="flex gap-3 mt-6">
                                                        <button
                                                            onClick={() => setStep(1)}
                                                            className="px-6 py-3 rounded-xl border border-blue-100 text-primary/70 font-bold text-sm hover:bg-blue-50 transition-colors"
                                                        >
                                                            ← Back
                                                        </button>
                                                        <div className="flex-1">
                                                            <Button onClick={handleNext}>Continue</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* ── Step 3: Payment ── */}
                                            {step === 3 && (
                                                <div>
                                                    <h3 className="text-xl font-black text-primary mb-0.5">Payment</h3>
                                                    <p className="text-xs text-slate-400 mb-6">Secure payment — 256-bit SSL encrypted</p>

                                                    {/* Summary */}
                                                    <div className="p-5 rounded-xl bg-blue-50 border border-blue-100 mb-6 space-y-3">
                                                        {[
                                                            { label: "Donor", value: form.name },
                                                            { label: "Cause", value: cause === "general" ? "General Fund" : cause },
                                                            { label: "Frequency", value: frequency === "monthly" ? "Monthly" : "One-time" },
                                                        ].map((row) => (
                                                            <div key={row.label} className="flex justify-between text-sm">
                                                                <span className="text-slate-400">{row.label}</span>
                                                                <span className="font-bold text-primary capitalize">{row.value}</span>
                                                            </div>
                                                        ))}
                                                        <div className="border-t border-blue-100 pt-3 flex justify-between">
                                                            <span className="font-black text-primary">Total Amount</span>
                                                            <span className="text-2xl font-black text-primary">
                                                                ₹{finalAmount.toLocaleString()}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    {/* Payment methods */}
                                                    <div className="grid grid-cols-3 gap-3 mb-5">
                                                        {["UPI", "Card", "Net Banking"].map((method) => (
                                                            <div
                                                                key={method}
                                                                className="p-3 rounded-xl border border-blue-100 bg-blue-50/60 text-center text-sm font-bold text-primary hover:border-primary hover:bg-blue-100 cursor-pointer transition-all duration-200"
                                                            >
                                                                {method}
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* SSL notice */}
                                                    <div className="flex items-center gap-2 p-3 rounded-xl bg-blue-50 border border-blue-100 mb-6">
                                                        <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                        </svg>
                                                        <span className="text-xs text-primary/70 font-medium">
                                                            256-bit SSL secured. Your payment info is never stored.
                                                        </span>
                                                    </div>

                                                    <div className="flex gap-3">
                                                        <button
                                                            onClick={() => setStep(2)}
                                                            className="px-6 py-3 rounded-xl border border-blue-100 text-primary/70 font-bold text-sm hover:bg-blue-50 transition-colors"
                                                        >
                                                            ← Back
                                                        </button>
                                                        <div className="flex-1">
                                                            {loading ? (
                                                                <button
                                                                    disabled
                                                                    className="w-full group relative bg-primary text-white px-6 py-2.5 rounded-md font-medium overflow-hidden opacity-80 cursor-not-allowed flex items-center justify-center gap-2"
                                                                >
                                                                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                                                    </svg>
                                                                    Processing...
                                                                </button>
                                                            ) : (
                                                                <Button onClick={handleSubmit}>
                                                                    Donate ₹{finalAmount.toLocaleString()} ❤
                                                                </Button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── Reusable cause card ── */
function CauseCard({ active, onClick, children }) {
    return (
        <div
            onClick={onClick}
            className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200 ${active
                ? "bg-blue-900 border-primary shadow-lg shadow-primary/20"
                : "bg-white border-blue-100 hover:shadow-md hover:border-blue-200"
                }`}
        >
            {children}
        </div>
    );
}