import React from "react";
import Image from "next/image";

export default function ImageSec() {
  return (
    <div className="">
      <div className="relative">
        <div className="absolute inset-0 bg-[url('/ImageSec/bg.jpg')] bg-cover bg-center filter brightness"></div>

        <div className="images w-full h-full flex justify-center items-center relative">
          <Image
            src="/ImageSec/pic.png"
            alt="Image"
            width={500} // Adjust width based on your requirement
            height={500} // Adjust height based on your requirement
            className="w-full px-5 py-2"
          />
        </div>
      </div>
    </div>
  );
}
