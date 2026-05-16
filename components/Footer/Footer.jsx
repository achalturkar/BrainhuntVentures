import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const services = [
    { name: "Payroll Management", link: "/services/payrollmanagement" },
    { name: "Background Verification Services", link: "/services/backgroundverification" },
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
    <footer className="bg-gradient-to-b from-[#0b1c3d] to-[#08142b] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo + About */}
        <div className="flex flex-col items-start gap-4">
          <div className="bg-white p-3 rounded-xl shadow-lg w-fit">
            <Image
              src="/brainhunt-PNG.png"
              alt="BrainHunt Logo"
              width={110}
              height={110}
              priority
            />
          </div>

          <p className="text-sm text-gray-300 leading-relaxed">
            BrainHunt is your trusted partner in recruitment, delivering flexible
            workforce solutions across IT and non-IT industries.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-2">
            {[{ icon: FaFacebook, href: "#" }, { icon: FaTwitter, href: "#" }, { icon: FaInstagram, href: "https://www.instagram.com/brainhuntventures/" }, { icon: FaLinkedin, href: "https://www.linkedin.com/company/brainhunt-venture-pvt-ltd/" }].map((social, idx) => (
              <Link
                key={idx}
                href={social.href}
                target="_blank"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-400 transition"
              >
                <social.icon className="text-white text-lg" />
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4 relative after:absolute after:left-0 after:-bottom-1 after:w-10 after:h-[2px] after:bg-orange-400">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-orange-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-orange-400">About Us</Link></li>
            <li><Link href="/career" className="hover:text-orange-400">Career</Link></li>
            <li><Link href="/contact" className="hover:text-orange-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4 relative after:absolute after:left-0 after:-bottom-1 after:w-10 after:h-[2px] after:bg-orange-400">
            Services
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            {services.map((service, idx) => (
              <li key={idx}>
                <Link href={service.link} className="hover:text-orange-400">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Location */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold relative after:absolute after:left-0 after:-bottom-1 after:w-10 after:h-[2px] after:bg-orange-400">
            Location
          </h3>


          <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.88430598131!2d79.03895177503398!3d21.117178180554387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf2ae4ff6ed7%3A0x12145dd4c2123eb3!2sEffiman%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1778956874261!5m2!1sen!2sin"
            width="100%"
            height="150"
            className="rounded-lg mb-4 shadow-md"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <p className="text-sm text-gray-300 leading-relaxed">
            Plot No.3, 2nd Floor, Indraprastha Apartment,<br />
            Dronacharya Nagar, Trimurti Nagar,<br />
            Nagpur – 440022
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} BrainHunt. All rights reserved.
       
      </div>
       {/* FOOTER CREDIT */}
       <div className=" py-1 text-center text-[8px] text-gray-500 flex items-center justify-center gap-1">
  <span>Designed & Developed by</span>

  <a
    href="https://www.linkedin.com/in/achal-turkar/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-orange-200 hover:text-orange-100 transition-colors duration-200"
  >
    Achal Turkar
  </a>
</div>

    </footer>
  );
};

export default Footer;
