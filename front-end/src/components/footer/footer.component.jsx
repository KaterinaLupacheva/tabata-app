import React from "react";
import { FOOTER_DATA } from "./footer-data";
import FooterIcon from "../footer-icon/footer-icon.component";

import "./footer.styles.scss";

const Footer = () => (
  <div className="footer">
    <div className="footer-text">
      I'd be glad to know your opinion about the app:
    </div>
    <div className="footer-icons">
      {FOOTER_DATA.map(({ id, link, icon }) => (
        <FooterIcon key={id} link={link} icon={icon} />
      ))}
    </div>
  </div>
);

export default Footer;
