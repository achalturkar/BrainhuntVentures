import Link from "next/link";



const BrochureButton = () => {


    return (
        <Link href="/Brochure-Brainhunt-Ventures.pdf" target="/blank">

            <div className=" lg:block p-2 rounded-full bg-blue-900 text-white px-4 font-medium cursor-pointer hover:bg-blue-800 transition">
                Brochure

            </div>
        </Link>
    )
}

export default BrochureButton;