import React, { memo } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YouTube from "react-youtube";

interface Props {
  videos: string[];
}

const Videos = memo(({ videos }: Props) => (
  <div className="flex p-6 space-x-40 overflow-x-auto sm:space-x-6">
    {videos.map((video, index) => (
      <div key={index} className="relative w-full aspect-w-16 aspect-h-9">
        {/* <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${video}`}
          title={`Video ${index + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
        <YouTube 
          videoId={video} 
          opts={{
          height: "250",
          width: "350",
          playerVars: {autoplay: 1,},
          title: `${index + 1}`
          }} 
        />
      </div>
    ))}
  </div>
));

const VideoCarousel = memo(({ videos }: Props) => {
  const settings: Settings = {
    dots: true,
    lazyLoad: "ondemand",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 640, // Adjust breakpoints based on your design needs
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     },
    //   },
    // ]
  };

  return (
    <Slider {...settings}>
      <Videos videos={videos} />
    </Slider>
  );
});

export default VideoCarousel;

