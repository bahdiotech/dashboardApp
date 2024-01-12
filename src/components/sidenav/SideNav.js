import React from "react";
import "./SideNav.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Person,
  Paid,
  Assessment,
  Inventory,
  Email,
  Grading,
  ChatBubble,
  ManageAccounts,
  Analytics,
  Report
} from "@mui/icons-material";

export default function SideNav() {
  return (
    <div className="sideNavContainer">
      <div className="sideNavWrapper">
        <div className="sideNavMenu">
          <h3 className="sideNavTitle">Dashboard</h3>
          <ul className="sideNavList">
            <li className="sideNavListItem">
              <LineStyle className="sideNavIcon" />
              Home
            </li>
            <li className="sideNavListItem">
              <Timeline className="sideNavIcon" />
              Analytics
            </li>
            <li className="sideNavListItem">
              <TrendingUp className="sideNavIcon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sideNavMenu">
          <h3 className="sideNavTitle">Admin Menu</h3>
          <ul className="sideNavList">
            <li className="sideNavListItem">
              <Person className="sideNavIcon" />
              Users
            </li>
            <li className="sideNavListItem">
              <Paid className="sideNavIcon" />
              Product
            </li>
            <li className="sideNavListItem">
              <Assessment className="sideNavIcon" />
              Report
            </li>
            <li className="sideNavListItem">
              <Inventory className="sideNavIcon" />
              Transactions
            </li>
          </ul>
        </div>

        <div className="sideNavMenu">
          <h3 className="sideNavTitle">Notifications</h3>
          <ul className="sideNavList">
            <li className="sideNavListItem">
              <Email className="sideNavIcon" />
              Email
            </li>
            <li className="sideNavListItem">
              <ChatBubble className="sideNavIcon" />
              Messages
            </li>
            <li className="sideNavListItem">
              <Grading className="sideNavIcon" />
              Manage
            </li>
          </ul>
        </div>

        <div className="sideNavMenu">
          <h3 className="sideNavTitle">Our Staffs</h3>
          <ul className="sideNavList">
            <li className="sideNavListItem">
              <ManageAccounts className="sideNavIcon" />
              Manage
            </li>
            <li className="sideNavListItem">
              <Analytics className="sideNavIcon" />
              Analytics
            </li>
            <li className="sideNavListItem">
              <Report className="sideNavIcon" />
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
