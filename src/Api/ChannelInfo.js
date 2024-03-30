import { useState } from "react";

const channelInfo = async (id) => {
  const API = `AIzaSyBq7pRgOu_yP4mvYq_vdegL4v5eDjlUyZE`;
  const video_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API}`;
  const response = await fetch(video_url);
  const data = await response.json();
  return data.items[0];
};

export default channelInfo;