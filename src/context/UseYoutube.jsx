import React, { useEffect, useState } from 'react';
import { YoutubeProvider } from './Youtube';
import SearchApi from '../Api/SearchApi';
import VideoApi from '../Api/VideoCategory';
import { useNavigate, useParams } from 'react-router-dom';
import CommentApi from '../Api/comment';
import RecommendedApi from '../Api/recommended';
import FetchApi from '../Api/Video';
import channelapi from '../Api/Channeldata';
import channelInfo from '../Api/ChannelInfo';
import channelSection from '../Api/channelSections';
import channelPlayListsapi from '../Api/channelPlayList';
import { ProviderId, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { db } from '../firebase/firebase';
import playListvideosapi from '../Api/playlistVideo';

function UseYoutube({ children }) {
  const { videoCategory, videoid, channelId } = useParams();
  const [category, setCategory] = useState(0);
  const [searchTitle, setSearchTitle] = useState('');
  const [subScribe, setSubScribes] = useState([]);
  const [searchResults, setSearchResults] = useState(null);
  const [data, setData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [comments, setComments] = useState(null);
  const [videoDetails, setVideoDetails] = useState([]);
  const [recommendedVideos, setRecommendedVideos] = useState([]);
  const [channelInfos, setchannelInfo] = useState(null);
  const [channelSections, setchannelSections] = useState(null);
  const [channelPlayList, setchannelPlayList] = useState(null);
  const [menu, setmenu] = useState('');
  const [authStatus,setauthStatus]=useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        1
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
  }, [videoid,playListvideosapi]);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await channelInfo(
          channelData ? channelData.snippet.channelId : channelId 
        );
        setchannelInfo(result)
      } catch (error) {
        console.log('Error fetching comments:', error);
      }
    };

    fetchData();
  }, [videoid, channelData, channelId]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await channelPlayListsapi(channelId);
        setchannelPlayList(result)
      } catch (error) {
        console.log('Error fetching comments:', error);
      }
    };

    fetchData();
  }, [channelId, channelInfo, subScribe,channelData,channelInfos]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await channelSection(channelId);
        setchannelSections(result)
      } catch (error) {
        console.log('Error fetching comments:', error);
      }
    };

    fetchData();
  }, [channelId, channelInfo, subScribe]);


  const addSubscribe = (subscribe, id) => {
    let a = 0;
    for (let i = 0; i < subScribe.length; i++) {
      if (subScribe[i].id != id) {
        a++;
      }
    }
    a == subScribe.length ? setSubScribes((prev) => [{ ...subscribe }, ...prev]) : ''
  }
  const removeSubscribe = (id) => {
    setSubScribes((prev) => prev.filter((sub) => sub.id !== id))
  }


  //auth

  const signingoogle = (auth, provider) => {
    console.log(provider)
    signInWithPopup(auth, provider).then(()=>setauthStatus(true)).catch((err)=>console.log(err))
  }
  const setDb = (email, username) => {
    set(ref(db, 'users/' + username), {
      email,
      username
    })
  }
  const signinemail = ( auth,email, password,username) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
      
    
  }
  const signUpEmail = ( auth,email, password,username) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    
  }

  useEffect(() => {
    const store = localStorage.getItem("store");
    if (store) {
      try {
        const store2 = JSON.parse(store);
        if (Array.isArray(store2) && store2.length > 0) {
          // Assuming setSubScribes is defined correctly as a state setter function
          setSubScribes(store2);
        }
      } catch (error) {
        console.error('Error parsing JSON from localStorage:', error);
      }
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("store", JSON.stringify(subScribe))
  }, [subScribe, addSubscribe, channelInfos])


  const contextValue = {
    searchResults, setSearchResults,
    category, setCategory,
    data, setData,
    channelData, setChannelData,
    videoDetails, setVideoDetails,
    recommendedVideos, setRecommendedVideos,
    videoid, videoCategory, channelId,
    comments, setComments,
    searchTitle, setSearchTitle,
    subScribe, setSubScribes,
    addSubscribe, removeSubscribe,
    channelInfos, setchannelInfo,
    menu, setmenu,
    channelSections, setchannelSections,
    channelPlayList, setchannelPlayList,
    signingoogle, signinemail,
    authStatus,setauthStatus
  };

  return (
    <YoutubeProvider value={contextValue}>
      {children}
    </YoutubeProvider>
  );
}

export default UseYoutube;
