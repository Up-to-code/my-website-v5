// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXiJbQOAUCGUlTSGjYHs9tkKkadhlBxb0",
  authDomain: "my-website-310.firebaseapp.com",
  databaseURL:
    "https://my-website-310-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-website-310",
  storageBucket: "my-website-310.appspot.com",
  messagingSenderId: "866985940487",
  appId: "1:866985940487:web:ae53a958dce0e23686bca2",
  measurementId: "G-35SC96PTDD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
