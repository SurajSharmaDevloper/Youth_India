import React, { useState, useEffect } from 'react'
import Logo from '../base/Logo'
import { BadgeIndianRupee, ClosedCaption, Cross, CrossIcon, Phone, Plus } from 'lucide-react'
import { NavLink, useLocation } from 'react-router'

const Navbar = () => {
    const [isMenuButton, setIsMenuButton] = useState(false)
    const { pathname } = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        if (!window.location.hash) {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    // Close mobile nav when clicking a link
    const handleMobileLinkClick = () => {
        setIsMenuButton(false);
    };

    const navClass = ({ isActive }) =>
        `transition duration-300 ${isActive ? "text-blue-700" : "hover:text-blue-700"
        }`

    return (
        <header className="w-full relative bg-neutral-100 border-b border-blue-200">
            <div className='flex justify-between items-center flex-wrap gap-2 bg-primary p-2'>
                <div className='flex px-5 items-center gap-5 text-gray-200'>
                    <p className='text-xs text-gray-200'>Bhubaneswar, Odisha</p> |
                    <p className='text-xs text-gray-200'>Est. 1987 · Working across India</p>
                </div>
                <div className='flex max-[700px]:hidden justify-between items-center gap-5 text-white px-5'>
                    <span className='hover:text-gray-300 transition'><i class="fa-brands fa-facebook"></i></span>
                    <span className='hover:text-gray-300 transition'><i class="fa-brands fa-square-twitter"></i></span>
                    <span className='hover:text-gray-300 transition'><i class="fa-brands fa-linkedin"></i></span>
                    <span className='hover:text-gray-300 transition'><i class="fa-brands fa-square-youtube"></i></span>
                    <span className='hover:text-gray-300 transition'><i class="fa-brands fa-square-instagram"></i></span>
                </div>
            </div>

            <nav className='w-[95%] mx-auto flex justify-between items-center'>
                <div>
                    <Logo onClick={() => { window.location.href = '/' }} />
                </div>

                <div className='flex justify-between items-center gap-12'>
                    <ul className='flex nav-items  items-center gap-6 font-medium text-neutral-700'>

                        {/* HOME */}

                        <li className="relative group">
                            <NavLink to="/" onClick={handleClick} className="relative inline-block">
                                {({ isActive }) => (
                                    <>
                                        <span
                                            className={`transition duration-300 ${isActive ? "text-blue-700" : "group-hover:text-blue-700"
                                                }`}
                                        >
                                            Home
                                        </span>

                                        {/* UNDERLINE */}
                                        <span
                                            className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                                }`}
                                        />
                                    </>
                                )}
                            </NavLink>
                        </li>

                        {/* ABOUT */}
                        <li className="relative group">
                            <NavLink to="/about" onClick={handleClick} className="relative inline-block">
                                {({ isActive }) => (
                                    <>
                                        <span
                                            className={`transition duration-300 ${isActive ? "text-blue-700" : "group-hover:text-blue-700"
                                                }`}
                                        >
                                            About
                                        </span>

                                        {/* UNDERLINE */}
                                        <span
                                            className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                                }`}
                                        />
                                    </>
                                )}
                            </NavLink>
                        </li>

                        {/* INITIATIVES */}

                        <li className="relative group">
                            <NavLink to="/initiatives" onClick={handleClick} className="relative inline-block">
                                {({ isActive }) => (
                                    <>
                                        <span
                                            className={`transition duration-300 ${isActive ? "text-blue-700" : "group-hover:text-blue-700"
                                                }`}
                                        >
                                            Initiatives
                                        </span>

                                        {/* UNDERLINE */}
                                        <span
                                            className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                                }`}
                                        />
                                    </>
                                )}
                            </NavLink>
                        </li>

                        {/* PARTNERS */}
                        <li className="relative group">
                            <NavLink to="/partners" onClick={handleClick} className="relative inline-block">
                                {({ isActive }) => (
                                    <>
                                        <span
                                            className={`transition duration-300 ${isActive ? "text-blue-700" : "group-hover:text-blue-700"
                                                }`}
                                        >
                                            Our Partners
                                        </span>

                                        {/* UNDERLINE */}
                                        <span
                                            className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                                }`}
                                        />
                                    </>
                                )}
                            </NavLink>
                        </li>

                        {/* GALLERY */}
                        <li className="relative group">
                            <NavLink to="/gallery" onClick={handleClick} className="relative inline-block">
                                {({ isActive }) => (
                                    <>
                                        <span
                                            className={`transition duration-300 ${isActive ? "text-blue-700" : "group-hover:text-blue-700"
                                                }`}
                                        >
                                            Gallery
                                        </span>

                                        {/* UNDERLINE */}
                                        <span
                                            className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                                }`}
                                        />
                                    </>
                                )}
                            </NavLink>
                        </li>

                        {/* UPCOMINGS WITH DROPDOWN */}
                        <li className='relative group'>
                            <NavLink onClick={handleClick} className="relative  flex items-center  gap-2">

                                Upcomings <span className='flex items-center justify-center pt-1 hover:rotate-180 transition-all' ><i class="fa-solid fa-angle-down"></i></span>


                                <span
                                    className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300 w-0 group-hover:w-full"
                                        }`}
                                />

                            </NavLink>

                            {/* DROPDOWN */}
                            <ul className='absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50'>

                                <li>
                                    <NavLink
                                        onClick={handleClick}
                                        to="/rural-museum"
                                        className={({ isActive }) =>
                                            `block px-4 py-2 text-sm ${isActive
                                                ? "bg-blue-100 text-blue-700"
                                                : "hover:bg-gray-100"
                                            }`
                                        }
                                    >
                                        Rural Museum at Konark
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        onClick={handleClick}
                                        to="/e-shg"
                                        className={({ isActive }) =>
                                            `block px-4 py-2 text-sm ${isActive
                                                ? "bg-blue-100 text-blue-700"
                                                : "hover:bg-gray-100"
                                            }`
                                        }
                                    >
                                        ESHG
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        onClick={handleClick}
                                        to="/radio-internship"
                                        className={({ isActive }) =>
                                            `block px-4 py-2 text-sm ${isActive
                                                ? "bg-blue-100 text-blue-700"
                                                : "hover:bg-gray-100"
                                            }`
                                        }
                                    >
                                        Community Radio Internship
                                    </NavLink>
                                </li>

                            </ul>
                        </li>
                    </ul>

                    <div className='flex justify-center items-center gap-3'>
                        <NavLink onClick={handleClick} className="desk-btn" to='/donate'> <button className='py-1.5 px-4 rounded border border-accent text-accent flex items-center gap-1 font-medium hover:text-white transition duration-300 hover:bg-[#F97316] '>
                            <BadgeIndianRupee size={16} /> Donate
                        </button></NavLink>
                        <NavLink onClick={handleClick} className="desk-btn" to='contact' ><button className='bg-primary py-1.5 px-4 rounded border border-primary flex items-center gap-2 text-white font-medium hover:bg-[#004182] transition duration-300'>
                            <Phone size={16} /> Contact Us
                        </button></NavLink>
                        <button className='hidden menu-wrap-btn' onClick={() => setIsMenuButton(!isMenuButton)}>
                            <i class="fa-solid fa-bars text-neutral-700"></i>
                        </button>
                    </div>
                </div>
            </nav>
            {
                isMenuButton && (
                    <div
                        className='fixed top-0 left-0 w-full h-dvh bg-black/80 z-50'
                        onClick={() => setIsMenuButton(false)}
                    >
                        <div
                            className='w-[300px] h-full overflow-y-auto bg-white'
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className='p-2  flex align-top justify-between items-center border-b border-gray-200'>
                                <Logo to="/" />
                                <button
                                    onClick={() => setIsMenuButton(false)}
                                    className="group p-2 rounded-lg hover:bg-red-50 transition-colors"
                                >
                                    <Plus
                                        className={`w-7 h-7 transition-all duration-300 ease-in-out text-gray-500 group-hover:text-red-500 ${isMenuButton ? "rotate-45 group-hover:rotate-[135deg]" : "group-hover:rotate-90"
                                            }`}
                                    />
                                </button>
                            </div>
                            <div>
                                <ul className='flex flex-col p-3  gap-3'>
                                    <li className='bg-neutral-100 text-blue-500 border border-blue-200 font-semibold p-2 rounded-lg text-start px-5 hover:bg-blue-100 '><NavLink onClick={handleClick} to="/">Home</NavLink></li>
                                    <li className='bg-neutral-100 text-blue-500 border border-blue-200 font-semibold p-2 rounded-lg text-start px-5 hover:bg-blue-100 '><NavLink onClick={handleClick} to="/about">About Us</NavLink></li>
                                    <li className='bg-neutral-100 text-blue-500 border border-blue-200 font-semibold p-2 rounded-lg text-start px-5 hover:bg-blue-100 '><NavLink onClick={handleClick} to="/initiatives">Initiatives</NavLink></li>
                                    <li className='bg-neutral-100 text-blue-500 border border-blue-200 font-semibold p-2 rounded-lg text-start px-5 hover:bg-blue-100 '><NavLink onClick={handleClick} to="/partners"> Our Partners</NavLink></li>
                                    <li className='bg-neutral-100 text-blue-500 border border-blue-200 font-semibold p-2 rounded-lg text-start px-5 hover:bg-blue-100 '><NavLink onClick={handleClick} to="/gallery">Gallery</NavLink></li>

                                    {/* UPCOMINGS WITH DROPDOWN */}
                                    <li className='relative group bg-neutral-100 text-blue-500 border border-blue-200 font-semibold p-2 rounded-lg text-start px-5 '>
                                        <NavLink onClick={handleClick} className="relative inline-block">
                                            <span>
                                                Upcomings
                                            </span>
                                        </NavLink>

                                        {/* DROPDOWN */}
                                        <ul className='absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50'>

                                            <li>
                                                <NavLink

                                                    onClick={handleClick}
                                                    to="/rural-museum"
                                                    className={({ isActive }) =>
                                                        `block px-4 py-2 text-sm ${isActive
                                                            ? "bg-blue-100 text-blue-700"
                                                            : "hover:bg-gray-100"
                                                        }`
                                                    }
                                                >
                                                    Rural Museum at Konark
                                                </NavLink>
                                            </li>

                                            <li>
                                                <NavLink
                                                    onClick={handleClick}
                                                    to="/e-shg"
                                                    className={({ isActive }) =>
                                                        `block px-4 py-2 text-sm ${isActive
                                                            ? "bg-blue-100 text-blue-700"
                                                            : "hover:bg-gray-100"
                                                        }`
                                                    }
                                                >
                                                    ESHG
                                                </NavLink>
                                            </li>

                                            <li>
                                                <NavLink
                                                    onClick={handleClick}
                                                    to="/radio-internship"
                                                    className={({ isActive }) =>
                                                        `block px-4 py-2 text-sm ${isActive
                                                            ? "bg-blue-100 text-blue-700"
                                                            : "hover:bg-gray-100"
                                                        }`
                                                    }
                                                >
                                                    Community Radio Internship
                                                </NavLink>
                                            </li>

                                        </ul>
                                    </li>
                                </ul>
                                <div className='hidden justify-center mobile-btn flex-wrap items-center gap-3 mt-5'>
                                    <NavLink onClick={handleClick} to='/donate'> <button className='py-1.5 px-4 rounded border border-accent text-accent flex items-center gap-1 font-medium hover:text-white transition duration-300 hover:bg-[#F97316] '>
                                        <BadgeIndianRupee size={16} /> Donate
                                    </button></NavLink>
                                    <NavLink onClick={handleClick} to='contact' ><button className='bg-primary py-1.5 px-4 rounded border border-primary flex items-center gap-2 text-white font-medium hover:bg-[#004182] transition duration-300'>
                                        <Phone size={16} /> Contact Us
                                    </button></NavLink>
                                </div>
                                <div className='flex mb-2 text-sm font-medium text--700 justify-start ms-3 items-center gap-3 mt-10'>
                                    <h2>Join Our Community</h2>
                                </div>
                                <hr />
                                <div className='flex mt-3 justify-between text-3xl items-center gap-5 text-blue-500 px-5'>
                                    <span className='hover:text-gray-300 transition'><i class="fa-brands fa-facebook"></i></span>
                                    <span className='hover:text-gray-300 transition'><i class="fa-brands fa-square-twitter"></i></span>
                                    <span className='hover:text-gray-300 transition'><i class="fa-brands fa-linkedin"></i></span>
                                    <span className='hover:text-gray-300 transition'><i class="fa-brands fa-square-youtube"></i></span>
                                    <span className='hover:text-gray-300 transition'><i class="fa-brands fa-square-instagram"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
        </header>
    )
}

export default Navbar