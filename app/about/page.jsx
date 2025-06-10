import AboutInfo from "@/components/AboutInfo/AboutInfo";
import CTA from "@/components/CTA/CTA";
import FounderSection from "@/components/FounderSection/FounderSection";
import HeroAll from "@/components/HeroAll/HeroAll";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";



const AboutUs = () => {


    return (

        <>
            <HeroAll title="About Us" subtitle="Bridging talent and opportunity with expert-driven, flexible HR services across India" />
            
            <AboutInfo img="/abt.webp" title="About Brainhunt" desc="Established in 2003 in Nagpur, BrainHunt is a premier HR services organization in Central India. With a skilled team of recruiters, HR consultants, compliance specialists, payroll managers, trainers, and career counsellors, we are known for our commitment to performance and client satisfaction."
            desc1="We have built a solid reputation over two decades by delivering quality and cost-effective solutions across industries and functions."
            />

            <WhyChooseUs/>

            <FounderSection/>

            <CTA/>

        </>
    )
}

export default AboutUs;