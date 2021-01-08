import React from "react";
import { Media } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import "./subcategory.scss";

function MediaCard() {
  return (
    <>
      <div class="box-wrapper" style={{ margin: "10px" }}>
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

function ModalMediaCard() {
  return <></>;
}

export function SubCategories(props) {
  const category = props.match.params.id;
  if (
    category === "Stationery" ||
    category === "Grocery" ||
    category === "Electronics" ||
    category === "Footwear" ||
    category === "Sports" ||
    category === "Books"
  )
    return (
      <>
        <div
          style={{
            height: "60px",
            textAlign: "center",
            marginBottom: "20px",
            color: "#000",
          }}
        >
          <h1>
            <b>Explore {category}</b>
          </h1>
        </div>
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
  else {
    return (
      <>
        <h1>Page Not Found</h1>
      </>
    );
  }
}
