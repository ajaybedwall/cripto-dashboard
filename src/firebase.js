// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByfE-tb-c8FjSMY-iR38SQFbFsVWup7WY",
  authDomain: "crypto-login-71111.firebaseapp.com",
  projectId: "crypto-login-71111",
  storageBucket: "crypto-login-71111.appspot.com",
  messagingSenderId: "264468103719",
  appId: "1:264468103719:web:a03042bd49a74f2ecc0402",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

const signOutUser = () => {
  return signOut(auth);
};

export { auth, signInWithGoogle, signOutUser };
