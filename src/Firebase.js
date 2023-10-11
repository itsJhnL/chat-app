import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDfi6HBwQjg1fUegbavrY-92KpSenahg5s",
  authDomain: "chatapp-aa4d2.firebaseapp.com",
  projectId: "chatapp-aa4d2",
  storageBucket: "chatapp-aa4d2.appspot.com",
  messagingSenderId: "382059304215",
  appId: "1:382059304215:web:305500deb46b70a6a85352",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db, auth };
