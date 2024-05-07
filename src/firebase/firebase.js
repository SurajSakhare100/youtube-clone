import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//   apiKey:String(import.meta.env.VITE_API_KEY),
//   authDomain:String(import.meta.env.VITE_AUTH_DOMAIN),
//   projectId:String(import.meta.env.VITE_PROJECT_ID),
//   storageBucket:String(import.meta.env.VITE_STORAGE_BUCKET),
//   messagingSenderId:String(import.meta.env.VITE_MESSAGING_SENDER_ID),
//   appId:String(import.meta.env.VITE_APP_ID),
//   databaseURL:String(import.meta.env.VITE_DATABASE_URL)
// };

const firebaseConfig = {
  apiKey: "AIzaSyBq7pRgOu_yP4mvYq_vdegL4v5eDjlUyZE",
  authDomain: "clone-416114.firebaseapp.com",
  projectId: "youtube-clone-416114",
  storageBucket: "youtube-clone-416114.appspot.com",
  messagingSenderId: "505946855265",
  appId: "1:505946855265:web:ac806748dd027eb920d720",
  databaseURL:"https://youtube-clone-416114-default-rtdb.firebaseio.com"
};
export const app = initializeApp(firebaseConfig);

export const db=getDatabase(app)