
import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDJejYoJ70KdxkIYZFZq_cN1qIXLqsCdhA",
    authDomain: "resumemaker-e46cc.firebaseapp.com",
    projectId: "resumemaker-e46cc",
    storageBucket: "resumemaker-e46cc.appspot.com",
    messagingSenderId: "416465172218",
    appId: "1:416465172218:web:5e17b0b4b68b99f7543b43"
  };
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore()

  