// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1JHWL79y-AUbAQRErwojpA9zaXSQEEt0",
  authDomain: "fire-base-proyecto-final.firebaseapp.com",
  projectId: "fire-base-proyecto-final",
  storageBucket: "fire-base-proyecto-final.firebasestorage.app",
  messagingSenderId: "54143482337",
  appId: "1:54143482337:web:8bd52c22c2f50a32fc7aa0",
  measurementId: "G-1YSEGF8NN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const _analytics = getAnalytics(app);

// Exportar Auth y Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);