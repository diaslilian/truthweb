import React from "react";

import Subscribe from "./Subscribe";
import Socials from "../ui/Social";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper wrapper--footer">
        <div className="footer__logos">
          <div className="logo"></div>
          <div className="universal-logo"></div>
          <div className="footer__copy">
            © Universal Music and TTB All Rights Reserved 2020
          </div>
        </div>
        <div className="footer__subscribe">
          <h3>JOIN MAILING LIST</h3>
          <Subscribe />
        </div>
        <div className="footer__social">
          <h3>BE IN TOUCH WITH US</h3>
          <Socials context="footer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
