import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD5eXx0BWOkbiV_m1XS3-gS-yrvndpnxLQ",
    authDomain: "entregareact-5df1a.firebaseapp.com",
    projectId: "entregareact-5df1a",
    storageBucket: "entregareact-5df1a.appspot.com",
    messagingSenderId: "766726462042",
    appId: "1:766726462042:web:056b2e8ddab18e694c9663"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);