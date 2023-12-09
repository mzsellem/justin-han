'use client'
import React, { useRef, useState, useEffect } from "react";
import Intro from "./intro/intro";
import Bio from "./bio/bio";
import PlaylistCard from "./media/media";

export default function Home() {
  const sectionRefs = {
    home: useRef(null),
    bio: useRef(null),
    media: useRef(null),
    events: useRef(null),
    contact: useRef(null),
  };

  const [activeSection, setActiveSection] = useState("home");

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  const scrollToSectionWithOffset = (ref: React.RefObject<HTMLElement>, offset: number | string) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const numericOffset = Number(offset); // or parseFloat(offset)
    
      window.scrollTo({
        top: rect.top + window.scrollY - numericOffset,
        behavior: "smooth",
      });
    }
  };

  const playlists = [
    {
      title: 'Mozart Concert',
      videos: ['Insert Videos Here', 'here', 'here'],
    },
    {
      title: 'Christmas Oratorio',
      videos: ['Exploring City X', 'Adventure in Country Y', 'Foodie Paradise'],
    },
    {
      title: 'Masters Piano Recital',
      videos: ['Exploring City X', 'Adventure in Country Y', 'Foodie Paradise'],
    },
  ];

  return (
    <>
      <div className="flex">
        <div className="fixed md:text-lg text-xs font-mono font-bold bg-bluesuit text-white z-10">
          <div className="flex justify-center w-screen h-16 md:space-x-10">
            <button onClick={() => scrollToSectionWithOffset(section1Ref, 80)} className="hover:text-yellowlight p-2 m-2">Home</button>
            <button onClick={() => scrollToSectionWithOffset(section2Ref, 60)} className="hover:text-yellowlight p-2 m-2">Bio</button>
            <button onClick={() => scrollToSectionWithOffset(section3Ref, 65)} className="hover:text-yellowlight p-2 m-2">Media</button>
            <button onClick={() => scrollToSectionWithOffset(section4Ref, 65)} className="hover:text-yellowlight p-2 m-2">Events</button>
            <button onClick={() => scrollToSectionWithOffset(section5Ref, 65)} className="hover:text-yellowlight p-2 m-2">Contact</button>
          </div>
        </div>

        <div className="fixed inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("justin-park.png")' }}>
        </div>

        <div className="flex justify-center w-screen h-screen">
          <div ref={section1Ref} className="absolute top-20 md:right-0 mt-6 md:mr-6">
            <Intro />
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col relative items-center">
          <div ref={section2Ref} className="bg-white">
            <Bio />
          </div>
          <div ref={section3Ref} className="bg-white w-screen">
          <div className="flex justify-center text-2xl p-6">Media</div>
          <div className="flex justify-center items-center mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {playlists.map((playlist, index) => (
                <PlaylistCard key={index} title={playlist.title} videos={playlist.videos} />
              ))}
            </div>
          </div>
          </div>
          <div ref={section4Ref} className="my-2 section bg-blue-400/50 md:bg-blue-400/25 rounded-3xl md:w-3/4">
            {/* <About /> */}
          </div>
          <div ref={section5Ref} className="flex justify-center my-2 text-center section bg-blue-400/50 md:bg-blue-400/25 rounded-3xl md:w-3/4">
            {/* <Contact /> */}
          </div>
        </div>
      </div>
    </>
  );
}
