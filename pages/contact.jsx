import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-black text-white"
    >
      <div className="container px-5 py-16 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-400 text-lg">
            We&apos;d love to hear from you! <br />
            Drop us a message and we&apos;ll get back to you shortly.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-700">
          <form>
            <div className="flex flex-wrap -m-2">
              {/* Name Field */}
              <div className="p-2 w-full sm:w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full mt-2 p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-gray-500 focus:border-gray-500"
                  />
                </div>
              </div>
              {/* Email Field */}
              <div className="p-2 w-full sm:w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full mt-2 p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-gray-500 focus:border-gray-500"
                  />
                </div>
              </div>
              {/* Message Field */}
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full mt-2 p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-gray-500 focus:border-gray-500 h-28 resize-none"
                  ></textarea>
                </div>
              </div>
              {/* Submit Button */}
              <div className="p-2 w-full text-center">
                <Link href="/">
                  <button className="w-full sm:w-48 bg-white text-black font-semibold py-3 rounded-full shadow-md hover:opacity-90 transition-transform transform active:scale-95">
                    Send Message
                  </button>
                </Link>
              </div>
            </div>
          </form>
          {/* Contact Info */}
          <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
            <a
              href="mailto:tameer2k23@gmail.com"
              className="text-white hover:underline"
            >
              tameer2k23@gmail.com
            </a>
            <p className="mt-4">
              SGC Office S#23, 3rd Floor, Malikabad Centre near 6th Rd, Murree
              Rd, Rawalpindi
            </p>
            {/* Social Icons */}
            <div className="flex justify-center mt-4 space-x-6">
              <a 
                href="https://m.facebook.com/SaveGazaCampaign/"
                className="text-gray-400 hover:text-white">
                <svg
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@savegazacampaign"
                className="text-gray-400 hover:text-white"
              >
                {/* YouTube Icon */}
                <svg
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a2.984 2.984 0 00-2.102-2.11C19.598 3.546 12 3.546 12 3.546s-7.598 0-9.396.53A2.984 2.984 0 00.502 6.186C0 8.006 0 12 0 12s0 3.994.502 5.814a2.984 2.984 0 002.102 2.11c1.798.53 9.396.53 9.396.53s7.598 0 9.396-.53a2.984 2.984 0 002.102-2.11C24 15.994 24 12 24 12s0-3.994-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/save-gaza-campaign?originalSubdomain=pk"
                className="text-gray-400 hover:text-white"
              >
                {/* LinkedIn Icon */}
                <svg
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0H5C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8.8 19.4H5.7V9.5h3.1v9.9zM7.3 8.3C6.1 8.3 5 7.3 5 6.2c0-1.2 1.1-2.1 2.3-2.1s2.3.9 2.3 2.1c0 1.1-1.1 2.1-2.3 2.1zm11.6 11.1h-3.1v-4.8c0-1.2-.4-2-1.3-2-1.2 0-1.7.9-1.7 2v4.8h-3.1V9.5h3.1v1.4c.6-.9 1.5-1.7 2.7-1.7 2 0 3.4 1.4 3.4 4.4v5.8z"></path>
                </svg>
              </a>

              {/* Twitter Icon */}
              <a
                href="https://twitter.com/savegazapk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.56c-.88.39-1.83.65-2.82.77a4.92 4.92 0 0 0 2.17-2.71 9.86 9.86 0 0 1-3.13 1.2 4.92 4.92 0 0 0-8.38 4.49A13.97 13.97 0 0 1 1.67 3.15a4.92 4.92 0 0 0 1.52 6.57A4.88 4.88 0 0 1 .96 9v.06a4.92 4.92 0 0 0 3.94 4.83c-.72.2-1.48.23-2.22.08a4.92 4.92 0 0 0 4.6 3.41A9.89 9.89 0 0 1 0 20.29a13.94 13.94 0 0 0 7.56 2.21c9.05 0 14-7.5 14-14v-.64a9.93 9.93 0 0 0 2.44-2.54z"></path>
                </svg>
              </a>

              <a
                href="https://www.instagram.com/savegazacampaign"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c3.29 0 3.69.01 4.98.07 1.17.05 2.26.24 3.12.51.91.28 1.68.66 2.42 1.4.74.74 1.12 1.51 1.4 2.42.27.86.46 1.95.51 3.12.06 1.29.07 1.69.07 4.98s-.01 3.69-.07 4.98c-.05 1.17-.24 2.26-.51 3.12-.28.91-.66 1.68-1.4 2.42-.74.74-1.51 1.12-2.42 1.4-.86.27-1.95.46-3.12.51-1.29.06-1.69.07-4.98.07s-3.69-.01-4.98-.07c-1.17-.05-2.26-.24-3.12-.51-.91-.28-1.68-.66-2.42-1.4-.74-.74-1.12-1.51-1.4-2.42-.27-.86-.46-1.95-.51-3.12C0 15.69 0 15.29 0 12s.01-3.69.07-4.98c.05-1.17.24-2.26.51-3.12.28-.91.66-1.68 1.4-2.42.74-.74 1.51-1.12 2.42-1.4C5.04.24 6.13.05 7.3.07 8.59.01 8.99 0 12 0zm0 2.16c-3.16 0-3.55.01-4.8.07-.96.04-1.49.2-1.84.33-.46.18-.78.4-1.12.74-.34.34-.56.66-.74 1.12-.13.35-.29.88-.33 1.84-.06 1.25-.07 1.64-.07 4.8s.01 3.55.07 4.8c.04.96.2 1.49.33 1.84.18.46.4.78.74 1.12.34.34.66.56 1.12.74.35.13.88.29 1.84.33 1.25.06 1.64.07 4.8.07s3.55-.01 4.8-.07c.96-.04 1.49-.2 1.84-.33.46-.18.78-.4 1.12-.74.34-.34.56-.66.74-1.12.13-.35.29-.88.33-1.84.06-1.25.07-1.64.07-4.8s-.01-3.55-.07-4.8c-.04-.96-.2-1.49-.33-1.84-.18-.46-.4-.78-.74-1.12-.34-.34-.66-.56-1.12-.74-.35-.13-.88-.29-1.84-.33-1.25-.06-1.64-.07-4.8-.07zM12 5.84a6.16 6.16 0 1 1 0 12.32 6.16 6.16 0 0 1 0-12.32zm0 2.16a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm5.41-2.81a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88z"></path>
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
