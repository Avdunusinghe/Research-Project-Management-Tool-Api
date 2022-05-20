import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDumBkCNSX0uOk3lrFCqJyTgdQyRX0U2Dg",
  authDomain: "rpmt-af.firebaseapp.com",
  projectId: "rpmt-af",
  storageBucket: "rpmt-af.appspot.com",
  messagingSenderId: "402204375715",
  appId: "1:402204375715:web:af9d715a9772b570b05d16",
  measurementId: "G-TWGXF0CJDT",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
