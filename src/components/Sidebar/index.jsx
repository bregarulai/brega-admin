import {
  AttachMoney,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@mui/icons-material";
import React from "react";
import "./sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              <span className="sidebarListItemText ">Home</span>
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon " />
              <span className="sidebarListItemText">Analitycs</span>
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon " />
              <span className="sidebarListItemText">Sales</span>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PermIdentity className="sidebarIcon" />
              <span className="sidebarListItemText ">Users</span>
            </li>
            <li className="sidebarListItem">
              <Storefront className="sidebarIcon " />
              <span className="sidebarListItemText">Products</span>
            </li>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon " />
              <span className="sidebarListItemText">Transactions</span>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              <span className="sidebarListItemText ">Mail</span>
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon " />
              <span className="sidebarListItemText">Feedback</span>
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon " />
              <span className="sidebarListItemText">Messages</span>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              <span className="sidebarListItemText ">Manage</span>
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon " />
              <span className="sidebarListItemText">Analitycs</span>
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon " />
              <span className="sidebarListItemText">Report</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
