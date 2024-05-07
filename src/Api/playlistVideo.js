import { API_KEY } from "..";
const playListvideosapi = async (id) => {
    const video_url =
     `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${id}&key=${API_KEY}`
    const response = await fetch(video_url);
    const data = await response.json();
    return data.items;
  };
  
  export default playListvideosapi;
