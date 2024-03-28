import React from "react";
const CommentApi = async (videoid) => {
  const API = `AIzaSyBq7pRgOu_yP4mvYq_vdegL4v5eDjlUyZE`;
  const video_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoid}&maxResults=50&key=${API}`;
  const response = await fetch(video_url);
  const data = await response.json();
  return data.items;
};
export default CommentApi;
