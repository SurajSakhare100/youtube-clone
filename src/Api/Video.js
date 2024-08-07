import { API_KEY } from "../index.js";
const fetchapi = async (videoid) => {
  console.log('YouTube API Key:', API_KEY); 
  const video_url = `
    https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoid}&maxResults=200&key=${API_KEY}`;
  const response = await fetch(video_url);
  const data = await response.json();
  return data;
};
export default fetchapi;
