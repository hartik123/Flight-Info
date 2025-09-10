// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCzgRBbU4I3zysWmyOYULf2Z3aOkCb_UN4",
  authDomain: "flight-info-app-57f71.firebaseapp.com",
  projectId: "flight-info-app-57f71",
  storageBucket: "flight-info-app-57f71.firebasestorage.app",
  messagingSenderId: "705506710048",
  appId: "1:705506710048:web:31c46f80301e3019d62245",
  measurementId: "G-L80HKKSNJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);