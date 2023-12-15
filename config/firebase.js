// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWSYEsYSIdzn_lCEQ7j7DzG5ekQfaJrME",
  authDomain: "uas-portfolio.firebaseapp.com",
  projectId: "uas-portfolio",
  storageBucket: "uas-portfolio.appspot.com",
  messagingSenderId: "1019323604300",
  appId: "1:1019323604300:web:052624bf1fb24386b043e9",
  measurementId: "G-04V539TMVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
