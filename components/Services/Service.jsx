import Line from "../Line/Line";
import Link from "next/link";
import { FaUserTie, FaSearch, FaMoneyCheckAlt, FaBalanceScale, FaChalkboardTeacher } from 'react-icons/fa';
import { MdWorkOutline, MdGroups, MdBusinessCenter } from 'react-icons/md';
import { GiDiscussion } from 'react-icons/gi';

const Service = () => {

    const services = [
        {
            icon: <FaUserTie />,
            head: "HR Consulting ",
            desc: "We offer expert HR solutions to improve workforce management, compliance, and organizational effectiveness ",
            link: "/services/hrconsulting"
        },
        {
            icon: <FaSearch />,
            head: "Recruitment and Executive Search ",
            desc: "From junior roles to leadership positions, we help you hire the best-fit candidates quickly and efficiently ",
            link: "/services/recruitmentandexecutivesearch"

        },
        {
            icon: <MdWorkOutline />,
            head: "Flexi Staffing ",
            desc: "Our flexible staffing services provide skilled professionals on-demand for short-term or project-based needs ",
            link: "/services/flexistaffing"

        },
        {
            icon: <FaMoneyCheckAlt />,
            head: "Payroll Management ",
            desc: "Streamline payroll with our accurate, timely, and fully compliant payroll processing solutions ",
            link: "/services/payrollmanagement"

        },
        {
            icon: <FaBalanceScale />,
            head: "Statutory Compliances ",
            desc: "We ensure your business complies with labor laws and statutory regulations without the hassle ",
            link: "/services/statutorycompliances"

        },
        {
            icon: <FaChalkboardTeacher />,
            head: "Learning & Development ",
            desc: "Customized training programs to boost employee skills, leadership, and overall performance ",
            link: "/services/learninganddevelopment"

        },
        {
            icon: <MdGroups />,
            head: "HR Outsourcing ",
            desc: "Outsource your entire HR function to us for expert handling of recruitment, compliance, and more",
            link: "/services/hroutsourcing"

        },
        {
            icon: <GiDiscussion />,
            head: "Career Assessment and Counseling ",
            desc: "We guide individuals in identifying the right career path based on their skills and interests",
            link: "/services/careerassessmentandcounselling"

        },
        {
            icon: <MdBusinessCenter />,
            head: "New Business Establishment & Licensing ",
            desc: "Complete support for business setup, registrations, and obtaining necessary licenses with ease",
            link: "/services/businessestablishmentandlicensing"

        },
    ]

    return (
        <section className="py-10 md:py-12 px-4 bg-gray-50">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight">
                    Services We Provide
                </h2>
                <Line />
                <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mt-2">
                    We offer a complete range of HR services to streamline your operations and workforce management.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {services.map((each, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl p-6 flex flex-col justify-between items-center text-center hover:scale-[1.02] ease-in-out"
                    >
                        <div className="bg-orange-100 text-blue-900 text-4xl p-4 rounded-full mb-4">
                            {each.icon}
                        </div>
                        <h3 className="text-xl font-bold text-blue-800 mb-2">{each.head}</h3>
                        <p className="text-gray-600 text-sm mb-4">{each.desc}</p>
                        <Link href={each.link}>
                            <button className="mt-auto bg-orange-600 hover:bg-orange-700 text-white font-medium px-4 py-2 rounded-lg transition-colors hover:cursor-pointer">
                                Read More
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Service;
