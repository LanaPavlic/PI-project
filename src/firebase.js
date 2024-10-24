// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };


