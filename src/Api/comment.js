import React from "react";
const commentapi = async (videoid) => {
    const API = `AIzaSyBq7pRgOu_yP4mvYq_vdegL4v5eDjlUyZE`;
    const video_url =
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoid}&maxResults=50&key=${API}`
    await fetch(video_url)
        .then((response) => response.json())
        .then((data) => {
            return data
    }
        );
}
export default commentapi