import Service from "@/components/Services/Service";
import Image from "next/image";
import { FaUserTie, FaSearch, FaMoneyCheckAlt, FaBalanceScale, FaChalkboardTeacher } from 'react-icons/fa';
import { MdWorkOutline, MdGroups, MdBusinessCenter } from 'react-icons/md';
import { GiDiscussion } from 'react-icons/gi';
import Line from "@/components/Line/Line";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/Header";
import TestimonialSlider from "@/components/Testimonial/TestimonialSlider";
import IndustryServe from "@/components/IndustryServe/IndustryServe";
import CTA from "@/components/CTA/CTA";
import Journey from "@/components/Journey/Journey";
import About from "@/components/About/about";
import Client from "@/components/Client/Client";


export default function Home() {

  const service = [
    {
      icon: <FaUserTie />,
      head: "HR Consulting ",
      desc: "We offer expert HR solutions to improve workforce management, compliance, and organizational effectiveness ",
      link: "/about"
    },
    {
      icon: <FaSearch />,
      head: "Recruitment and Executive Search ",
      desc: "From junior roles to leadership positions, we help you hire the best-fit candidates quickly and efficiently ",
      link: "/about"

    },
    {
      icon: <MdWorkOutline />,
      head: "Flexi Staffing ",
      desc: "Our flexible staffing services provide skilled professionals on-demand for short-term or project-based needs ",
      link: "/about"

    },
    {
      icon: <FaMoneyCheckAlt />,
      head: "Payroll Management ",
      desc: "Streamline payroll with our accurate, timely, and fully compliant payroll processing solutions ",
      link: "/about"

    },
    {
      icon: <FaBalanceScale />,
      head: "Statutory Compliances ",
      desc: "We ensure your business complies with labor laws and statutory regulations without the hassle ",
      link: "/about"

    },
    {
      icon: <FaChalkboardTeacher />,
      head: "Learning & Development ",
      desc: "Customized training programs to boost employee skills, leadership, and overall performance ",
      link: "/about"

    },
    {
      icon: <MdGroups />,
      head: "HR Outsourcing ",
      desc: "Outsource your entire HR function to us for expert handling of recruitment, compliance, and more",
      link: "/about"

    },
    {
      icon: <GiDiscussion />,
      head: "Career Assessment and Counseling ",
      desc: "We guide individuals in identifying the right career path based on their skills and interests",
      link: "/about"

    },
    {
      icon: <MdBusinessCenter />,
      head: "New Business Establishment & Licensing ",
      desc: "Complete support for business setup, registrations, and obtaining necessary licenses with ease",
      link: "/about"

    },
  ]
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Service Services={service} />
      <IndustryServe />
      <Journey />
      <Client />
      <TestimonialSlider />
      <CTA />




    </main>
  );
}
