
import HeroAll from "@/components/HeroAll/HeroAll";
import JobTable from "@/components/JobTable/JobTable";
import Head from "next/head";

const Careers = () => {


    return (

        <>

            <Head>
                <title>Careers- Brainhunt Ventures</title>
                <meta
                    name="description"
                    content="Discover exciting career opportunities at Brainhunt Ventures. Join our team of innovative professionals and build a future with impact. "
                />
                <meta
                    name="keywords"
                    content="careers Brainhunt Ventures, Brainhunt Ventures, job, nagpur, careers, electrical. automobile,  recruitment company, global hiring, staffing agency, IT recruitment, contractual, freelancing, permanent job, HR consultancy, Non-IT recruitment"
                />
                <meta name="author" content="Brainhunt Ventures" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.brainhuntventures.com/careers" />

            </Head>
            <main>
                <HeroAll title=" Careers" subtitle="Be part of a mission-driven team that’s changing the future of HR services" />

                <JobTable />
            </main>
        </>
    )
}

export default Careers;