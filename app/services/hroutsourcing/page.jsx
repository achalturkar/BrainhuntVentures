import About from "@/components/About/about";
import HeroAll from "@/components/HeroAll/HeroAll";
import Head from "next/head";
const HROutsourcing = () => {


    return (
        <>

            <Head>
                <title>Brainhunt Ventures- HR Outsourcing</title>
                <meta
                    name="description"
                    content="BrainHunt’s HR outsourcing model gives you access to expert-level HR services without the cost of maintaining an in-house department. We take care of HR operations so your team can focus on growth."
                />
                <meta
                    name="keywords"
                    content="HR, Outsourcing, HROutsourcing,  Brainhunt Ventures, recruitment company, global hiring, staffing agency, IT recruitment, contractual, freelancing, permanent job, HR consultancy, Non-IT recruitment"
                />
                <meta name="author" content="Brainhunt Ventures" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.brainhuntventures.com/HROutsourcing" />

            </Head>

            <main>
                <HeroAll title="HR Outsourcing" subtitle="Delegate your HR operations to experts and reduce cost, risk, and burden" />
                <About img="/ho.webp" head="HR Outsourcing" desc="BrainHunt’s HR outsourcing model gives you access to expert-level HR services without the cost of maintaining an in-house department. We take care of HR operations so your team can focus on growth."
                    desc1="From payroll and compliance to hiring and employee engagement, our solutions help reduce costs, increase efficiency, and ensure legal compliance."
                    points={["Reduced HR operational costs and risks", "Access to expert systems and advisory", "Scalable support for growing teams", "Increased speed and accuracy in HR delivery"]}
                />



            </main>



        </>
    )
}
export default HROutsourcing;