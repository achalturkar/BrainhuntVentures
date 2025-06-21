import Service from "@/components/Services/Service";
import Image from "next/image";

import Line from "@/components/Line/Line";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/Header";
import TestimonialSlider from "@/components/Testimonial/TestimonialSlider";
import IndustryServe from "@/components/IndustryServe/IndustryServe";
import CTA from "@/components/CTA/CTA";
import Journey from "@/components/Journey/Journey";
import About from "@/components/About/about";
import Client from "@/components/Client/Client";
import Head from "next/head";

export default function Home() {


  return (
    
  <>
    <Head>
      <title>Brainhunt Ventures</title>
      <meta
        name="description"
        content="Established in 2003, BrainHunt is a trusted HR services provider based in Nagpur, offering comprehensive recruitment, payroll, and compliance solutions. With a dynamic team of HR professionals, recruiters, consultants, and trainers, we bring deep industry expertise to deliver tailored solutions for both IT and non-IT sectors."
      />
      <meta
        name="keywords"
        content="Brainhunt Ventures, recruitment company, global hiring, staffing agency, IT recruitment, contractual, freelancing, permanent job, HR consultancy, Non-IT recruitment"
      />
      <meta name="author" content="Brainhunt Ventures" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.brainhuntventures.com/" />

      </Head>

      <main>
        <Navbar />
        <Header />
        <About img="/abt.webp" head="Who Are We?" desc="Established in 2003, BrainHunt is a trusted HR services provider based in Nagpur, offering comprehensive recruitment, payroll, and compliance solutions. With a dynamic team of HR professionals, recruiters, consultants, and trainers, we bring deep industry expertise to deliver tailored solutions for both IT and non-IT sectors."
          desc1="Our approach combines experience, technology, and people-centric strategies to meet the evolving needs of modern businesses. From startups to enterprises, we empower organizations to scale efficiently, stay compliant, and build strong employer brands through strategic HR support."
          points={["Seamless onboarding and workforce integration", "Consistent service delivery with zero downtime", "Data-driven insights for smarter HR decisions", "Focused support for employer branding and retention"]}
        />
        <Service />
        <IndustryServe />
        <Journey />
        <Client />
        {/* <TestimonialSlider /> */}
        <CTA />

      </main>

  </>

  );
}
