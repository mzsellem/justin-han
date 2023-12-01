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
          <div className="absolute top-0 md:right-0 mt-6">
            <Intro />
          </div>
        </div>
    </div>
  </>
  
  )
}
