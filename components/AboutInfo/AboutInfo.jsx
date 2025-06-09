
import Image from "next/image";

const AboutInfo = ({ img, title, desc, desc1 }) => {


    return (
        <div className=" flex flex-col md:flex-row justify-around items-center p-2">

            <div className="w-full md:w-1/2 flex flex-col justify-right items-center ">

                <Image
                    src={img}
                    alt="info"
                    width={400}
                    height={350}
                    className=" "

                />


            </div>

            <div className="w-full md:w-1/2">

                <h1 className="text-xl font-bold ">{title}</h1>


                <p className="text-md ">{desc}</p>
                <p className="text-md ">{desc1}</p>



            </div>


        </div>
    )
}

export default AboutInfo;