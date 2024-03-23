import React from "react";
const recommended = async (videoid) => {
  const API = `AIzaSyBq7pRgOu_yP4mvYq_vdegL4v5eDjlUyZE`;
  const video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=In&videoCategoryId=${videoid}&key=${API}`;
  await fetch(video_url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default recommended;
