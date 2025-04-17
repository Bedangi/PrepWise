import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCYv_tqHPHqM3ud7WPchYx0qtU1jRqsids",
  authDomain: "prepwise-b84d3.firebaseapp.com",
  projectId: "prepwise-b84d3",
  storageBucket: "prepwise-b84d3.firebasestorage.app",
  messagingSenderId: "66795415783",
  appId: "1:66795415783:web:a57338981c27a2eae55a42",
  measurementId: "G-BCL7X48Q6K"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);