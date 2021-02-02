import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./productdescription.css";
import { Link } from "react-router-dom";
import Axios from "axios";

const Productdesc = (props) => {
  const [miniiPrice, setminiiPrice] = React.useState(10000000);
  const [discription, setdiscription] = React.useState("Loading");
  const [IImage, setIImage] = React.useState("Loading...");
  const [name, setname] = React.useState("Loading...");
  const [category, setcategory] = React.useState("Loading...");
  const [sellerId, setsellerId] = React.useState("Loading...");

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
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="productdescription.css" rel="stylesheet" />
      <section id="product-info">
        <div className="item-image-parent">
          <img
            src={IImage}
            alt="default"
            style={{
              width: "400px",
              height: "600px",
              margin: "20px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          />
        </div>
        <div className="item-info-parent">
          <div className="main-info">
            <p className="ProductDiscContent"> Home {" > " + category} </p>
            <h3 className="ProductDiscName">
              {name + " "}
              <sup>
                <span
                  className="ProductDescriptionStarRating"
                  style={{ textDecoration: "none" }}
                >
                  4.0
                </span>
                <span>⭐⭐⭐⭐</span>
              </sup>
            </h3>

            <p style={{ fontSize: "1.3rem", color: "green" }}>
              PRICE:
              <span id="price" style={{ fontStyle: "italic" }}>
                {" "}
                ₹{miniiPrice}
              </span>
            </p>
          </div>
          <div className="select-items">
            <div className="change-color"></div>
            <div className="description">
              <ul>
                <li>
                  <div>
                    <h4 className="ProductDescHeadings">Description : </h4>
                    <div className="ProductDiscBox">
                      <p className="ProductDiscContent">{discription}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="ProductDiscBox">
                    <h4 className="ProductDescHeadings">Display: </h4>
                    <p className="ProductDiscContent">
                      {" "}
                      Innovative Display Technology
                    </p>
                  </div>
                </li>
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

                {/* <li>
                  <Link to="/cart">
                    <button class="button button2">ADD TO CART</button>
                  </Link>
                  <Link to={"/sellerprofile/" + sellerId}>
                    <button class="button button2">SELLER PROFILE</button>
                  </Link>
                </li> */}
              </ul>
            </div>
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
        </div>
      </section>
    </>
  );
};
export default Productdesc;
