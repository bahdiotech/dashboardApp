import "./topNav.css";
import React, { useState } from "react";

import {
  NotificationsNone,
  Language,
  Settings,
  ChatBubble,
  AccountCircle,
  DriveFileRenameOutline,
  InsertPhoto,
  Logout,
  QuestionMark,
  ContactSupport,
  Login,
} from "@mui/icons-material";

function TopNav() {
  const [toggle, setToggle] = useState(false);
  const [login, setLogin] = useState(false);

  const profile = (
    <div className="profile">
      <ul className="profileList">
        {login && <li><InsertPhoto className="profIcon" /> Change photo</li>
        }
        {login && <li> <Settings className="profIcon" /> settings</li>
        }
        {login && <li><DriveFileRenameOutline className="profIcon" /> Change name</li>}
        <li><AccountCircle className="profIcon" /> Add account</li>
        <li><QuestionMark className="profIcon" /> Help</li>
        <li><ContactSupport className="profIcon" /> Contact support</li>
        {login ? <li> <Logout onClick={() => setLogin(false)} className="profIcon" /> Log Out</li> : <li><Login onClick={() => setLogin(true)} className="profIcon" /> Log In</li>}

      </ul>
    </div>
  );


  return (
    <div className="topNavContainer">
      <div className="topNavWrapper">
        <div className="topLeft">
          <span className="logo">AdminDash</span>
        </div>
        <div className="topRight">
          <div className="topNavIconContainer">
            <NotificationsNone className="topNavIcon" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topNavIconContainer">
            <Language className="topNavIcon" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topNavIconContainer">
            <Settings className="topNavIcon" />
            <span className="topIconBadge">3</span>
          </div>
          <div className="topNavIconContainer">
            <ChatBubble className="topNavIcon" />
            <span className="topIconBadge">2</span>
          </div>
          <img
            src="https://res.cloudinary.com/dodm9xkaz/image/upload/c_scale,h_400,w_330/DashBoard/TopNav/iriiyfzwcjnteerwr5bb.jpg"
            alt="Ab-Bard"
            className="adminImg"
            onClick={() => setToggle(!toggle)}
          />
          {toggle && profile}
        </div>
        {
          toggle && <div onClick={() => setToggle(!toggle)} className="cover">{''}</div>
        }


      </div>
    </div>
  );
}

export default TopNav;
