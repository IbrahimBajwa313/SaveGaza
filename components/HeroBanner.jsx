import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Wrapper from "./Wrapper";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className=" w-screen mt-2  ">
      <Wrapper>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
        >
          <div>
            <Image
              src="/heroSlides/1.png"
              alt="Hero Slide 1"
              className="rounded-md"
              width={800} // Specify the width
              height={600} // Specify the height
              priority // Ensures this image loads eagerly
            />
            <div className="px-[15px] md:px-[40px] py-[3px] md:py-[25px] font-oswald bg-white absolute bottom-[20px] md:bottom-[75px] right-0 text-black/[0.5] text-[15px] rounded-l-sm md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
              Join Now
            </div>
          </div>
          <div>
            <Image
              src="/heroSlides/2.jpg"
              alt="Hero Slide 1"
              className="rounded-md"
              width={800} // Specify the width
              height={600} // Specify the height
              priority // Ensures this image loads eagerly
            />
          </div>
          <div>
            <Image
              src="/heroSlides/3.jpg"
              alt="Hero Slide 1"
              className="rounded-md"
              width={800} // Specify the width
              height={600} // Specify the height
              priority // Ensures this image loads eagerly
            />{" "}
            <div className="px-[15px] md:px-[40px] py-[3px] md:py-[25px] font-oswald bg-white absolute bottom-[20px] md:bottom-[75px] left-0 text-black/[0.5] text-[15px] rounded-r-sm md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
              Donate Now
            </div>
          </div>
        </Carousel>
      </Wrapper>
    </div>
  );
};

export default HeroBanner;
