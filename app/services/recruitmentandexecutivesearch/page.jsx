import HeroAll from "@/components/HeroAll/HeroAll";
import About from "@/components/About/about";
import Head from "next/head";
const RecruitmentAndExecutiveSearch = () => {



    return (
        <>

            <Head>
                <title>Brainhunt Ventures- Recruitment & ExecutiveSearch</title>
                <meta
                    name="description"
                    content="Your company’s success depends on the talent you hire. BrainHunt helps you attract high-caliber professionals across IT and non-IT domains through targeted recruitment strategies."
                />
                <meta
                    name="keywords"
                    content="HR, Executive search, Recruitment , flexistaffing, Brainhunt Ventures, recruitment company, global hiring, staffing agency, IT recruitment, contractual, freelancing, permanent job, HR consultancy, Non-IT recruitment"
                />
                <meta name="author" content="Brainhunt Ventures" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.brainhuntventures.com/RecruitmentAndExecutiveSearch" />

            </Head>


            <main>
                <HeroAll title="Recruitment & Executive Search" subtitle="Hire the right people, faster – from entry-level to C-suite roles" />
                <About img="/es.webp" head="Recruitment & Executive Search" desc="Your company’s success depends on the talent you hire. BrainHunt helps you attract high-caliber professionals across IT and non-IT domains through targeted recruitment strategies."
                    desc1="Our two decades of hiring experience and access to a deep talent pool ensure that we find candidates who are not only qualified but also aligned with your company culture."
                    points={["Specialized hiring for IT, non-IT, and leadership roles", "Reduced time-to-hire and hiring costs", "Pre-screened, quality-checked candidate profiles", "Industry-specific sourcing and consulting"]}

                />

            </main>

        </>
    )
}

export default RecruitmentAndExecutiveSearch;