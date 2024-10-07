// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRQtH9BGBk8X6gA-xcpFPf5znyM6Jkmh0",
  authDomain: "react-firebase-chat-app-ebe86.firebaseapp.com",
  projectId: "react-firebase-chat-app-ebe86",
  storageBucket: "react-firebase-chat-app-ebe86.appspot.com",
  messagingSenderId: "495943832791",
  appId: "1:495943832791:web:20e6bcd0a23a260cc28c92",
  measurementId: "G-8754RB66Y0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();