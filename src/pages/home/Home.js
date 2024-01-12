import React from "react";
import "./Home.css";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import DisplayTotal from "../../components/displaytotal/DisplayTotal";
import OrderWidget from "../../components/orderwidget/OrderWidget";
import MemberWidgets from "../../components/memberWidget/MemberWidgets";
import UserList from "../userList/UserList";

export default function Home() {
  return (
    <div className="homeContainer">
      <Featured />
      <div className="chartAnalyticWidget">
        <Chart />
        <DisplayTotal />
      </div>
      <div className="orderAndMemberWidget">
          <OrderWidget />
          <MemberWidgets />
        </div>
      <UserList />
    </div>
  );
}
