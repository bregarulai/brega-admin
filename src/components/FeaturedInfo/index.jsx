import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import React from "react";
import "./featuredInfo.css";

const FeaturedInfo = () => {
  return (
    <div className="featureInfo">
      <div className="featuredInfoItem">
        <span className="featuredInfoTitle">Revenue</span>
        <div className="featuredInfoMoneyContainer">
          <span className="featuredInfoMoney">$2,349</span>
          <span className="featuredInfoMoneyRate">
            -15.3 <ArrowDownward className="featuredInfoIcon negative" />
          </span>
        </div>
        <span className="featuredInfoSubTitle">Compared to las month</span>
      </div>
      <div className="featuredInfoItem">
        <span className="featuredInfoTitle">Sales</span>
        <div className="featuredInfoMoneyContainer">
          <span className="featuredInfoMoney">$1,349</span>
          <span className="featuredInfoMoneyRate">
            -8.3 <ArrowDownward className="featuredInfoIcon negative" />
          </span>
        </div>
        <span className="featuredInfoSubTitle">Compared to las month</span>
      </div>
      <div className="featuredInfoItem">
        <span className="featuredInfoTitle">Cost</span>
        <div className="featuredInfoMoneyContainer">
          <span className="featuredInfoMoney">$6,349</span>
          <span className="featuredInfoMoneyRate">
            +2.3 <ArrowUpward className="featuredInfoIcon positive" />
          </span>
        </div>
        <span className="featuredInfoSubTitle">Compared to las month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
