import React, { useState } from "react";
import clsx from "clsx";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HistoryIcon from "@material-ui/icons/History";
import GavelIcon from "@material-ui/icons/Gavel";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import HomeIcon from "@material-ui/icons/Home";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import SearchIcon from "@material-ui/icons/Search";
import { Dropdown } from "react-bootstrap";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
const jwt = require("jsonwebtoken");
const env = require("dotenv");
env.config();

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    minWidth: "100px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(5)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "25ch",
    },
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();

  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const [lococart, setLococart] = React.useState(true);
  const showLococart = () => {
    if (window.innerWidth < 960) {
      setLococart(false);
    } else {
      setLococart(true);
    }
  };
  const [userId, setUserId] = useState("");
  React.useEffect(() => {
    showLococart();
    try {
      const jwtToken = localStorage.getItem("jwt");
      console.log(jwt);
      const user = jwt.verify(jwtToken, process.env.REACT_APP_JWT_SECRET);

      setUserId(user._id);
    } catch (e) {
      console.log(e);
    }
  }, []);
  window.addEventListener("resize", showLococart);

  const [productSearch, setProductSearch] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  function searchProduct(e) {
    setSearchKeyword(e.target.value);
    Axios.post("http://localhost:3001/api/product/search", {
      name: searchKeyword,
    }).then((result) => {
      setProductSearch(result.data.products);
    });
  }

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("jwt");
    window.location.reload(false);
    history.push("/");
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <ListItem>
              {lococart && (
                <ListItemIcon>
                  <b style={{ color: "#ffffff" }}>LOCOCART</b>
                </ListItemIcon>
              )}
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <InputBase
                      placeholder="Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ "aria-label": "search" }}
                      onChange={searchProduct}
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {
                      <>
                        {productSearch.slice(0, 8).map((item) => {
                          return (
                            <Dropdown.Item>
                              <div
                                classes={{
                                  root: classes.inputRoot,
                                  input: classes.inputInput,
                                }}
                                inputProps={{ "aria-label": "search" }}
                                style={{
                                  background: "white",
                                  width: "25ch",
                                  marginLeft: "20px",
                                  textAlign: "center",
                                }}
                              >
                                <Link to={"/search/" + item.Name}>
                                  {" "}
                                  {item.Name}{" "}
                                </Link>
                              </div>
                            </Dropdown.Item>
                          );
                        })}
                        {productSearch.length == 0 && (
                          <Dropdown.Item>
                            <div
                              classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                              }}
                              inputProps={{ "aria-label": "search" }}
                              style={{
                                background: "white",
                                width: "25ch",
                                marginLeft: "20px",
                                textAlign: "center",
                                cursor: "wait",
                              }}
                            >
                              {"No Product Found"}
                            </div>
                          </Dropdown.Item>
                        )}
                      </>
                    }
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </ListItem>
          </Typography>
          {userId === "" ? (
            <Button
              color="inherit"
              style={{ marginLeft: "auto" }}
              href="/signin"
            >
              Login
            </Button>
          ) : (
            <Button
              color="inherit"
              style={{ marginLeft: "auto" }}
              onClick={logoutHandler}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>

        {userId === "" ? (
          <List></List>
        ) : (
          <List>
            <Divider />
            <Link to="/userprofile">
              <ListItem button key="Profile">
                <ListItemIcon>
                  <AccountCircleRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" style={{ color: "#000000" }} />
              </ListItem>
            </Link>
            <Link to="/bidscreen">
              <ListItem button key="Bid Products">
                <ListItemIcon>
                  <GavelIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Bid Products"
                  style={{ color: "#000000" }}
                />
              </ListItem>
            </Link>
            <Link to="/cart">
              <ListItem button key="Cart">
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Cart" style={{ color: "#000000" }} />
              </ListItem>
            </Link>
            <Link to="/orderhistory">
              <ListItem button key="Order History">
                <ListItemIcon>
                  <HistoryIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Order History"
                  style={{ color: "#000000" }}
                />
              </ListItem>
            </Link>
            <Link to="/customerotp">
              <ListItem button key="Verify Account">
                <ListItemIcon>
                  <VerifiedUserIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Verify Account"
                  style={{ color: "#000000" }}
                />
              </ListItem>
            </Link>
          </List>
        )}

        <Divider />
        <List>
          <Link to="/">
            <ListItem button key="Home Screen">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                primary="Home Screen"
                style={{ color: "#000000" }}
              />
            </ListItem>
          </Link>
          <Link to="/signin">
            <ListItem button key="Register/SignIn">
              <ListItemIcon>
                <VpnKeyIcon />
              </ListItemIcon>
              <ListItemText
                primary="Register/SignIn"
                style={{ color: "#000000" }}
              />
            </ListItem>
          </Link>
          <Link to="/sellersignin">
            <ListItem button key="Seller SignIn">
              <ListItemIcon>
                <BusinessCenterIcon />
              </ListItemIcon>
              <ListItemText
                primary="Seller SignIn"
                style={{ color: "#000000" }}
              />
            </ListItem>
          </Link>
          <Link to="/logout">
            <ListItem button key="Logout">
              <ListItemIcon>
                <MeetingRoomIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" style={{ color: "#000000" }} />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  );
}
