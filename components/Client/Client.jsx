import Image from "next/image";
import Line from "../Line/Line";

const Client = () => {
    const image = [
        { img: "/cc/hindalco.webp" },
        { img: "/cc/mm.webp" },
        { img: "/cc/ceat.png" },
        { img: "/cc/3cit.png" },
        { img: "/cc/aam-logo.svg" },
        { img: "/cc/ray.png" },
        { img: "/cc/trust.webp" },
        { img: "/cc/pb.svg" },
        { img: "/cc/lupin.png" },
        { img: "/cc/ext.svg" },
        { img: "/cc/excellon.webp" },
        { img: "/cc/beckers.svg" },
        { img: "/cc/calder.png" },
        { img: "/cc/14.webp" },
    ];

    return (
        <section className="py-10 md:py-12 px-4 text-center">
            <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
                    Our Trusted Clients
                </h2>
                <Line />
                <p className="text-gray-600 text-base md:text-lg max-w-4xl mx-auto">
                    We are proud to partner with a diverse range of clients across industries, delivering dependable HR and recruitment solutions tailored to their evolving needs.
                </p>
            </div>

            <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center justify-center list-none px-2 md:px-16 lg:px-24">
                {image.map((each, index) => (
                    <li
                        key={index}
                        className="flex justify-center items-center bg-blue-200 hover:bg-blue-300 border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
                        style={{ height: "140px", width: "140px" }}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={each.img}
                                alt="client logo"
                                layout="fill"
                                objectFit="contain"
                                className="p-2 hover:scale-110"
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Client;
