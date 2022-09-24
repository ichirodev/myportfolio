import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-topcontainer container">
          <div className="footercontent-container">
            <span>// Made in React, written by Ichirodev</span>
            <div className="footercontent">
              <div className="footercontent-box">
                <a
                  href="https://github.com/ichirodev/ichirodev-site"
                  style={{ textDecoration: "none", color: "rgb(113, 109, 98)" }}
                >
                  // Source code
                </a>
              </div>
              <div className="footercontent-box">
                <a
                  href="https://github.com/ichirodev"
                  style={{ textDecoration: "none", color: "rgb(113, 109, 98)" }}
                >
                  // Github
                </a>
              </div>
              <div className="footercontent-box">
                <a
                  href="https://www.linkedin.com/in/adan-fregoso-luqu%C3%ADn-6207a3235/"
                  style={{ textDecoration: "none", color: "rgb(113, 109, 98)" }}
                >
                  // LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
