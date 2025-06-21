import About from "@/components/About/about";
import Head from "next/head";
import HeroAll from "@/components/HeroAll/HeroAll";

const LearningAndDevelopment = () => {

    return (

        <>

            <Head>
                <title>Brainhunt Ventures-Learning & Development</title>
                <meta
                    name="description"
                    content="We help businesses enhance workforce capability through structured training programs tailored to their specific needs. Our L&D team aligns learning goals with organizational KPIs."
                />
                <meta
                    name="keywords"
                    content="HR, Learning, Development,   Brainhunt Ventures, recruitment company, global hiring, staffing agency, IT recruitment, contractual, freelancing, permanent job, HR consultancy, Non-IT recruitment"
                />
                <meta name="author" content="Brainhunt Ventures" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.brainhuntventures.com/LearningAndDevelopment" />

            </Head>


        <main>
            <HeroAll title="Learning & Development" subtitle="Boost performance with customized employee training and leadership programs" />
            <About img="/ld1.webp" head="Learning & Development" desc="We help businesses enhance workforce capability through structured training programs tailored to their specific needs. Our L&D team aligns learning goals with organizational KPIs." 
         desc1="From leadership training to technical upskilling, BrainHunt builds smarter teams ready to face tomorrow’s challenges."
         points={["Customized skill development programs", "Classroom, virtual, and hybrid learning models", "ROI-driven training with performance metrics", "Leadership, soft skills, and technical modules"]}
      />

      </main>


        </>
    )
}

export default LearningAndDevelopment;