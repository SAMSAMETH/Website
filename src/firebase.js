
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1Hw74RE4-eKe4W9Eqtkyb06-2lbq1yG4",
  authDomain: "ziteratenew.firebaseapp.com",
  projectId: "ziteratenew",
  storageBucket: "ziteratenew.firebasestorage.app",
  messagingSenderId: "592120127287",
  appId: "1:592120127287:web:84d03a3086daef4cbb84b2",
  measurementId: "G-7Q3TTT6PR8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth & Provider
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// ✅ Always show Google account chooser
provider.setCustomParameters({ prompt: "select_account" });

export default app;





