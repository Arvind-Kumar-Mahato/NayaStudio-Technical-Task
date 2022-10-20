import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_qApgBZ7wQ4e4e-UMxmjPK5KJ4-WXxdU",
  authDomain: "react-authentication-369a6.firebaseapp.com",
  projectId: "react-authentication-369a6",
  storageBucket: "react-authentication-369a6.appspot.com",
  messagingSenderId: "520980765445",
  appId: "1:520980765445:web:17c5d4bfc87f0173a4f56c",
  measurementId: "G-LMMPRXB2GW",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
