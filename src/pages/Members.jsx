import React, { useEffect } from "react";
import Breadcrumb from "../components/blocks/Breadcrumb";
import banner from "../assets/breadcrumb-banner.jpg";
import PageLayout from "../components/sections/PageLayout";
import SectionHeading from "../components/blocks/SectionHeading";
import { Link, useLocation } from "react-router";
import radionamaskarIcon from "../assets/radio-namaskar.jpg";
import volIndia from "../assets/Youth_india.jpg";
import SuchnaAward from "../assets/soochna-awards.jpg";
import NamNetwork from "../assets/NamaskarIndia.jpg"
import OMA from "../assets/Oma.jpg"
import RuralIndia from "../assets/rural_media.jpg";
import ESHG from "../assets/card-4.jpg";
import UserIcon from "../assets/userIcon.jpg"


const initiatives = [
    {
        id: "ShahAnsari",
        name: "N. A. Shah Ansari",
        designation: "President",
        gender: "Male",
        genderColor: "bg-blue-100 text-blue-700",
        icon: radionamaskarIcon,
        desc: "Veteran leader with decades of experience in development, human rights, and community media. Multiple postgraduate qualifications. Nationally and internationally awarded for youth leadership and community participation initiatives.",
        Age: 39,
        Qualification: "M.A, DPMIR, PGDJ, MARD, MBA, PhD",
        Address: "Konark, Puri, Orissa",
    },
    {
        id: "SatrughnaMuduli",
        name: "Satrughna Muduli",
        designation: "General Secretary",
        gender: "Male",
        genderColor: "bg-blue-100 text-blue-700",
        icon: volIndia,
        desc: "Experienced grassroots leader and entrepreneur with strong village-level engagement. Extensive work in development sector, known for community mobilisation, practical leadership, and sustained impact across rural areas.",
        Age: 39,
        Qualification: "B.A",
        Address: "Anasara, Puri, Orissa",
    },
    {
        id: "RojalinPradhan",
        name: "Rojalin Pradhan",
        designation: "Treasurer",
        gender: "Female",
        genderColor: "bg-pink-100 text-pink-700",
        icon: SuchnaAward,
        desc: "Dedicated grassroots social worker and journalist with over a decade of experience. Recognised for impactful reporting and community engagement, especially on local issues and social development.",
        Age: 32,
        Qualification: "B.A",
        Address: "Ichhapur, Puri, Orissa",
    },
    {
        id: "DurgaPrasadTripathy",
        name: "Durga Prasad Tripathy",
        designation: "Executive Committee Member",
        gender: "Male",
        genderColor: "bg-blue-100 text-blue-700",
        icon: NamNetwork,
        desc: "Seasoned social worker, legal professional, and institution builder. National award recipient with decades of experience in development initiatives, entrepreneurship, and strengthening community-based organisations.",
        Age: 40,
        Qualification: "B.A, LL.B",
        Address: "Tulasipur, Puri, Orissa",
    },
    {
        id: "DillipKumarRout",
        name: "Dillip Kumar Rout",
        designation: "Executive Committee Member",
        gender: "Male",
        genderColor: "bg-blue-100 text-blue-700",
        icon: OMA,
        desc: 'Multidisciplinary professional with expertise in agriculture, law, and insurance. Combines practical field knowledge with legal insight, contributing significantly to rural development and advisory services.',
        Age: 42,
        Qualification: "M.A",
        Address: "Chaulathali, Jajpur, Odisha",
    },
    {

        id: "KrushidaBegum",
        name: "Krushida Begum",
        designation: "Executive Committee Member",
        gender: "Female",
        genderColor: "bg-pink-100 text-pink-700",
        icon: RuralIndia,
        desc: "Highly experienced educator and national award-winning teacher. Specialist in women and child rights, with long-standing commitment to education, empowerment, and social awareness initiatives.",
        Age: 55,
        Qualification: "B.A, B.Ed",
        Address: "Chaulathali, Jajpur, Odisha",
    },
    {
        id: "NarayanKhatua",
        name: "Narayan Khatua",
        designation: "Executive Committee Member",
        gender: "Male",
        genderColor: "bg-blue-100 text-blue-700",
        icon: ESHG,
        desc: "Development practitioner with strong background in agro-entrepreneurship, disaster management, and organisational growth. Known for practical experience and leadership in strengthening community-based initiatives.",
        Age: 38,
        Qualification: "M.A , MSW",
        Address: "Abhayapur, Jajpur, Odisha",
    },
];

