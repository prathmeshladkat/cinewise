// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpot1pbIiv8BvHVmiGopDXvgozRKQSgkY",
  authDomain: "cinewise-ed89e.firebaseapp.com",
  projectId: "cinewise-ed89e",
  storageBucket: "cinewise-ed89e.firebasestorage.app",
  messagingSenderId: "237249422044",
  appId: "1:237249422044:web:afa5e9948b893a8136ca19",
  measurementId: "G-27SMDZM08Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
