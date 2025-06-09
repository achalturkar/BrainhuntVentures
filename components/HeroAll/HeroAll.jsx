import Link from "next/link";


const HeroAll = ({ title, subtitle }) => {

    return (
        <div className="w-full h-92 bg-[url('/hi.webp')] bg-cover bg-repeat-no bg-center object-fit">


            <div className="pl-8 md:pl-28 pt-28 flex font-semibold" data-aos="fade-up">
                <Link href="/"><h1 className="font-bold text-blue-900 pr-1">Home </h1></Link> / <p className="pl-1 text-green-700"> {title} </p>
            </div>

            <div className="flex flex-col items-center justify-center" data-aos="fade-up">
                <h1 className="text-4xl font-extrabold text-white pt-8 text-center">{title}</h1>
                <p className="text-lg font-semibold text-center text-white">{subtitle}</p>
            </div>
        </div>
    )
}

export default HeroAll;