import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const LeadersSlider = () => {
  const leaders = [
    {
      name: "Mushtaq Khan",
      title: "Ex-Member of Senate",
      image: "/LeadersImages/Mushtaq-khan.webp",
    },
    {
      name: "Humaira Tayyaba",
      title: "Founder Save Gaza Campaign",
      image: "/LeadersImages/Humaira-Tayyaba.webp",
    },
    {
      name: "Wahaj Ahmad",
      title: "Founding Member",
      image: "/LeadersImages/Wahaj-Ahmad.webp",
    },
    {
      name: "Mahera Sajid",
      title: "Founding Member (IT Professional)",
      image: "/LeadersImages/Mahera-Sajid.webp",
    },
    {
      name: "Farooq Shah Khan",
      title: "Founding Member (Law Student)",
      image: "/LeadersImages/Farooq-Shah-Khan.webp",
    },
    {
      name: "Ahmad Maaz",
      title: "Media Director Save Gaza Campaign",
      image: "/LeadersImages/Ahmad-Maaz-Shafqat.webp",
    },
    {
      name: "Tayyaba Durani",
      title: "Executive Team Member",
      image: "/LeadersImages/Tayyaba-Durrani.webp",
    },
    {
      name: "Dr. Sohaib Khalid",
      title: "Executive Team Member (Urologist)",
      image: "/LeadersImages/Dr-Sohaib-Khalid.webp",
    },
    // {
    //   name: "Syed Bilal Hamdani",
    //   title: "Executive Team Member & IIUI Team Lead",
    //   image: "/LeadersImages/Syed-Bilal-Hamdani.webp",
    // },
    {
      name: "Mushahid Hussain",
      title: "Ex-Member Of Senate",
      image: "/LeadersImages/Mushahid-Hussain-Sayed.webp",
    },
  ];

  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('flag2.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-base sm:text-3xl font-bold mb-2 text-white">
          Leaders Driving Save Gaza Movement
        </h2>
        <p className="text-sm sm:text-2xl font-semibold text-white mb-6">
          No one is free until Palestine is free!
        </p>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 25000000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {leaders.map((leader, index) => (
           <SwiperSlide key={index}>
           <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-between h-[280px]">  
             <div className="relative w-32 h-32 mb-4">
               <Image
                 src={leader.image}
                 alt={leader.name}
                 className="rounded-full"
                 fill
                 style={{ objectFit: "cover" }}
                 sizes="(max-width: 640px) 80vw, (min-width: 640px) 160px"
               />
             </div>
             <h3 className="text-lg font-bold text-green-600 text-center">
               {leader.name}
             </h3>
             <p className="text-gray-800 text-center text-sm">{leader.title}</p>
           </div>
         </SwiperSlide>
         
         
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LeadersSlider;
