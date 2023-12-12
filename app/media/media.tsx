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
            <div className="border p-4">
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <VideoCarousel videos={videos} />
            </div>
        </>
    );
};

