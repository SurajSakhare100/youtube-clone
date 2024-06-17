import { API_KEY } from "..";
const channelInfo = async (id) => {
  const video_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`;
  const response = await fetch(video_url);
  const data = await response.json();
  return data?.items[0];

};

export default channelInfo;