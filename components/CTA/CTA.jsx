import Link from "next/link";


const CTA = () =>{


    return(
        <div className="relative w-full bg-blue-950 p-8 flex flex-col justify-center items-center gap-4 mt-4"  data-aos="fade-up">
          
          <h1 className="text-3xl font-extrabold text-white text-center"> Looking for elite talent?</h1>
          <Link href="/contact"><button className="bg-orange-400  text-white text-xl  font-bold p-2 rounded-3xl hover:bg-orange-500 hover:-translate-y-1 hover:cursor-pointer ">Contact Our Experts</button>
          </Link>

          {/* <div className=" absolute w-10 h-10  lg:w-20 md:h-20 rounded-full bg-gray-50 -top-4 start-10 md:start-80"> */}

          {/* </div> */}


        </div>
    )
}

export default CTA;