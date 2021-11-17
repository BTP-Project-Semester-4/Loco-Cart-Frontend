import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./SellerProfile.css";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import StarIcon from "@material-ui/icons/Star";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { FaWindowClose } from "react-icons/fa";
import Axios from "axios";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    background: "#fff",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    // borderRadius: "25px"
  },
}));

const SellerProfile = (props) => {
  const [Loading, setLoading] = useState(true);
  const classes = useStyles();
  const history = useHistory();
  const [firstName, setFirstName] = useState("Loading...");
  const [lastName, setLastName] = useState("Loading...");
  const [email, setEmail] = useState("Loading...");
  const [pic, setPic] = useState("Loading...");
  const [city, setCity] = useState("Loading...");
  const [state, setState] = useState("Loading...");
  const [country, setCountry] = useState("Loading...");
  const [phoneNo, setPhoneNo] = useState("Loading...");
  const [rating, setRating] = useState("Loading...");
  const [category, setCategory] = useState("Loading...");
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [pastOrder, setPastOrder] = React.useState([]);
  const jwt = require("jsonwebtoken");

  const [items, setitems] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  function modalPass(idx) {
    setitems(idx);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const [ready, setReady] = useState(0);
  const [bidArray, setBidArray] = useState([]);
  const [itemArray, setItemArray] = useState([]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(async () => {
    var jwtToken = await localStorage.getItem("sellerjwt");
    const user = await jwt.verify(jwtToken, process.env.REACT_APP_JWT_SECRET);

    fetch(process.env.REACT_APP_BACKEND_API + `seller/${user._id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        if (result.message === "Success") {
          setFirstName(result.seller.firstName);
          setLastName(result.seller.lastName);
          setEmail(result.seller.email);
          setPic(result.seller.profilePictureUrl);
          setPhoneNo(result.seller.contactNo);
          setCity(result.seller.city);
          setState(result.seller.state);
          setCountry(result.seller.country);
          setRating(result.seller.rating);
          setCategory(result.seller.category);
        } else {
          history.push("/error");
        }
      });

    fetch(process.env.REACT_APP_BACKEND_API + "bid/getsellerbids", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sellerId: user._id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        console.log(result);
        if (result.message === "Success") {
          setBidArray(result.bids);
          setItemArray(result.bidItems);
          console.log(result);
        }
      });

    Axios.post(
      process.env.REACT_APP_BACKEND_API + "sellerpastorder/seller_past_order",
      { sellerId: user._id }
    ).then((result) => {
      console.log(result);
      setPastOrder(result.data.history);
    });
  }, []);

  const PastOrderCard = (data) => {
    const [sellerName, setsellerName] = useState("Loading ...");
    console.log(data);
    useEffect(() => {
      Axios.get(
        process.env.REACT_APP_BACKEND_API +
          "seller/" +
          data.bids[data.bids.length - 1].sellerId
      ).then((result) => {
        console.log(result);
        setsellerName(result.data.seller.firstName);
      });
    }, []);
    return (
      <>
        <Grid container xs={12} sm={12} md={12} lg={12} className="review">
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSalXmLejwMeXC8Hb1wY0Vx7tSYCpcEpzLvrg&usqp=CAU"
              className="seller-img"
            />
            <h3 className="seller-name">{sellerName} Retailers</h3>
            <p className="seller-rating"></p>
            {/* <StarIcon color="primary" /> */}
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <div style={{ margin: "auto" }}>
              <div style={{ float: "right", marginRight: "4%" }}>
                🟢 Ordered On :{" "}
                {months[new Date(data.orderedAt).getMonth()] +
                  " " +
                  new Date(data.orderedAt).getDate() +
                  ", " +
                  new Date(data.orderedAt).getFullYear()}
              </div>
              <div>
                <br />
                <br />
                <Button color="primary" variant="outlined">
                  Total Cart Value :{" "}
                  {data.bids[data.bids.length - 1].biddingPrice}
                </Button>
                {/* <div class="stars1">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div> */}
                <br />
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<Icon>send</Icon>}
                  onClick={(e) => modalPass(data.index)}
                >
                  More Details
                </Button>
                <br />
                Happy Selling 🛍️
              </div>
            </div>
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <>
      {Loading && <LoadingScreen />}
      {!Loading && (
        <Grid container className="all_content">
          <Grid item xs={12} sm={12} md={12} lg={12} className="intro">
            <Grid container>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <img className="userImage" src={pic} />
              </Grid>
              <Grid item xs={12} sm={12} md={8} lg={8} className="userDetail">
                <h1 className="name">{firstName + " " + lastName}</h1>
                <h3 className="location">
                  {city + ", " + state + ", " + country}
                </h3>
                <p className="interest">Category: {category}</p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <h6 className="section-heading">Other Details</h6>
                <div className="allExtra">
                  <EmailIcon color="primary" />{" "}
                  <span className="extra-info">{email}</span>
                  <br></br>
                  <PhoneIcon color="primary" />
                  <span className="extra-info">{phoneNo}</span>
                  <br></br>
                  <AssignmentTurnedInIcon color="primary" />
                  <span className="extra-info">
                    {bidArray.length} Orders till now
                  </span>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={8} lg={8} className="products">
                {/* <h6 className="section-heading">Products</h6>
            <Grid container xs={12} sm={12} md={12} lg={12}>
              <Grid item xs={12} sm={5} md={5} lg={5} className="product">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHxnUgAMTCsiH_RIXW8D6gRcYIqB9dY_jSQ&usqp=CAU"
                  className="product-img"
                />
                <h3 className="product-name">Formal Blazer</h3>
                <p className="product-price">₹3000</p>
              </Grid>
              <Grid item xs={12} sm={5} md={5} lg={5} className="product">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2li0nH-jB5wmghNuwg9bsjMhpFlcFEEfLDA&usqp=CAU"
                  className="product-img"
                />
                <h3 className="product-name">Sports Shoes</h3>
                <p className="product-price">₹150</p>
              </Grid>
              <Grid item xs={12} sm={5} md={5} lg={5} className="product">
                <img
                  src="https://static.fratello.com/2017/06/DSC_6425-2.jpg"
                  className="product-img"
                />
                <h3 className="product-name">Gold watch</h3>
                <p className="product-price">₹15000</p>
              </Grid>
              <Grid item xs={12} sm={5} md={5} lg={5} className="product">
                <img
                  src="https://cdn.shopify.com/s/files/1/1089/8530/products/TB0905-NB_large.jpg?v=1573578354"
                  className="product-img"
                />
                <h3 className="product-name">Bag</h3>
                <p className="product-price">₹40 lakh</p>
              </Grid> 
            </Grid>*/}

                <br />
                <hr />
                <h6 className="section-heading">PAST ORDERS</h6>
                <hr />
                <div
                  style={{
                    height: "700px",
                    overflowY: "scroll",
                    overflowX: "hidden",
                  }}
                >
                  {bidArray.map((items, index) => {
                    items.index = index;
                    return <PastOrderCard {...items} />;
                  })}
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <div
            style={{
              right: 0,
              top: 0,
              margin: "20px",
              position: "fixed",
              color: "#000",
            }}
          >
            <FaWindowClose onClick={handleClose} />
          </div>
          <br />
          <div
            style={{
              width: "100%",
              textAlign: "center",
              transform: "translate3d(0%,10%,20px)",
              color: "#000",
            }}
          >
            <h1 id="simple-modal-title">
              <b> ITEMS </b>
            </h1>
            <div
              style={{
                height: "150px",
                overflowY: "scroll",
                overflowX: "hidden",
                marginBottom: "5%",
              }}
            >
              <table>
                <tr>
                  <th>Name</th>
                  <th>Qty</th>
                </tr>
                {items < itemArray.length &&
                  itemArray[items].map((val) => {
                    return (
                      <tr>
                        <td>{val.name}</td>
                        <td>{val.quantity}</td>
                      </tr>
                    );
                  })}
              </table>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SellerProfile;
