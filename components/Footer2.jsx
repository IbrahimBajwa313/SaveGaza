import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-10 pb-12 border-b border-gray-700 px-4 lg:px-12">
        {/* Contact Info */}

        {/* Logo and Social Links */}
        <div className="lg:col-span-1">
          <h1 className="text-xl lg:text-2xl font-bold mb-3 flex items-center">
            <Image
              src="/save-gaza-logo.png"
              width={32}
              height={32}
              className="mr-4"
              alt="Logo"
            />
            <span className="text-[#2b9150]">Save Gaza Campaign</span>
          </h1>
          <p className="text-gray-400 mb-5">Stand for Gaza & Unite for Gaza</p>
          <div className="flex space-x-4 mt-4 sm:mt-8">
            <a
              href="https://m.facebook.com/SaveGazaCampaign/"
              className="text-2xl lg:text-3xl text-gray-400 hover:text-blue-600 transition-colors duration-200 ease-in-out"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.youtube.com/@savegazacampaign"
              className="text-2xl lg:text-3xl text-gray-400 hover:text-red-500 transition-colors duration-200 ease-in-out"
            >
              <i className="fa-brands fa-youtube ml-4 lg:ml-8"></i>
            </a>
            <a
              href="https://twitter.com/savegazapk"
              className="text-2xl lg:text-3xl text-gray-400 hover:text-blue-400 transition-colors duration-200 ease-in-out"
            >
              <i className="fab fa-twitter ml-4 lg:ml-8"></i>
            </a>
            <a
              href="https://www.instagram.com/savegazacampaign"
              className="text-2xl lg:text-3xl text-gray-400 hover:text-pink-700 transition-colors duration-200 ease-in-out"
            >
              <i className="fa-brands fa-instagram ml-4 lg:ml-8"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/save-gaza-campaign?originalSubdomain=pk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl lg:text-3xl text-gray-400 hover:text-blue-700 transition-colors duration-200 ease-in-out"
            >
              <i className="fa-brands fa-linkedin ml-4 lg:ml-8"></i>
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-[#2b9150] font-bold mb-3">Useful Links</h3>
          <div className="grid grid-cols-2 gap-2">
            <ul>
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Mission and Vission
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Our Goals
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2">
                <Link href="/about" className="text-gray-400 hover:text-white">
                  Gaza Relief Activities
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Leaders
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Latest News
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Press Release
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="flex flex-col">
          {/* Contact Information Section */}
          <div className="flex items-start mb-4">
            <i className="fa-solid fa-location-dot text-2xl lg:text-3xl text-[#206e3d] mr-4"></i>
            <div>
              <a
                href="https://maps.app.goo.gl/3XPDYJXN1Bn9kXQn8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-[#2b9150] font-bold mb-3">Find us</h3>
                <p className="text-gray-400">
                  SGC Office S#23, 3rd Floor, Malikabad Centre near 6th Rd,
                  Murree Rd, Rawalpindi
                </p>
              </a>
            </div>
          </div>
          <div className="flex items-start mb-4">
            <i className="fa-solid fa-phone text-2xl lg:text-3xl text-[#2b9150] mr-4"></i>
            <div>
              <h3 className="text-[#2b9150] font-bold mb-3">Call us</h3>
              <p className="text-gray-400">+92 332 5900041</p>
            </div>
          </div>
          <div className="flex items-start mb-4">
            <i className="fa-solid fa-envelope-open text-2xl lg:text-3xl text-[#2b9150] mr-4"></i>
            <div>
              <h3 className="text-[#2b9150] font-bold mb-3">Mail us</h3>
              <p className="text-gray-400">tameer2k23@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto text-center py-6 px-4">
        <p className="text-gray-400 mb-4">
          Copyright © 2024. All Rights Reserved{" "}
          <span className="text-[#2b9150]">Save Gaza Campaign</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
