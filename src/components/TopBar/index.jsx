import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import React from "react";
import "./topBar.css";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">BregaCode Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone className="icon" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language className="icon" />
            <span className="topIconBadge">1</span>
          </div>
          <div className="topbarIconContainer">
            <Settings className="icon" />
          </div>
          <img
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg"
            alt="avatar"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
