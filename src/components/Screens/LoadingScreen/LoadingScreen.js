import React from "react";
import loadingGif from "../../../images/loading.gif";
import locoCart from "../../../images/LocoCart.PNG";
export default function LoadingScreen() {
  return (
    <div style={{ height: "100%", width: "100%", backgroundColor: "#ffffff" }}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div>
          <img src={locoCart} height="150rem" width="150rem" />
        </div>
        <div style={{ paddingLeft: "3rem" }}>
          <img src={loadingGif} height="80rem" width="80rem" />
        </div>
      </div>
    </div>
  );
}
