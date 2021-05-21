import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzDhPni98qLkDomwfJKbJyC6sEPhjQmDA",
  authDomain: "book-santa2-c1b1e.firebaseapp.com",
  projectId: "book-santa2-c1b1e",
  storageBucket: "book-santa2-c1b1e.appspot.com",
  messagingSenderId: "522448184558",
  appId: "1:522448184558:web:23303396d15259b1e5ffff"
  };
firebase.initializeApp(firebaseConfig);
export default firebase.firestore()