import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaInstagram, FaLinkedin, FaTiktok , FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1, y: -10 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ delay: 0, duration: 0.3, stiffness: 50 }}
      className="flex flex-col justify-center items-center min-h-screen bg-white px-4"
    >
      {/* Form Container */}
      <div className="w-full max-w-md p-6 rounded-xl m-4 flex flex-col items-center shadow-lg border border-gray-400 opacity-90">
        <div className="text-xl cursor-pointer flex flex-col justify-center items-center">
          <h1 className="font-semibold text-3xl text-black m-2">Contact Us</h1>
        </div>
        {/* Form Fields */}
        <div className="flex flex-col justify-center items-center mt-6 space-y-4 w-full">
          {/* Name Field */}
          <div className="w-full">
            <label className="m-1 text-lg text-black font-semibold">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border-b border-black focus:outline-none text-black placeholder:opacity-50 font-semibold bg-transparent"
            />
          </div>
          {/* Email Field */}
          <div className="w-full">
            <label className="m-1 text-lg text-black font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-b border-black focus:outline-none text-black placeholder:opacity-50 font-semibold bg-transparent"
            />
          </div>
          {/* Message Field */}
          <div className="w-full">
            <label className="m-1 text-lg text-black font-semibold">Message</label>
            <textarea
              placeholder="Write your message"
              className="w-full border-b border-black focus:outline-none text-black placeholder:opacity-50 font-semibold bg-transparent resize-none"
            />
          </div>
        </div>
        {/* Submit Button */}
        <div className="text-center mt-6">
          <button className="uppercase w-full py-2 px-6 rounded-full text-white bg-black font-medium">
            Send Message
          </button>
        </div>
      </div>
      {/* Social Media Links */}
      <div className="text-center mt-6">
        <p className="text-lg font-semibold text-gray-600 mb-4">Follow Us On</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.youtube.com/@savegazacampaign"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 text-2xl hover:opacity-80"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/savegazacampaign"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 text-2xl hover:opacity-80"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/save-gaza-campaign?originalSubdomain=pk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-2xl hover:opacity-80"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/savegazapk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-2xl hover:opacity-80"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.tiktok.com/@savegaza.campaign"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-2xl hover:opacity-80"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
      {/* Footer Links */}
      <div className="text-center my-6 flex flex-col">
        <p className="text-sm font-medium text-gray-400 m-1">
          Need immediate help?{' '}
          <Link href="/faq" className="hover:text-violet-500">
            Check our FAQ
          </Link>
        </p>
        <p className="text-sm font-bold text-gray-400 m-1">
          Back to{' '}
          <Link href="/" className="hover:text-violet-500">
            Home
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Contact;
