import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const handleMenuClick = () => {
    setShowNav(!showNav);
  };
  return (
    <>
      <nav>
        <div className="left">
          <img className="image" src={require("../images/Logo.png")} alt="" />
        </div>
        <div className="right">
          <ul style={{ display: "flex" }}>
            <li className="li">
              <Link to="/" className="link">
                HOME
              </Link>
            </li>
            <li className="li">
              <Link to="/about" className="link">
                ABOUT
              </Link>
            </li>
            <li className="li">
              <Link to="/services" className="link">
                SERVICES
              </Link>
            </li>
            <li className="li">
              <Link to="/contact" className="link">
                CONTACT
              </Link>
            </li>
            <li className="li">
              <Link to="/faq" className="link">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <navbar>
        <div className="left">
          <img className="image" src={require("../images/Logo.png")} alt="" />
        </div>
        <div className="right">
          <MenuIcon style={{ fontSize: "2rem" }} onClick={handleMenuClick} />
        </div>
      </navbar>
      {showNav && (
        <div className="navdown">
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <li className="li-res">
              <Link to="/" className="link">
                HOME
              </Link>
            </li>
            <li className="li-res">
              <Link to="/about" className="link">
                ABOUT
              </Link>
            </li>
            <li className="li-res">
              <Link to="/services" className="link">
                SERVICES
              </Link>
            </li>
            <li className="li-res">
              <Link to="/contact" className="link">
                CONTACT
              </Link>
            </li>
            <li className="li-res">
              <Link to="/faq" className="link">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
