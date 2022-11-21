import React, { useEffect, useState } from "react";
import { getUserData } from "../../firebase/firebase";
import "./table.css";

const table = ({ data }) => {
  console.log("data receieved in");
  console.log(data);
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(data);
    console.log("Holder is ");
    console.log(user);
  }, []);

  return (
    <div className="table">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col" style={{ minWidth: "200px" }}>
              Phone Number
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data?.map((item, key) => {
              return (
                <tr>
                  <th scope="row">{key}</th>
                  <td>{item.key}</td>
                  <td>{item.data.email}</td>
                  <td>{item.data.phoneNumber}</td>
                  <td>{item.key}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default table;
