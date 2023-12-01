import Intro from "./intro/intro"
import NavBar from "./navbar/navbar"

export default function Home() {
  return (
    <>
      <div className="flex">
        <NavBar />
        <div className="relative flex flex-col justify-center items-center max-w-screen max-h-screen overflow-hidden flex-1">
          <img
            className="object-cover object-center w-full h-full"
            src="/happy-justin.png"
            alt="justin in a park"
          />
          <div className="absolute md:right-2/3 top-0 mt-16">
            <Intro />
          </div>
        </div>
    </div>
  </>
  
  )
}
