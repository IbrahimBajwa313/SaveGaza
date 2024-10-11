import Image from 'next/image';
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactAndSubscribe = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-20 bg-blue-50 p-8 min-h-screen">
      {/* Contact Section */}
      <div className="bg-white h-[60vh] p-8 rounded-2xl shadow-xl max-w-lg w-full flex-grow">
        <h1 className="text-5xl font-extrabold text-center mb-8">Contact us</h1>
        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-center space-x-4 space-y-4">
            <FaMapMarkerAlt className="text-pink-500 w-7 h-7" />
            <div>
            <p className="text-2xl font-bold">Address</p>
            <a 
              href="" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline"
            >
              6 Herzen St, Kyiv
            </a>
          </div>
        </div>

          {/* Phone */}
          <div className="flex items-center space-x-4 space-y-4">
            <FaPhoneAlt className="text-yellow-500 w-7 h-7" />
            <div>
              <p className="text-2xl font-bold">Phone</p>
              <p>+92 332 5900041</p>
            </div>
          </div>
          {/* Email */}
          <div className="flex items-center space-x-4 space-y-4">
            <FaEnvelope className="text-blue-500 w-7 h-7" />
            <div>
              <p className="text-2xl font-bold">Email</p>
              <a href="mailto:tameer2k23@gmail.com" className="text-blue-500 hover:underline">
                tameer2k23@gmail.com
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Subscribe Section c:\Users\SMART TECH\Desktop\Picture2.png */}
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl w-full h-[60vh] flex flex-col justify-center items-center text-center">

      <Image
                  src="/Picture2.png"
                  alt="Support Image"
                  layout="responsive"
                  width={500}
                  height={10000}
                  className="rounded-lg"
                />
        {/* <h2 className="text-4xl font-extrabold mb-6">Subscribe to our News Letter</h2> */}

        {/* Email Input Field */}
        <form className="flex mt-10 md:mt-20 flex-col md:flex-row items-center w-full space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="w-full md:w-auto bg-red-600 px-6 py-4 text-white font-bold rounded-lg hover:bg-black transition-colors duration-600">
            Subscribe
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4">By clicking on the button, you agree to the <a href="#" className="underline hover:text-blue-600">privacy policy</a></p>
      </div>
    </div>
  );
};

export default ContactAndSubscribe;