export default function OurInitiatives() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const targetId = location.hash.substring(1);
            // Delay slightly to ensure layout has fully rendered
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "center" });
                    
                    // Add a temporary highlight effect so the user sees which card was selected
                    element.classList.add("ring-4", "ring-blue-400", "ring-offset-4");
                    setTimeout(() => {
                        element.classList.remove("ring-4", "ring-blue-400", "ring-offset-4");
                    }, 2000);
                }
            }, 150);
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location]);

    return (
        <section className="w-full min-h-screen">
            <Breadcrumb
                title="Our Committee Members"
                subtitle="Committee provides strategic leadership and governance, ensuring our organization operates with vision."
                breadcrumbs={["Home", "Our Committee Members"]}
                bgImage={banner}
            />

            <PageLayout>
                <SectionHeading
                    title="Executive "
                    highlight="Committee"
                    description="Our Executive Committee provides strategic leadership and governance, ensuring our organization operates with vision, integrity, and purpose."
                    label="Our Committee Members"
                />
                <hr className="mt-3 mb-8" />

                <div className="space-y-5">
                    {initiatives.map((init, i) => (
                        <div

                            key={i}
                            id={init.id}
                            className="bg-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 overflow-hidden group"
                        >
                            < div className="p-4" >
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                                    <div className="w-full md:w-[200px] h-[200px] rounded-xl bg-blue-50 border border-blue-100 flex flex-col items-center justify-around flex-shrink-0 text-2xl group-hover:bg-primary/10 transition-colors p-1.5">
                                        <img className="w-[150px] h-[150px] object-cover rounded-full" src={UserIcon} alt="" />
                                        <div className="flex items-center gap-1">
                                            <span className="text-blue-600 hover:bg-blue-600 hover:text-white  w-8 h-8 rounded-full flex items-center justify-center"><i class="fa-brands fa-facebook font-medium text-sm"></i></span>
                                            <span className="text-neutral-900 hover:bg-neutral-900 hover:text-white w-8 h-8 rounded-full flex items-center justify-center"><i class="fa-brands fa-square-twitter font-medium text-sm"></i></span>
                                            <span className="text-pink-600 hover:bg-pink-600 hover:text-white w-8 h-8 rounded-full flex items-center justify-center"><i class="fa-brands fa-instagram font-medium text-sm"></i></span>
                                            <span className="text-blue-700 hover:bg-blue-700 hover:text-white w-8 h-8 rounded-full flex items-center justify-center"><i class="fa-brands fa-linkedin font-medium text-sm"></i></span>
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                                            <h3 className="text-primary text-xl font-bold">{init.name}</h3>
                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${init.genderColor}`}>
                                                {init.gender}
                                            </span>
                                        </div>
                                        <p className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wide">
                                            {init.designation}
                                        </p>
                                        <hr />
                                        <p className="text-xs mt-2 text-slate-600 leading-relaxed mb-1">{init.desc}</p>
                                        <div className="flex flex-col">
                                            <span className="text-xs mt-1 text-slate-600 m-0 p-0">Age : {init.Age}</span>
                                            <span className="text-xs mt-1 text-slate-600  m-0 p-0">Qualification : {init.Qualification}</span>
                                            <span className="text-xs mt-1 text-slate-600  m-0 p-0">Address : {init.Address}</span>
                                        </div>

                                        {/* Highlights */}
                                        {/* <div className="grid grid-cols-2 gap-2 mb-4">
                                            {init.highlights.map((h, hi) => (
                                                <div key={hi} className="flex items-center gap-2 text-xs text-primary">
                                                    <span className="w-1 h-1 rounded-full bg-orange-400 flex-shrink-0" />
                                                    {h}
                                                </div>
                                            ))}
                                        </div> */}


                                    </div>
                                </div>
                            </div>
                            <div className="h-0.5 bg-gradient-to-r from-primary/20 via-blue-200/30 to-transparent" />
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="bg-blue-100 mt-5 rounded-2xl border border-blue-100 p-6 text-center">
                    <h3 className="font-black text-primary text-lg mb-2">Want to be part of an initiative?</h3>
                    <p className="text-sm text-slate-500 mb-4">
                        Join as a volunteer, partner, or intern and help us scale our impact across India.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link
                            to="/contact"
                            className="group relative bg-primary text-white px-6 py-2.5 rounded-md font-medium overflow-hidden inline-flex items-center gap-2"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Get Involved
                                <span className="group-hover:translate-x-1 transition">→</span>
                            </span>
                            <span className="absolute inset-0 bg-secondary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                        </Link>
                        <Link
                            to="/donate"
                            className="px-6 py-2.5 rounded-md font-medium border border-primary text-primary hover:bg-blue-50 transition-colors text-sm"
                        >
                            Support Our Work
                        </Link>
                    </div>
                </div>
            </PageLayout>
        </section>
    );
}