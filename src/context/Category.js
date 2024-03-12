import React, { useContext } from "react";
export const Category=React.createContext(
    {
        data:[]
    }
);
export const CategoryProvider=Category.Provider;

