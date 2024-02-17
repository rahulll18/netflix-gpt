// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWgxRAwMd_GP2o_245sjA3MZbudI30Tmw",
  authDomain: "netflixgpt-cdc09.firebaseapp.com",
  projectId: "netflixgpt-cdc09",
  storageBucket: "netflixgpt-cdc09.appspot.com",
  messagingSenderId: "553264054786",
  appId: "1:553264054786:web:4d76c88a50360b8e115d1b",
  measurementId: "G-QM60JWE4GZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
