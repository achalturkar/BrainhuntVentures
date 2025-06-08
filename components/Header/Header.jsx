import Link from "next/link";

const Header = () => {
    return (
        <div className="bg-[url('/bh.webp')] bg-cover bg-no-repeat bg-left md:bg-right lg:bg-center min-h-screen flex items-center px-6 sm:px-10 lg:px-20">
            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                    Your Strategic Partner for HR, Staffing & Compliance
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-white max-w-xl mx-auto md:mx-0">
                    At Brainhunt, we deliver tailored HR solutions that simplify staffing, streamline compliance, and empower your business to grow with the right talent—fast, reliable, and efficient.

                </p>

                <Link href="/contact">
                <button className="p-2 bg-blue-900 text-white font-semibold rounded-lg text-lg hover:cursor-pointer">Connect Us</button>
                
                </Link>
            </div>
        </div>
    );
};

export default Header;
