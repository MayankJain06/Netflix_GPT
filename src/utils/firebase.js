// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFlWo1AHGKAej7PwrFQeUktZb6BnnzfuA",
  authDomain: "netflix-gpt-3a0a9.firebaseapp.com",
  projectId: "netflix-gpt-3a0a9",
  storageBucket: "netflix-gpt-3a0a9.firebasestorage.app",
  messagingSenderId: "221273386703",
  appId: "1:221273386703:web:d2b7910d638ea0d73291ba",
  measurementId: "G-PY38XFCNDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);