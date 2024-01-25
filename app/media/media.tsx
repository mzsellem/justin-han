// PlaylistCard.js
import React from 'react';
import VideoCarousel from "../component/VideoCarousel";

interface Props {
title: string,
videos: string[],
}

export default function MediaCard ({ title, videos}: Props) {
    return (
        <>
            <div className="flex flex-col">
                <h3 className="flex justify-center mt-6 mb-4 text-xl font-bold text-center font-pro">{title}</h3>
                <VideoCarousel videos={videos} />
            </div>
        </>
    );
};

