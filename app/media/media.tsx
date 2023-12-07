// PlaylistCard.js
import React from 'react';

export default function PlaylistCard ({ title, videos }) {
    return (
        <>
            <div className="max-w-xs mx-auto bg-darksuit shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <div className="font-bold text-xl text-white mb-2">{title}</div>
                <ul>
                {videos.map((video, index) => (
                    <li key={index} className="text-white text-base mb-2">
                    {video}
                    </li>
                ))}
                </ul>
            </div>
            </div>
        </>
    );
};

