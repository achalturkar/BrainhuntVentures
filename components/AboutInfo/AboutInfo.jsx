import Image from "next/image";

const AboutInfo = () => {
    return (
        <section className="bg-blue-50 py-12 px-4 md:px-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">

                {/* Image */}
                <div className="w-full md:w-1/2 flex flex-col justify-right items-center">
                    <Image
                        src="/abt.webp"
                        alt="BrainHunt Team"
                        width={500}
                        height={400}
                        className="rounded-lg shadow-md"
                    />
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 text-left">
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">About BrainHunt</h2>
                    <p className="text-gray-700 mb-4">
                        Established in 2003 in Nagpur, BrainHunt is one of Central India’s most trusted and experienced HR service providers. With over two decades of proven excellence, we specialize in offering comprehensive human resource solutions including recruitment, staffing, payroll management, compliance, HR consulting, and career counselling. Our mission is simple: to bridge the gap between skilled talent and growing organizations while ensuring operational efficiency, compliance, and cost savings.          </p>
                    <p className="text-gray-700 mb-4">
                        From serving small businesses to large enterprises across India, we’ve built our reputation on the pillars of integrity, agility, and client-centricity. With a diverse team of seasoned HR professionals, recruiters, payroll managers, compliance officers, and trainers, we customize our services to fit the specific needs of both IT and non-IT sectors. Whether you require executive hiring, contract staffing, statutory compliance, or digital HR transformation, BrainHunt brings unmatched domain expertise and operational scale to every engagement.          </p>
                    <p className="text-gray-700">
                        In addition to corporate HR services, BrainHunt actively supports national skill development through government-backed programs like NAPS (National Apprenticeship Promotion Scheme) and NATS (National Apprenticeship Training Scheme). These initiatives allow organizations to onboard apprentices with significant financial benefits, including government reimbursement of stipends and reduced compliance liabilities. As a registered facilitator, BrainHunt helps employers leverage these schemes effectively—promoting youth employability while meeting workforce needs at reduced cost. </p>        </div>
            </div>
        </section>
    );
};

export default AboutInfo;
