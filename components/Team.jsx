import Image from "next/image";
import { useState } from "react";

const Team = () => {
  const teamMembers = [
    {
      src: "/LeadersImages/Mushtaq-khan.webp",
      alt: "Mushtaq Khan",
      name: "Mushtaq Khan",
      role: "Ex Member of Senate",
    },
    {
      src: "/LeadersImages/Humaira-Tayyaba.webp",
      alt: "Humaira Tayyaba",
      name: "Humaira Tayyaba",
      role: "Founder Save Gaza Campaign",
    },
    {
      src: "/LeadersImages/Mushahid-Hussain-Sayed.webp",
      alt: "Mushahid Hussain Sayed",
      name: "Mushahid Hussain Sayed",
      role: "Ex Member of Senate",
    },
    {
      src: "/LeadersImages/Wahaj-Ahmad.webp",
      alt: "Wahaj Ahmad",
      name: "Wahaj Ahmad",
      role: "Founding Member",
    },
    {
      src: "/LeadersImages/Mahera-Sajid.webp",
      alt: "Mahera Sajid",
      name: "Mahera Sajid",
      role: "Founding Member (IT Professional)",
    },
    {
      src: "/LeadersImages/Farooq-Shah-Khan.webp",
      alt: "Farooq Shah Khan",
      name: "Farooq Shah Khan",
      role: "Founding Member (Law student)",
    },
    
    {
      src: "/LeadersImages/Tayyaba-Durrani.webp",
      alt: "Tayyaba Durrani",
      name: "Tayyaba Durrani",
      role: "Executive Team Member",
    },
    {
      src: "/LeadersImages/Dr-Sohaib-Khalid.webp",
      alt: "Dr Sohaib Khalid",
      name: "Dr Sohaib Khalid",
      role: "Executive Team Member (Urologist)",
    }, 
  ];

  const [showAll, setShowAll] = useState(false);

  const displayedMembers = showAll ? teamMembers : teamMembers.slice(0, 4);

  return (
    <section className="p-6 md:p-10">
      <h2 className="font-extrabold text-center text-3xl sm:text-4xl lg:text-5xl mb-6">
        Leaders Driving The Campaign
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 text-center"
          >
            <Image
              src={member.src}
              alt={member.alt}
              width={96}
              height={96}
              className="rounded-full mx-auto mb-4 h-24 w-24 object-cover"
            />
            <h3 className="font-semibold text-[#22C55E]">{member.name}</h3>
            <p className="text-gray-700">{member.role}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="hidden md:flex bg-[#22C55E] hover:bg-[#D0312D] text-white font-bold px-6 py-2 rounded-md transition-colors duration-300"
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
    </section>
  );
};

export default Team;
