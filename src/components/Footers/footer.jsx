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
                  <a href="/aboutus">About Us</a>
                </li>
                <li>
                  <a href="/feedback">Feedback</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Connect with Us</h4>
              <a href="/aboutus" className="linkdin social">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  style={{ color: "#bbbbbb" }}
                />
              </a>
              <a href="/aboutus" className="facebook social">
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="2x"
                  style={{ color: "#bbbbbb" }}
                />
              </a>
              <a href="/aboutus" className="twitter social">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="2x"
                  style={{ color: "#bbbbbb" }}
                />
              </a>
              <a href="/aboutus" className="instagram social">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  style={{ marginRight: "10px", color: "#bbbbbb" }}
                />
              </a>
            </div>
            <div class="footer-col">
              <h4>Important links</h4>
              <ul>
                <li>
                  <a href="/"> Home Screen</a>
                </li>
                <li>
                  <a href="/category">Category</a>
                </li>
                <li>
                  <a href="/feedback">Feedback</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Login</h4>
              <ul>
                <li>
                  <a href="/signin">Customer Login</a>
                </li>
                <li>
                  <a href="/sellersignin">Seller Login</a>
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
