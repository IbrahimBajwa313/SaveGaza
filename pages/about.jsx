import React from "react";
import Image from "next/image";
import About from "../components/About";
import ContactAndSubscribe from "@/components/ContactAndSubscribe";
import Wrapper from "@/components/Wrapper";

// pages/about.js

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-blue-50">
        <Wrapper>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-10 space-y-12">
        <About />

        {/* Section: Mission and Vision */}
        <section className="bg-white p-6 md:p-10 rounded-3xl shadow-md">
          <h2 className="font-extrabold text-center text-3xl sm:text-4xl lg:text-5xl mb-8">
            Our Mission and Vision
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="flex justify-center md:col-span-1">
              <Image
                src="/protest1.jpg"
                alt="About Us Image"
                width={500}
                height={400}
                className="rounded-2xl object-cover max-w-full"
              />
            </div>
            <div className="md:col-span-1">
              <h2 className="font-extrabold text-xl sm:text-2xl lg:text-3xl mb-4 text-[#22C55E]">
                Our Mission
              </h2>
              <p className="text-lg sm:text-xl mb-4">
                Our mission is to stand in solidarity with the people of Gaza by
                raising global awareness about the humanitarian crisis they
                face. Through protests, educational initiatives, and
                partnerships with influential leaders, we strive to shed light
                on the injustices in Palestine and inspire meaningful actions
                that promote peace, justice, and relief.
              </p>
              <h2 className="font-extrabold text-xl sm:text-2xl lg:text-3xl mb-4 text-[#22C55E]">
                Our Vision
              </h2>
              <p className="text-lg sm:text-xl mb-4">
                We envision a world where global solidarity and collective
                efforts lead to the restoration of justice and dignity for the
                people of Gaza. By mobilizing communities, fostering awareness,
                and engaging in impactful activities, we aim to create a future
                where every individual stands united for human rights and
                lasting peace.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Leader */}
        <section className="bg-white p-6 md:p-10 rounded-3xl shadow-md">
          <h2 className="font-extrabold text-center text-3xl sm:text-4xl lg:text-5xl mb-6">
            Founder Save Gaza Campaign 
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="flex justify-center md:col-span-1 w-full">
              <Image
                src="/LeadersImages/Humaira-Tayyaba.webp"
                alt="Humaira Tayyaba"
                width={400}
                height={300}
                className="rounded-xl object-cover max-w-full"
              />
            </div>
            <div className="md:col-span-1 flex flex-col items-start justify-center w-full">
              <h2 className="font-extrabold text-xl sm:text-2xl lg:text-3xl mb-4 text-[#22C55E]">
                Humaira Tayyaba
              </h2>
              <p className="text-lg sm:text-xl mb-4">
              Humaira Tayyaba is a seasoned community leader and activist with over 20 years of experience in women's rights, education, and humanitarian causes. She served as the Central President of Islami Jamiat Talibat Pakistan from 1998 to 2001, leading the country's largest student organization. As the founder of <i className="font-bold text-red-500">Tameer</i>, she has championed initiatives to empower women through education and formal Islamic studies. Humaira has also held influential political roles, including  <i className="font-bold text-black">Provincial President of Jamat-e-Islami Women Wing</i> and a long-term member of the party's central executive committee. 

