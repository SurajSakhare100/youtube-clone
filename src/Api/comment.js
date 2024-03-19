import React from "react";
import { useState, useEffect } from "react";
function commentapi(videoNum) {
    const [commentdata, setcommentdata] = useState(null);

const fetchcomment = async () => {
    const API = `AIzaSyBq7pRgOu_yP4mvYq_vdegL4v5eDjlUyZE`;
    const video_url =
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoNum}&key=${API}`
    await fetch(video_url)
        .then((response) => response.json())
        .then((data) => 
        {setcommentdata(data.items)
        console.log(data)}
        );
}
useEffect(() => {
    fetchcomment();
}, [videoid]);

return commentdata
}
export default commentapi