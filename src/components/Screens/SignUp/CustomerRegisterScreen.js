import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { Container } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import "./otherDetails/otherDetails.modules.css";
import axios from "axios";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        LocoShop
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(/images/signin.PNG)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(1, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
  },
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

export default function CustomerRegisterScreen() {
  const classes = useStyles();

  const [otherDetails, setOtherDetails] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (password.length > 8 && password === confirmPassword) {
      const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        contactNo: contactNo,
        country: country,
        state: state,
        city: city,
        address: address,
      };
      const { resdata } = axios.post(
        `http://localhost:3001/api/customer/register`,
        data
      );
      console.log(resdata);
    }
  };

  return (
    <div>
      {!otherDetails ? (
        <div>
          <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
            >
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign Up
                </Typography>
                <form className={classes.form} noValidate>
                  <div class="row">
                    <div class="input-field col s6">
                      <input
                        id="first_name"
                        type="text"
                        class="validate"
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <label for="first_name">First Name</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        id="last_name"
                        type="text"
                        class="validate"
                        required
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <label for="last_name">Last Name</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input
                        id="email"
                        type="email"
                        class="validate"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label for="email">Email</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input
                        id="password"
                        type="password"
                        class="validate"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label for="password">Password</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input
                        id="confirmPassword"
                        type="password"
                        class="validate"
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <label for="password">Confirm Password</label>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => setOtherDetails(true)}
                  >
                    SIGN UP
                  </Button>
                  <Box mt={3} />
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="/signin" variant="body2">
                        {"Already have an account? Sign In"}
                      </Link>
                    </Grid>
                  </Grid>
                  <Box mt={5}>
                    <Copyright />
                  </Box>
                </form>
              </div>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div>
          <Container className="container z-depth-5 otherDetailsContainer">
            <form onSubmit={submitHandler}>
              <div className="row otherDetailsDiv">
                <h3 className="otherDetailsH3">
                  <center>Other Details</center>
                </h3>
              </div>
              <div className="row otherDetailsDiv">
                <div class="input-field col s12">
                  <input
                    id="contactNo"
                    type="number"
                    class="validate"
                    required
                    onChange={(e) => setContactNo(e.target.value)}
                  />
                  <label for="contactNo">Contact Number</label>
                </div>
              </div>
              <div className="row otherDetailsDiv">
                <div class="input-field col s12">
                  <input
                    id="country"
                    type="text"
                    class="validate"
                    required
                    onChange={(e) => setCountry(e.target.value)}
                  />
                  <label for="country">Country</label>
                </div>
              </div>
              <div className="row otherDetailsDiv">
                <div class="input-field col s12">
                  <input
                    id="state"
                    type="text"
                    class="validate"
                    required
                    onChange={(e) => setState(e.target.value)}
                  />
                  <label for="state">State</label>
                </div>
              </div>
              <div className="row otherDetailsDiv">
                <div class="input-field col s12">
                  <input
                    id="city"
                    type="text"
                    class="validate"
                    required
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <label for="city">City</label>
                </div>
              </div>
              <div className="row otherDetailsDiv">
                <div class="input-field col s12">
                  <input
                    id="address"
                    type="text"
                    class="validate"
                    required
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <label for="address">Address</label>
                </div>
              </div>
              <div class="row otherDetailsSubmit">
                <Button
                  variant="contained"
                  color="primary"
                  className="otherDetailsButton"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </form>
          </Container>
        </div>
      )}
    </div>
  );
}
