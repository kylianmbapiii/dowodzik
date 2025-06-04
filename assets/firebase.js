import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAAVOTNv0uSwVSe8Y4ABfx7IlrIB0X8bb4",
  authDomain: "mdowodzik.firebaseapp.com",
  projectId: "mdowodzik",
  storageBucket: "mdowodzik.firebasestorage.app",
  messagingSenderId: "420756225261",
  appId: "1:420756225261:web:fcd7ef625ce7a070fd20e4",
  measurementId: "G-018F9YPGP6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
