import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";

const Firebase = firebase.initializeApp({
  apiKey: "AIzaSyD3molH3iLTb41hqGmmdkQs-QgOYB1vgos",

  authDomain: "massenger-clone-27d74.firebaseapp.com",

  projectId: "massenger-clone-27d74",

  storageBucket: "massenger-clone-27d74.appspot.com",

  messagingSenderId: "325247422222",

  appId: "1:325247422222:web:398f734c2fb2e464ae515f",

  measurementId: "G-ZFW1Y9LQ9F",
});
 
    const db = Firebase.firestore();

    export default db;

    








 