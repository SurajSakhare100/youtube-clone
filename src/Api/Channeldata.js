import React from "react";
import { useState, useEffect } from "react";
import { useapi } from "../context/Youtube";

const channelapi=(api)=>{
    const datas=[];
     api.map(async(api,i)=>{
            const API = `AIzaSyBq7pRgOu_yP4mvYq_vdegL4v5eDjlUyZE`;
            const video_url =
                `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${api.snippet.channelId}&key=${API}`
            await fetch(video_url)
                .then((response) => response.json())
                .then((data) => {
                    datas.append(data.items[0])
                });
    })
    console.log(datas)
    }


export default channelapi