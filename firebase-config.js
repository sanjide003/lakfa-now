import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyAl0rt0t5roEf5Dcze7Hu_3NW9-fz6Lxr8",
  authDomain: "lakfa-5d1b0.firebaseapp.com",
  projectId: "lakfa-5d1b0",
  storageBucket: "lakfa-5d1b0.firebasestorage.app",
  messagingSenderId: "695059177078",
  appId: "1:695059177078:web:d548f828b63ebaf08f4957",
  measurementId: "G-Z15B7Y4KYF"
};

export const app = initializeApp(firebaseConfig);
export const secondaryApp = initializeApp(firebaseConfig, "investor-account-creator");
export const auth = getAuth(app);
export const secondaryAuth = getAuth(secondaryApp);
export const db = getFirestore(app);
