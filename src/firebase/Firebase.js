// Import the functions you need from the SDKs you need
import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6LMcq5hhb6EZRdsJVAIoRchuLXi2bVSc",
  authDomain: "dekulto-add1b.firebaseapp.com",
  projectId: "dekulto-add1b",
  storageBucket: "dekulto-add1b.appspot.com",
  messagingSenderId: "812272599435",
  appId: "1:812272599435:web:0e0ae32511fa0a8547ef8e"
};

// Initialize Firebase
const app = Firebase.initializeApp(firebaseConfig);

//Servicios que estoy ocupando

export const db = app.firestore()
