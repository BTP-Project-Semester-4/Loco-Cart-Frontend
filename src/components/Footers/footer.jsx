import React from "react";
import ReactDOM from "react-dom";
// import './navbar.css';
// import './aboutus.css';
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="container1">
          <div class="row1">
            <div class="footer-col">
              <h4>Get to Know Us</h4>
              <ul>
                <li>
                  <a href="/aboutus.html">About Us</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Connect with Us</h4>
              <a
                href="https://www.linkedin.com/in/amit-kumar-upadhyay-054b07193/"
                className="linkdin social"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  style={{ marginRight: "10px", color: "#bbbbbb" }}
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100009546061383"
                className="facebook social"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="2x"
                  style={{ marginRight: "10px", color: "#bbbbbb" }}
                />
              </a>
              <a
                href="https://twitter.com/AmitKum01184222"
                className="twitter social"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="2x"
                  style={{ marginRight: "10px", color: "#bbbbbb" }}
                />
              </a>
              <a
                href="https://www.instagram.com/u_amit65/"
                className="instagram social"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  style={{ marginRight: "10px", color: "#bbbbbb" }}
                />
              </a>
            </div>
            <div class="footer-col">
              <h4>Get Help</h4>
              <ul>
                <li>
                  <a href="my account">Your Account</a>
                </li>
                <li>
                  <a href="login"> Customer Login</a>
                </li>
                <li>
                  <a href="signup">Sign Up</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Make Money</h4>
              <ul>
                <li>
                  <a href="selling">Sell Anything</a>
                </li>
                <li>
                  <a href="sellerlogin">Seller Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
