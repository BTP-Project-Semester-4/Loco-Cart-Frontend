import React from "react";
import { Media } from "react-bootstrap";
import "../Category/SubCategory/subcategory.scss";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Input from "@material-ui/core/Input";
import Axios from "axios";
import { useEffect } from "react";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

function MediaCard(props) {
  return (
    <>
      <div class="box-wrapper" style={{ margin: "10px" }}>
        <img
          src="https://th.bing.com/th/id/OIP.iC4LckUp_x_Rg4Tp-SRf-QHaEo?w=305&h=190&c=7&o=5&dpr=1.25&pid=1.7"
          alt="rhcp"
          style={{ cursor: "pointer" }}
          width="450px"
          height="200px"
        />
        <div class="box-content">
          <a class="buy">
            <span>
              <img
                style={{
                  marginTop: "10px",
                  cursor: "pointer",
                  height: "50px",
                  width: "50px",
                }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
              />
            </span>
          </a>
          <div class="title">{props.Name}</div>
          <div class="desc">Lorem ipsum dolor sit amet.</div>
          <span class="price">₹ 5.67</span>
          <div class="ssfooter">
            <ul>
              <li class="fa fa-star">
                <img
                  src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
                  style={{ height: "2rem" }}
                />
              </li>
              <li class="fa fa-star">
                <img
                  src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
                  style={{ height: "2rem" }}
                />
              </li>
              <li class="fa fa-star">
                <img
                  src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
                  style={{ height: "2rem" }}
                />
              </li>
              <li class="fa fa-star">
                <img
                  src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
                  style={{ height: "2rem" }}
                />
              </li>
              <li class="fa fa-star-o">
                <img
                  src="https://img.icons8.com/fluent/48/000000/star-half-empty.png"
                  style={{ height: "2rem" }}
                />
              </li>
            </ul>
          </div>
        </div>
        <div class="success"></div>
        <Button
          variant="contained"
          color="primary"
          className="addtocart"
          disableElevation
          style={{ height: "40px", width: "90%", marginBottom: "8px" }}
        >
          <p style={{ fontSize: "1.2rem" }}>🛒 Add to Cart 🛒</p>
        </Button>
      </div>
    </>
  );
}

export function SearchProduct(props) {
  window.onload = function () {
    if (!window.location.hash) {
      window.location = window.location + "#?=Serched";
      window.location.reload();
    }
  };
  const search = props.match.params.id;

  const [Products, setProducts] = React.useState([]);
  const address = "http://localhost:3001/api/product/search";

  useEffect(() => {
    Axios.post(address, { name: search }).then((result) => {
      console.log(result);
      setProducts(result.data.products);
    });
  }, []);

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [minPrice, setminPrice] = React.useState(0);
  const [maxPrice, setmaxPrice] = React.useState(1000000000);

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <List>
        {[
          "Relevence",
          "Popularity",
          "Price -- Low to High",
          "Price -- High to Low",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Price Range"].map((text, index) => (
          <>
            <ListItem key={text}>
              <ListItemText primary={text + " : "} />
            </ListItem>
            <ListItem>
              <Input
                type="Number"
                placeholder="Min Price"
                onChange={(e) => setminPrice(e.target.value)}
              />
              <Input
                type="Number"
                placeholder="Max Price"
                onChange={(e) => setmaxPrice(e.target.value)}
              />
            </ListItem>
            <ListItem>
              {
                <Button variant="contained" color="primary">
                  {parseInt(minPrice, 10) > 0 &&
                    parseInt(maxPrice, 10) < 100000 &&
                    parseInt(minPrice, 10) < parseInt(maxPrice, 10) &&
                    "Check"}
                </Button>
              }
            </ListItem>
          </>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <div
        style={{
          height: "60px",
          textAlign: "center",
          marginBottom: "20px",
          color: "#000",
          zIndex: "100",
        }}
      >
        <h1 style={{ margin: "10px" }}>
          <b>Search Result For "{search}" : </b>

          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button
                variant="contained"
                color="primary"
                onClick={toggleDrawer(anchor, true)}
              >
                Filter
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}

          <br />
        </h1>
      </div>
      <div style={{ margin: "auto", width: "90%" }}>
        {Products.map((item) => {
          return (
            <>
              <MediaCard {...item} />
            </>
          );
        })}
      </div>
    </>
  );
}
