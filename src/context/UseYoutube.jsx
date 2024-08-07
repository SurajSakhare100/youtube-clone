import React, { useEffect, useState } from 'react';
import { YoutubeProvider } from './Youtube';
import SearchApi from '../Api/SearchApi';
import { useNavigate, useParams } from 'react-router-dom';
import CommentApi from '../Api/comment';
import RecommendedApi from '../Api/recommended';
import FetchApi from '../Api/Video';
import channelapi from '../Api/Channeldata';
import channelInfo from '../Api/ChannelInfo';
import channelSection from '../Api/channelSections';
import channelPlayListsapi from '../Api/channelPlayList';
import playListvideosapi from '../Api/playlistVideo';
import videoApi from '../Api/VideoCategory';
import fetchVideos from '../Api/channnelVideo';

function UseYoutube({ children }) {
  const { videoCategory, videoid, channelId } = useParams();
  const [category, setCategory] = useState(0);
  const [searchTitle, setSearchTitle] = useState('');
  const [subScribe, setSubScribes] = useState([]);
  const [videoDetails, setVideoDetails] = useState([]);
  const [recommendedVideos, setRecommendedVideos] = useState([]);
  const [channelSections, setchannelSections] = useState(null);
  const [menu, setmenu] = useState('');

  const videoCategoryApi = videoApi
  const searchResults = SearchApi
  const recommended = fetchVideos
  const commentApi = CommentApi
  const channelApi = channelapi
  const channelInfoApi = channelInfo
  const playListvideosApi = playListvideosapi

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await FetchApi(videoid);
        setVideoDetails(result.items);
      } catch (error) {
        console.log('Error fetching video details:', error);
      }
    };

    fetchData();
  }, [videoid, category]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await channelSection(channelId);
        setchannelSections(result);
      } catch (error) {
        console.log('Error fetching channel sections:', error);
      }
    };

    fetchData();
  }, [channelId, channelInfo, subScribe]);

  const addSubscribe = (subscribe, id) => {
    let a = 0;
    for (let i = 0; i < subScribe.length; i++) {
      if (subScribe[i].id !== id) {
        a++;
      }
    }
    a === subScribe.length ? setSubScribes((prev) => [{ ...subscribe }, ...prev]) : '';
  };

  const removeSubscribe = (id) => {
    setSubScribes((prev) => prev.filter((sub) => sub.id !== id));
  };

  useEffect(() => {
    const store = localStorage.getItem("store");
    if (store) {
      try {
        const store2 = JSON.parse(store);
        if (Array.isArray(store2) && store2.length > 0) {
          setSubScribes(store2);
        }
      } catch (error) {
        console.error('Error parsing JSON from localStorage:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("store", JSON.stringify(subScribe));
  }, [subScribe, addSubscribe, channelInfoApi]);

  const contextValue = {
    category, setCategory,
    videoDetails, setVideoDetails,
    recommendedVideos, setRecommendedVideos,
    videoid, videoCategory, channelId,
    subScribe, setSubScribes,
    addSubscribe, removeSubscribe,
    menu, setmenu,
    channelSections, setchannelSections,
    videoCategoryApi,
    searchResults,
    searchTitle, setSearchTitle,
    recommended,
    channelApi,
    commentApi,
    channelInfoApi,
    playListvideosApi,
  };

  console.log('YouTube API Key:', import.meta.env.VITE_YOUTUBE_API); // Debug log

  return (
    <YoutubeProvider value={contextValue}>
      {children}
    </YoutubeProvider>
  );
}

export default UseYoutube;
