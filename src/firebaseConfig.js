import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC8fZ-dAccuDh0dSd5YePY7q8hkl0sJznw",
    authDomain: "interesting-blog.firebaseapp.com",
    projectId: "interesting-blog",
    storageBucket: "interesting-blog.appspot.com",
    messagingSenderId: "265305530578",
    appId: "1:265305530578:web:1476b947a9f49fe772cd0b"
  };

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)