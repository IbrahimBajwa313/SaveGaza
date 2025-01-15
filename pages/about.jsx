import React from "react";
import Image from "next/image";
import ContactAndSubscribe from "@/components/ContactAndSubscribe";
import Wrapper from "@/components/Wrapper";
import About from "@/components/About"; 

// pages/about.js

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Wrapper>
        {/* Main Content */}
        <main className="container mx-auto px-4 py-4 space-y-10">
          <About />
          <section className="bg-white p-4 md:p-6 rounded-3xl shadow-md">
            <h2 className="font-extrabold text-center text-xl sm:text-2xl lg:text-3xl mb-4">
              Our Mission and Vision
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
              <div className="flex justify-center md:col-span-1">
                <Image
                  src="/dchowk2.jpg"
                  alt="About Us Image"
                  width={450}
                  height={350}
                  className="rounded-2xl object-cover max-w-full"
                />
              </div>
              <div className="md:col-span-1 mt-8 md:pr-8">
                <h3 className="font-extrabold text-lg sm:text-xl mb-3 text-[#22C55E]">
                  Our Mission
                </h3>
                <p className="text-sm sm:text-base mb-3">
                  Our mission is to stand in solidarity with the people of Gaza
                  by raising global awareness about the humanitarian crisis they
                  face. Through protests, educational initiatives, and
                  partnerships with influential leaders, we strive to shed light
                  on the injustices in Palestine and inspire meaningful actions
                  that promote peace, justice, and relief.
                </p>
                <h3 className="font-extrabold text-lg sm:text-xl mb-3 text-[#22C55E]">
                  Our Vision
                </h3>
                <p className="text-sm sm:text-base mb-3">
                  We envision a world where global solidarity and collective
                  efforts lead to the restoration of justice and dignity for the
                  people of Gaza. By mobilizing communities, fostering
                  awareness, and engaging in impactful activities, we aim to
                  create a future where every individual stands united for human
                  rights and lasting peace.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Leader */}
          {/* Section: Leader */}
          <section className="bg-white p-4 md:p-6 rounded-3xl shadow-md">
            <h2 className="font-extrabold text-center text-xl sm:text-2xl lg:text-3xl mb-4">
              Founder Save Gaza Campaign
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex justify-center md:col-span-1 w-full">
                <Image
                  src="/LeadersImg/Humaira-Tayyaba.webp"
                  alt="Humaira Tayyaba"
                  width={350}
                  height={250}
                  className="rounded-xl object-cover max-w-full"
                />
              </div>
              <div className="md:col-span-1 flex flex-col items-start justify-center w-full">
                <h3 className="font-extrabold text-lg sm:text-xl mb-3 text-[#22C55E]">
                  Humaira Tayyaba
                </h3>
                <p className="text-sm sm:text-base mb-3">
                  Humaira Tayyaba is a seasoned community leader and activist
                  with over 20 years of experience in women&apos;s rights, education,
                  and humanitarian causes. She served as the Central President
                  of Islami Jamiat Talibat Pakistan from 1998 to 2001, leading
                  the country&apos;s largest student organization. As the founder of{" "}
                  <i className="font-bold text-red-500">Tameer</i>, she has
                  championed initiatives to empower women through education and
                  formal Islamic studies. Humaira has also held influential
                  political roles, including{" "}
                  <i className="font-bold text-black">
                    Provincial President of Jamat-e-Islami Women Wing
                  </i>{" "}
                  and a long-term member of the party&apos;s central executive
                  committee. She is the visionary behind the{" "}
                  <i className="font-bold text-red-500">Save Gaza Campaign</i>,
                  a civil society movement advocating for peace and
                  rehabilitation for the victims of the Gaza genocide. Her
                  activism is deeply rooted in her educational background,
                  holding an{" "}
                  <i className="font-bold text-red-500">
                    LLB (Hons) in Shariah and Law
                  </i>{" "}
                  from the International Islamic University Islamabad.
                  Throughout her journey, she has tirelessly worked for equity,
                  justice, and social reform.
                </p>
              </div>
            </div>
          </section>
          {/* Section: Achievements */}
          <section className="py-10">
            <h2 className="font-extrabold text-center text-3xl lg:text-4xl mb-10 text-gray-800">
              Our Achievements
            </h2>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
              <div className="bg-white shadow-lg rounded-3xl overflow-hidden">
                <Image
                  src="/protest.jpg"
                  alt="42 Days Protest"
                  width={600}
                  height={400}
                  className="w-full object-cover h-64 sm:h-72 lg:h-80"
                />
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg lg:text-xl mb-3 text-gray-700">
                    42 Days Protest at D-Chowk, Islamabad
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-md leading-relaxed">
                    Conducted a 42-day protest at D-Chowk, Islamabad, to demand
                    justice and raise awareness about the plight of Gaza. This
                    monumental effort brought significant attention to our
                    cause.
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-3xl overflow-hidden">
                <Image
                  src="/agreements.png"
                  alt="Agreements with Government"
                  width={600}
                  height={400}
                  className="w-full object-cover h-64 sm:h-72 lg:h-80"
                />
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg lg:text-xl mb-3 text-gray-700">
                    Agreements with the Government
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-md leading-relaxed">
                    Successfully reached agreements with government
                    representatives to address concerns and further our
                    campaign&apos;s objectives, marking a pivotal step in our
                    journey.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Section: Tribute to the Martyr */}
          <section className="py-10">
            <div className="container mx-auto px-6">
              {/* Heading Section */}
              <div className="text-center mb-8">
                <h2 className="font-extrabold text-2xl lg:text-4xl text-gray-800">
                  In Memory of Our Martyr
                </h2>
                <p className="text-gray-700 mt-4 text-base lg:text-lg max-w-3xl mx-auto">
                  A tribute to the courage and sacrifice of{" "}
                  <strong className="text-red-500">Muhammad Roman Sajid</strong>
                  , whose ultimate sacrifice fueled our mission for justice and
                  peace.
                </p>
              </div>

              {/* Profile and Story */}
              <div className="flex flex-col md:flex-row items-center bg-white shadow-2xl rounded-3xl overflow-hidden transition-transform hover:scale-105 duration-300">
                {/* Image Section */}
                <div className="w-full md:w-1/3">
                  <Image
                    src="/Roman.png"
                    alt="Muhammad Roman Sajid"
                    layout="responsive"
                    width={400}
                    height={400}
                    className="object-cover h-auto w-full"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col justify-center md:w-2/3 text-center md:text-left">
                  <h3 className="font-bold text-xl lg:text-2xl mb-4 text-green-600">
                    Muhammad Roman Sajid
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4 text-sm lg:text-base">
                    Muhammad Roman Sajid was a brave soul who stood for the
                    cause with unwavering courage. On May 20th, 2024, at 3:00
                    AM, during a peaceful protest at D-Chowk, Islamabad, he,
                    along with another protestor, was murdered in cold blood
                    when a car ruthlessly and intentionally ran over the
                    protesters. His life was taken while he was peacefully
                    standing for the rights of Gaza. His sacrifice has become a
                    beacon of hope, a symbol of unwavering dedication, and a
                    powerful call for justice.
                  </p>
                  <p className="text-gray-600 italic text-sm lg:text-base">
                  &ldquo;From the river to the sea, Palestine will be free.&ldquo;
                  </p>
                </div>
              </div>
            </div>
          </section>
          <ContactAndSubscribe />
        </main>
      </Wrapper>
    </div>
  );
}
