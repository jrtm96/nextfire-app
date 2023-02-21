import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCytzZUe_lv1aZZ1uRY5Q1vBBfLYYmKegc",
    authDomain: "nextfire-dd265.firebaseapp.com",
    projectId: "nextfire-dd265",
    storageBucket: "nextfire-dd265.appspot.com",
    messagingSenderId: "177492185721",
    appId: "1:177492185721:web:08f6de585c3a644a1b7aa8",
    measurementId: "G-XQYTPNKB3F"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const storage = firebase.storage();