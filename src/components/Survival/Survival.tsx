import React from "react";
import Header from "../Header/Header";
import ModalComponent from "../Modal/Modal";
import EachSurvival from "./EachSurvival";
import "./survival.css";
const Survival: React.FC = () => {
  return (
    <div className="survival-component">
      <Header header="SURVIVAL OF THE SLICKEST" />
      <h3>
        he six different mobster families, determined by the background of your
        Crypto Keeperz. Each family is in an active rivalry with the other.
        Contract killers are unconnected to any family.
      </h3>
      <div className="survivals">
        <ModalComponent title="Threads" role="Illustration" />
        <ModalComponent title="Explore" role="Graphic Design" />
        <ModalComponent title="Finish" role="Identity" />
        <ModalComponent title="Lines" role="Branding" />
        <ModalComponent title="Southwest" role="Website Design" />
        <ModalComponent title="Window" role="Photography" />
      </div>
    </div>
  );
};

export default Survival;
