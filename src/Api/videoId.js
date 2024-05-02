const videoid = async (id) => {
    const API = `AIzaSyBq7pRgOu_yP4mvYq_vdegL4v5eDjlUyZE`;
    console.log(id)
    const video_url =
    //  `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${id}&key=${API}`
    `https://www.googleapis.com/youtube/v3/playlistItems?key=${API}&part=contentDetails&playlistId=${id}&maxResults=50`

    const response = await fetch(video_url);
    const data = await response.json();
    return data.items;
  };
  
  export default videoid;
