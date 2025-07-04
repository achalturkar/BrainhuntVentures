import Link from "next/link";

// bg-[url('/bsk.svg')]

const CTA = () =>{


    return(
        <div className=" w-full bg-[url('/cta.webp')]  p-12 flex flex-col justify-center items-center bg-cover bg-center bg-fit gap-4  bg-no-repeat "  data-aos="fade-up">
          
          <h1 className="text-3xl font-extrabold text-white text-center">Get Started with BrainHunt</h1>
          <Link href="/contact"><button className="bg-orange-400  text-white text-xl  font-bold px-3 py-2 rounded-3xl hover:bg-orange-500 hover:-translate-y-1 hover:cursor-pointer ">Contact Us</button>
          </Link>


        </div>
    )
}

export default CTA;