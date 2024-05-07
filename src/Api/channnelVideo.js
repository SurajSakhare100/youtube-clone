import { API_KEY } from "..";

const fetchVideos = async (channelId) => {
    try {
        const MAX_RESULTS = 50; 
        const video_url =
            `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&channelId=${channelId}&maxResults=${MAX_RESULTS}`;
        const response = await fetch(video_url);
        const data = await response.json();
        console.log(channelId)
        return data.items;
    }
    catch (error) {
        console.log('Error fetching videos:', error);
    }
};
export default fetchVideos;