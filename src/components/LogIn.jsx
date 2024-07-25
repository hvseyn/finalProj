import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212] text-white">
      <div className="bg-[#1A1A1A] p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <img src={assets.spotify_logo} alt="Spotify Logo" className="w-32 mx-auto" />
          <h1 className="text-3xl font-bold mt-4">Log in to Spotify</h1>
        </div>
        <div className="text-center mb-4 text-gray-400">or</div>
        <button
          onClick={() => navigate('/signup-google')}
          className="w-full mb-2 bg-white text-black py-2 rounded hover:bg-gray-200 transition-colors"
        >
          Sign up with Google
        </button>
        <button
          onClick={() => navigate('/signup-facebook')}
          className="w-full mb-2 bg-[#3b5998] text-white py-2 rounded hover:bg-[#2d4373] transition-colors"
        >
          Sign up with Facebook
        </button>
        <button
          onClick={() => navigate('/signup-apple')}
          className="w-full mb-4 bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors"
        >
          Sign up with Apple
        </button>
        <div className="mt-4">
          <p>Email or username</p>
          <input
            type="text"
            placeholder='Email or username'
            className="w-full p-3 rounded bg-[#282828] text-white focus:outline-none mb-2"
          />
          <p>Password</p>
          <input
            type="password"
            placeholder='Password'
            className="w-full p-3 rounded bg-[#282828] text-white focus:outline-none mb-4"
          />
          <div className="flex items-center mb-4">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-gray-400">Remember me</label>
          </div>
          <button
            onClick={() => navigate('/dashboard')}
            className="w-full bg-[#1DB954] text-white py-2 rounded hover:bg-[#1ed760] transition-colors"
          >
            Log in
          </button>
        <div className="text-center mt-4 text-gray-400">
          <a href="#" className="text-white underline ">Forgot your password?</a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
