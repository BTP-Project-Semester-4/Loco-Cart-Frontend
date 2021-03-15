import React, { useEffect } from "react";
import "./productdescription.css";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import Rating from "@material-ui/lab/Rating";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";
import RateReviewIcon from "@material-ui/icons/RateReview";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CompanyLogo from "./../../../images/LocoCart.PNG";
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FaCommentsDollar } from "react-icons/fa";
import TextField from '@material-ui/core/TextField';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);
const jwt = require("jsonwebtoken");
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
let total = new Set();

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
  const history = useHistory();
  const [comment, setComment] = React.useState("");
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(0);

  const [isLoaging, setIsLoaging] = React.useState(true);
  const [userId, setUserId] = React.useState("");
  const [UserName, setUserName] = React.useState("");
  const [oneCount, setOneCount] = React.useState(new Set());
  const [twoCount, setTwoCount] = React.useState(new Set());
  const [threeCount, setThreeCount] = React.useState(new Set());
  const [fourCount, setFourCount] = React.useState(new Set());
  const [fiveCount, setFiveCount] = React.useState(new Set());
  const [totalCount, setTotalCount] = React.useState(new Set());
  const [quantity, setQuantity] = React.useState(1);

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

  const ChartContainer = () => (
    <div class="reviews-container">
      <h2>Reviews</h2>
      <div class="rreview">
        <span class="icon-container">
          5 <i class="fas fa-star" style={{ color: "orange" }}></i>
        </span>
        <div class="progress">
          <BorderLinearProgress
            variant="determinate"
            value={(fiveCount.size / totalCount.size) * 100}
          />
        </div>
        <span class="percent">{fiveCount.size}</span>
      </div>
  
      <div class="rreview">
        <span class="icon-container">
          4 <i class="fas fa-star" style={{ color: "orange" }}></i>
        </span>
        <div class="progress">
          <BorderLinearProgress
            variant="determinate"
            value={(fourCount.size / totalCount.size) * 100}
          />
        </div>
        <span class="percent">{fourCount.size}</span>
      </div>
      <div class="rreview">
        <span class="icon-container">
          3 <i class="fas fa-star" style={{ color: "orange" }}></i>
        </span>
        <div class="progress">
          <BorderLinearProgress
            variant="determinate"
            value={(threeCount.size / totalCount.size) * 100}
          />
        </div>
        <span class="percent">{threeCount.size}</span>
      </div>
      <div class="rreview">
        <span class="icon-container">
          2 <i class="fas fa-star" style={{ color: "orange" }}></i>
        </span>
        <div class="progress">
          <BorderLinearProgress
            variant="determinate"
            value={(twoCount.size / totalCount.size) * 100}
          />
        </div>
        <span class="percent">{twoCount.size}</span>
      </div>
      <div class="rreview">
        <span class="icon-container">
          1 <i class="fas fa-star" style={{ color: "orange" }}></i>
        </span>
        <div class="progress">
          <BorderLinearProgress
            variant="determinate"
            value={(oneCount.size / totalCount.size) * 100}
          />
        </div>
        <span class="percent">{oneCount.size}</span>
      </div>
    </div>
  );

  useEffect(async () => {
    try {
      const jwtToken = localStorage.getItem("CustomerJwt");
      const user = jwt.verify(jwtToken, process.env.REACT_APP_JWT_SECRET);
      // console.log(user);
      setUserId(user._id);
      Axios.get(process.env.REACT_APP_BACKEND_API + `customer/${user._id}`)
      .then(function (response) {
        console.log(response);
        const customerName =
          response.data.customer.firstName +
          " " +
          response.data.customer.lastName;
        setUserName(customerName);
        console.log("CustomerName: " + customerName);
      })
      .catch(function (error) {
        console.log(error);
      });

      Axios.post(process.env.REACT_APP_BACKEND_API + "product/searchbyid", {
        id: props.match.params.id,
      }).then((result) => {
        console.log(result.data.products.Sellers)
        if (result) setIsLoaging(false);
        var minprice = 10000000;
        var minindex = -1;
        for (var key in result.data.products.Sellers) {
          var obj = result.data.products.Sellers[key];
          console.log(obj.SellerPrice)
          if (minprice > obj.SellerPrice) {
            minprice = obj.SellerPrice;
            minindex = key;
          }
        }
        const minSeller = result.data.products.Sellers[minindex];
        setminiiPrice(minprice);
        setdiscription(minSeller.Description);
        setIImage(minSeller.Image);
        setname(result.data.products.Name);
        setcategory(result.data.products.Category);
        setsellerId(minSeller.SellerId);
        setRating(minSeller.Rating.$numberDecimal);
        setComments(minSeller.Comments);
        setObjectKey(minindex);
        for (var key in minSeller.Comments) {
          var obj = minSeller.Comments[key];
          if (obj.Rating.$numberDecimal <= 1) {
            one.add(obj._id);
            total.add(obj._id);
          } else if (
            obj.Rating.$numberDecimal <= 2 &&
            obj.Rating.$numberDecimal > 1
          ) {
            two.add(obj._id);
            total.add(obj._id);
          } else if (
            obj.Rating.$numberDecimal <= 3 &&
            obj.Rating.$numberDecimal > 2
          ) {
            three.add(obj._id);
            total.add(obj._id);
          } else if (
            obj.Rating.$numberDecimal <= 4 &&
            obj.Rating.$numberDecimal > 3
          ) {
            four.add(obj._id);
            total.add(obj._id);
          } else if (
            obj.Rating.$numberDecimal <= 5 &&
            obj.Rating.$numberDecimal > 4
          ) {
            five.add(obj._id);
            total.add(obj._id);
          }
        }
        setOneCount(one);
        setTwoCount(two);
        setThreeCount(three);
        setFourCount(four);
        setFiveCount(five);
        setTotalCount(total);
      });

    } catch (e) {
      console.log(e);
      history.push('/signin');
    }

    

  }, []);

  const addToCartHandler = ()=>{
    if(quantity!==""){
      fetch(
        process.env.REACT_APP_BACKEND_API + "customer/addtocart",
        {
          method:"post",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            customerId: userId,
            productId: props.match.params.id,
            productName: name,
            quantity: quantity
          })
        }
      ).then(res=>res.json())
      .then(result=>{
        if(result.message==="Success"){
          toast.success("Successfully added to cart !",{
            position: toast.POSITION.TOP_CENTER,
          });
        }else{
          toast.error("Some error occured !", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
    }else{
      toast.error("Please enter a quantity !", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  const onCommentHandler = (e) => {
    e.preventDefault();
    const url = process.env.REACT_APP_BACKEND_API + `reviewandcomment/${props.match.params.id}`;
    console.log("onCommentHandler");
    if (userId) {
      Axios.post(
        process.env.REACT_APP_BACKEND_API + `reviewandcomment/${props.match.params.id}`,
        {
          id: objectKey,
          name: UserName,
          rating: value,
          comment: comment,
          userId: userId,
        }
      )
        .then((result) => {
          console.log(result);
          if (result.data.message === "Success") {
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
    } else {
      toast.warning("You need to signin to give comment and review !!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      {isLoaging && (
        <div style={{ height: "100%", width: "100%" }}>
          <div style={{ marginBottom: "25%" }}>
            <div
              className="LOGO"
              style={{ marginLeft: "40%", marginTop: "10%" }}
            >
              <img src={CompanyLogo} style={{ width: "30%", height: "30%" }} />
            </div>
            <div style={{ marginLeft: "48%" }}>
              <CircularProgress />
            </div>
          </div>
        </div>
      )}
      {!isLoaging && (
        <div>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
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
                        width: "350px",
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
                        <label>Enter quantity</label>
                        <input
                        placeholder="Enter quantity"
                        type="number"
                        value={quantity}
                        onChange={(e)=>{if(e.target.value>0){
                          setQuantity(e.target.value)
                        }}}
                        style={{
                          marginBottom:"10px",
                          maxWidth:"90%"
                        }}
                        ></input>
                        <button className="button button2"
                        onClick={()=>{addToCartHandler()}}>
                        ADD TO CART
                        </button>
                        <Link to={"/sellerprofile/" + sellerId}>
                          <button className="button button2">SELLER PROFILE</button>
                        </Link>
                        <Link to={"/allsellers/" + props.match.params.id}>
                          <button className="button button2">SELLERS LIST</button>
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
      )}
    </div>
  );
};
export default Productdesc;
