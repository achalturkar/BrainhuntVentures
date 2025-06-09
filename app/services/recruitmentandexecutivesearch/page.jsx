import HeroAll from "@/components/HeroAll/HeroAll";
import About from "@/components/About/about";
const RecruitmentAndExecutiveSearch = () => {



    return (
        <>
            <HeroAll title="Recruitment & Executive Search" subtitle="Hire the right people, faster – from entry-level to C-suite roles" />
            <About img="/es.webp" head="Recruitment & Executive Search" desc="Your company’s success depends on the talent you hire. BrainHunt helps you attract high-caliber professionals across IT and non-IT domains through targeted recruitment strategies."
                desc1="Our two decades of hiring experience and access to a deep talent pool ensure that we find candidates who are not only qualified but also aligned with your company culture."
              points={["Specialized hiring for IT, non-IT, and leadership roles", "Reduced time-to-hire and hiring costs", "Pre-screened, quality-checked candidate profiles", "Industry-specific sourcing and consulting"]}
            
            />

        </>
    )
}

export default RecruitmentAndExecutiveSearch;