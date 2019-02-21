import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDHo6VWy-WRYRFb8SBL7BMHjlo7mj1rHI4",
  authDomain: "project-planer-8d7d7.firebaseapp.com",
  databaseURL: "https://project-planer-8d7d7.firebaseio.com",
  projectId: "project-planer-8d7d7",
  storageBucket: "project-planer-8d7d7.appspot.com",
  messagingSenderId: "897259823180"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;