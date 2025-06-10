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
        <footer className="bg-blue-950 text-white pt-10">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
                {/* Logo and Description */}
                <div className="w-full md:w-1/4">
                    <Image
                        src="/brainhunt-PNG.png"
                        alt="BrainHunt Logo"
                        width={220}
                        height={220}
                        className="mb-4"
                    />
                    <p className="text-sm">
                        BrainHunt is your trusted partner in recruitment, offering flexible
                        solutions across IT and non-IT domains.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="w-full md:w-1/4 flex flex-col justify-start items-start lg:items-center">
                    <h2 className="font-semibold text-lg mb-2">Quick Links</h2>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-orange-300"   ><Link href="/">Home</Link></li>
                        <li className="hover:text-orange-300" ><Link href="/about">About Us</Link></li>
                        <li className="hover:text-orange-300" ><Link href="/career">Career</Link></li>
                        <li className="hover:text-orange-300"><Link href="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="w-full md:w-1/4">
                    <h2 className="font-semibold text-lg mb-2">Services</h2>
                    <ul className="space-y-2 text-sm">

                        {
                            services.map((service, idx) => (
                                <li key={idx}
                                    className="hover:text-orange-300"
                                ><Link href={service.link}>{service.name}</Link></li>


                            ))
                        }

                    </ul>
                </div>

                {/* Location & Social */}
                <div className="w-full md:w-1/4">
                    <h2 className="font-semibold text-lg mb-2">Location</h2>

                    <div className="mb-2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59550.22362981751!2d79.03258!3d21.116992!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bff5674e69c9%3A0x12a9cff078a1d491!2sDronacharya%20Nagar%2C%20Parsodi%2C%20Nagpur%2C%20Maharashtra%20440022!5e0!3m2!1sen!2sin!4v1749453007029!5m2!1sen!2sin"
                            width="300"
                            height="100"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>


                    <p className="text-sm mb-4">Plot No.3, 2nd Floor, Indraprastha Apartment,
                        Dronacharya Nagar, Nelco Society,
                        Trimurti Nagar, Nagpur- 440022</p>

                    <h2 className="font-semibold text-lg mb-2">Follow Us</h2>
                    <div className="flex gap-4 text-xl">
                        <Link href="https://facebook.com" target="_blank"><FaFacebook className="hover:text-blue-600" /></Link>
                        <Link href="https://twitter.com" target="_blank"><FaTwitter className="hover:text-sky-500" /></Link>
                        <Link href="https://instagram.com" target="_blank"><FaInstagram className="hover:text-pink-500" /></Link>
                        <Link href="https://www.linkedin.com/in/brainhunt-ventures/" target="_blank"><FaLinkedin className="hover:text-blue-700" /></Link>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-10 border-t border-gray-300 py-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} BrainHunt. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
