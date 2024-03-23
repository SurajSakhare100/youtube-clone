import React,{ useState, useEffect } from "react";
const Searchapi =async  (searchtitle) => {
    const API = `AIzaSyBq7pRgOu_yP4mvYq_vdegL4v5eDjlUyZE`;
    const video_url =
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchtitle}&key=${API}`;
    await fetch(video_url)
      .then((response) => response.json())
      .then((data) => {
        return data.items;
      });
};

export default Searchapi;
