import Image from 'next/image';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const UnitingPak = () => {
  // Use the Intersection Observer hook to track when the element comes into view
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when it comes into view
    threshold: 0.3,    // Trigger when 30% of the component is visible
  });

  return (
    <section className="py-16">
      <div className="bg-gray-50 rounded-3xl shadow-lg lg:p-12">
        <div className="flex flex-col lg:flex-row items-center p-6">
          
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 lg:pr-20">
            <div className="relative h-64 lg:h-[400px]">
              <Image
                src="/unite.png"
                alt="Save Gaza Campaign"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between mt-6 lg:mt-0">
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-black mb-4">
              Uniting <span className="text-[#22C55E]">Pakistan</span>
            </h1>
            <p className="text-lg lg:text-xl my-4">
              Save Gaza Campaign, initiated in November 2023 by Ms. Humaira Tayyaba and a small group, burgeoned into a nationwide movement driven by the 
              solidarity of Pakistanis with the suffering Palestinians. Evolving from civil society roots, it swiftly gained momentum, organizing protests, 
              engaging diverse sectors, and expanding across Pakistan.
            </p>

            {/* Stats Section */}
            <div ref={ref} className="flex flex-col md:flex-row gap-12 mt-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-[#22C55E]">
                  {inView ? <CountUp end={370000} duration={3} separator="," /> : "0"}+
                </p>
                <p className="text-gray-600 font-semibold">Destroyed structures</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#22C55E]">
                  {inView ? <CountUp end={186500} duration={3} separator="," /> : "0"}+
                </p>
                <p className="text-gray-600 font-semibold">Lives lost</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnitingPak;
