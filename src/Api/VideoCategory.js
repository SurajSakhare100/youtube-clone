import React from "react";
import { useState, useEffect } from "react";

function videoApi(category) {
  const [data, setdata] = useState([]);
  async function fetchdata() {
    const API = `AIzaSyBq7pRgOu_yP4mvYq_vdegL4v5eDjlUyZE`;
    const video_url = 
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=200&regionCode=IN&videoCategoryId=${category}&key=${API}`;
    
    await fetch(video_url)
      .then((response) => response.json())
      .then((data) =>

    {
      setdata(data.items)}
      );
   
    }
    useEffect(() => {
      fetchdata();
    }, [category]);
    return data
}

export default videoApi;
