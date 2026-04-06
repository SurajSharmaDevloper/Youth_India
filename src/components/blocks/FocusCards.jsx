import {
    HandHeart,
    Scale,
    ShieldCheck,
    Landmark,
    Radio,
    Sprout,
    Search,
    Rocket,
    Home,
    Briefcase,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const data = [
    { title: "Social Inclusion", desc: "Ensuring equal opportunities and breaking barriers.", icon: HandHeart },
    { title: "Gender Equity", desc: "Empowering women and girls through advocacy.", icon: Scale },
    { title: "Human Rights", desc: "Protecting fundamental rights for all.", icon: ShieldCheck },
    { title: "Societal Peace", desc: "Promoting tolerance and coexistence.", icon: Landmark },
    { title: "Community Media", desc: "Amplifying voices through media.", icon: Radio },
    { title: "Rights Based Development", desc: "Sustainable and inclusive development.", icon: Sprout },
    { title: "Governance Accountability", desc: "Transparent governance and participation.", icon: Search },
    { title: "Youth Advancement", desc: "Skill development and mentorship.", icon: Rocket },
    { title: "Local Governance", desc: "Strengthening communities locally.", icon: Home },
    { title: "Sustainable Livelihoods", desc: "Creating stable income opportunities.", icon: Briefcase },
];

export default function FocusCards() {
    return (
        <div className="w-full px-6 md:px-12 lg:px-20 bg-white">
            <div className="max-w-7xl py-20 mx-auto ">
                <SectionHeading
                    label="OUR WORK"
                    title="Our Focus Areas"
                    highlight="Focus Areas"
                    description="Ten critical domains driving inclusive development and social justice across India's communities."
                />
                <hr className="my-5 hr-line" />

                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">

                    {data.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="group relative p-6 rounded-xl bg-blue-50 border border-gray-200 shadow-sm hover:shadow-xl transition duration-300 overflow-hidden"
                            >
                                {/* BIG NUMBER BACKGROUND */}
                                <span className="absolute right-4 top-4 text-6xl font-bold text-gray-200 group-hover:text-blue-100 transition">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                {/* ICON */}
                                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#0061B0]/10 text-[#0061B0] mb-4 group-hover:scale-110 transition">
                                    <Icon size={24} />
                                </div>

                                {/* TITLE */}
                                <h3 className="font-semibold text-gray-800 text-lg mb-2 group-hover:text-[#0061B0] transition">
                                    {item.title}
                                </h3>

                                {/* DESC */}
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {item.desc}
                                </p>

                                {/* HOVER BORDER EFFECT */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#0061B0]/30 rounded-xl transition"></div>
                            </div>
                        );
                    })}

                </div>

            </div>
        </div>

    );
}