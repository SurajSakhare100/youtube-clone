// Import the API key from the environment configuration
import { API_KEY } from "..";

const fetchVideos = async (channelId) => {
    try {
        // Log the API key to verify it is correctly imported
        console.log('YouTube API Key:', API_KEY);
        
        const MAX_RESULTS = 50; 
        const video_url =
            `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&channelId=${channelId}&maxResults=${MAX_RESULTS}`;
        const response = await fetch(video_url);
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.log('Error fetching videos:', error);
    }
};

export default fetchVideos;
