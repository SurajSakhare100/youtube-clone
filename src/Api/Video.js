import React from "react";
import { useState, useEffect } from "react";
const fetchapi = async (videoid) => {
  const API = `AIzaSyBq7pRgOu_yP4mvYq_vdegL4v5eDjlUyZE`;
  const video_url = `
    https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoid}&maxResults=200&key=${API}`;
  console.log(video_url);
  const response = await fetch(video_url);
  const data = await response.json();
  return data;
};
export default fetchapi;
