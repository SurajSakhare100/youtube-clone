import React, { useContext } from "react";
export const Youtube=React.createContext(
    {
        search:[],
        video:()=>{},
        channelData:()=>{},
        videoApi:()=>{}

    }
);
export const YoutubeProvider=Youtube.Provider;

export const useapi=()=>{
    return useContext(Youtube)
}

