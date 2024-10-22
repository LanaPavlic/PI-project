// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication
import { getAnalytics } from "firebase/analytics"; // Import Firebase Analytics (optional)
// Optionally, import other services like Firestore, Storage, etc., if needed
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK_SzdqwNdAg_yZHdlefI6LT_sy2r-raM",
  authDomain: "pi-project-766fd.firebaseapp.com",
  projectId: "pi-project-766fd",
  storageBucket: "pi-project-766fd.appspot.com",
  messagingSenderId: "975645474317",
  appId: "1:975645474317:web:31ac780600306325971f44",
  measurementId: "G-3ZJQR2BV5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the auth service
const auth = getAuth(app);

// Initialize Firebase Analytics (optional)
const analytics = getAnalytics(app); // Only if you're using Analytics

// Optionally initialize other Firebase services (Firestore, Storage, etc.)
// const db = getFirestore(app);
// const storage = getStorage(app);

// Export the initialized services to use them in your components
export { auth };