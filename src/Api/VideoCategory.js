import React from "react";

async function videoApi(category) {
  const API = `AIzaSyBq7pRgOu_yP4mvYq_vdegL4v5eDjlUyZE`;
  const video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=200&regionCode=In&videoCategoryId=${category}&key=${API}`;
  const response = await fetch(video_url);
  const data = await response.json();
  return data;
}
export default videoApi;
