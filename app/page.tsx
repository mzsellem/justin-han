'use client'
import React, { useRef, useState, useEffect } from "react";
import Intro from "./intro/intro";
import Bio from "./bio/bio";
import PlaylistCard from "./media/media";
import Events from "./events/events";
import Contact from "./contact/contact";
import Footer from "./footer/footer"

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
      videos: ['Video', 'Video', 'Video'],
    },
    {
      title: 'Masters Piano Recital',
      videos: ['Exploring City X', 'Adventure in Country Y', 'Foodie Paradise'],
    },
  ];

  const tableData = [
    {
      date: '2023-01-01',
      time: '12:00 PM',
      location: 'Event Hall',
      description: 'Lorem Ipsum',
      link: 'https://example.com',
    },
    {
      date: '2023-02-15',
      time: '3:30 PM',
      location: 'Conference Room',
      description: 'Dolor Sit Amet',
      link: 'https://example.com',
    },
    {
      date: '2023-01-01',
      time: '12:00 PM',
      location: 'Event Hall',
      description: 'Lorem Ipsum',
      link: 'https://example.com',
    },
    {
      date: '2023-02-15',
      time: '3:30 PM',
      location: 'Conference Room',
      description: 'Dolor Sit Amet',
      link: 'https://example.com',
    },
    {
      date: '2023-01-01',
      time: '12:00 PM',
      location: 'Event Hall',
      description: 'Lorem Ipsum',
      link: 'https://example.com',
    },
    {
      date: '2023-02-15',
      time: '3:30 PM',
      location: 'Conference Room',
      description: 'Dolor Sit Amet',
      link: 'https://example.com',
    },
    {
      date: '2023-02-15',
      time: '3:30 PM',
      location: 'Conference Room',
      description: 'Dolor Sit Amet',
      link: 'https://example.com',
    },
    {
      date: '2023-01-01',
      time: '12:00 PM',
      location: 'Event Hall',
      description: 'Lorem Ipsum',
      link: 'https://example.com',
    },
    {
      date: '2023-02-15',
      time: '3:30 PM',
      location: 'Conference Room',
      description: 'Dolor Sit Amet',
      link: 'https://example.com',
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

        <div className="flex">
          <div className="flex flex-col justify-end z-8 fixed inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("justin-park.png")' }}>
            <div className="bg-bluesuit text-white p-2 flex justify-center text-md">Updated: December 2023</div>
          </div>
        </div>

        <div className="flex justify-center w-screen h-screen">
          <div ref={section1Ref} className="absolute top-20 md:right-0 mt-6 md:mr-6">
            <Intro />
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col relative items-center bg-white md:space-y-20 space-y-4 space">
          <div ref={section2Ref} className="bg-white">
            <Bio />
          </div>
          <div ref={section3Ref} className="bg-white w-screen">
          <div className="flex justify-center text-3xl p-6 font-bold">Media</div>
          <div className="flex justify-center items-center mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {playlists.map((playlist, index) => (
                <PlaylistCard key={index} title={playlist.title} videos={playlist.videos} />
              ))}
            </div>
          </div>
          </div>
          <div ref={section4Ref} className="h-screen">
            <Events data={tableData}/>
          </div>
          <div ref={section5Ref} className="flex justify-center text-center md:h-3/4 md:pb-8">
            <Contact /> 
          </div>
        </div>
      </div>
    </>
  );
}
