import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDZhEt5nA-Rh-yPSaIPD9TmFfBW_pbBR1o",
    authDomain: "brannonopperman-mariopla-eb5a7.firebaseapp.com",
    databaseURL: "https://brannonopperman-mariopla-eb5a7.firebaseio.com",
    projectId: "brannonopperman-mariopla-eb5a7",
    storageBucket: "brannonopperman-mariopla-eb5a7.appspot.com",
    messagingSenderId: "517732235354",
    appId: "1:517732235354:web:d22052e2fa4a5992a24063",
    measurementId: "G-K3109MD01S"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timeStampsInSnapshots: true })

export default firebase;