import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa6";


const AlbomItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/album/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#3e3e3e26] transition-colors group relative"
      role="button"
      tabIndex="0"
    >
      <img
        className="rounded"
        src={image}
        alt={`${name} album cover`}
        role="img"
      />
      <button className="w-12 h-12 rounded-full bg-green-600 absolute bottom-20 right-5 flex items-center justify-center hidden group-hover:flex group-focus:flex text-black" ><FaPlay className="" /></button>
      



      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default AlbomItem;





