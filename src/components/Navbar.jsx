import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className=" w-full flex justify-between items-center font-semibold p-2">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt="Go Back"
            role="button"
            tabIndex="0"
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt="Go Forward"
            role="button"
            tabIndex="0"
          />
        </div>
        <div className="flex items-center gap-4">
        <p onClick={()=> navigate("signup")}
            className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer"
            role="button"
            tabIndex="0"
          >
            Sign Up
          </p>

          <p onClick={() => navigate("/login")}
            className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer"
            role="button"
            tabIndex="0"
          >
          Log In
          </p>
          
          {/* <p className="bg-blue-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
            H
          </p> */}
        </div>
      </div>
      {/* <div className="flex items-center gap-2 mt-4">
        <p
          className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer"
          role="button"
          tabIndex="0"
        >
          All
        </p>
        <p
          className="bg-black px-4 py-1 rounded-2xl cursor-pointer"
          role="button"
          tabIndex="0"
        >
          Music
        </p>
        <p
          className="bg-black px-4 py-1 rounded-2xl cursor-pointer"
          role="button"
          tabIndex="0"
        >
          Podcast
        </p>
      </div> */}
    </>
  );
};

export default Navbar;



