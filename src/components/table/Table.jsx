import React, { useState } from "react";
import "./table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteData } from "../../firebase/helpers";
import getUserData from "../../firebase/helpers";

const table = ({ data }) => {
  console.log("data receieved in");
  console.log(data);

  const { newArray } = getUserData();

  function handleDelete(id) {
    deleteData(id);
    getUserData();
  }

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
          {newArray &&
            newArray?.map((item, key) => {
              return (
                <tr key={key}>
                  <th scope="row">{key}</th>
                  <td>{item.key}</td>
                  <td>{item.data.email}</td>
                  <td>{item.data.phoneNumber}</td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(item.key)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default table;
