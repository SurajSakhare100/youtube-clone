import React, { useState } from 'react'
import videoApi from '../Api/VideoCategory'
import { CategoryProvider } from './Category';
function CategoryProvider({children}) {
   const data =videoApi(24);
   console.log(data)
   const category='loop'
  return (
    <CategoryProvider value={{data,category}}>
      {children}
    </CategoryProvider>
  )
}

export default CategoryProvider