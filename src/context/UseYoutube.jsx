import React, { useEffect, useState } from 'react'
import { YoutubeProvider } from './Youtube';
import Searchapi from '../Api/SearchApi';
import channelapi from '../Api/Channeldata';
import videoApi from '../Api/VideoCategory';
import { useParams } from 'react-router-dom';
import commentapi from '../Api/comment';
import recommended from '../Api/recommended';
import fetchapi from '../Api/Video';
function UseYoutube({ children }) {
  const [category, setCategory] = useState(0);
  const [searchtitle, setSearchtitle] = useState('');
  const [search, setSearch] = useState([]);
  const {videocategory}=useParams();
  const {videoid}=useParams();

  const [data,setdata]=useState([]);
  const [channeldata, setchanneldata] = useState([]);
  const [comment, setcomment] = useState([]);
  const [video, setvideo] = useState([]);
  const [recommendedvideo, setrecommended] = useState([]);

  useEffect(() => {
    const api=videoApi(category);
    api.then((result) => {
      setdata(result.items)
    })
  }, [category])

  useEffect(() => {
    const data=Searchapi(searchtitle);
    setSearch(data)
  }, [searchtitle])

  // useEffect(() => {
    
  // }, [videoid])
  // useEffect(() => {
  //   const api=channelapi(data)
  //   setchanneldata(api)
  // }, [setdata])
  
  useEffect(() => {
    const api=recommended(category)
    setrecommended(api)
  }, [category])
  useEffect(() => {
    const api=commentapi(videoid)
    setcomment(api)
  }, [videoid])
  
  return (
    <YoutubeProvider value={
      { 
        search, setSearch, 
        searchtitle, category, 
        setSearchtitle, setCategory,
        data,setdata,
        channeldata, setchanneldata,
        comment, setcomment,
        video, setvideo,
        recommendedvideo,setrecommended 
      }}
      >
      {children}
    </YoutubeProvider>
  )
}

export default UseYoutube