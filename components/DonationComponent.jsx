import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const UnitingPak = () => {
  // Use the Intersection Observer hook to track when the element comes into view
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when it comes into view
    threshold: 0.3, // Trigger when 30% of the component is visible
  });

  return (
    <section className="py-16">
      <div className="bg-gray-50 rounded-3xl shadow-lg lg:p-12">
        <div className="flex flex-col lg:flex-row items-center p-6">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 lg:pr-20">
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-black mb-4">
              Donate in <span className="text-[#22C55E]">Gaza </span>
              <span className="text-red-500">Relief Activities</span>
            </h1>
            <p className="text-lg lg:text-xl my-4">
              SGC Relief Activities deals with all donations and relief efforts
              for the people of Palestine. Our goal is to help the people in
              need in any way possible and make whatever effort we can by
              donating clothes, food, medicine and money. We with our partner
              Shaib Abi Talib want to make the most difference.
            </p>
            <Link
              href="https://sgc-relief-activities-2st2.vercel.app/" // Replace with your donation site URL
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-green-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-red-700 transition m-8 
             sm:mx-auto sm:w-auto sm:text-base 
             md:text-lg md:px-8 
             lg:ml-16 lg:w-fit"
            >
              View Gaza Relief Activities
            </Link>
          </div>

          {/* Right Side - Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between mt-6 lg:mt-0">
            <div className="relative h-[300px] lg:h-[450px] lg:w-[450px] lg:ml-16">
              <Image
                src="/collag.png"
                alt="Save Gaza Campaign"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnitingPak;
