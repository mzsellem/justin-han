import { useState } from "react"

export default function Bio() {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
    <>
        <div className="flex flex-col items-center justify-center p-4 mt-4 md:flex-row md:space-x-6">
            <div className="w-3/4 md:w-1/3">
                <img className="border rounded-xl" src="/conductor-justin.png" alt="Conductor Justin" />
            </div>
            <div className="flex flex-col p-4 md:w-1/3">
                <div className="relative flex justify-center mb-4 space-x-2 text-3xl font-bold text-center md:flex md:items-left font-pro">
                    <h1 className="flex items-center justify-center">Meet Justin Han</h1>
                    <a href="https://www.linkedin.com/in/jhan719/"><img className={`transform ${isHovered ? 'scale-110' : 'scale-300'} p-2 transition-transform duration-300 ease-in-out`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} src="linkedin.png" alt="linkedin logo" style={{ width: '50px' }}/></a>
                </div>
                <div className="flex items-center justify-center text-md font-pro">
                    A native of both South Korea and Georgia, Mr. Justin Han is a professional pianist, conductor, singer, and violinist in the Atlanta area. Justin is a graduate of Georgia State University, where he earned a double Master’s degree in choral conducting and piano performance and was a recipient of the Robert Shaw Choral Scholar Award and Stegner Piano Scholarship.

    Before joining Emory Presbyterian Church in January 2020, Justin held music director and organist positions at Johns Creek Presbyterian Church, Commerce Presbyterian Church, Greensboro First United Methodist Church, and Our Hope Metropolitan Community Church. He also currently works as a piano instructor at Silva Piano Studios in Marietta, GA.

    When he isn’t doing music, Justin enjoys cooking international cuisines and playing with his two cats, Presto and Melody.
                </div>
            </div>
        </div>
    </>
    )
}