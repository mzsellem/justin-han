// Import necessary components and libraries
import React, { Component } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YouTube from "react-youtube";

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#4c4a54" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#4c4a54" }}
        onClick={onClick}
      />
    );
  }



// Component for individual video item
const VideoItem = ({ videoId, index }: any) => (
  <div key={index} className="w-full">
    <YouTube
      videoId={videoId}
      opts={{
        height: "200",
        width: "300",
        playerVars: { autoplay: 0 },
        title: `${index + 1}`,
      }}
    />
  </div>
);

// Component for displaying a playlist with a Slider
const MediaCard = ({ title, videos }: any) => {
  const settings: Settings = {
    dots: true,
    // arrows: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    lazyLoad: "ondemand",
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one video at a time
    slidesToScroll: 1,
  };

  return (
    <div className="p-3 mb-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <Slider {...settings}>
        {videos.map((video: any, index: any) => (
          <VideoItem key={index} videoId={video} index={index} />
        ))}
      </Slider>
    </div>
  );
};

export default MediaCard;
