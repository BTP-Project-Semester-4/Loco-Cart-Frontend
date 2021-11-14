import React, { useEffect, useState } from "react";
import "./CartScreen.css";
import "./CartScreen.scss";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Axios from "axios";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

import TextField from "@material-ui/core/TextField";
const jwt = require("jsonwebtoken");
const env = require("dotenv");

env.config();
toast.configure();

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default function CartScreen() {
  const history = useHistory();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [NoSeller, setNoSeller] = useState(false);
  const [loading, setLoading] = useState(true);

  var userId = "";
  const [userid, setUserid] = useState("");
  var totalQuantity = 0;

  useEffect(async () => {
    try {
      setLoading(true);
      const jwtToken = await localStorage.getItem("CustomerJwt");
      const user = await jwt.verify(jwtToken, process.env.REACT_APP_JWT_SECRET);
      userId = user._id;
      // await setUserid(user._id);
      console.log(userId);
      if (userId === "") {
        toast.error("Please sign in to continue !!!", {
          position: toast.POSITION.TOP_CENTER,
        });
        setLoading(false);
      } else {
        setUserid(user._id);
        Axios.get(
          process.env.REACT_APP_BACKEND_API + `customer/${userId}`
        ).then((result) => {
          console.log(result.data.customer.city);
          fetch(
            process.env.REACT_APP_BACKEND_API + "bid/getinitialbestseller",
            {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                city: result.data.customer.city,
                id: userId,
              }),
            }
          )
            .then((res) => res.json())
            .then((result) => {
              setLoading(false);
              if (result.message === "Success") {
                console.log(result);
                setTotalPrice(result.minPrice);
                setCartItems(result.itemDetails);
              } else if (result.message === "No seller available") {
                toast.error(
                  "No seller available for the given set of products....Please try again later",
                  {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  }
                );
                setTotalPrice(result.minPrice);
                setCartItems(result.itemDetails);
                setNoSeller(true);
                console.log(result.itemDetails);
              } else if (result.message === "Cart empty") {
                toast.error("Your cart is empty", {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              } else {
                toast.error("Some error occured", {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }
            });
        });
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  const updateQty = (productId, qty) => {
    Axios.post(
      process.env.REACT_APP_BACKEND_API + "customer/updatevalueofcart",
      {
        customerId: userid,
        productId: productId,
        qty: qty,
      }
    )
      .then((res) => {
        console.log(res);
        if (res.data.message === "Success") {
          toast.success("quantity updated successfully !!!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000,
          });
          sleep(1200).then(() => {
            window.location.reload(false);
          });
        } else {
          toast.error("Something went wrong !!!", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
      .catch((err) => console.error(err));
  };
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
                      src={NoSeller ? item.image[1].Image : item.image}
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
                    <h2>
                      Price: ₹
                      {NoSeller ? item.image[1].SellerPrice : item.minPrice}
                    </h2>
                    <p style={{ color: "#ffffff" }}>
                      {(totalQuantity = totalQuantity + item.quantity)}
                    </p>
                  </div>
                </div>
                <div class="CartScreenquantity">
                  <TextField
                    variant="outlined"
                    value={item.quantity}
                    onChange={(e) => {
                      updateQty(item.id, e.target.value);
                    }}
                  />
                </div>
                <div class="CartScreensubtotal">
                  <h3>
                    ₹{" "}
                    {NoSeller
                      ? item.quantity * item.image[1].SellerPrice
                      : item.quantity * item.minPrice}
                  </h3>
                </div>
                <div class="CartScreenremove">
                  <button
                    className="CartScreenButton CartScreenRemoveButton"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(userId + " " + item.id);
                      Axios.post(
                        process.env.REACT_APP_BACKEND_API +
                          "customer/removefromcart",
                        {
                          customerId: userid,
                          productId: item.id,
                        }
                      )
                        .then((res) => {
                          console.log(res);
                          if (res.data.message === "Success") {
                            toast.success(
                              "Item removed from cart successfully !!!",
                              {
                                position: toast.POSITION.TOP_CENTER,
                                autoClose: 1000,
                              }
                            );
                            sleep(1200).then(() => {
                              window.location.reload(false);
                            });
                          } else {
                            toast.error("Something went wrong !!!", {
                              position: toast.POSITION.TOP_CENTER,
                            });
                          }
                        })
                        .catch((err) => console.error(err));
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>{" "}
          <aside className="CartScreenAside">
            <div class="CartScreensummary">
              <div class="CartScreensummary-total-items">
                <span class="CartScreentotal-items"></span> ORDER SUMMARY
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
                {NoSeller ? (
                  <p style={{ color: "red" }}>No seller available</p>
                ) : (
                  <button
                    className="CartScreenButton CartScreencheckout-cta"
                    onClick={() => {
                      history.push("/placeorder");
                    }}
                  >
                    ORDER NOW
                  </button>
                )}
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
