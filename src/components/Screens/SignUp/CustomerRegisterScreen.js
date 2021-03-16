import React from "react";
import { useHistory } from "react-router-dom";
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
import { Container, TextField } from "@material-ui/core";
import "./otherDetails/otherDetails.modules.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingScreen from '../LoadingScreen/LoadingScreen';

toast.configure();

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
  const history = useHistory();

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
  const [Loading, setLoading] = useState(false);

  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  const otherDetailsHandler = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      password === ""
    ) {
      toast.error("Please fill all fields !", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      if (password !== confirmPassword) {
        toast.error("password and confirm password dont match", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        if (password.length < 8) {
          toast.warning(
            "password is too weak (Mininmum length of 8 charecters)",
            {
              position: toast.POSITION.TOP_CENTER,
            }
          );
        } else {
          toast.success("Sweet !", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          });
          sleep(2000).then(() => {
            setOtherDetails(true);
          });
        }
      }
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      contactNo === "" ||
      country === "" ||
      state === "" ||
      city === "" ||
      address === ""
    ) {
      toast.error("Please fill all fields !", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      if (contactNo.length !== 10) {
        toast.error("Please enter correct contact number !", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        if (password.length > 8 && password === confirmPassword) {
          setLoading(true);
          fetch(process.env.REACT_APP_BACKEND_API + "customer/register", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: password,
              contactNo: contactNo,
              country: country,
              state: state,
              city: city,
              address: address,
            }),
          })
            .then((res) => res.json())
            .then((result) => {
              setLoading(false);
              console.log(result);
              if (result.message === "Success") {
                toast.success("Sweet !", {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 1500,
                });
                sleep(2000).then(() => {
                  history.push("/signin");
                });
              } else {
                toast.error(`${result.message}`, {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 2000,
                });
                sleep(2300).then(() => {
                  window.location.reload(false);
                  history.push("/signup");
                });
              }
            });
        }
      }
    }
  };

  return (
    <div>
    {Loading && <LoadingScreen />}
      {!otherDetails ? (
        
      
        <div>
        { !Loading &&
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
                <form
                  className={classes.form}
                  noValidate
                  onSubmit={otherDetailsHandler}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirm Password"
                        id="confirmPassword"
                        type="password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </Grid>
                  </Grid>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
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
        }
        </div>
        
      ) : (
        <div>
        { !Loading &&
          <Container
            className="container z-depth-5 otherSellerDetailsContainer"
            style={{ padding: "10px" }}
          >
            <form onSubmit={submitHandler} style={{ padding: "10px" }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography component="h1" variant="h5" align="center">
                    Other Details
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="contactNumber"
                    label="Contact Number"
                    type="number"
                    name="contactNumber"
                    onChange={(e) => setContactNo(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="countery"
                    label="Country"
                    name="country"
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="state"
                    label="State"
                    name="state"
                    onChange={(e) => setState(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="city"
                    label="City"
                    id="city"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="address"
                    label="Address"
                    id="address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                SUBMIT
              </Button>
            </form>
          </Container>
        }
        </div>
      )}
    </div>
  );
}
