// import React, { memo } from "react";
// import Slider, { Settings } from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import YouTube from "react-youtube";

// interface Props {
//   videos: string[];
// }

// const VideoItem = memo(({ video, index }: { video: string; index: number }) => (
//   <div key={index} className="relative w-full mobile">
//     <YouTube
//       videoId={video}
//       opts={{
//         height: "250",
//         width: "350",
//         playerVars: { autoplay: 1 },
//         title: `${index + 1}`,
//       }}
//     />
//   </div>
// ));

// const Videos = memo(({ videos }: Props) => (
//   <div className="flex space-x-6 overflow-x-auto">
//     {videos.map((video, index) => (
//       <VideoItem key={index} video={video} index={index} />
//     ))}
//   </div>
// ));

// const VideoCarousel = memo(({ videos }: Props) => {
//   const settings: Settings = {
//     dots: true,
//     lazyLoad: "ondemand",
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <>
//       <Slider {...settings}>
//         <Videos videos={videos} />
//       </Slider>
//     </>
//   );
// });

// export default VideoCarousel;
