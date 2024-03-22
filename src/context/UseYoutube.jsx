import React, { useEffect, useState } from 'react'
import { YoutubeProvider } from './Youtube';
import Searchapi from '../Api/SearchApi';
import channelapi from '../Api/Channeldata';
import videoApi from '../Api/VideoCategory';
function UseYoutube({ children }) {
  const [category, setCategory] = useState(0);
  const [searchtitle, setSearchtitle] = useState('')
  const [search, setSearch] = useState(Searchapi(searchtitle))
  const [channeldata, setchanneldata] = useState(null)
  const data=videoApi(category)
  
  return (
    <YoutubeProvider value={{ search, setSearch, searchtitle, category, setSearchtitle, setCategory, channeldata, setchanneldata,data }}>
      {children}
    </YoutubeProvider>
  )
}

export default UseYoutube