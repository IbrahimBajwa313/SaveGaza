import React from "react";
import Link from "next/link";
import Image from 'next/image';

const MediaAboutUs = () => {
  const articles = [
    {
      id: 1,
      image: "/protest.jpg", // Replace with your image path
      title: "Join As a Ground Activist ",
      source: "Join SGC #join",
      date: "12.05.2024",
      link: "/article1", // Replace with your link
    },
    {
      id: 2,
      image: "/protest.jpg", // Replace with your image path
      title: "Join Us as Your University Ambasador",
      source: "Donate #donate",
      date: "26.04.2024",
      link: "/article2", // Replace with your link
    },
    {
      id: 3,
      image: "/protest.jpg", // Replace with your image path
      title: "Join Our Social Media Activists Team",
      source: "Join SGC #join",
      date: "26.03.2024",
      link: "/article3", // Replace with your link
    },
    {
      id: 4,
      image: "/protest.jpg", // Replace with your image path
      title: "Donate: Your contribution can make a significant difference #donate",
      source: "Donate #donate",
      date: "17.03.2024",
      link: "/article4", // Replace with your link
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">

        <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight text-[#000]  mb-4">
                Save Gaza Campaign <span className="text-black ">Needs You </span>
              </h1>
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-[#D0312D]">
          How You Can Help
        </h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white p-6 rounded-3xl shadow-lg transform transition-transform hover:scale-105 flex flex-col justify-between"
            >
              <Image
                src={article.image}
                alt={article.title}
                className="rounded-2xl mb-4"
                layout="responsive"
                width={700} // Increased width
                height={400} // Increased height
              />
              <p className="text-left text-gray-600 font-semibold mb-2">
                {article.source}
              </p>
              <h3 className="text-left text-base font-bold mb-4 text-black">
                {article.title}
              </h3>
              <div className="text-right mt-4">
                <Link
                  href={article.link}
                  className="px-4  py-2 bg-[#22C55E] text-lg text-white font-semibold rounded-xl hover:bg-[#D0312D] transition ease-in-out duration-300"
                >
                  More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaAboutUs;
