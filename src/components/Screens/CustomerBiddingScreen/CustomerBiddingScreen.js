import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./CustomerBiddingScreen.css";
import Grid from "@material-ui/core/Grid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const jwt = require("jsonwebtoken");

toast.configure();

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

export default function CustomerBiddingScreen(props) {
  const [bidSummary, setBidSummary] = useState({});
  const [products, setProducts] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [price, setPrice] = useState(0);
  const [id, setId] = useState(undefined);
  const [bidId, setBidId] = useState(undefined);
  const [update, setUpdate] = useState(0);
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setLoading(true);
      const decodedToken = jwt.verify(
        localStorage.getItem("CustomerJwt"),
        process.env.REACT_APP_JWT_SECRET
      );
      setId(decodedToken._id);
      console.log(decodedToken);
      fetch(
        process.env.REACT_APP_BACKEND_API +
          "bid/customer/" +
          props.match.params.id,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            customerId: decodedToken._id,
          }),
        }
      )
        .then((res) => res.json())
        .then((result) => {
          setLoading(false);
          console.log(result);
          if (result.message === "Success") {
            setBidId(result.bid._id);
            setBidSummary({
              totalItems: result.products.length,
              currentMinBid: result.sellers[0].biddingPrice,
              status:
                (Date.now() - new Date(result.bid.orderedAt)) / (1000 * 60) <
                180
                  ? "Ongoing"
                  : "Expired",
              bidDate:
                months[new Date(result.bid.orderedAt).getMonth()] +
                " " +
                new Date(result.bid.orderedAt).getDate() +
                ", " +
                new Date(result.bid.orderedAt).getFullYear(),
              timeRemaining:
                (Date.now() - new Date(result.bid.orderedAt)) / (1000 * 60) <
                180
                  ? 180 -
                    (
                      (Date.now() - new Date(result.bid.orderedAt)) /
                      (1000 * 60)
                    ).toFixed(0) +
                    " minutes"
                  : "---",
            });
            setProducts(result.products);
            setSellers(result.sellers);
          } else {
            history.push("/error");
          }
        });
    } catch (err) {
      setLoading(false);
      console.log(err);
      toast.error("Please login first !", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      history.push("/signin");
    }
  }, [update]);

  return (
    <>
      {loading && <LoadingScreen />}
      {!loading && (
        <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
          <div className="bidding_screen_all_content">
            <div className="bidding_screen_heading">
              <h1>BIDDING SCREEN</h1>
            </div>
            <div className="bidding_screen_body">
              <h1
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                BID SUMMARY
              </h1>
              <Grid container style={{ padding: "8px" }}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  md={6}
                  style={{
                    textAlign: "left",
                    borderBottom: "1px solid gray",
                    padding: "5px",
                  }}
                >
                  <h3 className="bid_summary">
                    TOTAL ITEMS : {bidSummary.totalItems}
                  </h3>
                  <h3 className="bid_summary">
                    CURRENT MIN BID: ₹{bidSummary.currentMinBid}
                  </h3>
                  <h3 className="bid_summary">
                    BID STATUS:{" "}
                    <span
                      className={
                        bidSummary.status === "Ongoing"
                          ? "status_green"
                          : "status_red"
                      }
                    >
                      {bidSummary.status}
                    </span>
                  </h3>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  md={6}
                  style={{
                    textAlign: "left",
                    borderBottom: "1px solid gray",
                    padding: "5px",
                  }}
                >
                  <h3 className="bid_summary">
                    BID DATE : {bidSummary.bidDate}
                  </h3>
                  <h3 className="bid_summary">
                    TIME REMAINING : {bidSummary.timeRemaining}
                  </h3>
                </Grid>
              </Grid>

              <h1>LIST OF ITEMS</h1>

              {products.map((data) => {
                return (
                  <Grid container style={{ padding: "5px" }}>
                    <Grid
                      style={{
                        borderBottom: "1.5px solid gray",
                      }}
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      lg={4}
                    >
                      <img
                        src={data.image}
                        style={{
                          borderRadius: "10px",
                          width: "100%",
                          height: "220px",
                          marginTop: "10px",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      />
                    </Grid>
                    <Grid
                      style={{
                        textAlign: "left",
                        padding: "10px",
                        borderBottom: "1.5px solid gray",
                      }}
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      lg={8}
                    >
                      <h2 className="item_details">NAME : {data.name}</h2>
                      <h2 className="item_details">
                        CATEGORY : {data.category}
                      </h2>
                      <h2 className="item_details">
                        QUANTITY : {data.quantity}
                      </h2>
                    </Grid>
                  </Grid>
                );
              })}

              <h1>LIST OF BIDDING SELLERS</h1>
              {sellers.map((data) => {
                return (
                  <Grid
                    style={{
                      maxWidth: "560px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                    container
                  >
                    <Grid
                      style={{ borderBottom: "1px solid gray" }}
                      item
                      xs={3}
                      sm={3}
                      md={3}
                      lg={3}
                    >
                      <img
                        src={data.image}
                        style={{
                          borderRadius: "50%",
                          width: "60px",
                          height: "60px",
                          marginTop: "10px",
                        }}
                      />
                    </Grid>
                    <Grid
                      style={{
                        borderBottom: "1px solid gray",
                        textAlign: "left",
                      }}
                      item
                      xs={9}
                      sm={9}
                      md={9}
                      lg={9}
                    >
                      <h3
                        style={{
                          marginTop: "10px",
                        }}
                      >
                        {data.name}
                      </h3>
                      <h4
                        style={{
                          marginTop: "10px",
                        }}
                      >
                        BIDDING PRICE : ₹{data.biddingPrice}
                      </h4>
                    </Grid>
                  </Grid>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
