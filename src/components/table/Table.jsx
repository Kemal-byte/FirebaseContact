import React from "react";
import "./table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteData } from "../../firebase/firebase";

const table = ({ data }) => {
  console.log("data receieved in");
  console.log(data);

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
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteData(item.key)}
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
