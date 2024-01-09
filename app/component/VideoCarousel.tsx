import React, { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  videos: String[];
}

const VideoComponent = memo(({ videos }: Props) => (
  <div>
    {videos.map((video, index) => (
      <div key={index}>
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${video}`}
          title={`Video ${index + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    ))}
  </div>
));

const VideoCarousel = memo(({ videos }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <VideoComponent videos={videos} />
    </Slider>
  );
});

export default VideoCarousel;
