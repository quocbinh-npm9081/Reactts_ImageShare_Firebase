// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//import the func you need to use firebase store
import { getFirestore } from "firebase/firestore";

//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
    projectId: `${process.env.REACT_APP_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
    appId: `${process.env.REACT_APP_API}`,
    measurementId: `${process.env.REACT_APP_MEASUREMENT_ID}`
};

//provider Google
export const providerGoogle = new GoogleAuthProvider();

//provider Facebook
export const providerFacebook = new FacebookAuthProvider();

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



export const auth = getAuth();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);