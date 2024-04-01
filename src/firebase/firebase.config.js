// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcazvFmo--FEkdHkLRF31x3kU_mre6H5o",
  authDomain: "auth-react-97232.firebaseapp.com",
  projectId: "auth-react-97232",
  storageBucket: "auth-react-97232.appspot.com",
  messagingSenderId: "939444586518",
  appId: "1:939444586518:web:a5f2688176c2c00e1ccd37",
  measurementId: "G-VHWPY2S9FW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
