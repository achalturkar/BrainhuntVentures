
import HeroAll from "@/components/HeroAll/HeroAll";
import About from "@/components/About/about";
import Head from "next/head";
const CareerAssestmentAndCounseling = () => {

    return (
        <>

            <Head>
                <title>Brainhunt Ventures- Career Assestment & Counseling</title>
                <meta
                    name="description"
                    content="We guide individuals to discover their strengths, assess their career paths, and take confident steps toward their future. Our counselors provide personalized insights based on industry expectations and aptitude.

Whether fresh graduates or working professionals, our services are designed to unlock career clarity."
                />
                <meta
                    name="keywords"
                    content="Brainhunt Ventures, careers,  recruitment company, global hiring, staffing agency, IT recruitment, contractual, freelancing, permanent job, HR consultancy, Non-IT recruitment"
                />
                <meta name="author" content="Brainhunt Ventures" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.brainhuntventures.com/CareerAssestmentAndCounseling" />

            </Head>

            <main>
                <HeroAll title="Career Assestment & Counseling" subtitle="Empower individuals to identify their strengths and build successful careers" />
                <About img="/ca1.webp" head="Career Assestment & Counseling" desc="We guide individuals to discover their strengths, assess their career paths, and take confident steps toward their future. Our counselors provide personalized insights based on industry expectations and aptitude."
                    desc1="Whether fresh graduates or working professionals, our services are designed to unlock career clarity."
                    points={["Personality and aptitude assessments", "One-on-one career counselling", "One-on-one career counselling", "College and stream selection guidance"]}
                />

            </main>


        </>
    )
}

export default CareerAssestmentAndCounseling;