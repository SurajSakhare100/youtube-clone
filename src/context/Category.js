import React, { useContext } from "react";
export default Category=React.createContext(
    {
        data:[]
    }
);
export const CategoryProvider=Category.Provider;

