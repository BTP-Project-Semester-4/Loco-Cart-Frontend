import React from "react";
import "./Homescreen.scss";
import { Media } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import "../Category/SubCategory/subcategory.scss";
import Axios from "axios";

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

function MediaCard(props) {
  const [id, setid] = React.useState(props._id);
  const [miniPrice, setminiPrice] = React.useState(100000000);
  const [discription, setdiscription] = React.useState("Product");
  const [image, setimage] = React.useState("HII");
  for (var key in props.Sellers) {
    var obj = props.Sellers[key];
    if (parseInt(miniPrice, 10) > parseInt(obj.SellerPrice, 10)) {
      setminiPrice(obj.SellerPrice);
      setdiscription(obj.Description);
      setimage(obj.Image);
    }
  }

  return (
    <>
      {
        <div
          class="box-wrapper"
          style={{ margin: "10px", transform: "translate(0, -10%)" }}
        >
          <a href={"/product/" + id}>
            <img
              src={image}
              alt="rhcp"
              style={{ cursor: "pointer" }}
              width="450px"
              height="200px"
            />
          </a>
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
            <div class="title">{props.Name}</div>
            <div class="desc">
              <b>{props.Category}</b> : {discription}
            </div>
            <span class="price">₹ {miniPrice}</span>
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
      }
    </>
  );
}

export default function HomeScreen() {
  const [Products, setProducts] = React.useState([]);
  const address = "http://localhost:3001/api/product/allproducts";
  React.useEffect(() => {
    Axios.post(address).then((result) => {
      console.log(result);
      setProducts(result.data.products);
    });
  }, []);

  return (
    <>
      <Corousal />
      <div style={{ margin: "auto", width: "90%" }}>
        {Products.slice(0, 20).map((item) => {
          return (
            <>
              <MediaCard {...item} />
            </>
          );
        })}
      </div>
    </>
  );
}
