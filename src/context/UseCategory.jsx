import React, { useContext, useState } from 'react'
import videoApi from '../Api/VideoCategory'
import { Category, CategoryProvider } from './Category';
function CategoryProvider({children}) {
 const { data } = useContext(Category)
  return (
    <CategoryProvider value={{data}}>
      {children}
    </CategoryProvider>
  )
}

export default CategoryProvider