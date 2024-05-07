import { API_KEY } from "..";

const recommended = async (videoid) => {
  const video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=In&videoCategoryId=${videoid}&key=${API_KEY}`;
  await fetch(video_url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default recommended;
