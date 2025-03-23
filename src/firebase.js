import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG94EISiQKBq8kfjUbbF3OuHgZrHpiYaI",
  authDomain: "new-investment-dfacc.firebaseapp.com",
  projectId: "new-investment-dfacc",
  storageBucket: "new-investment-dfacc.firebasestorage.app",
  messagingSenderId: "11409437709",
  appId: "1:11409437709:web:c49d1cfce879d6f3c35144",
  measurementId: "G-ZLRXZNVJ9E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };