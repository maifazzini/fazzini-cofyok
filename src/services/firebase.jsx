import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCf4xZOyTxdixIKjz1X1UKcIWJUwg_jNuw",
    authDomain: "cofyok-fazzini.firebaseapp.com",
    projectId: "cofyok-fazzini",
    storageBucket: "cofyok-fazzini.firebasestorage.app",
    messagingSenderId: "919223501155",
    appId: "1:919223501155:web:3e7aa8db303c853adb9356"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);