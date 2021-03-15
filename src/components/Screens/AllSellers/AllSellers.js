import React, { useEffect, useState } from "react";
import Axios from "axios";
import Rating from "@material-ui/lab/Rating";
import VisibilityIcon from "@material-ui/icons/Visibility";
import RateReviewIcon from "@material-ui/icons/RateReview";
import { Link, useHistory } from "react-router-dom";
const jwt = require("jsonwebtoken");

export default function AllSellers(props) {
  const history = useHistory();
  const [userId, setUserId] = useState("");
  const [productname, setProductname] = useState("");
  const [allItems, setAllItems] = useState([]);

  const viewDetails = (idd) => {
      console.log(idd);
      localStorage.setItem("IDD",idd);
      history.push("/sellerproduct/"+props.match.params.id);
  }

  var arr = [];
  useEffect(async () => {
    try {
      const reps = await Axios.post(
        process.env.REACT_APP_BACKEND_API + "product/searchbyid",
        {
          id: props.match.params.id,
        }
      )
        .then((result) => {
          setProductname(result.data.products.Name);
          for (var key in result.data.products.Sellers) {
            var obj = result.data.products.Sellers[key];
            //   setAllItems(...result.data.products.Sellers[key]);
            arr.push(obj);
          }
        })
        .then((ress) => setAllItems(arr));
    } catch (e) {
      console.log(e);
    }
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
              src={seller.Image}
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
                  <h2>{productname}</h2>
                </div>
                <div style={{ width: "20%" }}>
                  <div style={{ float: "right", paddingRight: "15px" }}>
                    <p style={{ fontSize: "1.2rem", color: "#7e7474" }}>
                      <span>
                        <VisibilityIcon />
                        <sup>1000</sup>
                      </span>{" "}
                      <RateReviewIcon />
                      <sup>{seller.Comments.length}</sup>
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{ width: "100%", display: "flex", paddingRight: "20px" }}
              >
                <div style={{ color: "green", width: "20%" }}>
                  <h2>{seller.SellerPrice}</h2>
                </div>
                <div style={{ width: "80%" }}>
                  <div style={{ float: "right" }}>
                    <Rating
                      name="read-only"
                      value={seller.Rating.$numberDecimal}
                      precision={0.1}
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <p>{seller.Description}</p>

              <div style={{ width: "100%", marginBottom: "10px" }}>
                <div
                  style={{
                    float: "right",
                    paddingRight: "20px",
                  }}
                >
                <button class="button button2" onClick={(e) => viewDetails(seller.SellerId)}>VIEW DETAILS</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
