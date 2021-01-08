import React from "react";
import "./Homescreen.scss";
import { Media } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import "../Category/SubCategory/subcategory.scss";

const Corousal = () => {
  return (
    <>
      {" "}
      <div>
        <div class="carousel">
          <div class="carousel-inner">
            <input
              class="carousel-open"
              type="radio"
              id="carousel-1"
              name="carousel"
              aria-hidden="true"
              hidden=""
              checked="checked"
            />
            <div class="carousel-item">
              <img src="http://fakeimg.pl/2000x800/0079D8/fff/?text=Without" />
            </div>
            <input
              class="carousel-open"
              type="radio"
              id="carousel-2"
              name="carousel"
              aria-hidden="true"
              hidden=""
            />
            <div class="carousel-item">
              <img src="http://fakeimg.pl/2000x800/DA5930/fff/?text=JavaScript" />
            </div>
            <input
              class="carousel-open"
              type="radio"
              id="carousel-3"
              name="carousel"
              aria-hidden="true"
              hidden=""
            />

            <label for="carousel-1" class="carousel-control prev control-1">
              ‹
            </label>
            <label for="carousel-2" class="carousel-control next control-1">
              ›
            </label>
            <label for="carousel-1" class="carousel-control prev control-2">
              ‹
            </label>
            <label for="carousel-3" class="carousel-control next control-2">
              ›
            </label>
            <label for="carousel-2" class="carousel-control prev control-2">
              ‹
            </label>
            <label for="carousel-1" class="carousel-control next control-2">
              ›
            </label>
            <ol class="carousel-indicators">
              <li>
                <label for="carousel-1" class="carousel-bullet">
                  •
                </label>
              </li>
              <li>
                <label for="carousel-2" class="carousel-bullet">
                  •
                </label>
              </li>
              <li>
                <label for="carousel-3" class="carousel-bullet">
                  •
                </label>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

function MediaCard() {
  return (
    <>
      <div
        class="box-wrapper"
        style={{ margin: "10px", transform: "translate(0, -10%)" }}
      >
        <img
          src="https://th.bing.com/th/id/OIP.iC4LckUp_x_Rg4Tp-SRf-QHaEo?w=305&h=190&c=7&o=5&dpr=1.25&pid=1.7"
          alt="rhcp"
          style={{ cursor: "pointer" }}
          width="450px"
          height="200px"
        />
        <div class="box-content">
          <a class="buy">
            <span>
              <img
                style={{
                  marginTop: "10px",
                  cursor: "pointer",
                  height: "50px",
                  width: "50px",
                }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
              />
            </span>
          </a>
          <div class="title">Chili Papers</div>
          <div class="desc">Lorem ipsum dolor sit amet.</div>
          <span class="price">₹ 5.67</span>
          <div class="ssfooter">
            <ul>
              <li class="fa fa-star">
                <img
                  src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
                  style={{ height: "2rem" }}
                />
              </li>
              <li class="fa fa-star">
                <img
                  src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
                  style={{ height: "2rem" }}
                />
              </li>
              <li class="fa fa-star">
                <img
                  src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
                  style={{ height: "2rem" }}
                />
              </li>
              <li class="fa fa-star">
                <img
                  src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
                  style={{ height: "2rem" }}
                />
              </li>
              <li class="fa fa-star-o">
                <img
                  src="https://img.icons8.com/fluent/48/000000/star-half-empty.png"
                  style={{ height: "2rem" }}
                />
              </li>
            </ul>
          </div>
        </div>
        <div class="success"></div>
        <Button
          variant="contained"
          color="primary"
          className="addtocart"
          disableElevation
          style={{ height: "40px", width: "90%", marginBottom: "8px" }}
        >
          <p style={{ fontSize: "1.2rem" }}>🛒 Add to Cart 🛒</p>
        </Button>
      </div>
    </>
  );
}

export default function HomeScreen() {
  return (
    <>
      <Corousal />
      <div style={{ margin: "auto", width: "90%" }}>
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </div>
    </>
  );
}
