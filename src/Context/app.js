
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCf4wI3jtNs-kjDGR6-3w79twiH6zHdgWE",
  authDomain: "classicmart-d60ba.firebaseapp.com",
  projectId: "classicmart-d60ba",
  storageBucket: "classicmart-d60ba.appspot.com",
  messagingSenderId: "189494293921",
  appId: "1:189494293921:web:1d9046224f8c07a9b6c7e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;