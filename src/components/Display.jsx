import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";
import Search from "./Search";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

function Display() {
  const displayRef = useRef(null);
  const location = useLocation();
  const isAlbum = location.pathname.startsWith("/album");
  const albumId = isAlbum ? location.pathname.split("/")[2] : "";
  const album = albumsData.find(album => album.id === Number(albumId));
  const bgColor = album ? album.bgColor : "#121212";

  useEffect(() => {
    if (displayRef.current) {
      displayRef.current.style.background = isAlbum
        ? `linear-gradient(${bgColor}, #121212)`
        : "#121212";
    }
  }, [isAlbum, bgColor]);

  return (
    <div
      ref={displayRef}
      className="w-full m-2 px-6 pt-4 rounded text-white overflow-auto lg:w-[75%] lg:ml-0"
      style={{ backgroundColor: isAlbum ? `linear-gradient(${bgColor}, #121212)` : "#121212" }}
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
        <Route path="/search" element={<Search />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn/>} />
      </Routes>
    </div>
  );
}

export default Display;



