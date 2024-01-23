import React, { memo } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YouTube from "react-youtube";

interface Props {
  videos: string[];
}

const Videos = memo(({ videos }: Props) => (
  <div>
    {videos.map((video, index) => (
      <div key={index}>
        {/* <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${video}`}
          title={`Video ${index + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
        <YouTube videoId={video} opts={{
          height: "100%",
          width: "315",
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
  };

  return (
    <Slider {...settings}>
      <Videos videos={videos} />
    </Slider>
  );
});

export default VideoCarousel;

