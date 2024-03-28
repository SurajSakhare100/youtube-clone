import React,{ useState, useEffect } from "react";
const SearchApi =async  (searchtitle) => {
    const API = `AIzaSyBq7pRgOu_yP4mvYq_vdegL4v5eDjlUyZE`;
    const video_url =
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchtitle}&key=${API}`;
    const response = await fetch(video_url);
    const data = await response.json();
    return data.items;
};

export default SearchApi;
