
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// If you were using Firestore or another service, you would import it here:
// import { getFirestore } from "firebase/firestore";

// ⭐ Replace the placeholder key with your actual Firebase API Key
const firebaseConfig = {
  apiKey: "AIzaSyC1Hw74RE4-eKe4W9Eqtkyb06-2lbq1yG4", 
  authDomain: "ziteratenew.firebaseapp.com",
  projectId: "ziteratenew",
  storageBucket: "ziteratenew.appspot.com",
  messagingSenderId: "592120127287",
  appId: "1:592120127287:web:84d03a3086daef4cbb84b2",
  measurementId: "G-7Q3TTT6PR8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export services
export const auth = getAuth(app);
export const storage = getStorage(app);
// export const db = getFirestore(app); // Example if you need Firestore

// Setup Google Authentication Provider
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export default app;