import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateCurrentUser,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxFv8oe1SQcBMkcfkoiBzNyNc9BF8fB3E",
  authDomain: "products-c46d2.firebaseapp.com",
  projectId: "products-c46d2",
  storageBucket: "products-c46d2.appspot.com",
  messagingSenderId: "326687969461",
  appId: "1:326687969461:web:989aa91c602e4b0a156efc",
  measurementId: "G-SLP72T0Y96",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const signUp = async (name, email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
  await updateCurrentUser(auth, { displayName: name });
};
export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};
