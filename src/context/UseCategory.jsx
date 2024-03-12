import React, { useState } from 'react'
import videoApi from '../Api/VideoCategory'
function CategoryProvider({children}) {
   const data =videoApi(24)
  return (
    <Usercontext.Provider value={data}>
      {children}
    </Usercontext.Provider>
  )
}

export default CategoryProvider