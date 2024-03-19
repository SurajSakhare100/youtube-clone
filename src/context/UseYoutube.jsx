import React, { useEffect, useState } from 'react'
import {YoutubeProvider } from './Youtube';
import Searchapi from '../Api/SearchApi';
import channelapi from '../Api/Channeldata';
import videoApi from '../Api/VideoCategory';
function UseYoutube({children}) {
  const [category, setCategory] = useState(0);
  const api=videoApi(category);
  const c=channelapi(api)
  const [search,setSearch]=useState(Searchapi())
  const [searchtitle,setSearchtitle]=useState('')
  const [channeldata,setchanneldata]=useState(c)
  return (
    <YoutubeProvider value={{search,setSearch,searchtitle,category,setSearchtitle,setCategory,channeldata,setchanneldata}}>
      {children}
    </YoutubeProvider>
  )
}

export default UseYoutube