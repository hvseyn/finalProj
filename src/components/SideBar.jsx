import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[25%] h-full p-2 flex flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[20%] rounded flex flex-col justify-around">

        <div
          onClick={() => navigate("/")}
          className="flex mt-3 items-center gap-4 pl-8 cursor-pointer"
          role="button"
          tabIndex="0"
        >
          <img className="w-6" src={assets.home_icon} alt="Home Icon" />
          <p className="font-bold">Home</p>
        </div>
        <div
          onClick={() => navigate("/search")}
          className="flex mb-3 items-center gap-4 pl-8 cursor-pointer"
          role="button"
          tabIndex="0"
        >
          <img className="w-6" src={assets.search_icon} alt="Search Icon" />
          <p className="font-bold">Search</p>
        </div>



      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="Your Library Icon" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.plus_icon} alt="Add Icon" />
            <img className="w-5" src={assets.arrow_icon} alt="Arrow Icon" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded flex flex-col items-start gap-1 pl-4">
          <h1 className="font-bold">Create Your First Playlist</h1>
          <p className="font-bold">It's easy—we'll help you.</p>
          <button className="px-4 py-1.5 bg-white text-[15px] font-bold text-black rounded-full mt-4">
            Create Playlist
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded flex flex-col items-start gap-1 pl-4 mt-4">
          <h1 className="font-bold">Let's Find Some Podcasts to Follow</h1>
          <p className="font-bold">We'll keep you updated on new episodes.</p>
          <button className="px-4 font-bold py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Browse Podcasts
          </button>
        </div>
        <div
          onClick={() => navigate("/liked-songs")}
          className="flex items-center m-2 gap-4 pl-4 py-2 hover:text-white hover:bg-[#404040] rounded cursor-pointer bg-[#282828] text-[#1ed760]"
          role="button"
          tabIndex="0"
        >
          <img className="w-6" src="https://i1.sndcdn.com/artworks-y6qitUuZoS6y8LQo-5s2pPA-t500x500.jpg" alt="Liked Songs Icon" />
          <p className="font-bold">Liked Songs</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;