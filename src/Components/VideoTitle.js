import React from 'react';
import { FaPlay } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";


const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="flex">
        <button className="flex bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80"><FaPlay className="pt-1.5"/> Play</button>
        <button className=" mx-2 flex bg-gray-500 text-white p-4 px-12 text-xl hover:bg-opacity-80 rounded-lg"><MdInfoOutline className="pt-0.5" /> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;
