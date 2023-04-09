// firebase config key setup

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore';

// Apps firebase config

const firebaseConfig = {
    apiKey: "AIzaSyBnH8J9yQkIuCH4FXKuiZFEMoggyO_PG-c",
  authDomain: "billbuster-69970.firebaseapp.com",
  projectId: "billbuster-69970",
  storageBucket: "billbuster-69970.appspot.com",
  messagingSenderId: "156722513965",
  appId: "1:156722513965:web:5100620bbc5bf0d9ead0a4",
  measurementId: "G-J54MTDQ870"
};



if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
const db = getFirestore();
export { firebase };

//export const db = getFirestore(app);
