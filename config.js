import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBYswgYs6K-lgyM9yk7tlXSW_C3ZWtVwbc",
    authDomain: "barter-system-19be4.firebaseapp.com",
    projectId: "barter-system-19be4",
    storageBucket: "barter-system-19be4.appspot.com",
    messagingSenderId: "59619704397",
    appId: "1:59619704397:web:ec1d14b57994d2eeb4e604",
    measurementId: "G-FWN3XMRQDM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();