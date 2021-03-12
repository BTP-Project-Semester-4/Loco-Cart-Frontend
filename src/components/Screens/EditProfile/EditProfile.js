import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";
import { Input } from "@material-ui/core";
const jwt = require("jsonwebtoken");
toast.configure();

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default function EditProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState(0);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [updatePic, setUpdatePic] = useState(undefined);
  const [url, setUrl] = useState("");
  const [userId, setUserId] = useState("");
  const history = useHistory();

  useEffect(()=>{
    if(url!==""){
      axios
        .post(`http://localhost:3001/api/customer/editprofile`, {
          userId: userId,
          firstName: firstName,
          lastName: lastName,
          email: email,
          contactNo: contactNo,
          address: address,
          city: city,
          state: state,
          country: country,
          password: password,
          profilePicUrl: url,
        })
        .then(async (response) => {
          console.log(response);
          if (response.data.message === "Success") {
            toast.success("Sweet", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 1500,
            });
          } else {
            toast.warning(response.data.message, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 1500,
            });
          }
        })
        .catch((err) => console.error(err));
    }
  },[url]);

  useEffect(async () => {
    try {
      const jwtToken = await localStorage.getItem("CustomerJwt");
      const user = await jwt.verify(jwtToken, process.env.REACT_APP_JWT_SECRET);
      if (user) {
        setUserId(user);
        await axios
          .get(`http://localhost:3001/api/customer/${user._id}`)
          .then(async (response) => {
            console.log(response);
            const data = await response.data.customer;
            if (data) {
              setFirstName(data.firstName);
              setLastName(data.lastName);
              setEmail(data.email);
              setContactNo(data.contactNo);
              setAddress(data.address);
              setCity(data.city);
              setState(data.state);
              setCountry(data.country);
            }
          })
          .catch((err) => console.error(err));
      } else {
        toast.error("please signin to continue", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
        sleep(2000).then(() => {
          history.push("/signin");
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("please signin to continue", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      sleep(2000).then(() => {
        history.push("/signin");
      });
    }
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    if (password === ConfirmPassword) {
      const fileType = updatePic["type"];
      // const validImageTypes = ["image/jpg", "image/jpeg", "image/png"];
      // if (!validImageTypes.includes(fileType)) {
      //   toast.error("Invalid Image Type, Retry ?", {
      //     position: toast.POSITION.TOP_CENTER,
      //   });
      //   return;
      // }

      var fileSize = updatePic["size"];
      if (fileSize > 1000000) {
        //  alert('Photo Size Exceeds , Size must be less than 500Kb');
        toast.error("Photo Size Exceeds , Size must be less than 1MB", {
          position: toast.POSITION.TOP_CENTER,
        });
        return;
      }
      toast.info("Image Uploading ! Plese Wait !", {
        position: toast.POSITION.TOP_CENTER,
      });

      const data = new FormData();
      data.append("file",updatePic);
      data.append("upload_preset",process.env.REACT_APP_UPLOAD_PRESET);
      data.append("cloud_name",process.env.REACT_APP_CLOUD_NAME);
      fetch(
          process.env.REACT_APP_IMAGE_API,
          {
              method:"post",
              body: data
          }
      )
      .then(
          res=>res.json()
      )
      .then(
          data=>{
              setUrl(data.url);
              if(data.url === undefined){
                  toast.error(
                      'Error occured while uploading image',
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
                  console.log(data.url);
              }
          }
      )
    } else {
      toast.error("password in not equal to  confirm password", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
    }
  };
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        style={{
          width: "80%",
          margin: "auto",
          padding: "15px",
          borderRadius: "15px",
          border: "1px solid grey",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <div style={{ textAlign: "center", margin: "10px" }}>
          <h1>Edit Profile</h1>
        </div>
        <div style={{ width: "80%", margin: "auto" }}>
          <form onSubmit={submitHandler}>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "50%",
                  margin: "5px",
                  marginLeft: "10px",
                  marginRight: "0px",
                }}
              >
                <TextField
                  label="First Name"
                  value={firstName}
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div style={{ width: "50%", margin: "5px", marginRight: "0px" }}>
                <TextField
                  label="Last Name"
                  value={lastName}
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div style={{ width: "100%", margin: "10px" }}>
              <TextField
                label="Email"
                id="outlined-size-small"
                value={email}
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div style={{ width: "100%", margin: "10px" }}>
              <TextField
                label="Contact Number"
                id="outlined-size-small"
                type="number"
                value={contactNo}
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => setContactNo(e.target.value)}
              />
            </div>
            <div style={{ width: "100%", margin: "10px" }}>
              <TextField
                label="Address"
                value={address}
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div style={{ width: "100%", margin: "10px" }}>
              <TextField
                label="City"
                value={city}
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div style={{ width: "100%", margin: "10px" }}>
              <TextField
                label="State"
                value={state}
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div style={{ width: "100%", margin: "10px" }}>
              <TextField
                label="Country"
                value={country}
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div style={{ width: "100%", margin: "10px" }}>
              <TextField
                label="Password"
                value={password}
                variant="outlined"
                type="password"
                size="small"
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div style={{ width: "100%", margin: "10px" }}>
              <TextField
                label="Confirm Password"
                value={ConfirmPassword}
                variant="outlined"
                type="password"
                size="small"
                fullWidth
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div style={{ width: "100%", margin: "10px" }}>
              <label>
                <p style={{ size: "1.2rem" }}>Update Profile Pic</p>
              </label>
              <Input
                type="file"
                id="ii"
                pattern=".{1,50}"
                onChange={(e) => setUpdatePic(e.target.files[0])}
              />
            </div>
            <div style={{ width: "100%", margin: "10px", textAlign: "center" }}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
