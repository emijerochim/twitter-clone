import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "../styles/TweetBox.scss";

const TweetBox = () => {
  return (
    <div className="TweetBox-container">
      <div className="TweetBox-title">
        <h2>Home</h2>
      </div>
      <div className="TweetBox">
        <Avatar className="TweetBox-photo" src="/static/images/avatar/1.jpg" />
        <input type="text" placeholder="What's happening?" />
      </div>
      <div className="TweetBox-upload">
        <input type="file" />
        <button>Tweet</button>
      </div>
    </div>
  );
};

export default TweetBox;
