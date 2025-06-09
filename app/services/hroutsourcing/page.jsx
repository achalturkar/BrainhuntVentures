import About from "@/components/About/about";
import HeroAll from "@/components/HeroAll/HeroAll";

const HROutsourcing = () => {


    return (
        <>
            <HeroAll title="HR Outsourcing" subtitle="Delegate your HR operations to experts and reduce cost, risk, and burden" />
            <About img="/ho.webp" head="HR Outsourcing" desc="BrainHunt’s HR outsourcing model gives you access to expert-level HR services without the cost of maintaining an in-house department. We take care of HR operations so your team can focus on growth." 
         desc1="From payroll and compliance to hiring and employee engagement, our solutions help reduce costs, increase efficiency, and ensure legal compliance."
         points={["Reduced HR operational costs and risks", "Access to expert systems and advisory", "Scalable support for growing teams", "Increased speed and accuracy in HR delivery"]}
      />


        </>
    )
}
export default HROutsourcing;