import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";


export const firebaseConfig = {
    apiKey: "AIzaSyCQjO9TcXCve9gI0ysdzCO1thV8SBTFjcc",
    authDomain: "lakfa-3bfb1.firebaseapp.com",
    projectId: "lakfa-3bfb1",
    storageBucket: "lakfa-3bfb1.firebasestorage.app",
    messagingSenderId: "830319839000",
    appId: "1:830319839000:web:7129aa7e577d2c67f4806d",
    measurementId: "G-EB9GVF5L3Z"
};

export const app = initializeApp(firebaseConfig);
export const secondaryApp = initializeApp(firebaseConfig, "investor-account-creator");
export const auth = getAuth(app);
export const secondaryAuth = getAuth(secondaryApp);
export const db = getFirestore(app);
