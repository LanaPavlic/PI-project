// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
