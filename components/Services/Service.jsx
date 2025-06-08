import Line from "../Line/Line";
import Link from "next/link";

const Service = ({ Services }) => {
    return (
        <section className="py-10 md:py-12 px-4 bg-gray-50">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight">
                    Services We Provide
                </h2>
                <Line />
                <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mt-2">
                    We offer a complete range of HR services to streamline your operations and workforce management.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {Services.map((each, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl p-6 flex flex-col justify-between items-center text-center hover:scale-[1.02] ease-in-out"
                    >
                        <div className="bg-orange-100 text-blue-900 text-4xl p-4 rounded-full mb-4">
                            {each.icon}
                        </div>
                        <h3 className="text-xl font-bold text-blue-800 mb-2">{each.head}</h3>
                        <p className="text-gray-600 text-sm mb-4">{each.desc}</p>
                        <Link href={each.link}>
                            <button className="mt-auto bg-orange-600 hover:bg-orange-700 text-white font-medium px-4 py-2 rounded-lg transition-colors hover:cursor">
                                Read More
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Service;
