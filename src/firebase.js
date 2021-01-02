// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDc8HygVWZSif7AyibOYuw4m3fgXjIoqmA",
    authDomain: "tiktok-f7eb7.firebaseapp.com",
    projectId: "tiktok-f7eb7",
    storageBucket: "tiktok-f7eb7.appspot.com",
    messagingSenderId: "342629381642",
    appId: "1:342629381642:web:e31adf1211de4f9f6751f3",
    measurementId: "G-B6WZKTWXS8"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  export default db;