import React, { useContext } from "react";
export const Youtube=React.createContext(
   null
);
export const YoutubeProvider=Youtube.Provider;

export const useapi=()=>{
    return useContext(Youtube)
}

