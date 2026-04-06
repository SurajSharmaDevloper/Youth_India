import React from 'react'
import Breadcrumb from '../components/blocks/Breadcrumb'
import banner from '../assets/breadcrumb-banner.jpg'
import DetailsGrid from '../components/blocks/DetailsGrid'
import StatsDark from '../components/blocks/StatsDark'
import ObjectivesSection from '../components/blocks/ObjectivesSection'
import FocusCards from '../components/blocks/FocusCards'
import WhatWeDo from '../components/blocks/WhatWeDo'
import TeamSection from '../components/blocks/TeamData'
import profile from '../assets/profile.jpg'
import InfoDesk from '../components/blocks/InfoDesk'

const members = [
    {
        name: "N.A. Shah Ansari",
        role: "President",
        age: 39,
        qualification: "M.A, DPMIR, PGDJ, MARD, MBA, PhD",
        gender: "Male",
        address: "Konark, Puri, Orissa",
    },
    {
        name: "R. Sunanda Chowdhury",
        role: "General Secretary",
        age: 29,
        qualification: "M.A, M.Phil",
        gender: "Female",
        address: "Nivedita W.W. Hostel, Unit-V, Bhubaneswar",
    },
    {
        name: "Rojalin Pradhan",
        role: "Executive Body Member",
        age: 32,
        qualification: "B.A",
        gender: "Female",
        address: "Ichhapur, Via-Gop, Dist-Puri",
    },
    {
        name: "Satrughna Muduli",
        role: "Treasurer",
        age: 39,
        qualification: "B.A",
        gender: "Male",
        address: "Anasara, Po-Dhanitri, Dist-Puri",
        src: profile
    },
    {
        name: "Narayan Khatua",
        role: "Executive Body Member",
        age: 38,
        qualification: "M.A, MSW",
        gender: "Male",
        address: "AbhayaPur, PO-Siha, Dist-Jajpur",
    },
    {
        name: "Dillip Kumar.",
        role: "Executive Body Member",
        age: 42,
        qualification: "M.A",
        gender: "Male",
        address: "Rout At-Chaulathali, Po-Chanditala, Dist-Jajpur",
    },
    {
        name: "Durga Prasad Tripathy",
        role: "Executive Body Member",
        age: 40,
        qualification: "B.A, LLB",
        gender: "Male",
        address: "At-Tulasipur, Po-Brahmankundi, Dist-Puri",
    },
    {
        name: "Jagdish Ch. Mishra",
        role: "Executive Body Member",
        age: 40,
        qualification: "B.A",
        gender: "Male",
        address: "Badamba, Dist-Cuttack",
    },
    {
        name: "Krusida Begum Kantanali",
        role: "Executive Body Member",
        age: 55,
        qualification: "B.A, B.Ed",
        gender: "Female",
        address: "Dhenkanal",
    },
];

const About = () => {
    return (
        <section className='w-full min-h-screen'>
            <Breadcrumb
                title="ABOUT US"
                subtitle='Driven by passion and purpose, Young India works at the grassroots level to empower youth, uplift communities, and create lasting social change across the nation.'
                breadcrumbs={["Home", "About"]}
                bgImage={banner}
            />

            <DetailsGrid />
            <StatsDark />
            <ObjectivesSection />
            <FocusCards />
            <WhatWeDo />
            <InfoDesk />
            <TeamSection />


        </section>
    )
}

export default About;

