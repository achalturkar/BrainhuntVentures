"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
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
                        ? "bg-white shadow-md backdrop-blur fixed top-0"
                        : "bg-transparent"
                    } text-black flex items-center justify-between px-4 py-2 lg:justify-around`}
            >
                {/* Logo */}
                <Link href="/">
                    <Image src="/brainhunt-PNG.png" width={120} height={120} alt="Logo" />
                </Link>

                {/* Desktop Nav Links */}
                <ul className="hidden lg:flex items-center gap-6 font-semibold">
                    <li>
                        <Link href="/" className="text-[#0A55A0] hover:text-blue-600">
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#aboutus"
                            className="text-[#0A55A0] hover:text-blue-600"
                        >
                            ABOUT US
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#services"
                            className="text-[#0A55A0] hover:text-blue-600"
                        >
                            SERVICES
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#howwework"
                            className="text-[#0A55A0] hover:text-blue-600"
                        >
                            HOW WE WORK
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#contact"
                            className="text-[#0A55A0] hover:text-blue-600"
                        >
                            CONTACT
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-3xl z-50"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </nav>

            {/* Mobile Drawer */}
            <div
                className={`lg:hidden fixed top-0 right-0 w-3/4 max-w-sm min-h-screen bg-white text-black p-4 transform transition-transform duration-300 z-40 shadow-lg ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                style={{
                    backgroundImage: "url('/blob.svg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="flex justify-between items-center mb-6">
                    <Image src="/brainhunt-PNG.png" width={100} height={100} alt="Logo" />
                </div>
                <ul className="flex flex-col gap-6 text-lg font-semibold">
                    <li>
                        <Link href="/" onClick={() => setMenuOpen(false)}>
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link href="#aboutus" onClick={() => setMenuOpen(false)}>
                            ABOUT US
                        </Link>
                    </li>
                    <li>
                        <Link href="#services" onClick={() => setMenuOpen(false)}>
                            SERVICES
                        </Link>
                    </li>
                    <li>
                        <Link href="#howwework" onClick={() => setMenuOpen(false)}>
                            HOW WE WORK
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact" onClick={() => setMenuOpen(false)}>
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
