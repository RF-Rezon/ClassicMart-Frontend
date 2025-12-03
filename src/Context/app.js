
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyCf4wI3jtNs-kjDGR6-3w79twiH6zHdgWE",
//   authDomain: "classicmart-d60ba.firebaseapp.com",
//   projectId: "classicmart-d60ba",
//   storageBucket: "classicmart-d60ba.appspot.com",
//   messagingSenderId: "189494293921",
//   appId: "1:189494293921:web:1d9046224f8c07a9b6c7e0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_LOCAL_APIKEY,
  authDomain: import.meta.env.VITE_LOCAL_AUTHDOMAIN,
  projectId: import.meta.env.VITE_LOCAL_PROJECTID,
  storageBucket: import.meta.env.VITE_LOCAL_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_LOCAL_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_LOCAL_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;