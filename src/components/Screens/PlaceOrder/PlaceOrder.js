import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./PlaceOrder.css";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import DescriptionIcon from "@material-ui/icons/Description";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Button from "@material-ui/core/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const jwt = require("jsonwebtoken");

toast.configure();

const PlaceOrder = () => {
  const [status, setStatus] = useState(0);
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [id, setId] = useState("");
  const [itemDetails, setItemDetails] = useState([]);
  const [sellerDetails, setSellerDetails] = useState({});
  const [minPrice, setMinPrice] = useState(undefined);
  const [otp, setOtp] = useState("");
  const [otpIp, setOtpIp] = useState("");
  const history = useHistory();

  useEffect(() => {
    try {
      console.log(localStorage.getItem("CustomerJwt"));
      const decodedToken = jwt.verify(
        localStorage.getItem("CustomerJwt"),
        process.env.REACT_APP_JWT_SECRET
      );
      setId(decodedToken._id);
      setCity(decodedToken.city);
    } catch (err) {
      console.log(err);
      toast.error("Please sign in first", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      history.push("/signin");
    }
  }, []);

  const setAddressHandler = () => {
    if (addressLine1 !== "") {
      if (addressLine2 !== "") {
        if (city !== "") {
          if (pinCode !== "") {
            //ADDRESS INPUTS ARE VALID
            fetch(
              process.env.REACT_APP_BACKEND_API + "bid/getinitialbestseller",
              {
                method: "post",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  city: city,
                  id: id,
                }),
              }
            )
              .then((res) => res.json())
              .then((result) => {
                if (result.message === "Success") {
                  console.log(result);
                  setSellerDetails(result.seller);
                  setItemDetails(result.itemDetails);
                  setMinPrice(result.minPrice);
                  setStatus(1);
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
          } else {
            toast.error("Please enter pin code", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        } else {
          toast.error("Please enter city name", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } else {
        toast.error("Please enter address line 2", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      toast.error("Please enter address line 1", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const sendOtpHandler = () => {
    fetch(process.env.REACT_APP_BACKEND_API + "bid/getotp", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.message === "Success") {
          setOtp(result.otp);
          setStatus(2);
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
  };

  const placeOrderHandler = () => {
    if (otpIp == otp) {
      var items = [];
      itemDetails.forEach((it) => {
        items.push({
          itemId: it.id,
          quantity: it.quantity,
        });
      });
      console.log(items);
      fetch(process.env.REACT_APP_BACKEND_API + "bid/placeorder", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerId: id,
          initialSellerId: sellerDetails.sellerId,
          price: minPrice,
          itemList: items,
          addressLine1: addressLine1,
          addressLine2: addressLine2,
          city: city,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.message === "Success") {
            setStatus(3);
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
    } else {
      toast.error("Invalid OTP", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="place_order_all_content">
      <div className="top_section">
        <Grid container>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            {status == 0 ? (
              <LocationCityIcon
                style={{
                  height: "50px",
                  width: "50px",
                  color: "gray",
                }}
              />
            ) : (
              <LocationCityIcon
                style={{
                  height: "50px",
                  width: "50px",
                  color: "#00cc00",
                }}
              />
            )}
            <br></br>
            {status == 0 ? (
              <CheckCircleIcon
                style={{
                  height: "20px",
                  width: "20px",
                  color: "gray",
                }}
              />
            ) : (
              <CheckCircleIcon
                style={{
                  height: "20px",
                  width: "20px",
                  color: "#00cc00",
                }}
              />
            )}
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            {status <= 1 ? (
              <DescriptionIcon
                style={{
                  height: "50px",
                  width: "50px",
                  color: "gray",
                }}
              />
            ) : (
              <DescriptionIcon
                style={{
                  height: "50px",
                  width: "50px",
                  color: "#00cc00",
                }}
              />
            )}
            <br></br>
            {status <= 1 ? (
              <CheckCircleIcon
                style={{
                  height: "20px",
                  width: "20px",
                  color: "gray",
                }}
              />
            ) : (
              <CheckCircleIcon
                style={{
                  height: "20px",
                  width: "20px",
                  color: "#00cc00",
                }}
              />
            )}
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            {status <= 2 ? (
              <VerifiedUserIcon
                style={{
                  height: "50px",
                  width: "50px",
                  color: "gray",
                }}
              />
            ) : (
              <VerifiedUserIcon
                style={{
                  height: "50px",
                  width: "50px",
                  color: "#00cc00",
                }}
              />
            )}
            <br></br>
            {status <= 2 ? (
              <CheckCircleIcon
                style={{
                  height: "20px",
                  width: "20px",
                  color: "gray",
                }}
              />
            ) : (
              <CheckCircleIcon
                style={{
                  height: "20px",
                  width: "20px",
                  color: "#00cc00",
                }}
              />
            )}
          </Grid>
        </Grid>
      </div>
      <div className="main_content">
        {status == 0 ? (
          <div>
            <h1 className="step">STEP 1 OF 3</h1>
            <p className="message">Enter you location to proceed further</p>
            <Grid container>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <div style={{ margin: "10px" }}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Address Line 1
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      labelWidth={110}
                      value={addressLine1}
                      onChange={(e) => {
                        setAddressLine1(e.target.value);
                      }}
                    />
                  </FormControl>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <div style={{ margin: "10px" }}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Address Line 2
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      labelWidth={110}
                      value={addressLine2}
                      onChange={(e) => {
                        setAddressLine2(e.target.value);
                      }}
                    />
                  </FormControl>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <div style={{ margin: "10px" }}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">
                      City
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      labelWidth={75}
                      value={city}
                      disabled="disabled"
                    />
                  </FormControl>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <div style={{ margin: "10px" }}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Pin Code
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      labelWidth={65}
                      type="number"
                      value={pinCode}
                      onChange={(e) => {
                        setPinCode(e.target.value);
                      }}
                    />
                  </FormControl>
                </div>
              </Grid>
            </Grid>
            <div style={{ textAlign: "center", margin: "10px" }}>
              <Button
                variant="contained"
                color="primary"
                style={{
                  height: "40px",
                  fontSize: "1rem",
                }}
                onClick={() => {
                  setAddressHandler();
                }}
              >
                SAVE AND PROCEED
              </Button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {status == 1 ? (
          <div>
            <h1 className="step">STEP 2 OF 3</h1>
            <p className="message">LIST OF PRODUCTS IN THE CART</p>
            {itemDetails.map((item) => {
              return (
                <div>
                  <Grid container>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                      <img src={item.image} className="product_image" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={8}>
                      <h3 className="product_detail">{item.name}</h3>
                      <p className="product_detail">
                        CATEGORY : {item.category}
                      </p>
                      <p className="product_detail">
                        MINIMUM PRICE WITHOUT BID : ₹{item.minPrice}
                      </p>
                      <p className="product_detail">
                        QUANTITY : {item.quantity}
                      </p>
                      <p className="product_detail_total_price">
                        TOTAL PRICE : ₹{item.totalPrice}
                      </p>
                    </Grid>
                  </Grid>
                  <div
                    style={{
                      backgroundColor: "#538df6",
                      height: "0.5px",
                      width: "95%",
                      margin: "auto",
                      marginTop: "5px",
                    }}
                  ></div>
                </div>
              );
            })}

            <h3 className="total_price">
              TOTAL PRICE OF ALL ITEMS : ₹{minPrice}
            </h3>
            <p className="note">
              Note : This is the maximum price that you may pay for your order
              and it may fall whenever a new seller makes a bid.
            </p>
            <h3 className="total_price">
              SELLER WITH LOWEST PRICE BEFORE BIDDING PHASE
            </h3>
            <Grid container>
              <Grid item xs={12} sm={12} sm={6} lg={4}>
                <img src={sellerDetails.image} className="product_image" />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={8}>
                <h3 className="product_detail">
                  {sellerDetails.firstName} {sellerDetails.lastName}
                </h3>
                <p className="product_detail">CITY : {sellerDetails.city}</p>
                <p className="product_detail">
                  ADDRESS : {sellerDetails.address}
                </p>
                <p className="product_detail">
                  INTEREST : {sellerDetails.interest}
                </p>
                {/* <p className="product_detail">ORDERS DELIVERED TILL NOW : 125</p> */}
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              style={{
                height: "40px",
                fontSize: "1rem",
                margin: "10px",
              }}
              onClick={() => {
                setStatus(0);
              }}
            >
              PREVIOUS
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{
                height: "40px",
                fontSize: "1rem",
                float: "right",
                margin: "10px",
              }}
              onClick={() => {
                sendOtpHandler();
              }}
            >
              NEXT
            </Button>
          </div>
        ) : (
          <div></div>
        )}
        {status == 2 ? (
          <div>
            <h1 className="step">STEP 3 OF 3</h1>
            <h3 className="total_price">ENTER THE OTP SENT TO YOUR EMAIL ID</h3>
            <div style={{ margin: "10px", maxWidth: "768px" }}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">
                  ENTER OTP
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  labelWidth={85}
                  value={otpIp}
                  onChange={(e) => {
                    setOtpIp(e.target.value);
                  }}
                />
              </FormControl>
            </div>
            <Button
              variant="contained"
              color="primary"
              style={{
                height: "40px",
                fontSize: "1rem",
                margin: "10px",
              }}
              onClick={() => {
                setStatus(1);
              }}
            >
              PREVIOUS
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{
                height: "40px",
                fontSize: "1rem",
                float: "right",
                margin: "10px",
              }}
              onClick={() => {
                placeOrderHandler();
              }}
            >
              SUBMIT
            </Button>
          </div>
        ) : (
          <div></div>
        )}
        {status == 3 ? (
          <div style={{ textAlign: "center" }}>
            <CheckCircleIcon
              style={{
                height: "100px",
                width: "100px",
                color: "#00cc00",
              }}
            />
            <h3 className="total_price">ORDER PLACED SUCCESSFULLY</h3>
            <p className="product_detail">
              Your order has been successfully placed and addded to the bidding
              window. Sellers within your city can now see your order in the
              bidding section and bid for the lowest price
            </p>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default PlaceOrder;
