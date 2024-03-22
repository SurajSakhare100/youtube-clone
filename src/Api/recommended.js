import React from "react";
import { useState, useEffect } from "react";
function recommendedapi(videoid) {
    const [commentdata, setcommentdata] = useState(null);

const fetchrecommended = async () => {
    const API = `AIzaSyBq7pRgOu_yP4mvYq_vdegL4v5eDjlUyZE`;
    // const video_url =
    //     `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoid}&maxResults=50&key=${API}`
    const video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=In&videoCategoryId=${videoid}&key=${API}`;

    await fetch(video_url)
        .then((response) => response.json())
        .then((data) => 
        {setcommentdata(data.items)
    }
        );
}
useEffect(() => {
    fetchrecommended();
}, [videoid]);

return commentdata
}
export default recommendedapi