import React, { useContext } from 'react';
import { playerContext } from '../context/PlayerContext';
import { artists } from '../assets/assets';
import { FaPlay } from "react-icons/fa6";



const SongItem = ({ artists, name, image, desc, id }) => {
  const { playWithId } = useContext(playerContext);

  const handleClick = () => {
    playWithId(id);
  };

  return (
    <div 
      onClick={handleClick} 
      className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#3e3e3e26]'
    >
      <img 
        className='rounded' 
        src={image} 
        alt={`Cover for ${name}`} 
      />
      <button className="w-12 h-12 rounded-full bg-green-600 absolute bottom-20 right-5 flex items-center justify-center hidden group-hover:flex group-focus:flex text-black hover:bg-green-500" ><FaPlay /></button>
      
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{artists}</p>
    </div>
  );
};

export default SongItem;
