import firebase from "firebase";


  // Your web app's Firebase configuration
  const firebaseConfig = {
        apiKey: "AIzaSyArdD3tzeevWbtPx44NRGzuezrZbRkeRlc",
        authDomain: "oneques-quiz.firebaseapp.com",
        databaseURL: "https://oneques-quiz.firebaseio.com",
        projectId: "oneques-quiz",
        storageBucket: "oneques-quiz.appspot.com",
        messagingSenderId: "41072226660",
        appId: "1:41072226660:web:a875bc8038f6a7651f8a71"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const providers = {
    google: new firebase.auth.GoogleAuthProvider(),
    // facebook: new firebase.auth.GoogleAuthProvider()
}


export const firestore = firebase.firestore();

export default firebase;


