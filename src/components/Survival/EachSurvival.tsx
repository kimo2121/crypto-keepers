import React from "react";
import "./survival.css";

import { AiOutlinePlus } from "react-icons/ai";
interface survivalTypes {
  title?: string;
  role?: string;
  onClickFun?: any;
}

const EachSurvival: React.FC<survivalTypes> = ({ onClickFun, title, role }) => {
  return (
    <div className="each-survival">
      <div className="img-container">
        <div onClick={() => onClickFun()} className="inner-img">
          <AiOutlinePlus />
        </div>
      </div>
      <div className="each-survival-detail">
        <h4>{title}</h4>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default EachSurvival;
