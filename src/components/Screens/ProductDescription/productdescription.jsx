import React, { useEffect } from "react";
import "./productdescription.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { jwt } from "jsonwebtoken";
import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartTooltip,
  ChartCategoryAxisItem,
} from "@progress/kendo-react-charts";
import RateReviewIcon from "@material-ui/icons/RateReview";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const categories = ["5", "4", "3", "2", "1"];
let one = new Set();
let two = new Set();
let three = new Set();
let four = new Set();
let five = new Set();
var [firstSeries, secondSeries, thirdSeries, fourthSeries, fifthSeries] = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
const ChartContainer = () => (
  <div
    style={{
      backgroundColor: "#dfe0df",
      magrin: "10px",
      borderRadius: "15px",
      padding: "5px",
    }}
  >
    <Chart visible={true}>
      <ChartTitle text="Star Rating" color="#7e7474" />
      <ChartTooltip format="{0}" color="#ffffff" />
      <ChartCategoryAxis color="#7e7474">
        <ChartCategoryAxisItem categories={categories} color="#7e7474">
          {/* <ChartCategoryAxisTitle text="Star Rating" /> */}
        </ChartCategoryAxisItem>
      </ChartCategoryAxis>
      <ChartSeries color="#AAAAAA">
        <ChartSeriesItem type="bar" gap={2} data={firstSeries} color="green" />
        <ChartSeriesItem
          type="bar"
          data={secondSeries}
          gap={0}
          color="#4cbb17"
        />
        <ChartSeriesItem
          type="bar"
          data={thirdSeries}
          gap={0}
          color="#39ff14"
        />
        <ChartSeriesItem
          type="bar"
          data={fourthSeries}
          gap={0}
          color="orange"
        />
        <ChartSeriesItem type="bar" data={fifthSeries} gap={0} color="red" />
      </ChartSeries>
    </Chart>
  </div>
);

const baseYear = 2000;
const generateData = () => {
  const data = {
    categories: [],
    series: {
      name: "My data over time",
      data: [],
    },
  };

  for (let i = 0; i < 200; i++) {
    data.categories.push(baseYear + i);
    data.series.data.push(Math.floor(Math.random() * 200));
  }

  return data;
};

const Productdesc = (props) => {
  const [miniiPrice, setminiiPrice] = React.useState(10000000);
  const [discription, setdiscription] = React.useState("Loading");
  const [IImage, setIImage] = React.useState("Loading...");
  const [name, setname] = React.useState("Loading...");
  const [category, setcategory] = React.useState("Loading...");
  const [sellerId, setsellerId] = React.useState("Loading...");
  const [rating, setRating] = React.useState(1.1);
  const [product, setProduct] = React.useState("");
  const [comments, setComments] = React.useState([]);
  const [objectKey, setObjectKey] = React.useState();

  const [comment, setComment] = React.useState("");
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(0);

  const [userId, setUserId] = React.useState("");
  const [UserName, setUserName] = React.useState("");

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
        setRating(obj.Rating.$numberDecimal);
        setComments(obj.Comments);
        setObjectKey(key);
      }
    }
  });
  useEffect(() => {
    for (var key in comments) {
      var obj = comments[key];
      if (obj.Rating.$numberDecimal <= 1.0) {
        one.add(obj._id);
      } else if (obj.Rating.$numberDecimal <= 2.0) {
        two.add(obj._id);
      } else if (obj.Rating.$numberDecimal <= 3.0) {
        three.add(obj._id);
      } else if (obj.Rating.$numberDecimal <= 4.0) {
        four.add(obj._id);
      } else if (obj.Rating.$numberDecimal <= 5.0) {
        five.add(obj._id);
      }
    }
    firstSeries[0] = one.size;
    secondSeries[1] = two.size;
    thirdSeries[2] = three.size;
    fourthSeries[3] = four.size;
    fifthSeries[4] = five.size;
    try {
      const jwtToken = localStorage.getItem("CustomerJwt");
      const user = jwt.verify(jwtToken, process.env.REACT_APP_JWT_SECRET);
      console.log("userInfo \n" + jwtToken + "\n" + user);
      setUserId(user._id);

      const customerInfo = "http://localhost:3001/api/customer/" + userId;
      Axios.get({ customerInfo })
        .then(function (response) {
          const customerName = response.firstName + " " + response.lastName;
          setUserName(customerName);
          console.log("CustomerName: " + customerName);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);
  const onCommentHandler = (e) => {
    e.preventDefault();
    const url = `http://localhost:3001/api/reviewandcomment/${props.match.params.id}`;
    console.log("onCommentHandler");
    // if (userId) {
    Axios.post(
      `http://localhost:3001/api/reviewandcomment/${props.match.params.id}`,
      {
        id: objectKey,
        name: "Nalin",
        rating: value,
        comment: comment,
        userId: "5ff1abe1db632843b446a776",
      }
    )
      .then((result) => {
        if (result.message === "Success") {
          toast.success("Thank you for your valueable comment :)", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          });
          window.location.reload(false);
        } else {
          toast.error("Something went wrong!!!", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // } else {
    //   toast.warning("You need to signin to give comment and review !!", {
    //     position: toast.POSITION.TOP_CENTER,
    //     autoClose: 2000,
    //   });
    // }
  };

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
                    width: "350px%",
                    height: "500px",
                    margin: "21px",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "20px",
                    marginBottom: "10px",
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
            <div className="main-info" style={{ paddingLeft: "15px" }}>
              <h5 className="ProductDiscName">
                {name + " "}
                <sup>
                  <span
                    className="ProductDescriptionStarRating"
                    style={{ textDecoration: "none" }}
                  >
                    {rating}
                  </span>
                </sup>
              </h5>
              <Rating
                name="read-only"
                value={rating}
                precision={0.1}
                readOnly
              />
              <p style={{ fontSize: "1.2rem", color: "#7e7474" }}>
                <span>
                  <VisibilityIcon />
                  <sup>1000</sup>
                </span>{" "}
                <RateReviewIcon />
                <sup>{comments.length}</sup>
              </p>

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
                <li>
                  <li>
                    <div className="ProductDiscBox">
                      <h4 className="ProductDescHeadings">Model Name: </h4>
                      <p className="ProductDiscContent"> {name}</p>
                    </div>
                  </li>
                  <div className="ProductDiscBox">
                    <h4 className="ProductDescHeadings">Model Number: </h4>
                    <p className="ProductDiscContent"> MQA62HN/A</p>
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
          <form onSubmit={onCommentHandler}>
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
            {/* <input
            className="ProductDescriptionReviewHeading"
            placeholder="heading"
            style={{ width: "100%" }}
          /> */}
            <textarea
              style={{ width: "100%" }}
              rows="8"
              placeholder="Your valuable comment..."
              className="ProductDescriptionTextArea"
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <br />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </div>
        <hr />
        {comments.map((item) => (
          <div className="ProductDescriptionReviewReviews">
            <h2 style={{ color: "#3f51b5" }}>
              {item.Name + " "}
              <Rating
                name="read-only"
                precision={0.5}
                value={item.Rating.$numberDecimal}
                readOnly
              />
            </h2>
            {/* <h5 style={{ fontSize: "1rem" }}>Totally worthed</h5> */}
            <i>
              <p>{item.Content}</p>
            </i>
          </div>
        ))}
      </section>
    </div>
  );
};
export default Productdesc;
