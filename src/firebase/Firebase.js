// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSin9Rkz5WrOSBj-rg-IwNraobyHi5qpQ",
  authDomain: "contentmanagementsystem-bd922.firebaseapp.com",
  projectId: "contentmanagementsystem-bd922",
  storageBucket: "contentmanagementsystem-bd922.appspot.com",
  messagingSenderId: "621704405002",
  appId: "1:621704405002:web:3c923f14d596189393fff3",
  measurementId: "G-63WR5HENEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Auth and export it
export const auth = getAuth(app);
