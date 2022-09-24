import React, { Component } from "react";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <>
      <div className="contact-topcontainer">
        <div className="contact-container">
          <div className="contact-me">Contacto</div>
          <div className="contact-information-container">
            <div className="contact-media">
              <a
                href="mailto:upsidedownengineer@gmail.com"
                className="contact-media-url"
              >
                {"> "}Correo Electronico: upsidedownengineer@gmail.com
              </a>
            </div>
            <div className="contact-media">
              <a
                className="contact-media-url"
                href="https://www.linkedin.com/in/adan-fregoso-luqu%C3%ADn-6207a3235/"
              >
                {"> "}LinkedIn
              </a>
            </div>
            <div className="contact-media">
              <a
                href="https://twitter.com/ichirodev"
                className="contact-media-url"
              >
                {"> "}Twitter: @Ichirodev
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
