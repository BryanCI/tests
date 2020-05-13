import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3nP05YnMOXtni_tVYshW25YqBcCa0oJs",
  authDomain: "travelmantics-46fed.firebaseapp.com",
  databaseURL: "https://travelmantics-46fed.firebaseio.com",
  projectId: "travelmantics-46fed",
  storageBucket: "travelmantics-46fed.appspot.com",
  messagingSenderId: "465265385075",
  appId: "1:465265385075:web:97d9a275ff341d767c5406",
  measurementId: "G-0QNM83FW8S",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default { db, firebase };
