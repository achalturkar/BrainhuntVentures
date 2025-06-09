import About from "@/components/About/about";

import HeroAll from "@/components/HeroAll/HeroAll";

const LearningAndDevelopment = () => {

    return (

        <>
            <HeroAll title="Learning & Development" subtitle="Boost performance with customized employee training and leadership programs" />
            <About img="/ld1.webp" head="Learning & Development" desc="We help businesses enhance workforce capability through structured training programs tailored to their specific needs. Our L&D team aligns learning goals with organizational KPIs." 
         desc1="From leadership training to technical upskilling, BrainHunt builds smarter teams ready to face tomorrow’s challenges."
         points={["Customized skill development programs", "Classroom, virtual, and hybrid learning models", "ROI-driven training with performance metrics", "Leadership, soft skills, and technical modules"]}
      />


        </>
    )
}

export default LearningAndDevelopment;