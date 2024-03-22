import { initializeApp} from "firebase/app";

// import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAf0PYWTGgw0MJK8R-jtlAmWOlY3ek7ktc",
  authDomain: "joeron.firebaseapp.com",
  projectId: "joeron",
  storageBucket: "joeron.appspot.com",
  messagingSenderId: "315309861723",
  appId: "1:315309861723:web:14a0004b52c0d850cbc87e",
  measurementId: "G-Z3V5411LF7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
