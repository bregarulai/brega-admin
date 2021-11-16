import React from "react";
import "./user.css";

import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddBtn">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg"
              alt="user"
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Tim Medrano</span>
              <span className="userShowUserTitle">Frontend Developer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">timmedrano83</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">3.16.86</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 343 553 1283</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">timmedrano83@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Florida | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label className="userUpdateLabel">Username</label>
                <input
                  type="text"
                  placeholder="timmedrano83"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label className="userUpdateLabel">Full Name</label>
                <input
                  type="text"
                  placeholder="Tim Medrano"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label className="userUpdateLabel">Email</label>
                <input
                  type="text"
                  placeholder="timmedrano83@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label className="userUpdateLabel">Phone</label>
                <input
                  type="text"
                  placeholder="+1 343 553 1283"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label className="userUpdateLabel">Address</label>
                <input
                  type="text"
                  placeholder="Florida | USA"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg"
                  alt="user"
                  className="userUpdateImg"
                />
                <label className="userUpdateUploadLabel" htmlFor="file">
                  <Publish className="userUpdateUploadIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateBtn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
