// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTw_Zpp3anxyAJDdis9Wyk_J9EZuqySmA",
  authDomain: "disneyplus-hotstar-1723b.firebaseapp.com",
  projectId: "disneyplus-hotstar-1723b",
  storageBucket: "disneyplus-hotstar-1723b.appspot.com",
  messagingSenderId: "668335719851",
  appId: "1:668335719851:web:44f12a10192df5bb31beee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// For firebase Authentication
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
