
import HeroAll from "@/components/HeroAll/HeroAll";
import About from "@/components/About/about";

const PayrollManagement = () =>{


    return(

        <>
            <HeroAll title="Payroll Management" subtitle="Streamline your payroll process while ensuring accuracy and legal complianceS" />
            
             <About img="/pm.webp" head="Payroll Management" desc="Efficient payroll processing is essential for smooth business operations and employee satisfaction. BrainHunt offers comprehensive payroll solutions that ensure employees are paid accurately and on time, while also meeting all government regulations."      
        desc1="Our automated system handles salary calculations, tax deductions, reimbursements, and full & final settlements with ease. This not only reduces HR workload but also minimizes errors and ensures transparency."
        points={["Automated salary processing and payslip generatio", "Statutory compliance with PF, ESI, TDS, and more", "Real-time HR dashboards for employers and employees", "Full support for tax declarations, reimbursements, and Form 16"]}
     />


        </>
    )
}

export default PayrollManagement;