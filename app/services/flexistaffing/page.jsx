
import HeroAll from "@/components/HeroAll/HeroAll";
import About from "@/components/About/about";

const FlexiStaffing = () => {



    return (

        <>
            <HeroAll title="Flexi Staffing" subtitle="Scale your workforce with contract-based staffing to meet seasonal or project needs" />
            <About img="/fs.webp" head="Flexi Staffing" desc="Need talent for a short-term project or seasonal demand? BrainHunt’s flexi staffing lets you quickly onboard professionals on a fixed-term basis with minimal contractual hassles."
                desc1="Employees are on our payroll, allowing you to scale up or down without worrying about statutory burdens or long-term commitments."
                points={["Fast mobilization and demobilization", "Fast mobilization and demobilization", "Temporary-to-permanent hiring flexibility", "deal for peak demand and project-based roles"]}
            />


        </>
    )
}

export default FlexiStaffing;