import React, { useState } from "react";
import { Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./otherSellerDetails.modules.css";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const UseStyles = makeStyles((theme) => ({}));

export default function OtherSellerDetails() {
  const classes = UseStyles();

  const [category, setCategory] = useState("");
  return (
    <div style={{ width: "100%" }}>
      <Container
        className="container z-depth-5 otherSellerDetailsContainer"
        style={{ width: "100%" }}
      >
        <form style={{ width: "100%" }}>
          <div class="row">
            <h3 className="otherSellerDetailsH3">
              <center>Other Details</center>
            </h3>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="contactNo" type="number" class="validate" required />
              <label for="contactNo">Contact Number</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="country" type="text" class="validate" required />
              <label for="country">Country</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="state" type="text" class="validate" required />
              <label for="state">State</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="city" type="text" class="validate" required />
              <label for="city">City</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="address" type="text" class="validate" required />
              <label for="address">Address</label>
            </div>
          </div>
          <div class="row">
            <div class="col s12">
              <InputLabel id="categoryLabel">category</InputLabel>
              <Select
                labelId="categoryLabel"
                id="category"
                style={{ width: "100%" }}
                // onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value={"Stationery"}>Stationery</MenuItem>
                <MenuItem value={"Grocery"}>Grocery</MenuItem>
                <MenuItem value={"Electronics"}>Electronics</MenuItem>
                <MenuItem value={"Footwear"}>Footwear</MenuItem>
                <MenuItem value={"Sports"}>Sports</MenuItem>
                <MenuItem value={"Books"}>Books</MenuItem>
              </Select>
            </div>
          </div>
          <div className="row">
            <Button
              variant="contained"
              color="primary"
              className="otherSellerDetailsSubmit otherSellerDetailsButton"
            >
              Submit
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}
