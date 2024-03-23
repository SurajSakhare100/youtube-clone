import React from "react";
import { useState, useEffect } from "react";
import { useapi } from "../context/Youtube";

const channelapi=async(api)=>{
        const API = `AIzaSyBq7pRgOu_yP4mvYq_vdegL4v5eDjlUyZE`;
        const video_url =
            `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${api.snippet.channelId}&key=${API}`
        await fetch(video_url)
            .then((response) => response.json())
            .then((data) => {
                return data.items[0]
            });
    }


export default channelapi