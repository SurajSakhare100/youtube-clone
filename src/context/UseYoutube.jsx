import React, { useEffect, useState } from 'react';
import { YoutubeProvider } from './Youtube';
import SearchApi from '../Api/SearchApi';
import VideoApi from '../Api/VideoCategory';
import { useParams } from 'react-router-dom';
import CommentApi from '../Api/comment';
import RecommendedApi from '../Api/recommended';
import FetchApi from '../Api/Video';
import channelapi from '../Api/Channeldata';

function UseYoutube({ children }) {
  const { videoCategory, videoid } = useParams();
  const [category, setCategory] = useState(0);
  const [searchTitle, setSearchTitle] = useState('');
  const [subScribe, setSubScribe] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [data, setData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [comments, setComments] = useState(null);
  const [videoDetails, setVideoDetails] = useState([]);
  const [recommendedVideos, setRecommendedVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await VideoApi(category);
        setData(result.items);
      } catch (error) {
        console.log('Error fetching video category:', error);
      }
    };

    fetchData();
  }, [category]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await SearchApi(searchTitle);
        setSearchResults(result);
      } catch (error) {
        console.log('Error fetching search results:', error);
      }
    };

    fetchData();
  }, [searchTitle]);

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
        const result = await RecommendedApi(category);
        setRecommendedVideos(result);
      } catch (error) {
        console.log('Error fetching recommended videos:', error);
      }
    };

    fetchData();
  }, [category]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await channelapi(videoid);
        setChannelData(result);
      } catch (error) {
        console.log('Error fetching recommended videos:', error);
      }
    };

    fetchData();
  }, [videoid]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await CommentApi(videoid);
        setComments(result);
      } catch (error) {
        console.log('Error fetching comments:', error);
      }
    };

    fetchData();
  }, [videoid]);

  const contextValue = {
    searchResults,setSearchResults,
    category,setCategory,
    data, setData,
    channelData,setChannelData,
    videoDetails,setVideoDetails,
    recommendedVideos,setRecommendedVideos,
    videoid,videoCategory,
    comments,setComments,
    searchTitle, setSearchTitle,
    subScribe, setSubScribe
  };

  return (
    <YoutubeProvider value={contextValue}>
      {children}
    </YoutubeProvider>
  );
}

export default UseYoutube;
