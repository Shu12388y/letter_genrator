// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl2qhzyoAZT9rhXR8dLrg8JlZDhP9ls1Q",
  authDomain: "lettergenrator.firebaseapp.com",
  projectId: "lettergenrator",
  storageBucket: "lettergenrator.appspot.com",
  messagingSenderId: "47445371541",
  appId: "1:47445371541:web:b97995dbeaec64d5c1499c",
  measurementId: "G-C2BHM3B4C5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);