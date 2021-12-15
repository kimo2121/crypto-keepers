import React from "react";
import About from "../../components/About/About";
import CustomizedAccordions from "../../components/FAQ/FAQ";
import Mint from "../../components/Mint/Mint";
import RoadMap from "../../components/RoadMap/RoadMap";
import Team from "../../components/Team/Team";

import "./home.css";

const Home: React.FC = () => {
  return (
    <div id="Home" className="home">
      <div className="banner">
        <div className="banner-inner">
          <h2>Welcome To The</h2>
          <h1>CRYPTO KEEPERZ CLUB</h1>
          <button className="banner-btn">ABOUT CRYPTO KEEPERZ CLUB</button>
        </div>
      </div>
      <About />
      <Mint />
      {/* <Survival /> */}
      <RoadMap />
      <Team />
      <CustomizedAccordions />
    </div>
  );
};

export default Home;
