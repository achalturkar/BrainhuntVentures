import Link from "next/link";



const BgvButton = () => {


    return (
        
        <Link href="/Brochure-Brainhunt-Ventures.pdf" target="/blank">

            <div className=" fixed bottom-50 right-0 p-1 bg-blue-600 text-white px-4 font-medium cursor-pointer hover:bg-blue-800 transition">
             Brochure
            </div>
        </Link>
    )
}

export default BgvButton;