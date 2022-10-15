import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed";
import Trends from "./Trends";
import "../styles/Home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <Feed />
      <Trends />
    </div>
  );
};

export default Home;
