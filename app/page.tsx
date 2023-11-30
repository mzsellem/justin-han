import profilePic from "../public/justin-park.png"
import Intro from "./intro/intro"

export default function Home() {
  return (
   <>
    <main className="flex flex-col justify-center items-end max-w-screen max-h-screen z-10 overflow-hidden">
          <img
            style={{ objectFit: 'cover', objectPosition: '50% 30%', width: '90%', height: '80%' }}
            src="/happy-justin.png"
            alt="justin in a park"
          />
          <div className="text-white md:text-4xl text-sm absolute top-1/2 transform md:-translate-x-44 -translate-x-9 md:translate-y-72 -translate-y-10 z-5">
            <Intro />
          </div>
      </main>
   </>
  )
}
