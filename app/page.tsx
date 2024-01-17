'use client'
import React, { useRef, useState, useEffect } from "react";
import Intro from "./intro/intro";
import Bio from "./bio/bio";
import MediaCard from "./media/media";
import Events from "./events/events";
import Contact from "./contact/contact";

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
      videos: ['BdFr9vdz-SU?si=TgCx4yOsMtFuu3P_', 'KhW5EthdSXI?si=BLEcNyyXjt9_pIaD', 'KhW5EthdSXI?si=9zxynfY7_IsZwxD3', 'iJGEvFzBs-Y?si=txqtNvy9W8gCY1xG', 'AqWB2iNaoLA?si=aoGHiIWvrs1rQ4F9', '5bvLJ1gKjxI?si=v2n3Y7irC3luZCtU', 'd1wpzCKHd74?si=nXvFjvo5B4lW0pPq', 'j-GxKTKnGck?si=oMqDmufEsAQ9ACiB'],
    },
    {
      title: 'Christmas Oratorio',
      videos: ['RDmY90Xs3NQ?si=RS4aYVL1K0bVJG7c', 'darXK32zReE?si=iJFFqSrBbfCPb3Xt', 'nr47uLHQ1l4?si=OqLTY1pRgbp3RumC', 'Yfo62UQXoBo?si=akhkC7Mc52Mn32Uv', 'X6Q3IuyZrLM?si=h5J4wCCRZFNhH90G', 'V-zFfk5t1mQ?si=FqigWz-wl5eVcDIJ', 'A4B4GWGU0Ww?si=OM6T6J533yfMEBeW', 'H1XxkI3glHM?si=9D8Q2hcj7lRsGHIK', '8JnW7Z1lf1I?si=ItTcDQQln90eHyDU', 'p07Y3uEE1nw?si=vpfrTKgnZQv6Cj_0'],
    },
    {
      title: 'Masters Piano Recital',
      videos: ['-4XrN1x2iT4?si=ESDH-2ET_K8InUV-', '01u5_H65U7o?si=DgIRJ4OE6NUYe7Cy', 'EiwW3a_pjXU?si=HOOVBZrmJE0EAkx6', 'XZsKrMpgdRw?si=uYFZIZnTEgoRytxy', 'XZsKrMpgdRw?si=uYFZIZnTEgoRytxy', 'hK6dzVJe6oM?si=I_aD37k5336afZ_X', 'pOj4zM6Qt-g?si=7XkUCjy06-lhZeJ_'],
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
        <div className="fixed z-10 text-xs font-bold text-white md:text-lg font-pro bg-bluesuit">
          <div className="flex justify-center w-screen h-16 md:space-x-10">
            <button onClick={() => scrollToSectionWithOffset(section1Ref, 80)} className="p-2 m-2 hover:text-yellowlight">Home</button>
            <button onClick={() => scrollToSectionWithOffset(section2Ref, 60)} className="p-2 m-2 hover:text-yellowlight">Bio</button>
            <button onClick={() => scrollToSectionWithOffset(section3Ref, 65)} className="p-2 m-2 hover:text-yellowlight">Media</button>
            <button onClick={() => scrollToSectionWithOffset(section4Ref, 65)} className="p-2 m-2 hover:text-yellowlight">Events</button>
            <button onClick={() => scrollToSectionWithOffset(section5Ref, 65)} className="p-2 m-2 hover:text-yellowlight">Contact</button>
          </div>
        </div>

        <div className="flex">
          <div className="fixed inset-0 flex flex-col justify-end bg-center bg-cover z-8" style={{ backgroundImage: 'url("justin-park.png")' }}>
            <div className="flex justify-center p-2 text-white bg-bluesuit font-pro text-md">Updated: December 2023</div>
          </div>
        </div>

        <div className="flex justify-center w-screen h-screen">
          <div ref={section1Ref} className="absolute mt-6 top-20 md:right-0 md:mr-6">
            <Intro />
          </div>
        </div>
      </div>

      <div>
        <div className="relative flex flex-col items-center space-y-4 bg-white md:space-y-18 space">
          <div ref={section2Ref} className="bg-white">
            <Bio />
          </div>
          <div ref={section3Ref} className="w-screen bg-white">
          <div className="flex justify-center mt-6 text-3xl font-bold font-pro">Media</div>
          <div className="flex items-center justify-center p-6 mb-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {playlists.map((playlist, index) => (
                <MediaCard key={index} title={playlist.title} videos={playlist.videos} />
              ))}
            </div>
          </div>
          </div>
          <div ref={section4Ref} className="h-screen md:w-screen">
            {/* <Events data={tableData}/> */}
          </div>
          <div ref={section5Ref} className="flex justify-center p-4 pt-6 text-center md:h-3/4 md:pb-8 md:pt-8">
            <Contact /> 
          </div>
        </div>
      </div>
    </>
  );
}
