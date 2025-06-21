import HeroAll from "@/components/HeroAll/HeroAll";
import About from "@/components/About/about";
import Head from "next/head";
const HRConsulting = () => {


    return (

        <>

            <Head>
                <title>Brainhunt Ventures- HR Consulting</title>
                <meta
                    name="description"
                    content="Need talent for a short-term project or seasonal demand? BrainHunt’s flexi staffing lets you quickly onboard professionals on a fixed-term basis with minimal contractual hassles."
                />
                <meta
                    name="keywords"
                    content="HR, HrConsulting, flexistaffing, Brainhunt Ventures, recruitment company, global hiring, staffing agency, IT recruitment, contractual, freelancing, permanent job, HR consultancy, Non-IT recruitment"
                />
                <meta name="author" content="Brainhunt Ventures" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.brainhuntventures.com/HRConsulting" />

            </Head>

            <main>
                <HeroAll title="HR Consulting" subtitle="Strategic HR insights that drive organizational growth and innovation" />
                <About img="/hc.webp" head="HR Consulting" desc="From workforce planning to policy creation, BrainHunt offers expert HR advisory services that align people strategy with business goals. Our consultants help improve HR practices and ensure smooth operations."
                    desc1="Whether you're scaling, restructuring, or simply optimizing, we provide data-driven insights to support smarter HR decisions."
                    points={["Policy drafting and process consulting", "Organization structure and talent planning", "Performance management frameworks", "Strategic HR transformation advice"]}
                />
            </main>



        </>
    )
}

export default HRConsulting;