const fetchVideos = async (channelId) => {
    try {
        const API = `AIzaSyBq7pRgOu_yP4mvYq_vdegL4v5eDjlUyZE`;
        const MAX_RESULTS = 50; // Adjust as needed
        const video_url =
            `https://www.googleapis.com/youtube/v3/search?key=${API}&part=id&channelId=${channelId}&maxResults=${MAX_RESULTS}`;
        const response = await fetch(video_url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log('Error fetching videos:', error);
    }
};
export default fetchVideos;