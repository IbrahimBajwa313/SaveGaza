import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-gray-100 text-black"
    >
      <div className="container px-5 py-16 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
            Get in Touch With Us
          </h1>
          <p className="text-gray-600 text-lg">
            We'd love to hear from you! Fill out the form below,<br></br> and we'll get
            back to you shortly.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <form>
            <div className="flex flex-wrap -m-2">
              {/* Name Field */}
              <div className="p-2 w-full sm:w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full mt-1 p-3 border rounded-md text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
              {/* Email Field */}
              <div className="p-2 w-full sm:w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full mt-1 p-3 border rounded-md text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
              {/* Message Field */}
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full mt-1 p-3 border rounded-md text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 h-26 resize-none"
                  ></textarea>
                </div>
              </div>
              {/* Submit Button */}
              <div className="p-2 w-full text-center">
                <Link href="/">
                  <button className="w-full sm:w-48 bg-black text-white font-semibold py-3 rounded-full shadow-md hover:opacity-90 transition-transform transform active:scale-95">
                    Send Message
                  </button>
                </Link>
              </div>
            </div>
          </form>
          <div className="mt-8 border-t pt-8 text-center text-gray-600">
            <a href="mailto:tameer2k23@gmail.com" className="text-indigo-600 hover:underline">
              tameer2k23@gmail.com
            </a>
            <p className="mt-4">
              SGC Office S#23, 3rd Floor, Malikabad Centre near 6th Rd, Murree
              Rd, Rawalpindi
            </p>
            <div className="flex justify-center mt-4 space-x-4">
              <a href="#" className="text-gray-500 hover:text-indigo-500">
                <svg
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-500">
                <svg
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
