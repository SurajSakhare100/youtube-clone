import React, { useContext } from "react";
export const Category=React.createContext(
    {
        data:[],
        apiname:'category'
    }
);
export const CategoryProvider=Category.Provider;

export const useapi=()=>{
    return useContext(Category)
}

