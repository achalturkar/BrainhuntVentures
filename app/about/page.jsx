import AboutInfo from "@/components/AboutInfo/AboutInfo";
import CTA from "@/components/CTA/CTA";
import FounderSection from "@/components/FounderSection/FounderSection";
import HeroAll from "@/components/HeroAll/HeroAll";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Head from "next/head";


const AboutUs = () => {


    return (

        <>
            <Head>
                <title>About- Brainhunt Ventures</title>
                <meta
                    name="description"
                    content=" Established in 2003 in Nagpur, BrainHunt is one of Central India’s most trusted and experienced HR service providers. With over two decades of proven excellence, we specialize in offering comprehensive human resource solutions including recruitment, staffing, payroll management, compliance, HR consulting, and career counselling. Our mission is simple: to bridge the gap between skilled talent and growing organizations while ensuring operational efficiency, compliance, and cost savings."
                />
                <meta
                    name="keywords"
                    content="About Brainhunt Ventures, Brainhunt Ventures, recruitment company, global hiring, staffing agency, IT recruitment, contractual, freelancing, permanent job, HR consultancy, Non-IT recruitment"
                />
                <meta name="author" content="Brainhunt Ventures" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.brainhuntventures.com/about" />


            </Head>

            <main>
                <HeroAll title="About Us" subtitle="Bridging talent and opportunity with expert-driven, flexible HR services across India" />

                <AboutInfo img="/abt.webp" title="About Brainhunt" desc="Established in 2003 in Nagpur, BrainHunt is a premier HR services organization in Central India. With a skilled team of recruiters, HR consultants, compliance specialists, payroll managers, trainers, and career counsellors, we are known for our commitment to performance and client satisfaction."
                    desc1="We have built a solid reputation over two decades by delivering quality and cost-effective solutions across industries and functions."
                />

                <WhyChooseUs />

                <FounderSection />

                <CTA />

            </main>


        </>
    )
}

export default AboutUs;