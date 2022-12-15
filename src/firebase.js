// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAKC6b4svFpj6U9REWGADuq3QuWulnl8CA",
  authDomain: "nwitems.firebaseapp.com",
  databaseURL: "https://nwitems-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nwitems",
  storageBucket: "nwitems.appspot.com",
  messagingSenderId: "801803695258",
  appId: "1:801803695258:web:fd11f8bef91f7afe1b1b23",
  measurementId: "G-W1RDY2HCL4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
