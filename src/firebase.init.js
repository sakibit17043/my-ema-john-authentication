// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyA1pST73i_PUaRfMgRNnLyyEDT9LtswQVE",
  authDomain: "ema-john-authentication-4dbde.firebaseapp.com",
  projectId: "ema-john-authentication-4dbde",
  storageBucket: "ema-john-authentication-4dbde.appspot.com",
  messagingSenderId: "779469992037",
  appId: "1:779469992037:web:6ca0fe739329d8175e568c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;