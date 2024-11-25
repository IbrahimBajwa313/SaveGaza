import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-responsive-carousel";
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
          is a movement of hope and resilience, uniting voices for justice and
          compassion. Since our inception in November 2023, we strive to uplift
          the oppressed and foster solidarity among communities, ensuring that
          every individual feels valued and heard.
        </p>
        <br /> 
        <a
          href="https://linktr.ee/savegazacampaign?utm_source=linktree_profile_share&ltsid=cde54ead-18bd-4278-934c-bc9a06c23d71"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full lg:w-full block"
        >
          <button className="w-full p-3   bg-[#22C55E] text-white rounded-full font-bold text-lg lg:text-2xl transition duration-300 ease-in-out hover:bg-[#D0312D] hover:text-white">
            Join Now{" "}
            <FontAwesomeIcon className="pl-4" icon={faArrowUpRightFromSquare} />
          </button>
        </a>
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
            <img
              src="/protest4.jpg"
              alt="Slide 4"
              className="rounded-lg object-cover h-64 lg:h-96 w-full"
            />
          </div>
          <div>
            <img
              src="/protest1.jpg"
              alt="Slide 1"
              className="rounded-lg object-cover h-64 lg:h-96 w-full"
            />
          </div>
          <div>
            <img
              src="/protest2.png"
              alt="Slide 2"
              className="rounded-lg object-cover h-64 lg:h-96 w-full"
            />
          </div>
          <div>
            <img
              src="/protest3.jpg"
              alt="Slide 3"
              className="rounded-lg object-cover h-64 lg:h-96 w-full"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
