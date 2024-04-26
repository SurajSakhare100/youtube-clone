import React from "react";
const banner = async () => {
  const API = `AIzaSyBq7pRgOu_yP4mvYq_vdegL4v5eDjlUyZE`;
  const video_url = `https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&key=${API}`;
  await fetch(`https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&id=UCIihexFQucy1Sm7V7yvL_mA`,
  {
    headers: {
      Authorization: `Bearer ${API}`,
      'Content-Type': 'application/json'

    }})
    .then((response) => response.json())
    .then((data) => {
      return data;
    }).catch((err)=>{
        console.log(err)
    })
};

export default banner;
