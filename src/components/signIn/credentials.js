
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaVDE2tIMOmzrC4-Q00LPP2hydRHaC4ak",
  authDomain: "da-vinci-code-5bc6b.firebaseapp.com",
  projectId: "da-vinci-code-5bc6b",
  storageBucket: "da-vinci-code-5bc6b.appspot.com",
  messagingSenderId: "439603548198",
  appId: "1:439603548198:web:1caf8020d4f143e63d16e7",
  measurementId: "G-BTGN8HHEZ7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore();
const provider = new GoogleAuthProvider();
export {auth, provider, firestore};