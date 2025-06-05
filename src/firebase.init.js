// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC55cacTQVZgKZfrK8get3JVQv6Rq_DKCc",
  authDomain: "library-client-ccb7c.firebaseapp.com",
  projectId: "library-client-ccb7c",
  storageBucket: "library-client-ccb7c.firebasestorage.app",
  messagingSenderId: "742158561884",
  appId: "1:742158561884:web:acf2ca0eb5e146c76eec99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);