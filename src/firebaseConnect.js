import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration (already provided)
const firebaseConfig = {
  apiKey: "AIzaSyARh_bhULNZb03vEnCh1Z4ZSxFyQaFdtXc",
  authDomain: "lab12-reactjs.firebaseapp.com",
  databaseURL: "https://lab12-reactjs-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lab12-reactjs",
  storageBucket: "lab12-reactjs.appspot.com",
  messagingSenderId: "285658933381",
  appId: "1:285658933381:web:3c7b17b20ff701564c21ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
