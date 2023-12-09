// PlaylistCard.js
import React from 'react';

interface Props {
title: String,
videos: String[]
}

export default function PlaylistCard ({ title, videos}: Props) {
    return (
        <>
            <div className="max-w-xs mx-auto bg-darksuit shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                    <div className="">
                        <div className="font-bold text-xl text-white mb-2">{title}</div>
                            <ul className="flex space-x-6 border p-4 overflow-y-auto">
                                {videos.map((video, index) => (
                                    <li key={index} className="text-base mb-2">
                                    <div className='bg-gray-300 border'>{video}</div>
                                    </li>
                                ))}
                            </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