She is the visionary behind the <i className="font-bold text-red-500">Save Gaza Campaign</i>, a civil society movement advocating for peace and rehabilitation for the victims of the Gaza genocide. Her activism is deeply rooted in her educational background, holding an <i className="font-bold text-red-500">LLB (Hons) in Shariah and Law</i> from the International Islamic University Islamabad. Throughout her journey, she has tirelessly worked for equity, justice, and social reform.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Team */}
        <section className="p-6 md:p-10">
          <h2 className="font-extrabold text-center text-3xl sm:text-4xl lg:text-5xl mb-6">
            Leaders Driving The Campaign
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <img
                src="/LeadersImages/Mushtaq-khan.webp"
                alt="Team Member 1"
                className="rounded-full mx-auto mb-4 h-24 w-24 object-cover"
              />
              <h3 className="font-semibold text-[#22C55E]">Mushtaq Khan</h3>
              <p className="text-gray-700">Ex Member of Senate</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <img
                src="/LeadersImages/Wahaj-Ahmad.webp"
                alt="Team Member 2"
                className="rounded-full mx-auto mb-4 h-24 w-24 object-cover"
              />
              <h3 className="font-semibold text-[#22C55E]">Wahaj Ahmad</h3>
              <p className="text-gray-700">Founding Member</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <img
                src="/LeadersImages/Mahera-Sajid.webp"
                alt="Team Member 3"
                className="rounded-full mx-auto mb-4 h-24 w-24 object-cover"
              />
              <h3 className="font-semibold text-[#22C55E]">Mahera Sajid</h3>
              <p className="text-gray-700">Founding Member (IT Professional)</p>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <img
                src="/LeadersImages/Farooq-Shah-Khan.webp"
                alt="Team Member 4"
                className="rounded-full mx-auto mb-4 h-24 w-24 object-cover"
              />
              <h3 className="font-semibold text-[#22C55E]">Farooq Shah Khan</h3>
              <p className="text-gray-700">Founding Member (Law student)</p>
            </div>

            {/* Team Member 5 */}
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <img
                src="/LeadersImages/Ahmad-Maaz-Shafqat.webp"
                alt="Team Member 5"
                className="rounded-full mx-auto mb-4 h-24 w-24 object-cover"
              />
              <h3 className="font-semibold text-[#22C55E]">
                Ahmad Maaz Shafqat
              </h3>
              <p className="text-gray-700">Media Director Save Gaza Campaign</p>
            </div>

            {/* Team Member 6 */}
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <img
                src="/LeadersImages/Tayyaba-Durrani.webp"
                alt="Team Member 6"
                className="rounded-full mx-auto mb-4 h-24 w-24 object-cover"
              />
              <h3 className="font-semibold text-[#22C55E]">Tayyaba Durrani</h3>
              <p className="text-gray-700">Executive Team Member</p>
            </div>

            {/* Team Member 7 */}
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <img
                src="/LeadersImages/Dr-Sohaib-Khalid.webp"
                alt="Team Member 7"
                className="rounded-full mx-auto mb-4 h-24 w-24 object-cover"
              />
              <h3 className="font-semibold text-[#22C55E]">Dr Sohaib Khalid</h3>
              <p className="text-gray-700">Executive Team Member (Urologist)</p>
            </div>

            {/* Team Member 8 */}
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <img
                src="/LeadersImages/Syed-Bilal-Hamdani.webp"
                alt="Team Member 8"
                className="rounded-full mx-auto mb-4 h-24 w-24 object-cover"
              />
              <h3 className="font-semibold text-[#22C55E]">
                Syed Bilal Hamdani
              </h3>
              <p className="text-gray-700">
                Executive Team Member & IIUI Team Lead
              </p>
            </div>

            {/* Team Member 9 */}
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <img
                src="/LeadersImages/Mushahid-Hussain-Sayed.webp"
                alt="Team Member 9"
                className="rounded-full mx-auto mb-4 h-24 w-24 object-cover"
              />
              <h3 className="font-semibold text-[#22C55E]">
                Mushahid Hussain Sayed
              </h3>
              <p className="text-gray-700">Ex Member of Senate</p>
            </div>
          </div>
        </section>

        {/* Section: Achievements */}
        <section className="bg-blue-50 py-12">
          <h2 className="font-extrabold text-center text-4xl lg:text-5xl mb-12 text-gray-800">
            Our Achievements
          </h2>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
            <div className="bg-white shadow-lg rounded-3xl overflow-hidden">
              <Image
                src="/protest2.png"
                alt="42 Days Protest"
                width={600}
                height={400}
                className="w-full object-cover h-64 sm:h-72 lg:h-80"
              />
              <div className="p-6 text-center">
                <h3 className="font-bold text-xl lg:text-2xl mb-3 text-gray-700">
                  42 Days Protest at D-Chowk, Islamabad
                </h3>
                <p className="text-gray-600 text-md leading-relaxed">
                  Conducted a 42-day protest at D-Chowk, Islamabad, to demand
                  justice and raise awareness about the plight of Gaza. This
                  monumental effort brought significant attention to our cause.
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
              <div className="p-6 text-center">
                <h3 className="font-bold text-xl lg:text-2xl mb-3 text-gray-700">
                  Agreements with the Government
                </h3>
                <p className="text-gray-600 text-md leading-relaxed">
                  Successfully reached agreements with government
                  representatives to address concerns and further our campaign's
                  objectives, marking a pivotal step in our journey.
                </p>
              </div>
            </div>
          </div>
        </section>

       {/* Section: Tribute to the Martyr */}
<section className="py-12 bg-gradient-to-r from-blue-50 via-white to-blue-50">
  <div className="container mx-auto px-6">
    {/* Heading Section */}
    <div className="text-center mb-10">
      <h2 className="font-extrabold text-3xl lg:text-5xl text-gray-800">
        In Memory of Our Martyr
      </h2>
      <p className="text-gray-700 mt-4 text-lg lg:text-xl max-w-3xl mx-auto">
        A tribute to the courage and sacrifice of{" "}
        <strong className="text-red-500">Muhammad Roman Sajid</strong>, whose ultimate sacrifice fueled our mission for justice and peace.
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
      <div className="p-8 md:p-12 flex flex-col justify-center md:w-2/3 text-center md:text-left">
        <h3 className="font-bold text-2xl lg:text-3xl mb-4 text-green-600">
          Muhammad Roman Sajid
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6 text-sm lg:text-lg">
          Muhammad Roman Sajid was a brave soul who stood for the cause with unwavering courage. On May 20th, 2024, at 3:00 AM, during a peaceful protest at D-Chowk, Islamabad, he, along with another protestor, was murdered in cold blood when a car ruthlessly and intentionally ran over the protesters. His life was taken while he was peacefully standing for the rights of Gaza. His sacrifice has become a beacon of hope, a symbol of unwavering dedication, and a powerful call for justice.
        </p>
        <p className="text-gray-600 italic text-sm lg:text-lg">
          "From the river to the sea, Palestine will be free."
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
