import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCmPKRLCiK-cUgix8bNB_zZBtFK9Nfhbuo",
  authDomain: "reactlogin-6b109.firebaseapp.com",
  databaseURL: "https://reactlogin-6b109.firebaseio.com",
  projectId: "reactlogin-6b109",
  storageBucket: "reactlogin-6b109.appspot.com",
  messagingSenderId: "646346926133",
  appId: "1:646346926133:web:688774cd74b5368731e97c",
});

export default app;
