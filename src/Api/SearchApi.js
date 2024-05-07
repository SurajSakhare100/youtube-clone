import { API_KEY } from "..";
const SearchApi =async  (searchtitle) => {
    const video_url =
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchtitle}&key=${API_KEY}`;
    const response = await fetch(video_url);
    const data = await response.json();
    return data.items;
};

export default SearchApi;
