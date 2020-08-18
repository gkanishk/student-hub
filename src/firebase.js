import firebase from 'firebase/firebase';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCfewKlgZKtMIjO8Ip135-z1DkYl69J1kI",
    authDomain: "student-hub-gkanishk.firebaseapp.com",
    databaseURL: "https://student-hub-gkanishk.firebaseio.com",
    projectId: "student-hub-gkanishk",
    storageBucket: "student-hub-gkanishk.appspot.com",
    messagingSenderId: "764440573048",
    appId: "1:764440573048:web:696e8a1be509029e60e98d",
    measurementId: "G-C4RGQNGH38"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
// const db=firebase.firestore();
// db.settings({timestampsInSnapshots:true});
export default firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();