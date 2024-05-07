import { API_KEY } from "..";
const CommentApi = async (videoid) => {
  const video_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoid}&maxResults=50&key=${API_KEY}`;
  const response = await fetch(video_url);
  const data = await response.json();
  return data.items;
};
export default CommentApi;
