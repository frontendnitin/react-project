import React from "react";
import "./homeScreen.css";
import HomeBanner from "./HomeBanner/homeBanner";
import HomeDetails from "./HomeDetails/homeDetails";
import FeatureSection from "./FeatureSection/featureSection";
import VideoScrollSection from "./VideoScrollSection/videoScrollSection";
const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <HomeBanner />
      <HomeDetails />
      <FeatureSection />
      <VideoScrollSection />
    </div>
  );
};

export default HomeScreen;
