"use client"

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
    `transition-colors duration-200 ${pathname === path
      ? "text-blue-700 underline underline-offset-4"
      : "text-blue-500 hover:text-blue-700"
    }`;

  const services = [
    { name: "Payroll Management", link: "/services/payrollmanagement" },
    { name: "Statutory Compliances", link: "/services/statutorycompliances" },
    { name: "HR Outsourcing", link: "/services/hroutsourcing" },
    { name: "Recruitment & Executive Search", link: "/services/recruitmentandexecutivesearch" },
    { name: "Flexi Staffing", link: "/services/flexistaffing" },
    { name: "HR Consulting", link: "/services/hrconsulting" },
    { name: "Business Establishment & Licenses", link: "/services/businessestablishmentandlicensing" },
    { name: "Learning & Development", link: "/services/learninganddevelopment" },
    { name: "Career Assessment & Counselling", link: "/services/careerassessmentandcounselling" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 text-center ${scrolled ? "bg-white shadow-md backdrop-blur" : "bg-transparent"
          } text-black  flex items-center justify-between px-4  lg:justify-around font-semibold`}
      >
        <Link href="/" >
          <Image src="/brainhunt-PNG.png" width={160} height={160} alt="Logo" onClick={() => setMenuOpen(false)}/>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8 text-[16px] tracking-wide">
          <li ><Link href="/" className={`${navLinkClass("/")} py-3 `} >Home</Link></li>
          <li className="py-4"><Link href="/about"className={`${navLinkClass("/about")} py-3`} >About Us</Link></li>

          {/* Clickable Services Dropdown */}
          <li className="relative group ">
            <Link href="/services" className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors py-3 ">
              Services <FaChevronDown size={10} />
            </Link>
            <div className="absolute top-10 left-0 bg-blue-900 text-left text-white shadow-lg w-60  hidden group-hover:flex flex-col z-50">
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

          <li className="py-4"><Link href="/careers" className={`${navLinkClass("/careers")} py-3`} >Careers</Link></li>
          <li className="py-4"><Link href="/contact" className={`${navLinkClass("/contact")} py-3`} >Contact Us</Link></li>
        </ul>

        {/* Brochure Button */}
        <Link href="/Brochure-Brainhunt-Ventures.pdf" target="/blank">
        <div className="hidden lg:block p-2 rounded-full bg-blue-900 text-white px-4 font-medium cursor-pointer hover:bg-blue-800 transition">
          Download Brochure
        </div>
        </Link>

        {/* Mobile Toggle */}
        <div className="lg:hidden fixed top-6 right-6 z-[100]">
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle Menu"
            className="text-3xl text-blue-900 bg-white rounded-sm"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
      </div>
    </nav >

      {/* Mobile Menu */ }
      < div
  className = {`lg:hidden fixed top-0 right-0 w-full bg-white  text-black px-4 py-1 transform transition-transform duration-300 z-40 shadow-lg ${menuOpen ? "translate-y-0" : "-translate-y-full"
    }`
}
      >
        <ul className="mt-22 flex flex-col gap-2 text-lg font-medium">
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
        
        <Link href="/Brochure-Brainhunt-Ventures.pdf" target="/blank">
        <div className="text-center p-2 mt-6 rounded-full bg-blue-900 text-white font-medium px-4">
           Download Brochure
        </div>
        </Link>
      </div >
    </>
  );
};

export default Navbar;
