"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileDropdowns, setMobileDropdowns] = useState({
        coreHR: false,
        talentAcquisition: false,
        hrAdvisory: false,
        talentDevelopment: false,
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileDropdown = (section) => {
        setMobileDropdowns((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <>
            <nav className={`fixed top-0 right-0 origin-top-right w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md backdrop-blur" : "bg-transparent"} text-black flex items-center justify-between px-4 py-2 lg:justify-around`}>
                <Link href="/">
                    <Image src="/brainhunt-PNG.png" width={160} height={160} alt="Logo" />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center gap-6 text-md font-semibold">
                    <li><Link href="/" className="text-[#0A55A0] hover:text-blue-600">HOME</Link></li>
                    <li><Link href="/about" className="text-[#0A55A0] hover:text-blue-600">ABOUT US</Link></li>
                    <li className="relative group cursor-pointer">
                        <div className="flex items-center gap-1 text-[#0A55A0] hover:text-blue-900">
                            SERVICES <FaChevronDown size={12} />
                        </div>
                        <div className="absolute top-5 left-[-200] bg-white shadow-md rounded-md text-md w-[36rem] hidden group-hover:grid grid-cols-2 gap-4 z-10 p-4">
                            {/* Core HR Services */}
                            <div >
                                <h4 className="text-md font-bold text-blue-950 mb-1">Core HR Services</h4>
                                <ul className="ml-2">
                                    <li className="p-1 hover:bg-gray-100 hover:text-blue-900 rounded-md ">
                                        <Link href="/services/payroll-management">Payroll Management</Link>
                                    </li>
                                    <li className="p-1 hover:bg-gray-100 hover:text-blue-900 rounded-md ">
                                        <Link href="/services/statutory-compliances">Statutory Compliances</Link>
                                    </li>
                                    <li className="p-1 hover:bg-gray-100 hover:text-blue-900 rounded-md ">
                                        <Link href="/services/hr-outsourcing">HR Outsourcing</Link>
                                    </li>
                                </ul>
                            </div>
                            {/* Talent Acquisition */}
                            <div >
                                <h4 className="text-md font-bold text-blue-950 mb-1">Talent Acquisition</h4>
                                <ul className="ml-2">
                                    <li className="p-1 hover:bg-gray-100 hover:text-blue-900 rounded-md ">
                                        <Link href="/services/recruitment">Recruitment and Executive Search</Link>
                                    </li>
                                    <li className="p-1 hover:bg-gray-100 hover:text-blue-900 rounded-md ">
                                        <Link href="/services/flexi-staffing">Flexi Staffing</Link>
                                    </li>
                                </ul>
                            </div>
                            {/* HR Advisory */}
                            <div >
                                <h4 className="text-md font-bold text-blue-950 mb-1">HR Advisory & Consulting</h4>
                                <ul className="ml-2">
                                    <li className="p-1 hover:bg-gray-100 hover:text-blue-900 rounded-md ">
                                        <Link href="/services/hr-consulting">HR Consulting</Link>
                                    </li>
                                    <li className="p-1 hover:bg-gray-100 hover:text-blue-900 rounded-md ">
                                        <Link href="/services/business-registration">Business Registration & Licenses</Link>
                                    </li>
                                </ul>
                            </div>
                            {/* Talent Development */}
                            <div className="hover:rounded-md ">
                                <h4 className="text-md font-bold text-blue-950 mb-1">Talent Development</h4>
                                <ul className="ml-2">
                                    <li className="p-1 hover:bg-gray-100 hover:text-blue-900 rounded-md ">
                                        <Link href="/services/learning-development">Learning & Development</Link>
                                    </li>
                                    <li className="p-1 hover:bg-gray-100 hover:text-blue-900 rounded-md ">
                                        <Link href="/services/career-assessment">Career Assessment & Counselling</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li><Link href="/careers" className="text-[#0A55A0] hover:text-blue-600">CAREERS</Link></li>
                    <li><Link href="/contact" className="text-[#0A55A0] hover:text-blue-600">CONTACT US</Link></li>
                </ul>

                <div className=" lg:block p-2 rounded-full bg-blue-900 text-white px-4">
                    Broucher
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden fixed top-4 right-4 z-[100]">
                    <button
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle Menu"
                        className="text-3xl text-black"
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed top-0 right-0 w-full bg-white text-black p-4 transform transition-transform duration-300 z-40 shadow-lg ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}>
                <ul className="mt-20 flex flex-col gap-6 text-lg font-semibold">
                    <li><Link href="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
                    <li><Link href="/about" onClick={() => setMenuOpen(false)}>ABOUT US</Link></li>

                    {/* SERVICES Dropdown */}
                    <li className="cursor-pointer">
                        <div className="flex justify-between items-center" onClick={() => toggleMobileDropdown("services")}>
                            SERVICES <FaChevronDown size={12} />
                        </div>

                        {mobileDropdowns.services && (
                            <ul className="pl-4 text-md mt-2 flex flex-col gap-4">

                                {/* Core HR Dropdown */}
                                <li className="cursor-pointer">
                                    <div className="flex justify-between items-center" onClick={() => toggleMobileDropdown("coreHR")}>
                                        Core HR Services <FaChevronDown size={10} />
                                    </div>
                                    {mobileDropdowns.coreHR && (
                                        <ul className="pl-4 mt-2 flex flex-col gap-2 text-sm">
                                            <li><Link href="/services/payroll-management" onClick={() => setMenuOpen(false)}>Payroll Management</Link></li>
                                            <li><Link href="/services/statutory-compliances" onClick={() => setMenuOpen(false)}>Statutory Compliances</Link></li>
                                            <li><Link href="/services/hr-outsourcing" onClick={() => setMenuOpen(false)}>HR Outsourcing</Link></li>
                                        </ul>
                                    )}
                                </li>

                                {/* Talent Acquisition Dropdown */}
                                <li className="cursor-pointer">
                                    <div className="flex justify-between items-center" onClick={() => toggleMobileDropdown("talentAcquisition")}>
                                        Talent Acquisition <FaChevronDown size={10} />
                                    </div>
                                    {mobileDropdowns.talentAcquisition && (
                                        <ul className="pl-4 mt-2 flex flex-col gap-2 text-sm">
                                            <li><Link href="/services/recruitment" onClick={() => setMenuOpen(false)}>Recruitment and Executive Search</Link></li>
                                            <li><Link href="/services/flexi-staffing" onClick={() => setMenuOpen(false)}>Flexi Staffing</Link></li>
                                        </ul>
                                    )}
                                </li>

                                {/* HR Advisory Dropdown */}
                                <li className="cursor-pointer">
                                    <div className="flex justify-between items-center" onClick={() => toggleMobileDropdown("hrAdvisory")}>
                                        HR Advisory & Consulting <FaChevronDown size={10} />
                                    </div>
                                    {mobileDropdowns.hrAdvisory && (
                                        <ul className="pl-4 mt-2 flex flex-col gap-2 text-sm">
                                            <li><Link href="/services/hr-consulting" onClick={() => setMenuOpen(false)}>HR Consulting</Link></li>
                                            <li><Link href="/services/business-registration" onClick={() => setMenuOpen(false)}>Business Registration & Licenses</Link></li>
                                        </ul>
                                    )}
                                </li>

                                {/* Talent Development Dropdown */}
                                <li className="cursor-pointer">
                                    <div className="flex justify-between items-center" onClick={() => toggleMobileDropdown("talentDevelopment")}>
                                        Talent Development <FaChevronDown size={10} />
                                    </div>
                                    {mobileDropdowns.talentDevelopment && (
                                        <ul className="pl-4 mt-2 flex flex-col gap-2 text-sm">
                                            <li><Link href="/services/learning-development" onClick={() => setMenuOpen(false)}>Learning & Development</Link></li>
                                            <li><Link href="/services/career-assessment" onClick={() => setMenuOpen(false)}>Career Assessment & Counselling</Link></li>
                                        </ul>
                                    )}
                                </li>

                            </ul>
                        )}
                    </li>

                    <li><Link href="/careers" onClick={() => setMenuOpen(false)}>CAREERS</Link></li>
                    <li><Link href="/contact" onClick={() => setMenuOpen(false)}>CONTACT US</Link></li>
                </ul>

                <div className=" text-center p-2 rounded-full bg-blue-900 text-white font-bold px-4 mt-4 flex justify-center items-center">
                    Broucher
                </div>
            </div>

        </>
    );
};

export default Navbar;