// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpS1BhTILYcjZ4-IdkTAjhmHmms-T11lE",
  authDomain: "amrita-preetam.firebaseapp.com",
  projectId: "amrita-preetam",
  storageBucket: "amrita-preetam.appspot.com",
  messagingSenderId: "560529728008",
  appId: "1:560529728008:web:274a1abe030e6f6ab267bd",
  measurementId: "G-EW9VZEG4EZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const instrument = (event_name, payload) => {
    logEvent(analytics, event_name, payload)
}