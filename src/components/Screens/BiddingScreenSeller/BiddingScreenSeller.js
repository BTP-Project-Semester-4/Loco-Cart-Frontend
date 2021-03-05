import React from "react";
import "./BiddingScreenSeller.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import GavelIcon from "@material-ui/icons/Gavel";
export default function BiddingScreenSeller() {
  return (
    <div className="BiddingScreenBody">
      <div class="container">
        <div class="title">
          <h2 className="BiddingScreenh2">Order Id: 12345</h2>
        </div>
        <div class="d-flex">
          <div style={{ display: "block" }}>
            <div className="BiddingScreenLeft">
              <div
                style={{
                  width: "100%",
                }}
              >
                <b>
                  <div className="orders" style={{ width: "100%" }}>
                    <div>
                      <p style={{ float: "left" }}>Name</p>
                    </div>
                    <div style={{ float: "right" }}>Qty</div>
                  </div>
                </b>
              </div>
            </div>
            <div className="BiddingScreenLeft">
              <div
                style={{
                  width: "100%",
                }}
              >
                <div className="orders" style={{ width: "100%" }}>
                  <div>
                    <p style={{ float: "left" }}>Apsara pencil</p>
                  </div>
                  <div style={{ float: "right" }}>100</div>
                </div>
              </div>
            </div>
            <div className="BiddingScreenLeft">
              <div
                style={{
                  width: "100%",
                }}
              >
                <div className="orders" style={{ width: "100%" }}>
                  <div>
                    <p style={{ float: "left" }}>Trimax pen</p>
                  </div>
                  <div style={{ float: "right" }}>20</div>
                </div>
              </div>
            </div>
          </div>
          <div class="Yorder">
            <div style={{ textAlign: "center" }}>
              <h3>Bidding Summary</h3>
            </div>
            <div
              style={{
                width: "100%",
              }}
            >
              <div className="orders" style={{ width: "100%" }}>
                <div>
                  <p style={{ float: "left" }}>Present Bid</p>
                </div>
                <div style={{ float: "right" }}>Rs. 2000</div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
              }}
            >
              <div className="orders" style={{ width: "100%" }}>
                <div>
                  <p style={{ float: "left" }}>Expiration Data</p>
                </div>
                <div style={{ float: "right" }}>12-11-2020</div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
              }}
            >
              <div className="orders" style={{ width: "100%" }}>
                <div>
                  <p style={{ float: "left" }}>Expiration Time</p>
                </div>
                <div style={{ float: "right" }}>14: 00</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#ffffff", width: "100%" }}>
          <div style={{ padding: "10px", display: "flex", width: "100%" }}>
            <div
              style={{
                width: "100%",
              }}
            >
              <div className="orders" style={{ width: "100%" }}>
                <div>
                  <p style={{ float: "left", display: "flex" }}>
                    <h1>Your Bid:</h1>{" "}
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      type="number"
                    />
                  </p>
                </div>
                <div style={{ float: "right" }}>
                  <Button variant="contained" color="primary">
                    <p>
                      <GavelIcon /> Bid Now
                    </p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Second container */}
      <div class="container">
        <div class="title">
          <h2 className="BiddingScreenh2">Order Id: 12345</h2>
        </div>
        <div class="d-flex">
          <div style={{ display: "block" }}>
            <div className="BiddingScreenLeft">
              <div
                style={{
                  width: "100%",
                }}
              >
                <b>
                  <div className="orders" style={{ width: "100%" }}>
                    <div>
                      <p style={{ float: "left" }}>Name</p>
                    </div>
                    <div style={{ float: "right" }}>Qty</div>
                  </div>
                </b>
              </div>
            </div>
            <div className="BiddingScreenLeft">
              <div
                style={{
                  width: "100%",
                }}
              >
                <div className="orders" style={{ width: "100%" }}>
                  <div>
                    <p style={{ float: "left" }}>Apsara pencil</p>
                  </div>
                  <div style={{ float: "right" }}>100</div>
                </div>
              </div>
            </div>
            <div className="BiddingScreenLeft">
              <div
                style={{
                  width: "100%",
                }}
              >
                <div className="orders" style={{ width: "100%" }}>
                  <div>
                    <p style={{ float: "left" }}>Trimax pen</p>
                  </div>
                  <div style={{ float: "right" }}>20</div>
                </div>
              </div>
            </div>
          </div>
          <div class="Yorder">
            <div style={{ textAlign: "center" }}>
              <h3>Bidding Summary</h3>
            </div>
            <div
              style={{
                width: "100%",
              }}
            >
              <div className="orders" style={{ width: "100%" }}>
                <div>
                  <p style={{ float: "left" }}>Present Bid</p>
                </div>
                <div style={{ float: "right" }}>Rs. 2000</div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
              }}
            >
              <div className="orders" style={{ width: "100%" }}>
                <div>
                  <p style={{ float: "left" }}>Expiration Data</p>
                </div>
                <div style={{ float: "right" }}>12-11-2020</div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
              }}
            >
              <div className="orders" style={{ width: "100%" }}>
                <div>
                  <p style={{ float: "left" }}>Expiration Time</p>
                </div>
                <div style={{ float: "right" }}>14: 00</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#ffffff", width: "100%" }}>
          <div style={{ padding: "10px", display: "flex", width: "100%" }}>
            <div
              style={{
                width: "100%",
              }}
            >
              <div className="orders" style={{ width: "100%" }}>
                <div>
                  <p style={{ float: "left", display: "flex" }}>
                    <h1>Your Bid:</h1>{" "}
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      type="number"
                    />
                  </p>
                </div>
                <div style={{ float: "right" }}>
                  <Button variant="contained" color="primary">
                    <p>
                      <GavelIcon /> Bid Now
                    </p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
