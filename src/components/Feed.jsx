import React from "react";
import TweetBox from "./TweetBox";
import "../styles/HomeFeed.scss";

const Home = () => {
  return (
    <div className="homefeed-container">
      <TweetBox />
    </div>
  );
};

export default Home;
