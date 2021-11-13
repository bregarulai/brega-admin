import React from "react";
import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/6652928/pexels-photo-6652928.jpeg?cs=srgb&dl=pexels-sinitta-leunen-6652928.jpg&fm=jpg"
            alt="user"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Mike Keller</span>
            <span className="widgetSmUserJobTitle">Software Engineer</span>
          </div>
          <button className="widgetSmBtn">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?cs=srgb&dl=pexels-anastasia-shuraeva-5704849.jpg&fm=jpg"
            alt="user"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Ann Smith</span>
            <span className="widgetSmUserJobTitle">Frontend Developer</span>
          </div>
          <button className="widgetSmBtn">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
            alt="user"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Sam Castle</span>
            <span className="widgetSmUserJobTitle">Database Admin</span>
          </div>
          <button className="widgetSmBtn">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?cs=srgb&dl=pexels-ali-pazani-2787341.jpg&fm=jpg"
            alt="user"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Karina Jones</span>
            <span className="widgetSmUserJobTitle">UI Designer</span>
          </div>
          <button className="widgetSmBtn">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg"
            alt="user"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Justin Hammer</span>
            <span className="widgetSmUserJobTitle">Project Manager</span>
          </div>
          <button className="widgetSmBtn">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
