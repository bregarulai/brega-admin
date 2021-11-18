import React from "react";
import "./newUser.css";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserFormItem">
          <label className="newUserFormLabel">Username</label>
          <input
            type="text"
            placeholder="mike222"
            className="newUserFormInput"
          />
        </div>
        <div className="newUserFormItem">
          <label className="newUserFormLabel">Full Name</label>
          <input
            type="text"
            placeholder="Mike Trout"
            className="newUserFormInput"
          />
        </div>
        <div className="newUserFormItem">
          <label className="newUserFormLabel">Email</label>
          <input
            type="email"
            placeholder="mike222@gmail.com"
            className="newUserFormInput"
          />
        </div>
        <div className="newUserFormItem">
          <label className="newUserFormLabel">Password</label>
          <input type="password" className="newUserFormInput" />
        </div>
        <div className="newUserFormItem">
          <label className="newUserFormLabel">Phone</label>
          <input
            type="text"
            placeholder="+1 234 642 2364"
            className="newUserFormInput"
          />
        </div>
        <div className="newUserFormItem">
          <label className="newUserFormLabel">Address</label>
          <input
            type="text"
            placeholder="New York | USA"
            className="newUserFormInput"
          />
        </div>
        <div className="newUserFormItem">
          <label className="newUserFormLabel">Gender</label>
          <div className="newUserGender">
            <div className="newUserGenderContainer">
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                className=" newUserFormInputRadio"
              />
              <label className="newUserFormLabel-radio" for="male">
                Male
              </label>
            </div>
            <div className="newUserGenderContainer">
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                className=" newUserFormInputRadio"
              />
              <label className="newUserFormLabel-radio" for="female">
                Female
              </label>
            </div>
            <div className="newUserGenderContainer">
              <input
                type="radio"
                name="gender"
                id="other"
                value="other"
                className=" newUserFormInputRadio"
              />
              <label className="newUserFormLabel-radio" for="other">
                Other
              </label>
            </div>
          </div>
        </div>
        <div className="newUserFormItem">
          <label className="newUserFormLabel">Active</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes" className="newUserSelectOption">
              Yes
            </option>
            <option value="no" className="newUserSelectOption">
              No
            </option>
          </select>
        </div>
        <div className="newUserBtnContainer">
          <button className="newUserBtn">Create</button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
