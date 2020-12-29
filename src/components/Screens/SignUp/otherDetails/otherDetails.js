import React from "react";
import { Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./otherDetails.modules.css";

const UseStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  input: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function otherDetails() {
  const classes = UseStyles();
  return (
    <div>
      <Container className="container z-depth-5">
        <div class="row">
          <h3>
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
        <div class="row submitButton">
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </Container>
    </div>
  );
}
