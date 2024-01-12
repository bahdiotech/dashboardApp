import { Visibility } from "@mui/icons-material";
import "./memberWidget.css";
import React from "react";
// import bard from '../../photos/bard.jpg';

export default function MemberWidgets() {
  return (
    <div className="memberWidgetContainer">
      <span className="membersWidgetTitle">Newly Joined member</span>
      <ul className="memberWidgetList">
        <li className="membersWidgetListItem">
          <img
            src="images/bard.jpg"
            width={40}
            alt="internet issue"
            className="widgetImg"
          />
          <div className="memberWidgetUser">
            <span className="memberWidgetUsername">Adeniran Gbohunmi</span>
            <span className="memberWidgetUserTitle">React Dev</span>
          </div>
          <button className="memberWidgetButton">
            <Visibility className="memberWidgetIcon" />
            Display
          </button>
        </li>
        <li className="membersWidgetListItem">
          <img
            src="images/dasola.jpg"
            width={40}
            alt="internet issue"
            className="widgetImg"
          />
          <div className="memberWidgetUser">
            <span className="memberWidgetUsername">Adesina Dasola</span>
            <span className="memberWidgetUserTitle">UI/UX designer</span>
          </div>
          <button className="memberWidgetButton">
            <Visibility className="memberWidgetIcon" />
            Display
          </button>
        </li>
        
        <li className="membersWidgetListItem">
          <img
            src="images/bard.jpg"
            width={40}
            alt="internet issue"
            className="widgetImg"
          />
          <div className="memberWidgetUser">
            <span className="memberWidgetUsername">Adeniran Gbohunmi</span>
            <span className="memberWidgetUserTitle">Python Developer</span>
          </div>
          <button className="memberWidgetButton">
            <Visibility className="memberWidgetIcon" />
            Display
          </button>
        </li><li className="membersWidgetListItem">
          <img
            src="images/OmariLesile.jpg"
            width={40}
            alt="internet issue"
            className="widgetImg"
          />
          <div className="memberWidgetUser">
            <span className="memberWidgetUsername">Omari Lesile</span>
            <span className="memberWidgetUserTitle">Flutter Developer</span>
          </div>
          <button className="memberWidgetButton">
            <Visibility className="memberWidgetIcon" />
            Display
          </button>
        </li>
        <li className="membersWidgetListItem">
          <img
            src="images/bard.jpg"
            width={40}
            alt="internet issue"
            className="widgetImg"
          />
          <div className="memberWidgetUser">
            <span className="memberWidgetUsername">Adeniran Gbohunmi</span>
            <span className="memberWidgetUserTitle">software Engineer</span>
          </div>
          <button className="memberWidgetButton">
            <Visibility className="memberWidgetIcon" />
            Display
          </button>
        </li>
        <li className="membersWidgetListItem">
          <img
            src="images/bard.jpg"
            width={40}
            alt="internet issue"
            className="widgetImg"
          />
          <div className="memberWidgetUser">
            <span className="memberWidgetUsername">Adeniran Gbohunmi</span>
            <span className="memberWidgetUserTitle">software Engineer</span>
          </div>
          <button className="memberWidgetButton">
            <Visibility className="memberWidgetIcon" />
            Display
          </button>
        </li>
        <li className="membersWidgetListItem">
          <img
            src="images/bard.jpg"
            width={40}
            alt="internet issue"
            className="widgetImg"
          />
          <div className="memberWidgetUser">
            <span className="memberWidgetUsername">Adeniran Gbohunmi</span>
            <span className="memberWidgetUserTitle">software Engineer</span>
          </div>
          <button className="memberWidgetButton">
            <Visibility className="memberWidgetIcon" />
            Display
          </button>
        </li>
        <li className="membersWidgetListItem">
          <img
            src="images/bard.jpg"
            width={40}
            alt="internet issue"
            className="widgetImg"
          />
          <div className="memberWidgetUser">
            <span className="memberWidgetUsername">Adeniran Gbohunmi</span>
            <span className="memberWidgetUserTitle">software Engineer</span>
          </div>
          <button className="memberWidgetButton">
            <Visibility className="memberWidgetIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
