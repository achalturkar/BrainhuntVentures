import Link from "next/link";



const BgvButton = () => {


    return (
        <Link href="/BVPL Background-Verification-Services.pdf" target="/blank">

            <div className=" fixed bottom-50 right-0 p-1 bg-blue-600 text-white px-4 font-medium cursor-pointer hover:bg-blue-800 transition">
            BGV Brochure
            </div>
        </Link>
    )
}

export default BgvButton;