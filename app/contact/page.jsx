import ContactPage from "@/components/ContactPage/ContactPage";
import HeroAll from "@/components/HeroAll/HeroAll";
import Map from "@/components/Map/Map";
import Head from "next/head";


const Contact = () => {


    return (
        <>


            <Head>
                <title>Brainhunt Ventures</title>
                <meta
                    name="description"
                    content=" Plot No.3, 2nd Floor, Indraprastha Apartment,
            Dronacharya Nagar, Trimurti Nagar,
            Nagpur – 440022, +91 9960224245  contact@brainhuntventures.com "
                />
                <meta
                    name="keywords"
                    content="contact Brainhunt Ventures, Brainhunt Ventures, recruitment company, global hiring, staffing agency, IT recruitment, contractual, freelancing, permanent job, HR consultancy, Non-IT recruitment"
                />
                <meta name="author" content="Brainhunt Ventures" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.brainhuntventures.com/contact" />

            </Head>

            <main>

                <HeroAll title="Contact Us" subtitle="Have questions or need a quote? Our experts are just a message away" />
                <ContactPage />


                <Map />
            </main>
        </>

    )
}

export default Contact;