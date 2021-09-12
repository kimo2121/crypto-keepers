import React from "react";
import "./footer.css";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="inner-div">
        <h4>Copyright © Your Website 2021</h4>
        <div className="footer-external">
          <a className="twitter" href="/">
            <FaTwitter />
          </a>
          <a className="discord" href="/">
            <FaDiscord />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
