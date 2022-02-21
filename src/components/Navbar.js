import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "./Vain-t.png";

function Navbar() {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <div className="navbar-logo">
              <Link
                to="https://thevainlabs.com"
                className="navbar-logo"
                style={{ right: 0 }}
              >
                <img
                  src={Icon}
                  width="120"
                  height="38"
                  className="navbar-img"
                />
              </Link>
            </div>

            <div className="menu-icon"></div>
            <ul className="nav-menu">
              <li className="nav-item">
                <a
                  href="https://www.linkedin.com/company/thevainlabs/"
                  className="nav-links"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.instagram.com/thevainlabs/"
                  className="nav-links"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
