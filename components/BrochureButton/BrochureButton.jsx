import Link from "next/link";



const BrochureButton = () => {


    return (
        <Link href="/Brochure-Brainhunt-Ventures.pdf" target="/blank">

            <div className=" lg:block p-1 rounded-md bg-blue-900 text-white px-4 text-xs font-light cursor-pointer hover:bg-blue-800 transition">
             Download Brochure

            </div>
        </Link>
    )
}

export default BrochureButton;