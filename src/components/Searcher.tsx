import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiSearch } from "react-icons/fi";
import tracker from "./common/tracker";

function Searcher(props: any) {
  const [searchKey, setSearchKey] = useState("");
  const [tracks, setTracks] = useState([]);

  const access_token = props.token;

  const searchArtist = async () => {
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });

    let artistID = data.artists.items[0].id;

    let artistTracks = await axios.get(
      `https://api.spotify.com/v1/artists/${artistID}/top-tracks`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        params: {
          limit: 10,
          market: "US",
        },
      }
    );

    setTracks(artistTracks.data.tracks);
  };

  return (
    <>
      <div className="flex ">
        <input
          className="w-[300px] h-[35px] pl-2 outline-double-[grey] outline-yellow-400"
          type="text"
          placeholder="Search By Artist Name ..."
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
        />
        <button onClick={searchArtist} className="ml-6 text-[25px] text-white">
          <FiSearch />
        </button>
      </div>
      <div className="">{tracks.map((track: any) => tracker(track))}</div>
    </>
  );
}

export default Searcher;
