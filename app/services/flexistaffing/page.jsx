
import HeroAll from "@/components/HeroAll/HeroAll";
import About from "@/components/About/about";
import Head from "next/head";
const FlexiStaffing = () => {



    return (

        <>

            <Head>
                <title>Brainhunt Ventures- Flexi Staffing</title>
                <meta
                    name="description"
                    content="Need talent for a short-term project or seasonal demand? BrainHunt’s flexi staffing lets you quickly onboard professionals on a fixed-term basis with minimal contractual hassles."
                />
                <meta
                    name="keywords"
                    content="staffing, flexistaffing, Brainhunt Ventures, recruitment company, global hiring, staffing agency, IT recruitment, contractual, freelancing, permanent job, HR consultancy, Non-IT recruitment"
                />
                <meta name="author" content="Brainhunt Ventures" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.brainhuntventures.com/FlexiStaffing" />

            </Head>

            <main>
                <HeroAll title="Flexi Staffing" subtitle="Scale your workforce with contract-based staffing to meet seasonal or project needs" />
                <About img="/fs.webp" head="Flexi Staffing" desc="Need talent for a short-term project or seasonal demand? BrainHunt’s flexi staffing lets you quickly onboard professionals on a fixed-term basis with minimal contractual hassles."
                    desc1="Employees are on our payroll, allowing you to scale up or down without worrying about statutory burdens or long-term commitments."
                    points={["Fast mobilization and demobilization", "Fast mobilization and demobilization", "Temporary-to-permanent hiring flexibility", "deal for peak demand and project-based roles"]}
                />

            </main>
        </>
    )
}

export default FlexiStaffing;