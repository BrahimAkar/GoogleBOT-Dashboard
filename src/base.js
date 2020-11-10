import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAWhF3tiOLSTPHzXxNIFQHyn_PeUZQtvTM",
  authDomain: "reactloginyoupel.firebaseapp.com",
  databaseURL: "https://reactloginyoupel.firebaseio.com",
  projectId: "reactloginyoupel",
  storageBucket: "reactloginyoupel.appspot.com",
  messagingSenderId: "81318484155",
  appId: "1:81318484155:web:36ed0f093a38cffee0719e"
});

export default app;
