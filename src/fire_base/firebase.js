import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcD_LJN0u2Z8Dajo9EsbC8mqTa0maXhbM",
  authDomain: "concup-se.firebaseapp.com",
  projectId: "concup-se",
  storageBucket: "concup-se.appspot.com",
  messagingSenderId: "374647519105",
  appId: "1:374647519105:web:62e7f3afe932631c3a1a80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

