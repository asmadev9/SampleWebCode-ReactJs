import * as firebase from 'firebase';
import '@firebase/firestore'
// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD7reK7u8k5KsAmndrcUdnR1LFEe8pi2PE",
    authDomain: "robot-traders-dev.firebaseapp.com",
    databaseURL: "https://robot-traders-dev.firebaseio.com",
    projectId: "robot-traders-dev",
    storageBucket: "robot-traders-dev.appspot.com",
    messagingSenderId: "76374836389",
    appId: "1:76374836389:web:2e4bc574d9f92cf8"
};
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

export default firebase