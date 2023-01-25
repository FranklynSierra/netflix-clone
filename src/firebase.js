// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyD8uvmp6RziRiFgcq04Xxm698br8pSDYnE",
  authDomain: "netfix-app-3e0b9.firebaseapp.com",
  projectId: "netfix-app-3e0b9",
  storageBucket: "netfix-app-3e0b9.appspot.com",
  messagingSenderId: "99383958110",
  appId: "1:99383958110:web:8ada0fe9177ec71f7fb2cf",
  measurementId: "G-9GE2HTEHN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app)