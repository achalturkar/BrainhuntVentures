import Link from "next/link";

const CTA = () => {
  return (
    <section
      className="relative w-full bg-[url('/cta.webp')] bg-cover bg-center bg-no-repeat"
      data-aos="zoom-in"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-950/80"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 py-20 text-center flex flex-col items-center gap-6">

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          Build Your Workforce with <span className="text-orange-400">BrainHunt</span>
        </h1>

        <p className="text-gray-200 text-base md:text-lg max-w-2xl">
          From recruitment to HR outsourcing, we help businesses find the right talent
          faster and smarter.
        </p>

        <Link href="/contact">
          <button
            className="
              mt-4 px-8 py-3 rounded-full text-lg font-bold text-white
              bg-gradient-to-r from-orange-400 to-orange-500
              hover:from-orange-500 hover:to-orange-600
              transform transition-all duration-300
              hover:-translate-y-1 hover:shadow-xl
              focus:outline-none
            "
          >
            Get in Touch →
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
