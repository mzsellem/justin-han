import profilePic from "../public/justin-park.png"

export default function Home() {
  return (
   <main className="flex">
    <h1>Justin Han</h1>
    <h1>Musician. Conductor. Teacher.</h1>
    <img
                  src="/justin-park.png"
                  alt="justin in a park"
                  className="w-1/2"
               />
   </main>
  )
}
