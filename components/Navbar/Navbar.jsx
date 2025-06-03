"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Fixed Navbar */}
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-white shadow-md backdrop-blur"
                    : "bg-transparent"
                    } text-black flex items-center justify-between px-4 py-2 lg:justify-around`}
            >
                {/* Logo */}
                <Link href="/">
                    <Image src="/brainhunt-PNG.png" width={120} height={120} alt="Logo" />
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden lg:flex items-center gap-6  text-sm font-semibold">
                    <li>
                        <Link href="/" className="text-[#0A55A0] hover:text-blue-600">HOME</Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-[#0A55A0] hover:text-blue-600">ABOUT US</Link>
                    </li>
                    <li className="relative group cursor-pointer">
                        <div className="flex items-center gap-1 text-[#0A55A0] hover:text-blue-900">
                            SERVICES <FaChevronDown size={12} />
                        </div>
                        <ul className="absolute top-6 -left-40 bg-white shadow-md rounded-md text-md w-100 hidden group-hover:block z-10">
                            <li className="p-2 hover:bg-gray-100 hover:text-blue-900 rounded-md">
                                <Link href="/services/headhunting">Recruitment</Link>
                            </li>
                            <li className="p-2 hover:bg-gray-100 hover:text-blue-900 rounded-md">
                                <Link href="/services/contractualrecruitment">Payroll Solutions / Payroll Outsourcing</Link>
                            </li>
                            <li className="p-2 hover:bg-gray-100 hover:text-blue-900 rounded-md">
                                <Link href="/services/payrollmanagement">HR Consulting</Link>
                            </li>
                            <li className="p-2 hover:bg-gray-100 hover:text-blue-900 rounded-md">
                                <Link href="/services/permanentrecruitment">Flexi Staffing Solutions</Link>
                            </li>
                            <li className="p-2 hover:bg-gray-100 hover:text-blue-900 rounded-md">
                                <Link href="/services/permanentrecruitment">Labour Law Compliance / Statutory Compliances</Link>
                            </li>
                            <li className="p-2 hover:bg-gray-100 hover:text-blue-900 rounded-md">
                                <Link href="/services/permanentrecruitment">Training and Development</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/careers" className="text-[#0A55A0] hover:text-blue-600">CAREERS</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-[#0A55A0] hover:text-blue-600">CONTACT US</Link>
                    </li>
                </ul>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-3xl z-50"
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </nav>

            {/* Mobile Drawer */}
            <div
                className={`lg:hidden fixed top-0 right-0 w-full bg-white text-black p-4 transform transition-transform duration-300 z-40 shadow-lg ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}
            >
                <ul className="mt-20 flex flex-col gap-6 text-lg font-semibold">
                    <li>
                        <Link href="/" onClick={() => setMenuOpen(false)}>HOME</Link>
                    </li>
                    <li>
                        <Link href="/about" onClick={() => setMenuOpen(false)}>ABOUT US</Link>
                    </li>
                    <li className="cursor-pointer" onClick={() => setServicesOpen(!servicesOpen)}>
                        <div className="flex justify-between items-center">
                            SERVICES <FaChevronDown size={12} />
                        </div>
                        {servicesOpen && (
                            <ul className="pl-4 text-md mt-2 ">
                                <li className="p-2 hover:bg-gray-100 hover:text-blue-900">
                                    <Link href="/services/headhunting" onClick={() => setMenuOpen(false)}>Recruitment</Link>
                                </li>
                                <li className="p-2 hover:bg-gray-100 hover:text-blue-900">
                                    <Link href="/services/contractualrecruitment" onClick={() => setMenuOpen(false)}>Payroll Solutions / Payroll Outsourcing</Link>
                                </li>
                                <li className="p-2 hover:bg-gray-100 hover:text-blue-900">
                                    <Link href="/services/payrollmanagement" onClick={() => setMenuOpen(false)}>HR Consulting</Link>
                                </li>
                                <li className="p-2 hover:bg-gray-100 hover:text-blue-900">
                                    <Link href="/services/permanentrecruitment" onClick={() => setMenuOpen(false)}>Flexi Staffing Solutions</Link>
                                </li>
                                <li className="p-2 hover:bg-gray-100 hover:text-blue-900">
                                    <Link href="/services/permanentrecruitment" onClick={() => setMenuOpen(false)}>Labour Law Compliance / Statutory Compliances</Link>
                                </li>
                                <li className="p-2 hover:bg-gray-100 hover:text-blue-900">
                                    <Link href="/services/permanentrecruitment" onClick={() => setMenuOpen(false)}>Training and Development</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link href="/careers" onClick={() => setMenuOpen(false)}>CAREERS</Link>
                    </li>
                    <li>
                        <Link href="/contact" onClick={() => setMenuOpen(false)}>CONTACT US</Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
