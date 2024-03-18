import React from "react";
import { useState, useEffect } from "react";

function channelapi(api){
    const [channeldata, setchanneldata] = useState(null);
    const fetchchannel = async () => {
        const API = `AIzaSyBq7pRgOu_yP4mvYq_vdegL4v5eDjlUyZE`;
        const video_url =
            `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${api.snippet.channelId}&key=${API}`
        await fetch(video_url)
            .then((response) => response.json())
            .then((data) => setchanneldata(data.items[0]));
    }
    useEffect(() => {
        fetchchannel();
    }, [api]);
    return channeldata
}

export default channelapi