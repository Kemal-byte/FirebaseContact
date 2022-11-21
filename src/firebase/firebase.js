// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

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
const db = getDatabase();

export default function writeUserData(name, email, phoneNumber) {
  const reference = ref(db, "users/" + name);
  set(reference, {
    username: name,
    email: email,
    phoneNumber: phoneNumber,
  });
}
export function getUserData(setData) {
  const dbRef = ref(db, "users/");
  let records = [];
  onValue(dbRef, (snapshot) => {
    snapshot.forEach((item) => {
      let keyName = item.key;
      let data = item.val();
      records.push({ key: keyName, data: data });
    });
    setData(records);
    return records;
  });
}
