// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// ✅ Replace these with your actual Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyBPXEVw7fW7n6LDAnayo-AdCn70uh80GNo",
  authDomain: "edukosh-f9a7a.firebaseapp.com",
  projectId: "edukosh-f9a7a",
  appId: "1:183975969336:web:2cd884ae8fbf9a1e699ccd",
  // Optional: storageBucket, messagingSenderId, etc.
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Set up Firebase Authentication and Google Provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };
