import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
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
            {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, idx) => (
              <Link
                key={idx}
                href="#"
                target="_blank"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-400 transition"
              >
                <Icon className="text-white text-lg" />
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
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59550.22362981751!2d79.03258!3d21.116992!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bff5674e69c9%3A0x12a9cff078a1d491!2sDronacharya%20Nagar%2C%20Parsodi%2C%20Nagpur%2C%20Maharashtra%20440022!5e0!3m2!1sen!2sin!4v1749453007029!5m2!1sen!2sin"
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
    </footer>
  );
};

export default Footer;
