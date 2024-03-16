import React, { useEffect, useState } from 'react'
import {YoutubeProvider } from './Youtube';
import Searchapi from '../Api/SearchApi';
function UseYoutube({children}) {
  const [search,setSearch]=useState(['km','k','l'])
  return (
    <YoutubeProvider value={{search,setSearch}}>
      {children}
    </YoutubeProvider>
  )
}

export default UseYoutube