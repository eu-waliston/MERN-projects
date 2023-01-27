// // import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/storage';
// import 'firebase/database';
// import 'firebase/firestore';
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyCEPqD7PH4gsx9pgPIxss0kMFrF4ugTL7w",
  authDomain: "messaging-app-mern-ac7bf.firebaseapp.com",
  projectId: "messaging-app-mern-ac7bf",
  storageBucket: "messaging-app-mern-ac7bf.appspot.com",
  messagingSenderId: "199831363185",
  appId: "1:199831363185:web:f1a0bfbcb2f837cfcbc5d0"
};

// Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore()
// const auth = firebase.auth()
// const provider = new firebase.auth.GoogleAuthProvider()

// export { auth, provider }
// export default db