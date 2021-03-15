import React, { useEffect, useState } from "react";
import Axios from "axios";
import Rating from "@material-ui/lab/Rating";
import VisibilityIcon from "@material-ui/icons/Visibility";
import RateReviewIcon from "@material-ui/icons/RateReview";
import { Link } from "react-router-dom";
const jwt = require("jsonwebtoken");

export default function SellerProducts() {
  const [allItems, setAllItems] = useState([]);
  var arr = [];
  useEffect(async () => {
    try {
      var jwtToken = await localStorage.getItem("sellerjwt");
      const user = await jwt.verify(jwtToken, process.env.REACT_APP_JWT_SECRET);
      if (user) {
        const reps = await Axios.get(
          process.env.REACT_APP_BACKEND_API + `seller_product/${user._id}`
        ).then((result) => {
          console.log(result);
          setAllItems(result.data.sellerProducts);
        });
      }
    } catch (e) {
      console.log(e);
    }
    console.log(allItems);
  }, []);
  return (
    <div style={{ width: "100%", marginTop: "20px", marginBottom: "10px" }}>
      {allItems.map((seller) => (
        <div
          style={{
            width: "90%",
            marginLeft: "5%",
            borderRadius: "10px",
            border: "1px solid grey",
            height: "180px",
            display: "flex",
            marginBottom: "10px",
          }}
        >
          <div style={{ width: "20%" }}>
            <img
              src={seller.sellerSpecificDetails.Image}
              alt=""
              height="150px"
              width="150px"
              style={{ margin: "auto", display: "block", marginTop: "15px" }}
            />
          </div>
          <div style={{ width: "80%" }}>
            <div style={{ width: "100%", float: "right" }}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  paddingRight: "20px",
                  paddingTop: "10px",
                }}
              >
                <div style={{ color: "blue", width: "80%" }}>
                  <h2>{seller.Name}</h2>
                </div>
                <div style={{ width: "20%" }}>
                  <div style={{ float: "right", paddingRight: "15px" }}>
                    <p style={{ fontSize: "1.2rem", color: "#7e7474" }}>
                      <span>
                        <VisibilityIcon />
                        <sup>1000</sup>
                      </span>{" "}
                      <RateReviewIcon />
                      <sup>{seller.sellerSpecificDetails.Comments.length}</sup>
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{ width: "100%", display: "flex", paddingRight: "20px" }}
              >
                <div style={{ color: "green", width: "20%" }}>
                  <h2>₹{seller.sellerSpecificDetails.SellerPrice}</h2>
                </div>
                <div style={{ width: "80%" }}>
                  <div style={{ float: "right" }}>
                    <Rating
                      name="read-only"
                      value={seller.sellerSpecificDetails.Rating.$numberDecimal}
                      precision={0.1}
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <p>{seller.sellerSpecificDetails.Description}</p>

              <div style={{ width: "100%", marginTop: "30px" }}>
                <div style={{ float: "left" }}>
                  <h2>Qty: {seller.sellerSpecificDetails.Quantity}</h2>
                </div>
                <div
                  style={{
                    float: "right",
                    paddingRight: "20px",
                  }}
                >
                  <Link to="/cart">
                    <button class="button button2">VIEW DETAILS</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
