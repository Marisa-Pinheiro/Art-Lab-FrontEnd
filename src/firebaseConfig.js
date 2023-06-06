import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const config = { //Hide in .env all the keys need to start with VITE_
  apiKey: "AIzaSyBtwVC-0ytibERblAvvE0XJzh4awxtnyqI",
  authDomain: "project-3-ironhack-social-auth.firebaseapp.com",
  projectId: "project-3-ironhack-social-auth",
  storageBucket: "project-3-ironhack-social-auth.appspot.com",
  messagingSenderId: "549579299191",
  appId: "1:549579299191:web:b385dd93dc4c1605722972",
  measurementId: "G-18F6EWECZB",
};
if (!firebase.apps.length){
    firebase.initializeApp(config)
}
export default firebase