import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBah5wqc4_JCJaxp5B9hh6kkdep-xuMmvA",
  authDomain: "teaching-project-a8687.firebaseapp.com",
  projectId: "teaching-project-a8687",
  storageBucket: "teaching-project-a8687.appspot.com",
  messagingSenderId: "407923473378",
  appId: "1:407923473378:web:7302d148ad8642d48817bb",
  measurementId: "G-50VSJY8P33"
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}
