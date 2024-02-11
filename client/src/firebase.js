// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-beb95.firebaseapp.com",
  projectId: "mern-blog-beb95",
  storageBucket: "mern-blog-beb95.appspot.com",
  messagingSenderId: "362610787525",
  appId: "1:362610787525:web:919588a704407e16ccdcac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);