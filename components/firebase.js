import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-JbSPKWELeqRtCCT8uAbLXMhj3-ot2sA",
  authDomain: "contact-d3821.firebaseapp.com",
  projectId: "contact-d3821",
  storageBucket: "contact-d3821.appspot.com",
  messagingSenderId: "890506126642",
  appId: "1:890506126642:web:c58f9e8893b1e80501e32b",
  measurementId: "G-EMKLKDMBJ2",
};

const app = initializeApp(firebaseConfig);
console.log(`Firebase fired up!`);
export const database = getFirestore(app);
