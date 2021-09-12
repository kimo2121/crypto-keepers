import React from "react";
import "./header.css";
import divider from "../../assets/images/divider.png";

interface headerTypes {
  header?: string;
}

const Header: React.FC<headerTypes> = ({ header }) => {
  return (
    <div className="header">
      <h2>{header}</h2>
      <img src={divider} alt="" />
    </div>
  );
};

export default Header;
