import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./productdescription.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisTitle,
  ChartCategoryAxisItem,
} from "@progress/kendo-react-charts";

const [firstSeries, secondSeries, thirdSeries, fourthSeries, fifthSeries] = [
  [3000, 0, 0, 0, 0],
  [0, 123, 0, 0, 0],
  [0, 0, 234, 0, 0],
  [0, 0, 0, 343, 0],
  [0, 0, 0, 0, 122],
];
const categories = ["5⭐", "4⭐", "3⭐", "2⭐", "1⭐"];
const ChartContainer = () => (
  <Chart>
    <ChartTitle text="Units sold" />
    <ChartCategoryAxis>
      <ChartCategoryAxisItem categories={categories} color="black">
        <ChartCategoryAxisTitle text="Star Rating" />
      </ChartCategoryAxisItem>
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem
        type="bar"
        gap={2}
        spacing={0.25}
        data={firstSeries}
        color="green"
      />
      <ChartSeriesItem type="bar" data={secondSeries} color="green" />
      <ChartSeriesItem type="bar" data={thirdSeries} color="green" />
      <ChartSeriesItem type="bar" data={fourthSeries} color="orange" />
      <ChartSeriesItem type="bar" data={fifthSeries} color="red" />
    </ChartSeries>
  </Chart>
);

const Productdesc = (props) => {
  const [miniiPrice, setminiiPrice] = React.useState(10000000);
  const [discription, setdiscription] = React.useState("Loading");
  const [IImage, setIImage] = React.useState("Loading...");
  const [name, setname] = React.useState("Loading...");
  const [category, setcategory] = React.useState("Loading...");
  const [sellerId, setsellerId] = React.useState("Loading...");
  const [rating, setRating] = React.useState("4.7");

  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(0);
  if (hover < 0 && value === 0) {
    setHover(0);
  }
  const useStyles = makeStyles({
    root: {
      width: 200,
      display: "flex",
      alignItems: "center",
    },
  });
  const classes = useStyles();

  Axios.post("http://localhost:3001/api/product/searchbyid", {
    id: props.match.params.id,
  }).then((result) => {
    for (var key in result.data.products.Sellers) {
      var obj = result.data.products.Sellers[key];
      if (miniiPrice > obj.SellerPrice) {
        setminiiPrice(obj.SellerPrice);
        setdiscription(obj.Description);
        setIImage(obj.Image);
        setname(result.data.products.Name);
        setcategory(result.data.products.Category);
        setsellerId(obj.SellerId);
        console.log(obj.SellerId);
      }
    }
  });

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="productdescription.css" rel="stylesheet" />
      <br />
      <p className="ProductDiscContent">
        <a href="/">Home</a> {" > "}
        <a href={`/Category/${category}`}>{category}</a>
        {" >"} {name}
      </p>
      <section id="product-info">
        <div className="item-image-parent">
          <ul style={{ width: "100%", padding: "20px" }}>
            <li style={{ width: "100%" }}>
              <div style={{ width: "100%" }}>
                <img
                  src={IImage}
                  alt="default"
                  style={{
                    width: "400px%",
                    height: "600px",
                    margin: "21px",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "20px",
                    marginBottom: "auto",
                    top: 0,
                  }}
                />
              </div>
            </li>
            <li>
              <div>
                <ChartContainer />
              </div>
            </li>
          </ul>
        </div>
        <div className="item-info-parent">
          <div className="select-items">
            <div className="main-info">
              <h5 className="ProductDiscName">
                {name + " "}
                <sup>
                  <span
                    className="ProductDescriptionStarRating"
                    style={{ textDecoration: "none" }}
                  >
                    {rating}
                  </span>
                  {/* <span>⭐⭐⭐⭐</span> */}
                </sup>
              </h5>
              <Rating
                name="read-only"
                value={rating}
                precision={0.1}
                readOnly
              />
              <p style={{ fontSize: "1.3rem", color: "green" }}>
                PRICE:
                <span id="price" style={{ fontStyle: "italic" }}>
                  {" "}
                  ₹{miniiPrice}
                </span>
              </p>
              <div className="ProductDiscButtonDiv">
                <ul>
                  <li>
                    <Link to="/cart">
                      <button class="button button2">ADD TO CART</button>
                    </Link>
                    <Link to={"/sellerprofile/" + sellerId}>
                      <button class="button button2">SELLER PROFILE</button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="description">
              <ul>
                {/* <li>
                  <div className="ProductDiscBox">
                    <h4 className="ProductDescHeadings">Display: </h4>
                    <p className="ProductDiscContent">
                      {" "}
                      Innovative Display Technology
                    </p>
                  </div>
                </li> */}
                <li>
                  <div className="ProductDiscBox">
                    <h4 className="ProductDescHeadings">Model Number: </h4>
                    <p className="ProductDiscContent"> MQA62HN/A</p>
                  </div>
                </li>
                <li>
                  <div className="ProductDiscBox">
                    <h4 className="ProductDescHeadings">Model Name: </h4>
                    <p className="ProductDiscContent"> {name}</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h4 className="ProductDescHeadings">Browse Type: </h4>
                    <p className="ProductDiscContent"> {category}</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h4 className="ProductDescHeadings">Description : </h4>
                    <div className="ProductDiscBox">
                      <p
                        className="ProductDiscContent"
                        style={{ height: "200px" }}
                      >
                        {discription}
                      </p>
                    </div>
                  </div>
                </li>
                {/* <li>
                  <ChartContainer />
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="ProductDescriptionReview">
        <div>
          <h2 style={{ color: "#3f51b5" }}>Comments {" & "} Review</h2>
        </div>
        <div
          className={classes.root}
          className="ProductDescriptionReviewRating"
        >
          <p style={{ fontSize: "1.2rem" }}>
            <b>Rating: </b>
            <Rating
              name="hover-feedback"
              value={value}
              min={3}
              precision={0.5}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
            />
            <i>
              {" " + (value === 0 ? hover : value) + " "}
              stars
            </i>
          </p>
          <input
            className="ProductDescriptionReviewHeading"
            size="58"
            placeholder="heading"
          />
          <textarea
            cols="60"
            rows="8"
            placeholder="Your valuable comment..."
            className="ProductDescriptionTextArea"
          ></textarea>
          <br />
          <Button variant="contained" color="primary">
            Primary
          </Button>
        </div>
        <hr />
        <div className="ProductDescriptionReviewReviews">
          <h2 style={{ color: "#3f51b5" }}>
            Nalin Agrawal{" "}
            <Rating name="read-only" precision={0.5} value={4} readOnly />
          </h2>
          <h5 style={{ fontSize: "1rem" }}>Totally worthed</h5>
          <i>
            <p>Very nice pen there !!!</p>
          </i>
        </div>
        <div className="ProductDescriptionReviewReviews">
          <h2 style={{ color: "#3f51b5" }}>
            Nalin Agrawal{" "}
            <Rating name="read-only" precision={0.5} value={4.5} readOnly />
          </h2>
          <h5 style={{ fontSize: "1rem" }}>Totally worthed</h5>
          <i>
            <p>Very nice pen there !!!</p>
          </i>
        </div>
      </section>
    </div>
  );
};
export default Productdesc;
