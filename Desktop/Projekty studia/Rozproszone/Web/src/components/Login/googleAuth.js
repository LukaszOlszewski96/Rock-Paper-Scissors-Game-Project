import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore";
import "firebase/storage";

const settings = {timestampsInSnapshots: true};

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC-Lht-4aSuo0iTKpioQnZzwyJLcvrasKk",
    authDomain: "szkolenia-automatyka.firebaseapp.com",
    projectId: "szkolenia-automatyka",
    storageBucket: "szkolenia-automatyka.appspot.com",
    messagingSenderId: "589793257156",
    appId: "1:589793257156:web:dca9a6d87db80a05e38b91",
    measurementId: "G-8ZGRW1XJ32"
  };

  var firebaseApp =  firebase.initializeApp(firebaseConfig);
  var db = firebaseApp.firestore();
  var storage = firebase.storage();

  export const auth = firebase.auth;

  export const provider = new firebase.auth.FacebookAuthProvider();
  export { db };
  
export default firebase;