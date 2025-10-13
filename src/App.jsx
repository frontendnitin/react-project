import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar/navbar";
import HomeScreen from "./Screen/HomeScreen/homeScreen";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HomeScreen />
    </div>
  );
};

export default App;
