import React from "react";
import Image from "next/image";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HeroBanner = () => {
  return (
    <div className="z-0 w-screen">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <Image
            src="/hajj4.jpg"
            alt="Hajj 4"
            width={1920} // Replace these with the actual dimensions
            height={1080}
          />
        </div>
        <div>
          <Image src="/hajj3.jpg" alt="Hajj 3" width={1920} height={1080} />
        </div>
        <div>
          <Image src="/hajj5.jpg" alt="Hajj 5" width={1920} height={1080} />
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
