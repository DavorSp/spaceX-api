// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJwJzntzTwJXsRNg10B-fLLAdZIprR5h0",
  authDomain: "spacex-35b0f.firebaseapp.com",
  databaseURL: "https://spacex-35b0f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "spacex-35b0f",
  storageBucket: "spacex-35b0f.appspot.com",
  messagingSenderId: "310602637969",
  appId: "1:310602637969:web:1a99cdc3a70d37e1039530"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
