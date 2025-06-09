import Image from "next/image";
import Line from "../Line/Line";
import { IoMdCheckmarkCircle } from "react-icons/io";


const About = ({ img, head, desc, desc1, points }) => {
    return (
        <section className="bg-blue-50 py-10 md:py-12">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4 md:px-10 lg:px-16 max-w-7xl mx-auto">

                {/* Left Image */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-right">
                    <Image
                        src={img}
                        alt={head}
                        width={400}
                        height={400}
                        className="rounded-xl object-cover"
                    />
                </div>

                {/* Right Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-start text-left">
                    <h2 className="text-2xl md:text-4xl text-black font-bold mb-2">
                        {head}
                    </h2>
                    {/* <Line className="mb-4" /> */}
                    <p className="text-gray-700 text-md mb-3">{desc}</p>
                    <p className="text-gray-700 text-md mb-4">{desc1}</p>

                    {points && points.length > 0 && (
                        <ul className=" pl-5 space-y-2 text-gray-800">
                            {points.map((point, index) => (
                                <li key={index} className="text-md font-semibold text-gray-600 flex gap-2 items-center">
                                    <IoMdCheckmarkCircle  className="text-blue-950 text-xl"/>
                                    {point}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
};

export default About;
