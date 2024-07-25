import React from "react";
import Navbar from "./Navbar";
import { albumsData, artists, assets, songsData } from "../assets/assets";
import AlbomItem from "./AlbomItem";
import SongItem from "./SongItem";
import { FaPlay } from "react-icons/fa6";

const DisplayHome = () => {
  return (
    <div className="bg-[#121212] text-white min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-6 ">
        <div className="mb-6 ">
          <h1 className="my-5 font-bold text-3xl">Popular Artists</h1>
          <div className="flex overflow-x-auto gap-4">
            {artists.map((item) => (
              <div key={item.id} className='min-w-[180px] relative p-2 px-3 rounded cursor-pointer hover:bg-[#3e3e3e26] group'>
                <img
                  className='rounded-full w-40 h-40'
                  src={item.image}
                  alt={item.name}
                />
                <button className="w-12 h-12 rounded-full bg-green-600 absolute bottom-20 right-5 flex items-center justify-center hidden group-hover:flex group-focus:flex text-black hover:bg-green-500" ><FaPlay /></button>
                <p className='font-bold mt-2 mb-1'>{item.name}</p>

                <p>Artist</p>



              </div>
            ))}
          </div>
        </div>


        {/* <div className="mb-6">
  <h1 className="my-5 font-bold text-3xl">Popular Artists</h1>
  <div className="flex overflow-x-auto gap-4">
    {artists.map((item) => (
      <div
        key={item.id}
        className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#3e3e3e26] relative group"
      >
        <img
          className="rounded-full w-40 h-40"
          src={item.image}
          alt={item.name}
        />
        <p className="font-bold mt-2 mb-1">{item.name}</p>
        <p>Artist</p>
        <button
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          
          <FaCirclePlay className="text-[50px] text-green-900 " />
        </button>
      </div>
    ))}
  </div>
</div> */}





        <div className="mb-6">
          <h1 className="my-5 font-bold text-3xl">Featured Charts</h1>
          <div className="flex overflow-x-auto gap-4">
            {albumsData.map((item) => (
              <AlbomItem
                key={item.id}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h1 className="my-5 font-bold text-3xl">Today's Biggest Hits</h1>
          <div className="flex overflow-x-auto gap-4">
            {songsData.map((item) => (
              <SongItem
                key={item.id}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
              
            ))}
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default DisplayHome;







