import React, { useContext } from "react";
export const Youtube=React.createContext(
    {
        search:[],
        subscribe:[{
            title:'',
            img:''
        }]
    }
);
export const YoutubeProvider=Youtube.Provider;

export const useapi=()=>{
    return useContext(Youtube)
}

