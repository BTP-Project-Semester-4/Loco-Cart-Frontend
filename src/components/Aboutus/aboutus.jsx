import React from "react";
import ReactDOM from "react-dom";
// import '../navbar.css';
// import '../Footers/footer';
// import '../Navbars/navbar';
import "./aboutus.css";
import amit from "./AMIT.jpeg";
import nalin from "./NALIN.jpeg";
import vijay from "./Vijay.jpeg";
import prerit from "./PRERIT.jpg";
// import App from './App'
import Nav from "../Navbars/navbar";
// import '../footer.css';
import Footer from "../Footers/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const About = () => {
  return (
    <div>
      <Nav />
      <h2 style={{}}>
        <center>
          <b>
            <u>Contact Us</u>
          </b>
        </center>
      </h2>

      <div class="row">
        <div class="column drift">
          <div class="card">
            <img src={nalin} alt="Nalin" style={{ width: "80%" }} />
            <h3>NALIN AGRAWAL</h3>
            <p class="title">Computer Science and Engineering</p>
            <p>
              <h2 style={{ fontFamily: "Arial" }}> IIIT PUNE</h2>
            </p>
            <a
              href="https://www.linkedin.com/in/nalin-agrawal-a73455191/"
              className="linkdin social"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://www.facebook.com/nalin.agrawal.12"
              className="facebook social"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://twitter.com/NalinAgrawal12"
              className="twitter social"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/nalinagrawal382/"
              className="instagram social"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <p>
              <a
                href="mailto:nalinagrawal.iiitp@gmail.com"
                target={"blank"}
                class="contact"
              >
                Contact
              </a>
            </p>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src={prerit} alt="Prerit" style={{ width: "80%" }} />
            <h3>PRERIT KUMAR JHA</h3>
            <p class="title">Computer Science and Engineering</p>
            <p>
              <h2 style={{ fontFamily: "Arial" }}>IIIT PUNE</h2>
            </p>
            <a
              href="https://www.linkedin.com/in/prerit-kumar-jha-5513a3134/"
              className="linkdin social"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100004937565856"
              className="facebook social"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="#" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/preritkrjha/"
              className="instagram social"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <p>
              <a
                href="mailto:preritkrjha@gmail.com"
                target={"blank"}
                class="contact"
              >
                Contact
              </a>
            </p>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src={amit} alt="Amit" style={{ width: "80%" }} />
            <h3>AMIT KUMAR UPDHYAY</h3>
            <p class="title">Computer Science and Engineering</p>
            <p>
              {" "}
              <h2 style={{ fontFamily: "Arial" }}>IIIT PUNE</h2>
            </p>
            <a
              href="https://www.linkedin.com/in/amit-kumar-upadhyay-054b07193/"
              className="linkdin social"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100009546061383"
              className="facebook social"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://twitter.com/AmitKum01184222"
              className="twitter social"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/u_amit65/"
              className="instagram social"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <p>
              <a
                href="mailto:amitupadhyay468@gmail.com"
                target={"blank"}
                class="contact"
              >
                Contact
              </a>
            </p>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src={vijay} alt="Vijay" style={{ width: "80%" }} />
            <h3>VIJAY JOSHI</h3>
            <p class="title">Computer Science and Engineering</p>
            <p>
              <h2 style={{ fontFamily: "Arial" }}>IIIT PUNE</h2>
            </p>
            <a
              href="https://www.linkedin.com/in/vijay-joshi-80221a193/"
              className="linkdin social"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://www.facebook.com/vijayjoshi802"
              className="facebook social"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://twitter.com/vijay_joshi16"
              className="twitter social"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/vijayjoshi802/"
              className="instagram social"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <p>
              <a
                href="mailto:joshivijay324@gmail.com"
                target={"blank"}
                class="contact"
              >
                Contact
              </a>
            </p>
          </div>
        </div>
        <div class="column1">
          <div class="card1">
            {/* <!-- <h2 style="font-family: 'Comic Sans MS'"><center><b><u>About Us</u></b></center></h2> --> */}
            <div class="w">
              <h2 style={{}}>
                <h2 style={{ color: "red" }}>
                  <b>
                    <u>WHY US?</u>
                  </b>
                </h2>

                <p>
                  <div class="w01">
                    <h2>1.E-Commerce Website for Selling and Buying Items.</h2>
                  </div>
                </p>
                <p>
                  <div class="w01">
                    <h2>
                      2.Different Categories for differnt products are provided.
                    </h2>
                  </div>
                </p>
                <p>
                  <div class="w01">
                    <h2>
                      3.Any one who wants to sell any item can register and Sell
                      their Product.
                    </h2>
                  </div>
                </p>
                <p>
                  <div class="w01">
                    <h2>4.Privacy For Sellers and Customers.</h2>
                  </div>
                </p>
                <p>
                  <div class="w01">
                    <h2>5.Providing several new things for our Customers.</h2>
                  </div>
                </p>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default About;
