import React from "react";

export default function Video() {
  return (
    <section className="bg-gray-50 flex flex-col rounded-3xl my-4 lg:my-8 p-4 lg:p-8 shadow-lg">
      <div className="flex flex-col text-black w-full mb-2">
        <h2 className="font-extrabold text-3xl lg:text-3xl mb-4 text-center">
          Gaza&apos;s Advocate <span className="text-[#22C55E]">in Pakistan</span>
        </h2>

        <p className="text-base lg:text-lg text-center leading-6 lg:leading-7">
          The{" "}
          <span className="font-bold text-[#D0312D]">Save Gaza Campaign</span>{" "}
          is a collective effort led by concerned citizens of Pakistan, urging
          the government to take decisive action against the ongoing
          humanitarian crisis in Gaza. Join the movement to stand against
          oppression and demand justice.
        </p>
      </div>

      <div className="relative w-full h-[40vh] lg:h-[50vh] rounded-lg shadow-lg overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/_w4gEAFYjFw"
          title="Save Gaza Campaign Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="flex justify-center mt-2">
        <a
          href="https://www.youtube.com/watch?v=_w4gEAFYjFw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="p-4 border-2 border-[#22C55E] text-[#22C55E] rounded-full mt-4 font-bold text-base lg:text-lg transition duration-300 ease-in-out hover:border-[#D0312D] hover:text-[#D0312D]">
            Watch on YouTube
          </button>
        </a>
      </div>
    </section>
  );
}
