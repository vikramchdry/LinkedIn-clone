import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAy8qv2emdqdagA2tZWsIUKcQRqfYlkh3U",
    authDomain: "linkedin-clone-94afd.firebaseapp.com",
    projectId: "linkedin-clone-94afd",
    storageBucket: "linkedin-clone-94afd.appspot.com",
    messagingSenderId: "1031666458952",
    appId: "1:1031666458952:web:9ce4f005239ea6bf85137d",
    measurementId: "G-BKXX8ETDL4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };