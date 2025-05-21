"use client"
import CountUp from "react-countup";

const NumberCounter = () => {

    return (
        <section className="bg-[url('/c1.svg')] text-white p-16 bg-cover bg-no-repeat ">

            <div className=" flex flex-col md:flex-row md:px-12  lg:px-28 justify-around items-center flex-wrap space-y-4  ">

                <div className="flex flex-col justify-center items-center gap-2 "data-aos="fade-up">
                    <p className="text-3xl font-bold ">
                        <CountUp
                            start={0}
                            end={15}
                            enableScrollSpy={true}
                            scrollSpyOnce="true "
                            suffix="+"
                        >
                            {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>
                    </p>
                    <div className="border border-2 bg-orange-500 w-24 "></div>
                    <p className="text-xl font-bold ">Years Of Experience</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2" data-aos="fade-up">
                    <p className="text-3xl font-bold ">
                        <CountUp
                            start={0}
                            end={120}
                            enableScrollSpy={true}
                            scrollSpyOnce="true "
                            suffix="+"
                        >
                            {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>
                    </p>
                    <div className="border border-2 bg-orange-500 w-24 "></div>
                    <p className="text-xl font-bold ">Clients Served </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2" data-aos="fade-up">
                    <p className="text-3xl font-bold ">
                        <CountUp
                            start={0}
                            end={900}
                            enableScrollSpy={true}
                            scrollSpyOnce="true "
                            suffix="+"
                        >
                            {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>
                    </p>
                    <div className="border border-2 bg-orange-500 w-24 "></div>
                    <p className="text-xl font-bold ">Team Integration </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2" data-aos="fade-up">
                    <p className="text-3xl font-bold ">
                        <CountUp
                            start={0}
                            end={30}
                            enableScrollSpy={true}
                            scrollSpyOnce="true "
                            suffix="+"
                        >
                            {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>
                    </p>
                    <div className="border border-2 bg-orange-500 w-24 "></div>
                    <p className="text-xl font-bold ">Team Members</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2" data-aos="fade-up">
                    <p className="text-3xl font-bold ">
                        <CountUp
                            start={0}
                            end={95}
                            enableScrollSpy={true}
                            scrollSpyOnce="true "
                            suffix="%"
                        >
                            {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>
                    </p>
                    <div className="border border-2 bg-orange-500 w-24 "></div>
                    <p className="text-xl font-bold ">Client Retention Rate</p>
                </div>
                
              
              
            </div>
        </section>
    )

}

export default NumberCounter;