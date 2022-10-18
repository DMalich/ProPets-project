import firebase from "firebase/compat/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCIMgOW80jXw1BQX19uIeAiDoUP3YdR8oI",
  authDomain: "pro-pets-project.firebaseapp.com",
  projectId: "pro-pets-project",
  storageBucket: "pro-pets-project.appspot.com",
  messagingSenderId: "499688674262",
  appId: "1:499688674262:web:b5a8934fe41eaa2daa0a77",
};

export const fb = firebase.initializeApp(firebaseConfig);
