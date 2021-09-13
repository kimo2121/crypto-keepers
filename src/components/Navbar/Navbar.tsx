import React, { useRef, useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { HiMenu } from "react-icons/hi";
const Navbar: React.FC = () => {
  const [menu, setMenu] = useState(false);

  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const content: any = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }
  return (
    <div className="navbar">
      <div className="web-nav">
        <div className="logo">
          <a href="/">Crypto Keepers</a>
        </div>
        <div className="nav-links">
          <Link smooth={true} duration={800} to="Home">
            <a href="/">HOME</a>
          </Link>
          <Link smooth={true} duration={800} to="About">
            <a href="/">ABOUT</a>
          </Link>
          <Link smooth={true} duration={800} to="Mint">
            <a href="/">MINT</a>
          </Link>
          <Link smooth={true} duration={800} to="RoadMap">
            <a href="/">ROADMAP</a>
          </Link>
          <Link smooth={true} duration={800} to="Team">
            <a href="/">TEAM</a>
          </Link>
          <Link smooth={true} duration={800} to="FAQ">
            <a href="/">FAQ</a>
          </Link>
          <a href="https://discord.com/invite/7hWgh456">DISCORD</a>
        </div>
      </div>
      <div className="slide-menu">
        <div className="slide-outter">
          <div className="logo">
            <a href="/">Crypto Keepers</a>
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
          // className={menu ? "menu-content active" : "menu-content"}
          className="accordion__content"
        >
          <Link smooth={true} duration={800} to="Home">
            <a onClick={toggleAccordion} className="accordion__text">
              HOME
            </a>
          </Link>
          <Link smooth={true} duration={800} to="About">
            <a onClick={toggleAccordion}>ABOUT</a>
          </Link>
          <Link smooth={true} duration={800} to="Mint">
            <a onClick={toggleAccordion}>MINT</a>
          </Link>
          <Link smooth={true} duration={800} to="RoadMap">
            <a onClick={toggleAccordion}>ROADMAP</a>
          </Link>
          <Link smooth={true} duration={800} to="Team">
            <a onClick={toggleAccordion}>TEAM</a>
          </Link>
          <Link smooth={true} duration={800} to="FAQ">
            <a onClick={toggleAccordion}>FAQ</a>
          </Link>
          <a onClick={toggleAccordion}>DISCORD</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
