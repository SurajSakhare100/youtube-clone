const channelPlayListsapi = async (id) => {
    id="UCyETxeA3DlwsK5Eu3lo_XIA"
    const API = `AIzaSyBq7pRgOu_yP4mvYq_vdegL4v5eDjlUyZE`;
    const video_url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&maxResults=50&channelId=${id}&key=${API}`
    const response = await fetch(video_url);
    const data = await response.json();
    return data.items;
  };
  
  export default channelPlayListsapi;
