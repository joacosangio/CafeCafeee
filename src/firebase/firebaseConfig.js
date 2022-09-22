import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {

  apiKey: "AIzaSyBXwZIEl4fwOwmnm0nyQ9965neP08ixZ_E",

  authDomain: "coffecodex-46063.firebaseapp.com",

  projectId: "coffecodex-46063",

  storageBucket: "coffecodex-46063.appspot.com",

  messagingSenderId: "399090301038",

  appId: "1:399090301038:web:f213e2ca416aa746248e7f"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const base = getFirestore(app)