import React, { useEffect, useState } from 'react'
import {YoutubeProvider } from './Youtube';
import Searchapi from '../Api/SearchApi';
function UseYoutube({children}) {
  const [search,setSearch]=useState(Searchapi())
  const [searchtitle,setSearchtitle]=useState('')
  const [category, setCategory] = useState(0);
  return (
    <YoutubeProvider value={{search,setSearch,searchtitle,category,setSearchtitle,setCategory}}>
      {children}
    </YoutubeProvider>
  )
}

export default UseYoutube