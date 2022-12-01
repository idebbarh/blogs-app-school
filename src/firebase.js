
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMhBmVBt67rFOI8tJiHU-6z7tI3qrEa2U",
  authDomain: "blog-school-app.firebaseapp.com",
  projectId: "blog-school-app",
  storageBucket: "blog-school-app.appspot.com",
  messagingSenderId: "866371724819",
  appId: "1:866371724819:web:9f3afa2d2dc809379581e6"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);