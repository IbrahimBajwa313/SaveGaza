import React from "react";
import {
  FaHandsHelping,
  FaUniversity,
  FaBullhorn,
  FaDonate,
} from "react-icons/fa";

const JoinNow = () => {
  const waysToHelp = [
    {
      id: 1,
      icon: <FaHandsHelping className="text-green-500 text-6xl" />,
      title: "Join as a Ground Activist",
      description: "Become part of our movement to make a difference.",
      button: {
        label: "Join Now",
        link: "/groundActivistForm", // Replace with the form link
      },
    },
    {
      id: 2,
      icon: <FaUniversity className="text-blue-500 text-6xl" />,
      title: "University Ambassador",
      description: "Represent us at your university and inspire others.",
      button: {
        label: "Join Now",
        link: "/universityAmbassadorForm", // Replace with the form link
      },
    },
    {
      id: 3,
      icon: <FaBullhorn className="text-yellow-500 text-6xl" />,
      title: "Social Media Activist",
      description: "Spread awareness and support through social platforms.",
      button: {
        label: "Join Now",
        link: "/socialMediaActivistForm", // Replace with the form link
      },
    },
    {
      id: 4,
      icon: <FaDonate className="text-red-500 text-6xl" />,
      title: "Donate",
      description: "Your contribution can bring meaningful change.",
      button: {
        label: "Donate Now",
        link: "https://sgc-relief-activities-2st2.vercel.app/", // Replace with your donation module link
        target: "_blank",
      },
    },
  ];

  return (
    <section className="py-12 min-h-screen w-full max-w-[100%] px-4 sm:px-10 md:px-16 lg:px-28 mx-auto">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold leading-tight text-gray-900 mb-4">
          Save Gaza Campaign <span className="text-red-500">Needs You</span>
        </h1>
        <h2 className="text-3xl font-bold mb-12 text-[#22C55E]">
          How You Can Help
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
          {waysToHelp.map((way) => (
            <div
              key={way.id}
              className="bg-white p-6 rounded-xl shadow-xl flex flex-col transform transition-transform duration-300 hover:scale-105 items-center text-center h-full"
            >
              {way.icon}
              <h3 className="text-xl font-extrabold mt-4">{way.title}</h3>
              <p className="mt-2 flex-grow">{way.description}</p>
              {way.button && (
                <a
                  href={way.button.link}
                  className="mt-4 inline-block px-6 py-2 text-x font-bold text-[#22C55E] border-2 border-[#22C55E] rounded-lg hover:bg-[#22C55E] hover:text-white transition"
                >
                  {way.button.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinNow;
