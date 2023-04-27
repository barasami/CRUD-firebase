
import { initializeApp } from "firebase/app";
import {getFirestore}from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCnNxJ2VITWaRQirVNu92qglhiXnPWVp3c",
  authDomain: "fcrud-1fe4e.firebaseapp.com",
  projectId: "fcrud-1fe4e",
  storageBucket: "fcrud-1fe4e.appspot.com",
  messagingSenderId: "401758506576",
  appId: "1:401758506576:web:64e460aa5c3442f325cb55",
  measurementId: "G-FMX4Q5E35C"
};

const app = initializeApp(firebaseConfig);
export const mydb=getFirestore(app)
