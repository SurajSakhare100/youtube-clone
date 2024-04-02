const channelSection = async (id) => {
  const API = `AIzaSyBq7pRgOu_yP4mvYq_vdegL4v5eDjlUyZE`;
  const video_url = `https://youtube.googleapis.com/youtube/v3/channelSections?part=snippet%2CcontentDetails&channelId=${id}&key=${API}`;
  const response = await fetch(video_url);
  const data = await response.json();
  return data.items;
};

export default channelSection;