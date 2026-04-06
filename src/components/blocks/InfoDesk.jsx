import React from 'react'
import SectionHeading from './SectionHeading'
import Button from '../base/Button'
import { NavLink } from 'react-router'
import user from "../../assets/userIcon.jpg"
import DocIcon from "../../assets/Document_icon.webp"

const InfoDesk = () => {
    return (
        <div className='w-full bg-white py-20 px-6 md:px-12 lg:px-20' >
            <div className='max-w-7xl mx-auto'>
                <SectionHeading
                    label="INFO DESK"
                    title="Information Desk"
                    highlight="Desk"
                    description="Ten critical domains driving inclusive development and social justice across India's communities."
                />
                <hr className='mt-3 mb-8' />
                <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className='w-full col-span-2 max-[1100px]:col-span-3 bg-blue-50 border border-blue-200 p-5 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className="col-span-2 border-b border-blue-200 pb-3 flex items-center gap-2 bg-blue-50/50">
                            <span className="w-1.5 h-4 rounded-full bg-orange-400 flex-shrink-0" />
                            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                                Under RTI Act 2005
                            </p>

                        </div>
                        <div className='flex items-center border max-[1200px]:col-span-2 gap-5 p-2 px-3 rounded-xl bg-white'>
                            <div>
                                <img className='w-20 h-20 rounded-full border border-blue-200' src={user} alt="" />
                            </div>
                            <div>
                                <span className='text-accent font-semibold text-sm'>Public Information Officer</span>
                                <h3 className='text-primary font-extrabold text-xl'>MS.Rojalin Pradhan</h3>
                                <p className='text-xs text-slate-600'>Campaign Coordinator</p>
                            </div>
                        </div>
                        <div className='flex items-center border gap-5 max-[1200px]:col-span-2 p-2 px-3 rounded-xl bg-white'>
                            <div>
                                <img className='w-20 h-20 rounded-full border border-blue-200' src={user} alt="" />
                            </div>
                            <div>
                                <span className='text-accent font-semibold text-sm'>First Appellate Authority</span>
                                <h3 className='text-primary font-extrabold text-xl'>Ms. S. Kajal</h3>
                                <p className='text-xs text-slate-600'>Administrative Executive</p>
                            </div>
                        </div>

                        <div className='col-span-2 bg-white border p-3 rounded-xl flex gap-5' >
                            <div>
                                <img className='w-12' src={DocIcon} alt="" />
                            </div>
                            <div>
                                <span className='text-accent font-semibold text-sm' > FCRA Declaration</span>
                                <p className='text-xs text-slate-600'>This is to certify that <b>no FC grant</b> was received by Young India during 1st Oct 2015 to 31st Dec 2015</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 max-[1100px]:col-span-3 bg-secondary p-5 rounded-xl'>
                        <div>
                            <span className='text-accent font-semibold text-sm'>RESOURCE CENTER</span>
                            <h3 className='text-neutral-200 font-extrabold text-xl my-3'>Access RTI Forms, Publications & Governance Resources</h3>
                            <p className='text-xs text-slate-300'>Download RTI guides, annual reports, research papers, and more from our full information desk</p>
                            <Button className='mt-5 border-2  hover:border-orange-600 hover:text-orange-600 transition-all duration-300'><NavLink to="/information-desk" >Visit Information desk</NavLink></Button>
                        </div>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default InfoDesk