import HeroAll from "@/components/HeroAll/HeroAll";
import About from "@/components/About/about";

const HRConsulting = () => {


    return (

        <>
            <HeroAll title="HR Consulting" subtitle="Strategic HR insights that drive organizational growth and innovation" />
            <About img="/hc.webp" head="HR Consulting" desc="From workforce planning to policy creation, BrainHunt offers expert HR advisory services that align people strategy with business goals. Our consultants help improve HR practices and ensure smooth operations."
                desc1="Whether you're scaling, restructuring, or simply optimizing, we provide data-driven insights to support smarter HR decisions."
                points={["Policy drafting and process consulting", "Organization structure and talent planning", "Performance management frameworks", "Strategic HR transformation advice"]}
            />


        </>
    )
}

export default HRConsulting;