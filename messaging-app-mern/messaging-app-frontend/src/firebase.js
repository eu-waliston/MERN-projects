import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEPqD7PH4gsx9pgPIxss0kMFrF4ugTL7w",
  authDomain: "messaging-app-mern-ac7bf.firebaseapp.com",
  projectId: "messaging-app-mern-ac7bf",
  storageBucket: "messaging-app-mern-ac7bf.appspot.com",
  messagingSenderId: "199831363185",
  appId: "1:199831363185:web:f1a0bfbcb2f837cfcbc5d0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
