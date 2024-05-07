import { API_KEY } from "..";
const banner = async () => {
  const video_url = `https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&key=${API_KEY}`;
  await fetch(`https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&id=UCIihexFQucy1Sm7V7yvL_mA`,
  {
    headers: {
      Authorization: `Bearer ${API}`,
      'Content-Type': 'application/json'

    }})
    .then((response) => response.json())
    .then((data) => {
      return data;
    }).catch((err)=>{
        console.log(err)
    })
};

export default banner;
