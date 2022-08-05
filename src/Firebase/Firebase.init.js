// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPGSLSnVraXaCQ5kigurFJ75D2d7rUjWw",
    authDomain: "fir-auth-react-router-29bcb.firebaseapp.com",
    projectId: "fir-auth-react-router-29bcb",
    storageBucket: "fir-auth-react-router-29bcb.appspot.com",
    messagingSenderId: "852331473362",
    appId: "1:852331473362:web:bd41dfbde6ad60ef95c00b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;