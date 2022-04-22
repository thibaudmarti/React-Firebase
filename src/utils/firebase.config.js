import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebase-test-9987a.firebaseapp.com",
  projectId: "react-firebase-test-9987a",
  storageBucket: "react-firebase-test-9987a.appspot.com",
  messagingSenderId: "1054172429216",
  appId: "1:1054172429216:web:8274a8129de23cab8282c5",
});

export const auth = app.auth();
export const db = getFirestore();
export default app;
