

import firebase from "firebase";
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyDmrxOBFYz03dtOOocHDSlE-QzvLBMq5hk",
  authDomain: "login-7814e.firebaseapp.com",
  databaseURL: "https://login-7814e-default-rtdb.firebaseio.com",
  projectId: "login-7814e",
  storageBucket: "login-7814e.appspot.com",
  messagingSenderId: "403435485238",
  appId: "1:403435485238:web:3e1b2894ce8d7e6a70c097"
};


firebase.initializeApp(firebaseConfig);
const database = firebase.firestore()
export default database

