import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";

const WhyChooseUs = () => {
  const reasons = [
    "20+ years of HR industry experience",
    "Zero non-compliance risk with full legal support",
    "Dedicated experts across IT & non-IT hiring",
    "Cost-effective and scalable HR solutions",
    "Trusted by 100+ clients across India",
    "Strong expertise in NAPS & NATS apprenticeship programs",
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Image */}
        <div className="w-full md:w-1/2 flex flex-col justify-right items-center">
          <Image
            src="/fs.webp" 
            alt="Why Choose BrainHunt"
            width={400}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Choose BrainHunt?</h2>
          <p className="text-gray-700 mb-4">
            At BrainHunt, we combine industry knowledge, expert teams, and compliance-first processes to deliver reliable, customized HR solutions. Our focus is always on building long-term client relationships based on transparency and performance.
          </p>

          <ul className="space-y-3">
            {reasons.map((reason, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-800 text-md">
                <FaRegCheckCircle className="text-green-600 mt-1" />
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
