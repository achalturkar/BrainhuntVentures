
import HeroAll from "@/components/HeroAll/HeroAll";
import About from "@/components/About/about";

const CareerAssestmentAndCounseling = () => {

    return (
        <>
            <HeroAll title="Career Assestment & Counseling" subtitle="Empower individuals to identify their strengths and build successful careers" />
            <About img="/ca1.webp" head="Career Assestment & Counseling" desc="We guide individuals to discover their strengths, assess their career paths, and take confident steps toward their future. Our counselors provide personalized insights based on industry expectations and aptitude."
                desc1="Whether fresh graduates or working professionals, our services are designed to unlock career clarity."
                points={["Personality and aptitude assessments", "One-on-one career counselling", "One-on-one career counselling","College and stream selection guidance"]}
            />


        </>
    )
}

export default CareerAssestmentAndCounseling;