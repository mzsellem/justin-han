// PlaylistCard.js
import React from 'react';
import Carousel from "../component/VideoCarousel";

interface Props {
title: String,
videos: String[],
}

export default function MediaCard ({ title, videos}: Props) {
    return (
        <>
            <div className="pl-6 pr-6">
                <h3 className="mb-2 text-xl font-bold text-center font-pro">{title}</h3>
                <Carousel videos={videos} />
            </div>
        </>
    );
};

