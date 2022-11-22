// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, remove } from "firebase/database";
import { useEffect, useState } from "react";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyD9nBQ52-_FeHAS9lCG6-DZmA86JuD3Nqs",
  authDomain: "firecontact-app-cd24a.firebaseapp.com",
  databaseURL:
    "https://firecontact-app-cd24a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "firecontact-app-cd24a",
  storageBucket: "firecontact-app-cd24a.appspot.com",
  messagingSenderId: "290641298717",
  appId: "1:290641298717:web:f51125a40d53590c128df4",
};

const app = initializeApp(firebaseConfig);
export default app;
// To create a new instance of a user on the database
