import ContactPage from "@/components/ContactPage/ContactPage";
import HeroAll from "@/components/HeroAll/HeroAll";
import Map from "@/components/Map/Map";



const Contact= () =>{


    return(
        <>
        <HeroAll title="Contact Us" subtitle="Have questions or need a quote? Our experts are just a message away"/>
        <ContactPage/>


        <Map/>
        </>

    )
}

export default Contact;