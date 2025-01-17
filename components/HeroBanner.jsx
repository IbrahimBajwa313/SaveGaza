import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  const phoneNumber = "+923325000418";
  const message = "AsslamoAlikum! I am contacting you through SGC Site.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  const bannerRef = useRef(null);

  useEffect(() => {
    const element = bannerRef.current;
    let scrollPosition = 0;

    const scrollBanner = () => {
      if (element) {
        scrollPosition += 1;
        if (scrollPosition >= element.scrollHeight) {
          scrollPosition = 0;
        }
        element.scrollTo({ top: scrollPosition, behavior: "smooth" });
      }
    };

    const interval = setInterval(scrollBanner, 50); // Adjust speed with the interval delay
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
      ref={bannerRef}
      className="relative h-[90vh] bg-cover bg-center poppins overflow-hidden no-scrollbar"
      style={{
        backgroundImage: "url('/SGC-Hero.jpg')", 
        overflow: "hidden",
      }}
    >
      <div className="absolute inset-0 bg-black overflow-hidden bg-opacity-70"></div>
      <div className="relative flex flex-col items-center md:items-start justify-center h-full text-white px-6 md:px-24">
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block text-5xl md:text-5xl">Save Gaza Campaign</span>
          </h1>
          <p className="text-white text-base md:text-lg mb-6 leading-relaxed">
            Save Gaz@ Campaign is a civil society movement by the people of Pakistan in support of the people of Palestine. It is especially aimed at pressuring the government of Pakistan to take actions for an immediate ceasefire and relief for Gaz@.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/join">
                <button className="text-lg md:text-2xl font-bold bg-white text-black px-10 md:px-16 py-3 md:py-4 rounded-full shadow-lg hover:bg-[#D0312D] hover:text-white transition-all ease-in-out duration-200">
                  Join Now
                </button> 
            </Link> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
