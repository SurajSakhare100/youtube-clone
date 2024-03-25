import React, { useContext } from "react";
export const Youtube=React.createContext(
    {
        search:[],

    }
);
export const YoutubeProvider=Youtube.Provider;

export const useapi=()=>{
    return useContext(Youtube)
}

