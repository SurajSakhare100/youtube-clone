import { API_KEY } from "..";

const channelSection = async (id) => {
  const video_url = `https://youtube.googleapis.com/youtube/v3/channelSections?part=snippet%2CcontentDetails&channelId=${id}&key=${API_KEY}`;
  const response = await fetch(video_url);
  const data = await response.json();
  return data.items;
};

export default channelSection;