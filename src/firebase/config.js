import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDrj1Wk7psn6udSYJDQ4ftXzC3VfL7WT2Q",
    authDomain: "olxdemo-56874.firebaseapp.com",
    projectId: "olxdemo-56874",
    storageBucket: "olxdemo-56874.appspot.com",
    messagingSenderId: "105693219241",
    appId: "1:105693219241:web:c371d69735d57fd7751cb8",
    measurementId: "G-BN78SRCF2H"
  };
export default  firebase.initializeApp(firebaseConfig)