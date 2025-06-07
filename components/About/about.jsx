import Image from "next/image";
import Line from "../Line/Line";

const About = () => {

    return (
        <section className=" bg-blue-100  py-10 md:py-20 ">
            <div className="flex  flex-col md:flex-row justify-center items-center gap-4 px-2 md:px-10 lg:px-20  lg:mx-40 ">
                <div className="w-full md:w-1/2 flex justify-center items-center md:items-left">
                    <Image
                        src="/abt.webp"
                        alt="about"
                        width={400}
                        height={400}
                        className="rounded-xl"
                    />


                </div>


                <div className="w-full md:w-1/2 flex flex-col justify-center items-center">

                    <h2 className="text-2xl md:text-3xl text-black font-bold text-center">
                        Who are we?

                    </h2>
                    <br />
                    {/* <Line/> */}

                    <p className="text-gray-600 text-md ">
                        Established in 2003 in Nagpur, Brainhunt is a premier HR services organization and one of Central India’s most trusted names in human resource solutions. With a strong foundation built on deep industry knowledge and HR expertise, we have consistently delivered exceptional value to our clients across sectors.

                    </p>
                    <br />
                    <p className="text-gray-600 text-md ">
                        Our team is a dynamic blend of skilled Recruiters, HR Consultants, Payroll & Statutory Compliance Experts, Corporate Trainers, and Career Counsellors, all committed to driving results and shaping careers.
                    </p>

                </div>

            </div>


        </section>
    )

}
export default About;