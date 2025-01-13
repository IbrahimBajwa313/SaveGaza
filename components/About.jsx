import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function About() {
  return (
    <section className="bg-gray-50 flex flex-col lg:flex-row rounded-3xl my-4 lg:my-20 p-6 lg:p-20 shadow-lg">
      <aside className="flex flex-col text-black justify-between w-full lg:w-3/6 pr-0 lg:pr-28 mb-6 lg:mb-0">
        <h2 className="font-extrabold text-4xl lg:text-4xl mb-4">
          Save Gaza Campaign
        </h2>
        <p className="text-lg pt-4">
          <span className="font-bold text-[#22C55E]">Save Gaza Campaign </span>
          is a beacon of hope for the people of Gaza, dedicated to amplifying
          their voices and standing in solidarity with their struggles. Since
          our inception in November 2023, we have tirelessly worked to uplift
          the oppressed, focusing on providing relief and support directly on
          the ground in Gaza. Through our efforts, we aim to bring compassion,
          justice, and tangible change to Gazans.
        </p>

        <br />
        {/* Using Link for internal navigation */}
        <Link href="https://sgc-relief-activities-2st2.vercel.app/">
          <button className="w-full p-3 bg-[#22C55E] text-white rounded-full font-bold text-lg lg:text-2xl transition duration-300 ease-in-out hover:bg-[#D0312D] hover:text-white">
            Donate for Gazans {" "}
            <FontAwesomeIcon className="pl-4" icon={faArrowUpRightFromSquare} />
          </button>
        </Link>
      </aside>

      {/* React Responsive Carousel */}
      <div className="flex justify-center w-full lg:w-3/6 max-w-[620px] mb-6 lg:mb-0">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={4500}
          className="rounded-lg shadow-lg"
        >
          <div>
            <Image
              src="/aboutCarousel/protest4.jpg"
              alt="Slide 4"
              width={620}
              height={384}
              className="rounded-lg object-cover h-64 lg:h-96 w-full"
            />
          </div>
          <div>
            <Image
              src="/aboutCarousel/protest1.jpg"
              alt="Slide 1"
              width={620}
              height={384}
              className="rounded-lg object-cover h-64 lg:h-96 w-full"
            />
          </div>
          <div>
            <Image
              src="/aboutCarousel/protest2.png"
              alt="Slide 2"
              width={620}
              height={384}
              className="rounded-lg object-cover h-64 lg:h-96 w-full"
            />
          </div>
          <div>
            <Image
              src="/aboutCarousel/protest3.jpg"
              alt="Slide 3"
              width={620}
              height={384}
              className="rounded-lg object-cover h-64 lg:h-96 w-full"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
