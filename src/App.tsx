//   const App = () => {
//     const REACT_APP_SPOTIFY_CLIENT_ID = "564459bb60874e989f98617d7825db3d";
//     const REACT_APP_SPOTIFY_REDIRECT_URI = "http://localhost:3000";
//     const REACT_APP_SPOTIFY_AUTH_ENDPOINT =
//       "https://developer.spotify.com/";
//     const REACT_APP_SPOTIFY_RESPONSE_TYPE = "token";
//     return (
//       <div className="">
//         <a
//           href={`${REACT_APP_SPOTIFY_AUTH_ENDPOINT}?client_id=${REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${REACT_APP_SPOTIFY_REDIRECT_URI}&response_type=${REACT_APP_SPOTIFY_RESPONSE_TYPE}`}
//         >
//           Login to Spotify
//         </a>
//       </div>
//     );
//   };

// export default App;

import React from "react";
import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./router/MainRoute";

const App = () => {
  return (
    <div>
      <RouterProvider router={MainRouter} />
    </div>
  );
};

export default App;

// import React, { useState, useEffect } from "react";
// import Searcher from "./components/Searcher";

// function App() {
//   const CLIENT_ID = "564459bb60874e989f98617d7825db3d";
//   const REDIRECT_URI = "http://localhost:5173";
//   const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
//   const RESPONSE_TYPE = "token";

//   const [token, setToken] = useState("");

//   useEffect(() => {
//     const hash: any = window.location.hash;
//     let token: any = window.localStorage.getItem("token");

//     if (hash && hash) {
//       token = hash
//         .substring(1)
//         .split("&")
//         .find((elem: any) => elem.startsWith("access_token"))
//         .split("=")[1];
//       window.location.hash = "";
//       window.localStorage.setItem("token", token);
//     }

//     setToken(token);
//   }, []);

//   const logout = () => {
//     setToken("");
//     window.localStorage.removeItem("token");
//   };

//   return (
//     <div className="w-full bg-red-500 min-h-[100vh]">
//       <header className="w-full flex justify-center items-center bg-slate-200 h-[70px] ">
//         <div className="flex w-[95%] justify-between items-center">
//           <h2 className="text-[30px]">Dev Frank's API Room</h2>
//           {!token ? (
//             <div>
//               <a
//                 href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
//                 className="px-[20px] rounded-md py-[10px] hover:bg-slate-500 hover:text-white duration-500 transition-all"
//               >
//                 Login to Spotify
//               </a>
//             </div>
//           ) : (
//             <div className="flex items-center">
//               <button
//                 className="ml-5 py-3 px-5 rounded-md hover:text-white hover:scale-[1.09] transition-all duration-300 bg-rose-400"
//                 onClick={logout}
//               >
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </header>
//       {token && (
//         <div className="w-full flex flex-col items-center ">
//           <Searcher token={token} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
