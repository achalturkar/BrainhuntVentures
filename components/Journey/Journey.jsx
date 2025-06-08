
"use client"

import Line from "../Line/Line";
import CountUp from "react-countup";

const Journey = () => {
    const Circle = [
        { count: 23, title: "Years of Experience" },
        { count: 150, title: "Clients Served" },
        { count: 1500, title: "Employees Placed" },
        { count: 100, title: "Technologies Covered" },
        { count: 20, title: "Industries Served" },
    ];

    return (
        <section className="py-10 md:py-12 flex flex-col ">
            <div className="text-center mb-4">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
                    Key Highlights of Our Journey
                </h2>
                <Line/>
                <p className="text-gray-600 text-base md:text-lg max-w-4xl mx-auto">
                    Over the years, we’ve built a strong foundation through experience, client trust, and industry reach                </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-20 p-6">
                {Circle.map((each, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col  justify-center items-center text-blue-900"
                        >
                            <div className="rounded-full bg-orange-200 w-35 h-35 flex flex-col items-center justify-center text-center  shadow-md">
                                {/* <div className="text-4xl font-bold">{each.count}+</div> */}
                                 <p className="text-4xl font-bold ">
                                                        <CountUp
                                                            start={0}
                                                            end={each.count}
                                                            enableScrollSpy={true}
                                                            scrollSpyOnce="true "
                                                            suffix="+"
                                                        >
                                                            {({ countUpRef }) => <span ref={countUpRef} />}
                                                        </CountUp>
                                                    </p>
                            </div>
                            <h1 className="text-center text-xl font-bold mt-2 text-wrap max-W-10" >{each.title}</h1>
                        </div>
                    );
                })}

            </div>
        </section>
    );
};

export default Journey;
