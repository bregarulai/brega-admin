import React from "react";
import Chart from "../../components/Chart";
import FeaturedInfo from "../../components/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";

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
    </div>
  );
};

export default Home;
