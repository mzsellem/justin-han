import profilePic from "../public/justin-park.png"
import Intro from "./intro/intro"

export default function Home() {
  return (
   <>
    <>
  <main className="relative flex flex-col justify-center items-end max-w-screen max-h-screen overflow-hidden">
    <img
      className="object-cover object-center w-full h-full"
      src="/happy-justin.png"
      alt="justin in a park"
    />
    <div className="absolute bottom-3/4 right-2/3 p-4 text-white bg-black text-4xl z-5">
      <Intro />
    </div>
  </main>
</>

   </>
  )
}
