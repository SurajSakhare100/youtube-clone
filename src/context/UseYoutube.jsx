import React, { useEffect, useState } from 'react'
import {YoutubeProvider } from './Youtube';
import Searchapi from '../Api/SearchApi';
function UseYoutube({children}) {
  const [search,setSearch]=useState(Searchapi())
  const [searchtitle,setSearchtitle]=useState('')
  return (
    <YoutubeProvider value={{search,setSearch,searchtitle,setSearchtitle}}>
      {children}
    </YoutubeProvider>
  )
}

export default UseYoutube