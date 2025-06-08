"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = (path) =>
    `transition-colors duration-200 ${
      pathname === path
        ? "text-blue-900 underline underline-offset-4"
        : "text-[#0A55A0] hover:text-blue-800"
    }`;

  const services = [
    { name: "Payroll Management", link: "/services/payroll-management" },
    { name: "Statutory Compliances", link: "/services/statutory-compliances" },
    { name: "HR Outsourcing", link: "/services/hr-outsourcing" },
    { name: "Recruitment & Executive Search", link: "/services/recruitment" },
    { name: "Flexi Staffing", link: "/services/flexi-staffing" },
    { name: "HR Consulting", link: "/services/hr-consulting" },
    { name: "Business Registration & Licenses", link: "/services/business-registration" },
    { name: "Learning & Development", link: "/services/learning-development" },
    { name: "Career Assessment & Counselling", link: "/services/career-assessment" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 text-center ${
          scrolled ? "bg-white shadow-md backdrop-blur" : "bg-transparent"
        } text-black flex items-center justify-between px-4  lg:justify-around font-normal`}
      >
        <Link href="/">
          <Image src="/brainhunt-PNG.png" width={160} height={160} alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8 text-[16px] tracking-wide">
          <li><Link href="/" className={navLinkClass("/")}>Home</Link></li>
          <li><Link href="/about" className={navLinkClass("/about")}>About Us</Link></li>

          {/* Clickable Services Dropdown */}
          <li className="relative group">
            <Link href="/services" className="flex items-center gap-1 text-[#0A55A0] hover:text-blue-800 transition-colors">
              Services <FaChevronDown size={10} />
            </Link>
            <div className="absolute top-6 left-0 bg-blue-900 text-left text-white shadow-lg w-60  hidden group-hover:flex flex-col z-50">
              {services.map((service, idx) => (
                <Link
                  key={idx}
                  href={service.link}
                  className="p-2 text-sm hover:bg-blue-800  transition  border-y-1"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </li>

          <li><Link href="/careers" className={navLinkClass("/careers")}>Careers</Link></li>
          <li><Link href="/contact" className={navLinkClass("/contact")}>Contact Us</Link></li>
        </ul>

        {/* Brochure Button */}
        <div className="hidden lg:block p-2 rounded-full bg-blue-900 text-white px-4 font-medium cursor-pointer hover:bg-blue-800 transition">
          Brochure
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden fixed top-4 right-4 z-[100]">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            className="text-4xl text-blue-900"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-full bg-white text-black p-4 transform transition-transform duration-300 z-40 shadow-lg ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="mt-20 flex flex-col gap-6 text-lg font-medium">
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>

          {/* Services Dropdown Mobile */}
          <li className="cursor-pointer">
            <div
              className="flex justify-between items-center"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Services <FaChevronDown size={12} />
            </div>
            {mobileServicesOpen && (
              <ul className="pl-4 mt-2 flex flex-col gap-2 text-md">
                {services.map((service, idx) => (
                  <li key={idx}>
                    <Link
                      href={service.link}
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-blue-800"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li><Link href="/careers" onClick={() => setMenuOpen(false)}>Careers</Link></li>
          <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
        </ul>

        <div className="text-center p-2 mt-6 rounded-full bg-blue-900 text-white font-medium px-4">
          Brochure
        </div>
      </div>
    </>
  );
};

export default Navbar;
