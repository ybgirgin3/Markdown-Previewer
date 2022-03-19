// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWdyv8vOIVyzuYe8pbANzxwHdJioxphbo",
  authDomain: "markdownpreviewer-a27fc.firebaseapp.com",
  projectId: "markdownpreviewer-a27fc",
  storageBucket: "markdownpreviewer-a27fc.appspot.com",
  messagingSenderId: "1013210461862",
  appId: "1:1013210461862:web:d1459f2332708cb4c8e667",
  measurementId: "G-SQN27TTRYC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
