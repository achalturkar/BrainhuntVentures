"use client"

import { useEffect, useState } from "react";
import { FiMenu, FiX, FiHome, FiInfo, FiBriefcase, FiBookOpen, FiPhone, FiDownload, FiChevronDown, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinkClass = (path) =>
    `transition-colors duration-200 ${pathname === path
      ? "text-blue-700 underline underline-offset-4"
      : "text-blue-500 hover:text-blue-700"
    }`;

  const services = [
    { name: "Payroll Management",               link: "/services/payrollmanagement" },
    { name: "Background Verification",          link: "/services/backgroundverification" },
    { name: "Statutory Compliances",            link: "/services/statutorycompliances" },
    { name: "HR Outsourcing",                   link: "/services/hroutsourcing" },
    { name: "Recruitment & Executive Search",   link: "/services/recruitmentandexecutivesearch" },
    { name: "Flexi Staffing",                   link: "/services/flexistaffing" },
    { name: "HR Consulting",                    link: "/services/hrconsulting" },
    { name: "Business Establishment & Licenses",link: "/services/businessestablishmentandlicensing" },
    { name: "Learning & Development",           link: "/services/learninganddevelopment" },
    { name: "Career Assessment & Counselling",  link: "/services/careerassessmentandcounselling" },
  ];

  const close = () => { setMenuOpen(false); setMobileServicesOpen(false); };

  return (
    <>
      {/* ── DESKTOP NAVBAR ── */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 text-center ${scrolled ? "bg-white shadow-md backdrop-blur" : "bg-transparent"} text-black flex items-center justify-between px-4 lg:justify-around font-semibold`}>
        <Link href="/">
          <Image src="/brainhunt-PNG.png" width={160} height={160} alt="Logo" onClick={close} />
        </Link>

        <ul className="hidden lg:flex items-center gap-8 text-[16px] tracking-wide">
          <li><Link href="/" className={`${navLinkClass("/")} py-3`}>Home</Link></li>
          <li className="py-4"><Link href="/about" className={`${navLinkClass("/about")} py-3`}>About Us</Link></li>
          <li className="relative group">
            <div className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors py-3 cursor-pointer">
              Services <FiChevronDown size={12} />
            </div>
            <div className="absolute top-10 left-0 bg-blue-900 text-left text-white shadow-lg w-60 hidden group-hover:flex flex-col z-50">
              {services.map((s, i) => (
                <Link key={i} href={s.link} className="p-2 text-sm hover:bg-blue-800 transition border-y border-blue-800">
                  {s.name}
                </Link>
              ))}
            </div>
          </li>
          <li className="py-4"><Link href="/careers" className={`${navLinkClass("/careers")} py-3`}>Careers</Link></li>
          <li className="py-4"><Link href="/contact" className={`${navLinkClass("/contact")} py-3`}>Contact Us</Link></li>
        </ul>

        <Link href="/Brochure-Brainhunt-Ventures.pdf" target="_blank">
          <div className="hidden lg:block p-2 rounded-full bg-blue-900 text-white px-4 font-medium cursor-pointer hover:bg-blue-800 transition">
            Download Brochure
          </div>
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden fixed top-4 right-4 z-[100] w-10 h-10 flex items-center justify-center rounded-xl bg-white shadow-md border border-gray-100 text-blue-900"
          onClick={() => setMenuOpen(p => !p)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      {/* ── MOBILE OVERLAY BACKDROP ── */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
          onClick={close}
        />
      )}

      {/* ── MOBILE DRAWER ── */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-[82vw] max-w-[320px] bg-white z-[70] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>

        {/* drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <Image src="/brainhunt-PNG.png" width={130} height={50} alt="Logo" />
          <button onClick={close} className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 text-gray-500 hover:bg-gray-100">
            <FiX size={18} />
          </button>
        </div>

        {/* nav links */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          <p className="text-[10px] font-700 tracking-widest text-gray-400 uppercase px-2 mb-3">Menu</p>

          <nav className="flex flex-col gap-1">

            <Link href="/" onClick={close} className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold transition-colors ${pathname === "/" ? "bg-blue-50 text-blue-800" : "text-gray-700 hover:bg-gray-50"}`}>
              <span className={`w-8 h-8 flex items-center justify-center rounded-lg ${pathname === "/" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-500"}`}>
                <FiHome size={15} />
              </span>
              Home
            </Link>

            <Link href="/about" onClick={close} className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold transition-colors ${pathname === "/about" ? "bg-blue-50 text-blue-800" : "text-gray-700 hover:bg-gray-50"}`}>
              <span className={`w-8 h-8 flex items-center justify-center rounded-lg ${pathname === "/about" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-500"}`}>
                <FiInfo size={15} />
              </span>
              About Us
            </Link>

            {/* Services accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(p => !p)}
                className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 text-gray-500">
                  <FiBriefcase size={15} />
                </span>
                <span className="flex-1 text-left">Services</span>
                <FiChevronDown size={14} className={`text-gray-400 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {/* services list */}
              <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="ml-11 mt-1 flex flex-col gap-0.5 border-l-2 border-blue-100 pl-3">
                  {services.map((s, i) => (
                    <Link
                      key={i}
                      href={s.link}
                      onClick={close}
                      className={`text-sm py-2 px-2 rounded-lg transition-colors flex items-center gap-2 ${pathname === s.link ? "text-blue-700 font-semibold bg-blue-50" : "text-gray-600 hover:text-blue-700 hover:bg-blue-50"}`}
                    >
                      <FiChevronRight size={11} className="text-blue-300 flex-shrink-0" />
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/careers" onClick={close} className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold transition-colors ${pathname === "/careers" ? "bg-blue-50 text-blue-800" : "text-gray-700 hover:bg-gray-50"}`}>
              <span className={`w-8 h-8 flex items-center justify-center rounded-lg ${pathname === "/careers" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-500"}`}>
                <FiBookOpen size={15} />
              </span>
              Careers
            </Link>

            <Link href="/contact" onClick={close} className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold transition-colors ${pathname === "/contact" ? "bg-blue-50 text-blue-800" : "text-gray-700 hover:bg-gray-50"}`}>
              <span className={`w-8 h-8 flex items-center justify-center rounded-lg ${pathname === "/contact" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-500"}`}>
                <FiPhone size={15} />
              </span>
              Contact Us
            </Link>

          </nav>
        </div>

        {/* drawer footer — brochure CTA */}
        <div className="px-4 py-5 border-t border-gray-100">
          <Link href="/Brochure-Brainhunt-Ventures.pdf" target="_blank" onClick={close}>
            <div className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-900 text-white text-sm font-semibold hover:bg-blue-800 transition">
              <FiDownload size={15} />
              Download Brochure
            </div>
          </Link>
          <p className="text-center text-[10px] text-gray-400 mt-3">© {new Date().getFullYear()} BrainHunt Ventures</p>
        </div>

      </div>
    </>
  );
};

export default Navbar;