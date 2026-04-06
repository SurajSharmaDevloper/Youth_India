import React from "react";
import Breadcrumb from "../components/blocks/Breadcrumb";
import banner from "../assets/breadcrumb-banner.jpg";
import PageLayout from "../components/sections/PageLayout";
import SectionHeading from "../components/blocks/SectionHeading";

const activities = [
    {
        id: "01",
        icon: "🎪",
        title: "Konark Youth Fest",
        tag: "Annual Event",
        tagColor: "bg-blue-100 text-blue-700",
        content: `A national level youth congregation entitled "Konark Youth Fest" is organized at Konark every year in the last week of December by Young India. It aims at recognizing that the youth population of India belong to one blood and to utilize this unity to fight back social evils, factionalism, bigotry, dogmatic social taboos and superstitions — with a sense of nationalism, scientific mind, upholding our cultural heritage and enriched tradition through performing arts from various parts of the country.`,
    },
    {
        id: "02",
        icon: "📻",
        title: "Radio Namaskar — Community Radio",
        tag: "Media Initiative",
        tagColor: "bg-purple-100 text-purple-700",
        content: `Radio Namaskar is the brainchild of Young India, established at Konark. It aims to ensure non-disruptive communication for the masses, particularly for people in remote areas where communication breakdown is a regular problem due to demographic and technical factors. Radio Namaskar continues its programme episodes with involvement of local youths and intellectuals. It is the only community radio in the country with a special web portal and is set to become the first internet radio of the country through www.radionamaskar.org.`,
    },
    {
        id: "03",
        icon: "🗳️",
        title: "Youth Participation in Local Governance",
        tag: "Governance",
        tagColor: "bg-green-100 text-green-700",
        content: `Young India has taken a vibrant initiative to promote youth participation in local self-governance and has sensitized thousands of youth across the country to promote voluntarism among them. This includes training youth on Panchayati Raj institutions, gram sabha participation, and community decision-making processes to strengthen grassroots democracy.`,
    },
    {
        id: "04",
        icon: "📋",
        title: "Right to Information (RTI) Propagation",
        tag: "Rights",
        tagColor: "bg-orange-100 text-orange-700",
        content: `Young India has taken a noted step in propagation of the Right to Information Act 2005 and is leading a networking of youth organizations under the banner of NAMASKAR. Through this initiative, lots of people have been benefited. The "Suchana Shree" is a State Level Award for RTI crusaders of Orissa, initiated by Young India for recognizing effective RTI practices having sound development impact on lives of communities and citizens at grass root level.`,
    },
    {
        id: "05",
        icon: "🌐",
        title: "Volunteers India — National Portal",
        tag: "Digital Initiative",
        tagColor: "bg-teal-100 text-teal-700",
        content: `Young India has started a web portal www.volunteersindia.in — the only portal of this type in the country — to promote a database of Indian volunteers committed to the dissemination of information and promotion of sustainable development initiatives, in response to the needs of underrepresented and marginalized sections of society. It bridges the data gap and improves information availability through a trusted and accurate source of quality information.`,
    },
    {
        id: "06",
        icon: "⚖️",
        title: "Odisha Media Award (OMA)",
        tag: "Media",
        tagColor: "bg-red-100 text-red-700",
        content: `Odisha Media Award (OMA) is an attempt by Young India with a group of journalists and development activists committed to the people of Odisha. The primary objective of OMA is to facilitate media persons who contribute positively to the democratic process, highlight social issues, and amplify the voices of marginalized communities in the state.`,
    },
    {
        id: "07",
        icon: "👩‍👧",
        title: "Gender Equality & Social Inclusion Campaigns",
        tag: "Gender",
        tagColor: "bg-pink-100 text-pink-700",
        content: `The issues like gender discrimination and social negligence have greater visibility in the communities living in rural and outreach India. Young India runs sustained campaigns and awareness programmes addressing gender equality, women's rights, and social inclusion across Odisha's rural districts, working with grassroots communities to challenge entrenched norms.`,
    },
    {
        id: "08",
        icon: "🏫",
        title: "Training & Capacity Building",
        tag: "Education",
        tagColor: "bg-yellow-100 text-yellow-700",
        content: `Young India provides a wide variety of methods to enhance and strengthen capacity at individual, institutional, and community levels. A dedicated team of 10 expert Development Activists is involved in this initiative. Training covers rural economics, local governance, women & child development, human rights, agriculture, and environmental management.`,
    },
];

export default function MajorActivities() {
    return (
        <section className="w-full min-h-screen">
            <Breadcrumb
                title="MAJOR ACTIVITIES"
                subtitle="Over 33 years of grassroots action — driving social transformation across India."
                breadcrumbs={["Home", "Major Activities"]}
                bgImage={banner}
            />

            <PageLayout>
                <SectionHeading
                    label="Our Work"
                    title="Major Activities "
                    highlight="Conducted"
                    description="Young India has been at the forefront of social transformation through sustained, community-driven programmes since 1989."
                />

                {/* Activities */}
                <div className="space-y-5">
                    {activities.map((act) => (
                        <div
                            key={act.id}
                            className="bg-white rounded-2xl border border-blue-100 shadow-sm overflow-hidden hover:shadow-md hover:border-blue-200 transition-all duration-300 group"
                        >
                            <div className="flex items-start gap-4 p-6">
                                {/* Number badge */}
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-blue-100 flex items-center justify-center">
                                    <span className="text-xs font-black text-primary">{act.id}</span>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <span className="text-xl">{act.icon}</span>
                                        <h3 className="font-black text-primary text-base leading-tight group-hover:text-blue-800 transition-colors">
                                            {act.title}
                                        </h3>
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${act.tagColor}`}>
                                            {act.tag}
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-600 leading-relaxed">{act.content}</p>
                                </div>
                            </div>

                            {/* Bottom accent bar */}
                            <div className="h-0.5 bg-gradient-to-r from-primary/20 via-blue-300/30 to-transparent" />
                        </div>
                    ))}
                </div>

                {/* Stats strip */}
                <div className="bg-primary rounded-2xl p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                        {[
                            { n: "33+", l: "Years Active" },
                            { n: "28", l: "Districts Covered" },
                            { n: "12K+", l: "Youth Impacted" },
                            { n: "50+", l: "Programmes Run" },
                        ].map((s, i) => (
                            <div key={i}>
                                <div className="text-2xl font-black text-white">{s.n}</div>
                                <div className="text-blue-300 text-xs font-semibold uppercase tracking-widest mt-0.5">{s.l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </PageLayout>
        </section>
    );
}