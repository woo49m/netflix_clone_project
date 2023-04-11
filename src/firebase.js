import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNDpKxtDp0uXNvC3Bwbn0wmxLFtHugVPQ",
  authDomain: "netflix-clone-6d10a.firebaseapp.com",
  projectId: "netflix-clone-6d10a",
  storageBucket: "netflix-clone-6d10a.appspot.com",
  messagingSenderId: "765616211731",
  appId: "1:765616211731:web:789788069047e468743ce6",
};

const fireBaseApp = initializeApp(firebaseConfig);
const db = getFirestore(fireBaseApp);
const auth = getAuth(fireBaseApp);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
export default db;
