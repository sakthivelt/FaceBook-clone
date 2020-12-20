import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCO9llchXZIA9SpxaI_S5poX1MPWfHo3Dk",
  authDomain: "facebook-clone-299ce.firebaseapp.com",
  projectId: "facebook-clone-299ce",
  storageBucket: "facebook-clone-299ce.appspot.com",
  messagingSenderId: "759072379014",
  appId: "1:759072379014:web:7ed60ef649f8bb14ca4107",
  measurementId: "G-175J4QWMR1"
};

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;