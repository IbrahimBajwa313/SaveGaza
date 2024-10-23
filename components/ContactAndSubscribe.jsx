import Image from 'next/image';
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactAndSubscribe = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly min-h-[80vh] items-center gap-8 bg-blue-50 pb-4 lg:pb-8 min-h-screen w-full">
      {/* Contact Section */}
      <div className="bg-white p-8 rounded-2xl min-h-[60vh] shadow-xl w-full lg:max-w-lg">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-center mb-6">Contact us</h1>
        <ContactItem
          icon={<FaMapMarkerAlt className="text-pink-500 w-7 h-7" />}
          label="Address"
          content={<a href="" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">6 Herzen St, Kyiv</a>}
        />
        <ContactItem
          icon={<FaPhoneAlt className="text-yellow-500 w-7 h-7" />}
          label="Phone"
          content="+92 332 5900041"
        />
        <ContactItem
          icon={<FaEnvelope className="text-blue-500 w-7 h-7" />}
          label="Email"
          content={<a href="mailto:tameer2k23@gmail.com" className="text-blue-500 hover:underline">tameer2k23@gmail.com</a>}
        />
      </div>

      {/* Subscribe Section */}
      <div className="bg-white p-4 lg:p-8 rounded-2xl shadow-xl w-full lg:max-w-2xl min-h-[60vh] lg:h-[60vh] flex flex-col justify-center items-center text-center mt-0">
        <Image
          src="/Picture2.png"
          alt="Support Image"
          layout="responsive"
          width={500}
          height={400}
          className="rounded-lg"
        />
        <form className="flex mt-6 lg:mt-10 flex-col lg:flex-row items-center w-full space-y-4 lg:space-y-0 lg:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="w-full lg:w-auto bg-[#22C55E] px-6 py-4 text-white font-bold rounded-lg hover:bg-[#D0312D] transition-colors duration-600">
            Subscribe
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">
          By clicking on the button, you agree to the <a href="#" className="underline hover:text-blue-600">privacy policy</a>
        </p>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, label, content }) => (
  <div className="flex items-center space-x-4 mb-6 w-full">
    {icon}
    <div>
      <p className="text-xl lg:text-2xl font-bold">{label}</p>
      <p>{content}</p>
    </div>
  </div>
);

export default ContactAndSubscribe;