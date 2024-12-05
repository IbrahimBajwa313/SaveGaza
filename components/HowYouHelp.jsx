import React from "react";
import {
  FaHandsHelping,
  FaUniversity,
  FaBullhorn,
  FaDonate,
} from "react-icons/fa";

const HowYouCanHelp = () => {
  const waysToHelp = [
    {
      id: 1,
      icon: <FaHandsHelping className="text-green-500 text-6xl" />,
      title: "Join as a Ground Activist",
      description: "Become part of our movement to make a difference.",
    },
    {
      id: 2,
      icon: <FaUniversity className="text-blue-500 text-6xl" />,
      title: "University Ambassador",
      description: "Represent us at your university and inspire others.",
    },
    {
      id: 3,
      icon: <FaBullhorn className="text-yellow-500 text-6xl" />,
      title: "Social Media Activist",
      description: "Spread awareness and support through social platforms.",
    },
    {
      id: 4,
      icon: <FaDonate className="text-red-500 text-6xl" />,
      title: "Donate",
      description: "Your contribution can bring meaningful change.",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold leading-tight text-gray-900 mb-4">
          Save Gaza Campaign <span className="text-red-500">Needs You</span>
        </h1>
        <h2 className="text-3xl font-bold mb-8 text-[#22C55E]">
          How You Can Help
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {waysToHelp.map((way) => (
            <div
              key={way.id}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-transform transform hover:scale-105"
            >
              {way.icon}
              <h3 className="text-xl font-extrabold mt-4">{way.title}</h3>
              <p className="mt-2">{way.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowYouCanHelp;
