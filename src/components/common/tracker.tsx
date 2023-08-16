import React from "react";

function tracker(track: any) {
  return (
    <div className="bg-rose-300 w-[400px] rounded m-3 py-2 pl-2" key={track.id}>
      <ul>
        <li className="text-rose-700"> {track.name}</li>
      </ul>
    </div>
  );
}

export default tracker;
