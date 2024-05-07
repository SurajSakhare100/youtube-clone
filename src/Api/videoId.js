import { API_KEY } from "..";

const videoid = async (id) => {
    const video_url =
    `https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&part=contentDetails&playlistId=${id}&maxResults=50`

    const response = await fetch(video_url);
    const data = await response.json();
    return data.items;
  };
  
  export default videoid;
