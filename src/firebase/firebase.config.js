// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoWllIhKxPbPIw5qkEecIxO4KSXXujeos",
  authDomain: "react-router-auth-dom.firebaseapp.com",
  projectId: "react-router-auth-dom",
  storageBucket: "react-router-auth-dom.appspot.com",
  messagingSenderId: "445361556847",
  appId: "1:445361556847:web:2bb04a26ec264acc762c9a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
