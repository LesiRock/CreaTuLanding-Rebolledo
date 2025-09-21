// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDp8Ho_D1QTv9AxZ6Ow5scE05Xpe12y_qI",
    authDomain: "coder-isel-react.firebaseapp.com",
    projectId: "coder-isel-react",
    storageBucket: "coder-isel-react.firebasestorage.app",
    messagingSenderId: "595674668469",
    appId: "1:595674668469:web:73939d3958e8c9b1f18dfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)