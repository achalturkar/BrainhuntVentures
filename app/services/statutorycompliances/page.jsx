import HeroAll from "@/components/HeroAll/HeroAll";
import About from "@/components/About/about";
import Head from "next/head";
const StatutoryCompilances = () => {



    return (
        <>

         <Head>
                <title>Brainhunt Ventures-Statutory Compilances</title>
                <meta
                    name="description"
                    content="Navigating complex labor laws can be challenging. BrainHunt ensures that your organization complies with all applicable labor and tax regulations, reducing risk and avoiding penalties."
                />
                <meta
                    name="keywords"
                    content="HR, StatutoryCompilances, law, Recruitment , flexistaffing, Brainhunt Ventures, recruitment company, global hiring, staffing agency, IT recruitment, contractual, freelancing, permanent job, HR consultancy, Non-IT recruitment"
                />
                <meta name="author" content="Brainhunt Ventures" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.brainhuntventures.com/StatutoryCompilances" />

            </Head>


        <main>
            <HeroAll title="Statutory Compilances" subtitle="We handle your legal obligations so you can focus on growing your business" />
            <About img="/sc.webp" head="Statutory Compilances" desc="Navigating complex labor laws can be challenging. BrainHunt ensures that your organization complies with all applicable labor and tax regulations, reducing risk and avoiding penalties."
                desc1="We handle every compliance aspect — from PF and ESI to Gratuity, Professional Tax, and Labour Welfare Fund — ensuring your business remains legally sound and audit-ready."
                points={["End-to-end PF, ESI, and PT compliance", "Gratuity and statutory bonus calculations", "Labor Welfare Fund management", "Timely filing and document support for inspections"]}
            />
   </main>

        </>
    )
}

export default StatutoryCompilances;