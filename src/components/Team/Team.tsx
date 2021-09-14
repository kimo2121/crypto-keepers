import React from "react";
import Header from "../Header/Header";
import "./team.css";
import first from "../../assets/images/1.jpg";
import second from "../../assets/images/2.jpg";
import third from "../../assets/images/3.jpg";
const Team: React.FC = () => {
  return (
    <div id="Team" className="team">
      <Header header="OUR AMAZING TEAM" />
      <div className="members">
        <div className="each-member">
          <img src={first} alt="" />
          <span>(@crypto_keeperA)</span>
          <p>Co-founder</p>
        </div>
        <div className="each-member">
          <img src={second} alt="" />
          <span>(@cryptokeeperzT)</span>
          <p>Co-founder</p>
        </div>
        <div className="each-member">
          <img src={third} alt="" />
          <span>(@cryptokeeperK)</span>
          <p>Co-founder</p>
        </div>
      </div>
      <p className="team-parag">
        Our team are here for the Crypto Keeperz community. Please feel free to
        any of the team with any questions regarding the project via Twitter or
        Discord
      </p>
    </div>
  );
};

export default Team;
