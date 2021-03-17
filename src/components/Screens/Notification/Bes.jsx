import React from "react";
import "./Besa.css";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const jwt = require("jsonwebtoken");

toast.configure();

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const times = new Date().toLocaleTimeString();
const Notifications = () => {
  const history = useHistory();
  const [notifications, setNotifications] = React.useState([]);
  React.useEffect(async () => {
    try {
      const jwtToken = await localStorage.getItem("CustomerJwt");
      console.log(jwt);
      const user = await jwt.verify(jwtToken, process.env.REACT_APP_JWT_SECRET);

      if (user) {
        console.log(user);
        const resp = await Axios.get(
          process.env.REACT_APP_BACKEND_API + `notification/${user._id}`
        )
          .then(function (response) {
            console.log(response);
            if (response.data.message === "Success") {
              setNotifications(response.data.notification.notifications);
              toast.success("Sweet !", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500,
              });
            } else if (response.data.message === "Your cart is empty") {
              toast.warning("No notifications for now !!!", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500,
              });
            } else {
              toast.error("Something went wrong !!!", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500,
              });
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        toast.error("Please signin to see notifications !!!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
        sleep(2000).then(() => {
          history.push("/signin");
          window.location.reload(false);
        });
      }
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <div>
      <div style={{ height: "10px" }}></div>
      <div className="container pb-4">
        <div className="row">
          <div className="col-lg-3">
            {notifications.reverse().map((notification) => (
              <div className="horizontal-card">
                <img src={notification.image} alt="" />
                <div className="horizontal-card-body" style={{ width: "100%" }}>
                  <div className="orders" style={{ width: "100%" }}>
                    <div>
                      <p className="name" style={{ float: "left" }}>
                        {notification.heading}
                      </p>
                    </div>
                    <div style={{ float: "right" }}>
                      {"Time:" +
                        notification.timeStamp.slice(12, 19) +
                        "  Date:" +
                        notification.timeStamp.slice(0, 10)}
                    </div>
                  </div>
                  <div>
                    <p className="order">{notification.description}</p>
                  </div>

                  <div className="profile">
                    <a href={notification.link}>Click Here</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Notifications;
