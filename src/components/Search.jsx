import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets, songsData, albumsData } from '../assets/assets';

const Search = () => {
    const [query, setQuery] = useState('');
    const [filteredSongs, setFilteredSongs] = useState([]);
    const [filteredAlbums, setFilteredAlbums] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (query) {
            const songResults = songsData.filter(song =>
                song.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredSongs(songResults);

            const albumResults = albumsData.filter(album =>
                album.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredAlbums(albumResults);
        } else {
            setFilteredSongs([]);
            setFilteredAlbums([]);
        }
    }, [query]);

    const handleClick = (id) => {
        navigate(`/album/${id}`);
    };

    return (
        <>
            <div className="w-full flex justify-between items-center font-semibold p-2">
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
                <div className='mr-auto ml-4 flex flex-grow items-center'>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className='h-10 bg-[#292828] text-white rounded-3xl max-w-full w-[22.75rem] px-4 outline-none'
                        placeholder='What do you want to steal?'
                    />
                </div>
                <div className="flex items-center gap-4">
                    <p onClick={() => navigate("/signup")}
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
                </div>
            </div>
            {query && (
                <div className="p-4 bg-[#121212]">
                    {filteredSongs.length > 0 && (
                        <div className="mb-6">
                            <h2 className="text-white my-5 font-bold text-3xl">Songs:</h2>
                            <div  className="mt-4 flex flex-wrap gap-4">
                                {filteredSongs.map((song, index) => (
                                    <div
                                        style={{width:'100%'}}
                                        onClick={() => playWithId(song.id)}
                                        key={song.id}
                                        className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff26] cursor-pointer"
                                    >
                                        <p className="flex items-center text-white">
                                            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
                                            <img className="inline-block w-10 h-10 mr-5" src={song.image} alt={song.name} />
                                            <div className="flex flex-col">
                                                <span className="text-[15px]">{song.name}</span>
                                                <span className="text-[12px] text-[#a7a7a7]">{song.artist}</span>
                                            </div>
                                        </p>
                                        <p className="text-[20px] hidden sm:block"></p>
                                        <p className="text-[20px] hidden sm:block"></p>
                                        <p className="text-[15px] text-center">{song.duration}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {filteredAlbums.length > 0 && (
                        <div>
                            <h2 className="text-white my-5 font-bold text-3xl">Albums:</h2>
                            <div className="mt-4 flex flex-wrap gap-4">
                                {filteredAlbums.map(album => (
                                    <div
                                        key={album.id}
                                        className="flex flex-col items-center bg-[#292828] p-2 rounded-lg w-48 cursor-pointer"
                                        onClick={() => handleClick(album.id)}
                                    >
                                        <img src={album.image} alt={album.name} className="w-full rounded-lg" />
                                        <p className="text-white mt-2">{album.name}</p>
                                        <p className="text-gray-400 text-sm">{album.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}

export default Search;

