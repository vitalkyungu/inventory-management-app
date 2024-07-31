// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl2uOQINtxIF7YgV_FoM942lQWZafAwko",
  authDomain: "inventory-management-app-by-v.firebaseapp.com",
  projectId: "inventory-management-app-by-v",
  storageBucket: "inventory-management-app-by-v.appspot.com",
  messagingSenderId: "674778873872",
  appId: "1:674778873872:web:36e0910d4a16a2ab374a95",
  measurementId: "G-08EJMK9T68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };