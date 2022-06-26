// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-iMv5E0s5Bzqmpz8SlmBqdGb-Ni1JZR8",
  authDomain: "inventory-management-sys-5d85a.firebaseapp.com",
  projectId: "inventory-management-sys-5d85a",
  storageBucket: "inventory-management-sys-5d85a.appspot.com",
  messagingSenderId: "728269263042",
  appId: "1:728269263042:web:8220988b4a07b11984ab5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;