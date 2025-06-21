import HeroAll from "@/components/HeroAll/HeroAll";
import About from "@/components/About/about";
import Head from "next/head";
const BusinessEstablishmentAndLicencing = () => {



    return (
        <>

            <Head>
                <title>Brainhunt Ventures- Business Establishment & Licencing</title>
                <meta
                    name="description"
                    content="Starting a business? We simplify the legal formalities of launching and registering your business and securing required licenses with full support and documentation.
Whether it’s a Pvt Ltd company, MSME registration, or FSSAI license, we take care of the compliance burden so you can focus on growth."
                />
                <meta
                    name="keywords"
                    content="Brainhunt Ventures, recruitment company, global hiring, staffing agency, IT recruitment, contractual, freelancing, permanent job, HR consultancy, Non-IT recruitment"
                />
                <meta name="author" content="Brainhunt Ventures" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.brainhuntventures.com/BusinessEstablishmentAndLicencing" />

            </Head>


            <main>

                <HeroAll title="Business Establishment" subtitle="End-to-end support to launch and run your business legally and efficiently" />
                <About img="/be.webp" head="Business Establishment" desc="Starting a business? We simplify the legal formalities of launching and registering your business and securing required licenses with full support and documentation."
                    desc1="Whether it’s a Pvt Ltd company, MSME registration, or FSSAI license, we take care of the compliance burden so you can focus on growth."
                    points={["Company registrations: Pvt Ltd, LLP, OPC, etc.", "License assistance: FSSAI, IEC, MSME, Shops Act", "License assistance: FSSAI, IEC, MSME, Shops Act", "Timely renewals and compliance updates"]}
                />
            </main>

        </>
    )
}

export default BusinessEstablishmentAndLicencing;