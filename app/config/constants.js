import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyC0XHA9PQpDZTQ9-eVsQ-PWuIZuDZQoxXc",
    authDomain: "dt-jobs.firebaseapp.com",
    databaseURL: "https://dt-jobs.firebaseio.com",
    storageBucket: "dt-jobs.appspot.com",
    messagingSenderId: "315418480941"
  };
firebase.initializeApp(config);
// ref is the root of firebase, allow us to access to firebase db
export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
