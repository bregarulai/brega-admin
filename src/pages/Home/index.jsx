import React from "react";
import Chart from "../../components/Chart";
import FeaturedInfo from "../../components/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/WidgetSm";
import WidgetLg from "../../components/WidgetLg";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        title="User Analytics"
        data={userData}
        dataKey="Active User"
        grid
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
