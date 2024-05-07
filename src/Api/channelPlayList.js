import { API_KEY } from "..";

const channelPlayListsapi = async (id) => {
    const video_url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&maxResults=50&channelId=${id}&key=${API_KEY}`
    const response = await fetch(video_url);
    const data = await response.json();
    return data.items;
  };
  
  export default channelPlayListsapi;
