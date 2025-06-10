import Line from "../Line/Line";


import Image from "next/image";

const FounderSection = () => {
    return (
        <section className="bg-white py-12 px-4 md:px-16 flex flex-col  items-center gap-4 max-w-6xl mx-auto">
            <div className="text-center mb-4">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
                    Meet Our Founder
                </h2>
                <Line />
                <p className="text-gray-600 text-base md:text-lg max-w-4xl mx-auto">
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <div className="w-full md:w-1/3 flex justify-center">
                    <Image
                        src="/suhas-sir.webp"
                        alt="Founder of BrainHunt"
                        width={300}
                        height={300}
                        className="rounded-xl object-cover shadow-md"
                    />
                </div>
                <div className="w-full md:w-2/3 text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">Mr. Suhas Birewar</h2>
                    <p className="text-gray-600 text-md font-semibold mb-2">Founder & Managing Director, BrainHunt</p>
                    <p className="text-gray-700 mb-3">
                        Suhas Birewar is Director of Brainhunt Ventures Pvt. Ltd. and serving corporates at pan India level from last 20 yrs. in the area of Head-Hunting, Staffing and HR consulting. He is currently holding a position as Member - Central Region in National Council of NIPM.        </p>
                    <p className="text-gray-700 italic">
                        “A great company is built by great people. At BrainHunt, we’re committed to helping organizations find, develop, and retain them.”
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FounderSection;
