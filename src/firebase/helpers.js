import { getDatabase, onValue, ref, remove, set } from "firebase/database";
import { useEffect, useState } from "react";
import app from "./firebase";

export const writeUserData = (name, email, phoneNumber) => {
  const db = getDatabase(app);
  const reference = ref(db, "users/" + name);
  set(reference, {
    username: name,
    email: email,
    phoneNumber: phoneNumber,
  });
};

// To read the data from the database
const getUserData = () => {
  const [newArray, setNewArray] = useState([]);

  const db = getDatabase(app);

  let flip = 0;
  flip = flip + 1;
  useEffect(() => {
    console.log("Inside the use Effect");
    const dbRef = ref(db, "users/");
    let records = [];
    onValue(dbRef, (snapshot) => {
      snapshot.forEach((item) => {
        let keyName = item.key;
        let data = item.val();
        records.push({ key: keyName, data: data });
      });
      setNewArray(records);
    });
  }, [flip]);
  console.log(newArray);
  return { newArray };
};

// To delete the data from the database
export const deleteData = (id) => {
  const db = getDatabase(app);
  remove(ref(db, `/users/${id}`));
};
export default getUserData;
