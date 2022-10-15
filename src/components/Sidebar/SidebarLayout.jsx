import React from "react";
import "../../styles/SidebarLayout.scss";

const SidebarLayout = ({ Icon, text }) => {
  return (
    <div className="SidebarLayout">
      <Icon />
      <h4 className="sidebarLayout-text">{text}</h4>
    </div>
  );
};

export default SidebarLayout;
