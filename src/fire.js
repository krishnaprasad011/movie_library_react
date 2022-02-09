
import  firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyB3n6x8OdorBOelGWvChJZOoLd_ByxkH_Y",
    authDomain: "movie-library-webapp.firebaseapp.com",
    projectId: "movie-library-webapp",
    storageBucket: "movie-library-webapp.appspot.com",
    messagingSenderId: "1017840259374",
    appId: "1:1017840259374:web:63ab495281d13236d16abf"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;