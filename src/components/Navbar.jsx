import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMobileNav, setIsMobileNav] = useState(false);

  const clickHandler = function () {
    setClick(!click);
  };

  useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowWidth(window.innerWidth);
      if (windowWidth > 992) {
        setIsMobileNav(false);
      } else {
        setIsMobileNav(true);
      }
    });
  }, [windowWidth]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="nav-links">
            {!isMobileNav && (
              <ul>
                <li>
                  <Link to="/" className="navbar-logo">
                    LOGO
                  </Link>
                </li>

                <li>
                  <Link to="/about">About Us</Link>
                </li>
              </ul>
            )}
          </div>

          {isMobileNav && (
            <>
              <div className="nav-controller">
                <div className="burger-icon" onClick={clickHandler}>
                  <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
              </div>

              <ul>
                <li>
                  <Link to="/">Mobile Home</Link>
                </li>
                <li>
                  <Link to="/about">Mobile About Us</Link>
                </li>
              </ul>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
