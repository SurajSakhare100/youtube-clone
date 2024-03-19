import React from "react";
import { useState, useEffect } from "react";
function fetchvideo(category) {
  const [api, setapi] = useState(null);

  const fetchapi = async () => {
    const API = `AIzaSyBq7pRgOu_yP4mvYq_vdegL4v5eDjlUyZE`;
    const video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${category}&maxResults=200&key=${API}`;

    await fetch(video_url)
      .then((response) => response.json())
      .then((data) => setapi(data.items[0]));
  };
  useEffect(() => {
    fetchapi();
  }, [category]);
  return api
}
export default fetchvideo;
