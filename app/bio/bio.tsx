export default function Bio() {
    return (
    <>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6 p-4 mt-4">
            <div className="md:w-1/3 w-3/4">
                <img src="/conductor-justin.png" alt="Conductor Justin" />
            </div>
            <div className="flex flex-col p-4 md:w-1/3">
                <div className="text-3xl mb-4 font-bold text-center md:flex md:items-left font-pro">Meet Justin Han</div>
                <div className="flex justify-center items-center text-md font-pro">
                    A native of both South Korea and Georgia, Mr. Justin Han is a professional pianist, conductor, singer, and violinist in the Atlanta area. Justin is a graduate of Georgia State University, where he earned a double Master’s degree in choral conducting and piano performance and was a recipient of the Robert Shaw Choral Scholar Award and Stegner Piano Scholarship.

    Before joining Emory Presbyterian Church in January 2020, Justin held music director and organist positions at Johns Creek Presbyterian Church, Commerce Presbyterian Church, Greensboro First United Methodist Church, and Our Hope Metropolitan Community Church. He also currently works as a piano instructor at Silva Piano Studios in Marietta, GA.

    When he isn’t doing music, Justin enjoys cooking international cuisines and playing with his two cats, Presto and Melody.
                </div>
            </div>
        </div>
    </>
    )
}