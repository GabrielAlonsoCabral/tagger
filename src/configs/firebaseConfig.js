import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxhnFcOM0aFg5fzx63dZ_q6JyWilr3MXk",
  authDomain: "alloha-analytics.firebaseapp.com",
  projectId: "alloha-analytics",
  storageBucket: "alloha-analytics.appspot.com",
  messagingSenderId: "189563207256",
  appId: "1:189563207256:web:5538e7a1f2e706e091942d",
  measurementId: "G-3CNKPX10VX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export {
  firestoreDB,
  app
}