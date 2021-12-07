// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBET-gStSfD1qNxH7BElWZFfDC138jR_ac',
  authDomain: 'instaclone-94374.firebaseapp.com',
  projectId: 'instaclone-94374',
  storageBucket: 'instaclone-94374.appspot.com',
  messagingSenderId: '368652469621',
  appId: '1:368652469621:web:0c2f1bd544c292e5c7ff3c',
};

// Initialize Firebase
// If no app running, initialize. Otherwise getApp() gets the running app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
