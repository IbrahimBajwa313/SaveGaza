import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';

export default function NewsPage() {
  const press_rel = [
    {
      id: 1,
      image: "/protest1.jpg", // Replace with your image path
      date: "20 May, 2024",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consequatur."
    },
    {
      id: 2,
      image: "/protest2.png", // Replace with your image path
      date: "2 June, 2024",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consequatur."
    },
    {
      id: 3,
      image: "/protest3.jpg", // Replace with your image path
      date: "10 May, 2024",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consequatur."
    },
    {
      id: 4,
      image: "/protest4.jpg", // Replace with your image path
      date: "3 July, 2024",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consequatur."
    },
  ];
  
  const videos = [
    {
      id: 1,
      link: "https://www.youtube.com/embed/r6ILoaqAkaE?si=1mTaVTzc_lSLz3fc",
    },
    {
      id: 2,
      link: "https://www.youtube.com/embed/r6ILoaqAkaE?si=1mTaVTzc_lSLz3fc",
    },
    {
      id: 3,
      link: "https://www.youtube.com/embed/r6ILoaqAkaE?si=1mTaVTzc_lSLz3fc",
    },
    {
      id: 4,
      link: "https://www.youtube.com/embed/r6ILoaqAkaE?si=1mTaVTzc_lSLz3fc",
    },
  ];
  
  const events = [
    {
      id: 1,
      image: "/protest4.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consequatur.",
      time: "Tuesday, February 20 at 8:00 AM",
      loc: "H-Block, Johar Town, Lahore"
    },
    {
      id: 2,
      image: "/protest1.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consequatur.",
      time: "Tuesday, February 20 at 8:00 AM",
      loc: "H-Block, Johar Town, Lahore"
    },
    {
      id: 3,
      image: "/protest1.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consequatur.",
      time: "Tuesday, February 20 at 8:00 AM",
      loc: "H-Block, Johar Town, Lahore"
    },
    {
      id: 4,
      image: "/protest1.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consequatur.",
      time: "Tuesday, February 20 at 8:00 AM",
      loc: "H-Block, Johar Town, Lahore"
    },
  ];

  const [press, setPress] = useState(true);
  const [fb, setFB] = useState(true);
  const [insta, setInsta] = useState(false);
  const [x, setX] = useState(false);

  return (
    <div className='min-h-screen mt-8 grid grid-cols-1 md:grid-cols-3 gap-4'>

      <div className="news-card mr-2">
        <div className="buttons flex justify-center">
          <div className={`w-full rounded-t-lg shadow-2xl header flex justify-center items-center bg-[#22C55E] hover:bg-[#3d7a53] hover:cursor-pointer
           text-white font-bold p-2 transition-all duration-200 ${press ? 'bg-[#3d7a53]' : 'bg-[#22C55E]'}`} onClick={() => setPress(true)}>
            Press Release
          </div>
          <div className={`w-full rounded-t-lg shadow-2xl header flex justify-center items-center bg-[#22C55E] hover:bg-[#3d7a53] hover:cursor-pointer
           text-white font-bold p-2 transition-all duration-200 ${!press ? 'bg-[#3d7a53]' : 'bg-[#22C55E]'}`} onClick={() => setPress(false)}>
            Video
          </div>
        </div>
        <div className="scrollbar rounded-b-lg p-3 shadow-2xl bg-white w-full overflow-y-auto" style={{ height: '85vh' }}>
          {press && (
            <div className="press-rel-cards flex-col justify-center items-center space-y-6 my-2">
              {press_rel.map((card) => (
                <div key={card.id} className="bg-white p-3 space-y-3 mb-3 border-b-2 border-gray-400">
                  <img src={card.image} className='w-full mb-2' alt="" />
                  <div className="date text-gray-600 text-sm font-semibold">{card.date}</div>
                  <div className="desc font-bold text-lg">{card.desc}</div>
                </div>
              ))}
            </div>
          )}
          {!press && (
            <div className="video-cards flex-col justify-center items-center space-y-6 my-2">
              {videos.map((vid) => (
                <div key={vid.id} className="border-b-2 border-gray-400">
                  <iframe className='w-full p-3' src={vid.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="events-card mr-2">
        <div className="rounded-t-lg shadow-2xl header flex justify-center items-center bg-[#22C55E] text-white font-bold py-2">
          Events
        </div>
        <div className="scrollbar rounded-b-lg p-3 bg-white w-full shadow-2xl overflow-y-auto" style={{ height: '85vh' }}>
          {events.map((ev) => (
            <div key={ev.id} className="bg-white p-3 space-y-3 mb-3 border-b-2 border-gray-400">
              <img src={ev.image} className='w-full mb-2' alt="" />
              <div className="desc font-bold text-lg">{ev.desc}</div>
              <div className="info flex flex-col justify-center space-y-1">
                <div className="time text-gray-600">
                  <FontAwesomeIcon icon={faClock} style={{ width: '5%' }} />
                  <span className='w-3/4'>{ev.time}</span>
                </div>
                <div className="loc text-gray-600">
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ width: '5%' }} />
                  <span className='w-3/4'>{ev.loc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="social-media-card ">
        <div className="buttons flex justify-center">
          <div className={`w-full rounded-t-lg shadow-2xl header flex justify-center items-center bg-[#22C55E] hover:bg-[#3d7a53] hover:cursor-pointer text-white font-bold p-2 transition-all duration-200 ${fb ? 'bg-[#3d7a53]' : 'bg-[#22C55E]'}`} onClick={() => { setFB(true); setInsta(false); setX(false); }}>
            <FontAwesomeIcon icon={faFacebookF} className='text-xl' />
          </div>
          <div className={`w-full rounded-t-lg shadow-2xl header flex justify-center items-center bg-[#22C55E] hover:bg-[#3d7a53] hover:cursor-pointer text-white font-bold p-2 transition-all duration-200 ${insta ? 'bg-[#3d7a53]' : 'bg-[#22C55E]'}`} onClick={() => { setFB(false); setInsta(true); setX(false); }}>
            <FontAwesomeIcon icon={faInstagram} className='text-xl' />
          </div>
          <div className={`w-full rounded-t-lg shadow-2xl header flex justify-center items-center bg-[#22C55E] hover:bg-[#3d7a53] hover:cursor-pointer text-white font-bold p-2 transition-all duration-200 ${x ? 'bg-[#3d7a53]' : 'bg-[#22C55E]'}`} onClick={() => { setFB(false); setInsta(false); setX(true); }}>
            <FontAwesomeIcon icon={faTwitter} className='text-xl' />
          </div>
        </div>
        <div className="scrollbar rounded-b-lg p-3 bg-white w-full shadow-2xl overflow-y-auto" style={{ height: '85vh' }}>
          {fb && <div className="flex flex-col justify-center items-center space-y-4 my-2">
            {/* Facebook posts go here */}
          </div>}
          {insta && <div className="flex flex-col justify-center items-center space-y-4 my-2">
            {/* Instagram posts go here */}
          </div>}
          {x && <div className="flex flex-col justify-center items-center space-y-4 my-2">
            {/* Twitter posts go here */}
          </div>}
        </div>
      </div>

    </div>
  );
}
