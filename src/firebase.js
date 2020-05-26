import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAGHQSEJZSLsQ5Nf3fQCiJVVdsJg7rBYh8",
  authDomain: "react-posts-240bd.firebaseapp.com",
  databaseURL: "https://react-posts-240bd.firebaseio.com",
  projectId: "react-posts-240bd",
  storageBucket: "react-posts-240bd.appspot.com",
  messagingSenderId: "978329547850",
  appId: "1:978329547850:web:74f573112db20e157122b3",
  measurementId: "G-9WEGCCV61Z",
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const googleAuth = new firebase.auth.GoogleAuthProvider();
export { firebaseDB, firebase, googleAuth };
