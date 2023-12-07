'use client'
import React, { useRef } from "react";
import Intro from "./intro/intro";

export default function Home() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  const scrollToSectionWithOffset = (ref, offset) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      window.scrollTo({
        top: rect.top + window.scrollY - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="flex">
        <div className="fixed md:text-lg text-xs font-mono font-bold bg-bluesuit text-white z-5">
          <div className="flex justify-center w-screen h-16 md:space-x-10">
            <button onClick={() => scrollToSectionWithOffset(section1Ref, 65)} className="hover:text-yellowlight p-2 m-2">Home</button>
            <button onClick={() => scrollToSectionWithOffset(section2Ref, 65)} className="hover:text-yellowlight p-2 m-2">Bio</button>
            <button onClick={() => scrollToSectionWithOffset(section3Ref, 65)} className="hover:text-yellowlight p-2 m-2">Media</button>
            <button onClick={() => scrollToSectionWithOffset(section4Ref, 65)} className="hover:text-yellowlight p-2 m-2">Events</button>
            <button onClick={() => scrollToSectionWithOffset(section5Ref, 65)} className="hover:text-yellowlight p-2 m-2">Contact</button>
          </div>
        </div>
        <div className="flex justify-center w-screen h-screen overflow-hidden">
          <div ref={section1Ref} className="absolute top-20 md:right-0 mt-6 md:mr-6">
            <Intro />
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center m-6 z-1">
          <div ref={section2Ref} className="my-2 section bg-blue-400/50 md:bg-blue-400/25 rounded-3xl mt-52 md:mt-44 md:w-3/4">
            {/* <Projects /> */}
          </div>
          <div ref={section3Ref} className="my-2 section bg-blue-400/50 md:bg-blue-400/25 rounded-3xl md:w-3/4">
            {/* <Skills /> */}
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
