'use client'
import React, { useRef, useState, useEffect } from "react";
import Intro from "./intro/intro";
import Bio from "./bio/bio";
import MediaCard from "./media/media";
import Events from "./events/events";
import Contact from "./contact/contact";

// interface Props {
//   title: String,
//   link: String,
//   imageUrl: String, 
// }

export default function Home({title, link, imageUrl}: any) {
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


  const tableData: string | any[] | undefined = [
    // {
    //   date: '2023-01-01',
    //   time: '12:00 PM',
    //   location: 'Event Hall',
    //   description: 'Lorem Ipsum',
    //   link: 'https://example.com',
    // },
    // {
    //   date: '2023-02-15',
    //   time: '3:30 PM',
    //   location: 'Conference Room',
    //   description: 'Dolor Sit Amet',
    //   link: 'https://example.com',
    // },
    // {
    //   date: '2023-01-01',
    //   time: '12:00 PM',
    //   location: 'Event Hall',
    //   description: 'Lorem Ipsum',
    //   link: 'https://example.com',
    // },
    // {
    //   date: '2023-02-15',
    //   time: '3:30 PM',
    //   location: 'Conference Room',
    //   description: 'Dolor Sit Amet',
    //   link: 'https://example.com',
    // },
    // {
    //   date: '2023-01-01',
    //   time: '12:00 PM',
    //   location: 'Event Hall',
    //   description: 'Lorem Ipsum',
    //   link: 'https://example.com',
    // },
    // {
    //   date: '2023-02-15',
    //   time: '3:30 PM',
    //   location: 'Conference Room',
    //   description: 'Dolor Sit Amet',
    //   link: 'https://example.com',
    // },
    // {
    //   date: '2023-02-15',
    //   time: '3:30 PM',
    //   location: 'Conference Room',
    //   description: 'Dolor Sit Amet',
    //   link: 'https://example.com',
    // },
    // {
    //   date: '2023-01-01',
    //   time: '12:00 PM',
    //   location: 'Event Hall',
    //   description: 'Lorem Ipsum',
    //   link: 'https://example.com',
    // },
    // {
    //   date: '2023-02-15',
    //   time: '3:30 PM',
    //   location: 'Conference Room',
    //   description: 'Dolor Sit Amet',
    //   link: 'https://example.com',
    // },
  ];

  return (
    <>
      <div className="flex">
        <div className="fixed z-10 text-xs font-bold text-white md:text-lg font-pro bg-bluesuit">
          <div className="flex items-center justify-between w-screen h-16 md:space-x-10">
            <div className="flex items-center">
              <button onClick={() => scrollToSectionWithOffset(section1Ref, 110)} className="p-2 m-2 hover:text-yellowlight">Home</button>
              <button onClick={() => scrollToSectionWithOffset(section2Ref, 60)} className="p-2 m-2 hover:text-yellowlight">Bio</button>
              <button onClick={() => scrollToSectionWithOffset(section3Ref, 65)} className="p-2 m-2 hover:text-yellowlight">Media</button>
                {tableData.length > 0 && (
                <button onClick={() => scrollToSectionWithOffset(section4Ref, 65)} className="p-2 m-2 hover:text-yellowlight">Events</button>
                )}
              <button onClick={() => scrollToSectionWithOffset(section5Ref, 65)} className="p-2 m-2 hover:text-yellowlight">Contact</button>
            </div>
            <div className="flex items-center">
              <div className="flex mr-2">LOGO HERE</div>
              <h1 className="p-2 mr-3 text-xs font-bold text-black rounded-md md:text-xl bg-grey font-pro">JUSTIN HAN</h1>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="fixed inset-0 flex flex-col justify-end bg-center bg-cover z-8" style={{ 
            backgroundImage: 'url("crazy-rich-justin.png")',
            backgroundPositionY: '30%' // Adjust the position here (e.g., 'center', 'top', 'bottom', '50%', etc.)
        
          }}>
            <div className="flex justify-center p-2 text-white bg-bluesuit font-pro text-md">Last Updated 2024</div>
          </div>
        </div>

        <div className="flex justify-center w-screen h-screen">
          <div ref={section1Ref} className="absolute mt-6 top-20 md:right-0 md:mr-6">
            {/* <Intro /> */}
          </div>
        </div>
      </div>

      <div>
        <div className="relative flex flex-col items-center space-y-8 bg-white md:space-y-18 space">
            <div ref={section2Ref} className="bg-white">
              <Bio />
            </div>
            <div ref={section3Ref} className="w-screen bg-white">
              <div className="flex justify-center mt-6 mb-2 text-3xl font-bold font-pro">Media</div>
              <div className="flex justify-center p-6 mx-auto sm:w-5/6">
                <div className="sm:w-full sm:flex-col sm:flex">
                  <MediaCard title={title} link={link} imageUrl={imageUrl} />
                </div>
              </div>
            </div>
            {tableData.length > 0 ? (
              <div ref={section4Ref} className="h-screen md:w-screen">
                <Events data={tableData} />
              </div>
            ) : (
              <></>
        )}
        <div ref={section5Ref} className="flex justify-center p-4 pt-6 text-center md:h-3/4 md:pb-8 md:pt-8">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
