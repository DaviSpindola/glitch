import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBHidHXbMnBP-H92Q0mxVoQLyIJx22JnLQ",
  authDomain: "tuiter-ef953.firebaseapp.com",
  databaseURL: "https://tuiter-ef953.firebaseio.com",
  projectId: "tuiter-ef953",
  storageBucket: "tuiter-ef953.appspot.com",
  messagingSenderId: "1015737797214"
};

if (firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

const fs = firebase.firestore();

export { auth, fs };
