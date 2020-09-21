import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD_WJXNf_q_8ZVlccN4yMzM13ZLOSu6ozE",
    authDomain: "twitter-clone-abe93.firebaseapp.com",
    databaseURL: "https://twitter-clone-abe93.firebaseio.com",
    projectId: "twitter-clone-abe93",
    storageBucket: "twitter-clone-abe93.appspot.com",
    messagingSenderId: "808109990162",
    appId: "1:808109990162:web:1b19f48929b6d651ded3cb",
    measurementId: "G-YSLP6F1X2Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;