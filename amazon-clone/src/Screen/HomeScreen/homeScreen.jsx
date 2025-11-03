import React from "react";
import "./homeScreen.css";
import HomeBanner from "./HomeBanner/homeBanner";
import HomeDetails from "./HomeDetails/homeDetails";
import FeatureSection from "./FeatureSection/featureSection";
const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <HomeBanner />
      <HomeDetails />
      <FeatureSection/>
    </div>
  );
};

export default HomeScreen;
