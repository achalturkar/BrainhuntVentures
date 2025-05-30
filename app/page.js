import Service from "@/components/Services/Service";
import Image from "next/image";
import { FaUserTie, FaSearch, FaMoneyCheckAlt, FaBalanceScale, FaChalkboardTeacher } from 'react-icons/fa';
import { MdWorkOutline, MdGroups, MdBusinessCenter } from 'react-icons/md';
import { GiDiscussion } from 'react-icons/gi';
import Line from "@/components/Line/Line";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/Header";
import TestimonialSlider from "@/components/Testimonial/TestimonialSlider";


export default function Home() {



  const service = [
    {
      icon: <FaUserTie />,
      head: "HR Consulting ",
      desc: "We offer expert HR solutions to improve workforce management, compliance, and organizational effectiveness "

    },
    {
      icon: <FaSearch />,
      head: "Recruitment and Executive Search ",
      desc: "From junior roles to leadership positions, we help you hire the best-fit candidates quickly and efficiently "

    },
    {
      icon: <MdWorkOutline />,
      head: "Flexi Staffing ",
      desc: "Our flexible staffing services provide skilled professionals on-demand for short-term or project-based needs "

    },
    {
      icon: <FaMoneyCheckAlt />,
      head: "Payroll Management ",
      desc: "Streamline payroll with our accurate, timely, and fully compliant payroll processing solutions "

    },
    {
      icon: <FaBalanceScale />,
      head: "Statutory Compliances ",
      desc: "We ensure your business complies with labor laws and statutory regulations without the hassle "

    },
    {
      icon: <FaChalkboardTeacher />,
      head: "Learning & Development ",
      desc: "Customized training programs to boost employee skills, leadership, and overall performance "

    },
    {
      icon: <MdGroups />,
      head: "HR Outsourcing ",
      desc: "Outsource your entire HR function to us for expert handling of recruitment, compliance, and more"

    },
    {
      icon: <GiDiscussion />,
      head: "Career Assessment and Counseling ",
      desc: "We guide individuals in identifying the right career path based on their skills and interests"

    },
    {
      icon: <MdBusinessCenter />,
      head: "New Business Establishment & Licensing ",
      desc: "Complete support for business setup, registrations, and obtaining necessary licenses with ease"

    },
  ]
  return (
    <main>
      <Navbar />
      <Header />


      <section  className="px-1 md:px-24 lg:px-36 my-8">

        <h1 className="text-3xl font-extrabold my-1 text-center">Our Services</h1>
        <Line />
        <p className="text-md font-semibold text-center my-1">We offer a complete range of HR services to streamline your operations and workforce management.
          From recruitment to compliance, we help you build a strong and future-ready organization.

        </p>

        <Service Services={service} />


      </section>


      <section>
        <TestimonialSlider />
      </section>

    </main>
  );
}
