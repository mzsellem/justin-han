import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
export default function Carousel({ videos }: any) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(videos.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === videos.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {videos.map((v: any, i: any) => {
          return <img src={v} key={i} />;
        })}
      </div>

      <div className="absolute top-0 flex items-center justify-between w-full h-full px-10 text-3xl text-white">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 flex justify-center w-full gap-3 py-4">
        {videos.map((v: any, i: any) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}