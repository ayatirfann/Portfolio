import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgOk8JYaOB9U21imV1TkS0URm0VJT0lpo",
  authDomain: "portfolio-messages-b3e41.firebaseapp.com",
  projectId: "portfolio-messages-b3e41",
  storageBucket: "portfolio-messages-b3e41.appspot.com", // 👈 fix: should end with .appspot.com
  messagingSenderId: "420802554161",
  appId: "1:420802554161:web:c244b0ac280d27fa9c6810",
  measurementId: "G-ZQZEPNDFVY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
