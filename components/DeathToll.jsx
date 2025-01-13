import React from "react";
import Chart from "./Chart";

export default function DeathToll() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center my-8">
      {/* Text section */}
      <div className="flex flex-col justify-center items-start pl-4 md:pl-8 w-full lg:w-4/12 mb-8 lg:mb-0">
        <h2 className="text-4xl md:text-6xl font-extrabold">Death Toll</h2>
        <br />
        <p className="text-base md:text-xl">
          Since 9 October 2023, Israel has been targeting Gaza, creating a total
          death toll of <span className="font-bold text-red-500">186,000+</span>{" "}
          so far.
        </p>
      </div>

      {/* Chart section */}
      <div className="w-full lg:w-7/12 flex flex-col justify-start items-center lg:items-end relative lg:-top-12">
        {/* Banner */}
        <div className="bg-green-500 text-white text-center p-4 rounded-3xl mb-8 w-full md:w-10/12 lg:w-10/12 relative top-12 lg:top-24 lg:-left-8">
          <h2 className="text-3xl md:text-5xl font-extrabold">186,000+</h2>
          <p className="text-xs md:text-base font-bold">
            Every passing day leads to more innocent deaths. Help us put a stop
            to it.
          </p>
        </div>

        {/* Chart container */}
        <div className="bg-gray-50 px-4 md:px-8 pt-8 md:pt-20 rounded-3xl shadow-lg w-full">
          <Chart />
        </div>
      </div>
    </section>
  );
}
