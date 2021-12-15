import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { HiMenu } from "react-icons/hi";
import logoIcon from "../../assets/images/logoIcon.png";
const Navbar: React.FC = () => {
  const [menu, setMenu] = useState(false);
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [navbar, setNavbar] = useState(false);
  const changeHeight = (): void => {
    if (window.scrollY > 103) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeHeight);

  const content: any = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }

  return (
    <div className={navbar ? "navbar height" : "navbar"}>
      <div className="web-nav">
        <div className={navbar ? "logo height" : "logo"}>
          <img src={logoIcon} alt="" />
          <a href="/">Crypto Keeperz Club</a>
        </div>
        <div className="nav-links">
          <Link activeClass="active" smooth={true} duration={800} to="Home">
            HOME
          </Link>
          <Link activeClass="active" smooth={true} duration={800} to="About">
            ABOUT
          </Link>
          <Link activeClass="active" smooth={true} duration={800} to="Mint">
            MINT
          </Link>
          <Link activeClass="active" smooth={true} duration={800} to="RoadMap">
            ROADMAP
          </Link>
          <Link activeClass="active" smooth={true} duration={800} to="Team">
            TEAM
          </Link>
          <Link activeClass="active" smooth={true} duration={800} to="FAQ">
            FAQ
          </Link>
          <a href="https://discord.com/invite/xtJmfc5gBx">DISCORD</a>
        </div>
      </div>
      <div className="slide-menu">
        <div className="slide-outter">
          <div className="logo mobile-logo">
            <img src={logoIcon} alt="" />
            <a href="/">Crypto Keeperz Club</a>
          </div>
          <button onClick={toggleAccordion} className="menu-slide-btn">
            Menu
            <HiMenu
              className={menu ? "slide-menu-icon active" : "slide-menu-icon"}
            />
          </button>
        </div>
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="accordion__content"
        >
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="Home"
          >
            HOME
          </Link>
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="About"
          >
            ABOUT
          </Link>
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="Mint"
          >
            MINT
          </Link>
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="RoadMap"
          >
            ROADMAP
          </Link>
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="Team"
          >
            TEAM
          </Link>
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="FAQ"
          >
            FAQ
          </Link>
          <a
            className="mobile-discord-link"
            onClick={toggleAccordion}
            href="https://discord.com/invite/xtJmfc5gBx"
          >
            DISCORD
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
