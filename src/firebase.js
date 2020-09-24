import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCMbkN1e_WZmGos9t_t06rOBGisFKEF-ro",
    authDomain: "atomicstructurethahir-1998.firebaseapp.com",
    databaseURL: "https://atomicstructurethahir-1998.firebaseio.com",
    projectId: "atomicstructurethahir-1998",
    storageBucket: "atomicstructurethahir-1998.appspot.com",
    messagingSenderId: "338843739498",
    appId: "1:338843739498:web:bbec36c9ea7fbd617a7113",
    measurementId: "G-ECMEKQWFJ0"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };