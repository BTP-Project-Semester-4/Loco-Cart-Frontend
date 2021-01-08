import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  homeObjone,
  homeObjtwo,
  homeObjthree,
  homeObjfour,
  homeObjfive,
  homeObjsix,
} from "./Data";
import "./Categories.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 140,
  },
});

function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ borderRadius: "50px" }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent
          style={{ background: "#212e74", textAlign: "center", color: "#fff" }}
        >
          <Typography gutterBottom variant="h5" component="h2">
            <b> {props.title}</b>
          </Typography>
          <Typography variant="body2" color="#fff" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{ position: "relative", margin: "auto", textAlign: "center" }}
      >
        <Button
          size="small"
          color="primary"
          style={{ position: "absolute", right: "35%" }}
        >
          EXPAND ALL
        </Button>
      </CardActions>
    </Card>
  );
}

export function Categories() {
  return (
    <div className="All">
      <div
        style={{
          height: "60px",
          textAlign: "center",
          marginBottom: "20px",
          color: "#000",
        }}
      >
        <h1>
          <b>Various Categories</b>
        </h1>
      </div>

      <div className="displaycategory">
        <div className="subcategory">
          <a href="/Category/Stationery">
            {" "}
            <MediaCard {...homeObjone} />{" "}
          </a>{" "}
        </div>
        <div className="subcategory">
          <a href="/Category/Grocery">
            {" "}
            <MediaCard {...homeObjtwo} />{" "}
          </a>{" "}
        </div>
        <div className="subcategory">
          <a href="/Category/Electronics">
            {" "}
            <MediaCard {...homeObjthree} />{" "}
          </a>{" "}
        </div>
        <div className="subcategory">
          <a href="/Category/Footwear">
            {" "}
            <MediaCard {...homeObjfour} />{" "}
          </a>{" "}
        </div>
        <div className="subcategory">
          <a href="/Category/Sports">
            {" "}
            <MediaCard {...homeObjfive} />{" "}
          </a>{" "}
        </div>
        <div className="subcategory">
          <a href="/Category/Books">
            {" "}
            <MediaCard {...homeObjsix} />{" "}
          </a>{" "}
        </div>
      </div>
    </div>
  );
}
