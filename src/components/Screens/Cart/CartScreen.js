import React, { useEffect, useState } from "react";
import "./CartScreen.css";
import "./CartScreen.scss";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Axios from "axios";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const jwt = require("jsonwebtoken");
const env = require("dotenv");

env.config();
toast.configure();

export default function CartScreen() {
  const history = useHistory();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const [loading, setLoading] = useState(true);

  var userId = "";
  var totalQuantity = 0;

  useEffect(async () => {
    try {
      setLoading(true);
      const jwtToken = await localStorage.getItem("CustomerJwt");
      const user = await jwt.verify(jwtToken, process.env.REACT_APP_JWT_SECRET);
      userId = user._id;

      if (userId === "") {
        toast.error("Please sign in to continue !!!", {
          position: toast.POSITION.TOP_CENTER,
        });
        setLoading(false);
      } else {


        Axios.get( process.env.REACT_APP_BACKEND_API + `customer/${userId}` ).then((result) => {
          console.log(result.data.customer.city);
                  fetch(
                      process.env.REACT_APP_BACKEND_API + 'bid/getinitialbestseller',
                      {
                          method:"post",
                          headers:{
                              "Content-Type":"application/json"
                          },
                          body:JSON.stringify({
                              city: result.data.customer.city,
                              id: userId
                          })
                      }
                  ).then(res=>res.json())
                  .then(result=>{
                    setLoading(false);
                      if(result.message==="Success"){
                          console.log(result)
                          setTotalPrice(result.minPrice);
                          setCartItems(result.itemDetails);
                      }else if(result.message==="No seller available"){
                          toast.error(
                              'No seller available for the given set of products....Please try again later',
                              {
                              position: "top-right",
                              autoClose: 2000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined
                              }
                          );
                      }else if(result.message==="Cart empty"){
                          toast.error(
                              'Your cart is empty',
                              {
                              position: "top-right",
                              autoClose: 2000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined
                              }
                          );
                      }else{
                          toast.error(
                              'Some error occured',
                              {
                              position: "top-right",
                              autoClose: 2000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined
                              }
                          );
                      }
                  })
        })

      }
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <>
      {loading && <LoadingScreen />}
      {!loading && (
        <div className="CartScreenContainer">
          <div class="CartScreenbasket">
            <div class="CartScreenbasket-labels">
              <ul className="CartScreenUl">
                <li class="CartScreenitem item-heading CartScreenLi">Item</li>
                <li class="CartScreenquantity CartScreenLi">Quantity</li>
                <li class="CartScreensubtotal CartScreenLi">Subtotal</li>
              </ul>
            </div>
            {cartItems.map((item) => (
              <div class="CartScreenbasket-product">
                <div class="CartScreenitem">
                  <div class="CartScreenproduct-image">
                    <img
                      src={item.image}
                      alt="Placholder Image 2"
                      class="CartScreenproduct-frame CartScreenImg"
                    />
                  </div>
                  <div class="CartScreenproduct-details">
                    <h1>
                      <a href="#">{item.name}</a>
                    </h1>
                    <p>
                      <strong>{item.Description}</strong>
                    </p>
                    <h2>Price: ₹{item.minPrice}</h2>
                    <p style={{ color: "#ffffff" }}>
                      {(totalQuantity = totalQuantity + item.quantity)}
                      
                    </p>
                  </div>
                </div>
                <div class="CartScreenquantity">
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    class="CartScreenquantity-field CartScreenInput"
                  />
                </div>
                <div class="CartScreensubtotal">
                  <h3>₹{item.quantity * item.minPrice}</h3>
                </div>
                <div class="CartScreenremove">
                  <button className="CartScreenButton CartScreenRemoveButton">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>{" "}
          <aside className="CartScreenAside">
            <div class="CartScreensummary">
              <div class="CartScreensummary-total-items">
                <span class="CartScreentotal-items"></span> BIDDING SUMMARY
              </div>
              <div class="CartScreensummary-subtotal">
                <div class="CartScreensubtotal-title">Products</div>
                <div
                  class="CartScreensubtotal-value final-value"
                  id="basket-subtotal"
                >
                  {cartItems.length}
                </div>
                <div class="CartScreensubtotal-title">Quantity</div>
                <div
                  class="CartScreensubtotal-value final-value"
                  id="basket-subtotal"
                >
                  {totalQuantity}
                </div>
              </div>
              <div class="CartScreensummary-total">
                <div class="CartScreentotal-title">Total</div>
                <div
                  class="CartScreentotal-value final-value"
                  id="basket-total"
                >
                  ₹{totalPrice}
                </div>
              </div>
              <div class="CartScreensummary-checkout">
                <button
                  className="CartScreenButton CartScreencheckout-cta"
                  onClick={() => {
                    history.push("/placeorder");
                  }}
                >
                  BID NOW
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
