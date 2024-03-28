import { useState } from "react";

const channelapi = async (videoid) => {
  const API = `AIzaSyBq7pRgOu_yP4mvYq_vdegL4v5eDjlUyZE`;
  const video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoid}&key=${API}`;
  const response = await fetch(video_url);
  const data = await response.json();
  return data.items[0];
};

export default channelapi;
