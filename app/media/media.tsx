// PlaylistCard.js
import React from 'react';
import VideoCarousel from "../component/VideoCarousel";

interface Props {
title: String,
videos: String[]
}

export default function PlaylistCard ({ title, videos}: Props) {
    return (
        <>
            <div className="pl-6 pr-6">
                <h3 className="text-center text-xl font-bold font-pro mb-2">{title}</h3>
                <VideoCarousel videos={videos} />
            </div>
        </>
    );
};

