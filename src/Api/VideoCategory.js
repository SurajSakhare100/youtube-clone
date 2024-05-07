import { API_KEY } from "..";
async function videoApi(category) {
  const video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=In&videoCategoryId=${category}&key=${API_KEY}`;
  const response = await fetch(video_url);
  const data = await response.json();
  return data;
}
export default videoApi;
