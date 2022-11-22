import React, { useEffect, useState } from "react";
import { writeUserData } from "../../firebase/helpers";
import getUserData from "../../firebase/helpers";
import "./form.css";

const form = ({ data, setData }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  function handleInput(event) {
    const { name, value } = event.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    writeUserData(user.name, user.email, user.phoneNumber);
    getUserData();
    console.log(user);
  }
  console.log(data);
  return (
    <div className="form">
      <div className="form-body">
        <div className="row">
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <h3>Add Contact</h3>
                <p>Fill in the data below.</p>
                <form
                  className="requires-validation"
                  noValidate=""
                  onSubmit={handleSubmit}
                >
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      onChange={handleInput}
                      required
                    />
                    <div className="valid-feedback">
                      Username field is valid!
                    </div>
                    <div className="invalid-feedback">
                      Username field cannot be blank!
                    </div>
                  </div>
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="E-mail Address"
                      onChange={handleInput}
                      required
                    />
                    <div className="valid-feedback">Email field is valid!</div>
                    <div className="invalid-feedback">
                      Email field cannot be blank!
                    </div>
                  </div>

                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      onChange={handleInput}
                      required
                    />
                    <div className="valid-feedback">Phone Number is valid!</div>
                    <div className="invalid-feedback">
                      Phone Number cannot be blank!
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <label className="mb-3 mr-1" htmlFor="gender">
                      Gender:{" "}
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="gender"
                      id="male"
                      autoComplete="off"
                      onChange={handleInput}
                      required
                    />
                    <label
                      className="btn btn-sm btn-outline-secondary"
                      htmlFor="male"
                    >
                      Male
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="gender"
                      id="female"
                      autoComplete="off"
                      required
                    />
                    <label
                      className="btn btn-sm btn-outline-secondary"
                      htmlFor="female"
                    >
                      Female
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="gender"
                      id="secret"
                      autoComplete="off"
                      required
                    />
                    <label
                      className="btn btn-sm btn-outline-secondary"
                      htmlFor="secret"
                    >
                      Secret
                    </label>
                    <div className="valid-feedback mv-up">
                      You selected a gender!
                    </div>
                    <div className="invalid-feedback mv-up">
                      Please select a gender!
                    </div>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="invalidCheck"
                      required
                    />
                    <label className="form-check-label">
                      I confirm that all data are correct
                    </label>
                    <div className="invalid-feedback">
                      Please confirm that the entered data are all correct!
                    </div>
                  </div>
                  <div className="form-button mt-3">
                    <button
                      id="submit"
                      type="submit"
                      className="btn btn-primary"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default form;
