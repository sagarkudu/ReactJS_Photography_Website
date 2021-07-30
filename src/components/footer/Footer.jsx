import React from "react";

import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

const Footer = () => {
  return (
    <>
      <footer className="footer text-center col-10 mx-auto  pt-5 pt-lg-0 order-2 order-lg-1 mt-auto mb-auto">
        <p>
          © 2021 |
          <a href="https://wa.me/919421392873?text=Hello%20Bhavesh!%20Please%20send%20the%20best%20Quotation">
            <WhatsAppIcon className="whatsapp-icon" />
          </a>
          <a href="https://www.instagram.com/bhaveshthakur_photography/">
            <InstagramIcon className="instagram-icon" />
          </a>
          <a href="https://www.facebook.com/bhavesh3550">
            <FacebookIcon className="facebook-icon" />
          </a>
          | Made with ❤️ by{" "}
          <a
            className="no-text-decoration"
            href="https://wa.me/919561516967?text=Hi%20Sagar%21%20I%20am%20interested%20to%20make%20a%20website%2C%20I%20have%20seen%20a%20demo%20of%20your%20client%20Bhavesh%20Thakur..."
          >
            Sagar Kudu
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
