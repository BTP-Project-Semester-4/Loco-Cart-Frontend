import React, { useCallback } from "react";
import "./Homescreen.scss";
import Button from "@material-ui/core/Button";
import "../Category/SubCategory/subcategory.scss";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { FaWindowClose } from "react-icons/fa";
import amit from "./../../../images/AMIT.jpeg";
import nalin from "./../../../images/NALIN.jpeg";
import vijay from "./../../../images/Vijay.jpeg";
import prerit from "./../../../images/Prerit.jpeg";
import LocoCart from "./../../../images/LocoCart.PNG";
import CircularProgress from "@material-ui/core/CircularProgress";
import Rating from "@material-ui/lab/Rating";
import { toast } from "react-toastify";
const jwt = require("jsonwebtoken");
toast.configure();

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    background: "#fff",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const CategoryBar = () => {
  const history = useHistory();
  const handleOnClick1 = useCallback(() => history.push("/category"), [
    history,
  ]);
  const handleOnClick2 = useCallback(
    () => history.push("/category/Stationery"),
    [history]
  );
  const handleOnClick3 = useCallback(() => history.push("/category/Grocery"), [
    history,
  ]);
  const handleOnClick4 = useCallback(
    () => history.push("/category/Electronics"),
    [history]
  );
  const handleOnClick5 = useCallback(() => history.push("/category/Footwear"), [
    history,
  ]);
  const handleOnClick6 = useCallback(() => history.push("/category/Sports"), [
    history,
  ]);
  const handleOnClick7 = useCallback(() => history.push("/category/Books"), [
    history,
  ]);
  return (
    <>
      {" "}
      <div
        style={{
          height: "150px",
          display: "flex",
          background: "#fff",
          marginBottom: "10px",
          overflowX: "scroll",
          color: "#3f51b5",
        }}
      >
        <div
          onClick={handleOnClick1}
          style={{
            marginLeft: "5%",
            marginTop: "2%",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob3BwaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            style={{ width: "100px", height: "80px" }}
          />
          <br />
          <b>All Categories</b>
        </div>
        <div
          onClick={handleOnClick2}
          style={{
            marginLeft: "5%",
            marginTop: "2%",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <img
            src="https://5.imimg.com/data5/LJ/RP/MY-4878239/stationery-500x500.png"
            style={{ width: "100px", height: "80px" }}
          />
          <br />
          <b>Stationery</b>
        </div>
        <div
          onClick={handleOnClick3}
          style={{
            marginLeft: "5%",
            marginTop: "2%",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIiQmWJAdGBHSPQJL-IdHhWYrMwUbSvIqTOQ&usqp=CAU"
            style={{ width: "100px", height: "80px" }}
          />
          <br />
          <b>Groceries</b>
        </div>
        <div
          onClick={handleOnClick4}
          style={{
            marginLeft: "5%",
            marginTop: "2%",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgKefNtESG11OmRK1-xQhYHlO9JLtJTC5Mcg&usqp=CAU"
            style={{ width: "100px", height: "80px" }}
          />
          <br />
          <b>Electronics</b>
        </div>
        <div
          onClick={handleOnClick5}
          style={{
            marginLeft: "5%",
            marginTop: "2%",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK8uPxPdCyNRld3q0v4v0AkZYge0fADARDb3otD3Uxl5jXCSu_PGKNhAoFfwa71C_3Rw9K6_Y&usqp=CAc"
            style={{ width: "100px", height: "80px" }}
          />
          <br />
          <b>Footwear</b>
        </div>
        <div
          onClick={handleOnClick6}
          style={{
            marginLeft: "5%",
            marginTop: "2%",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhnxvR9_DlyUe2NilNqYtkG6w6LECXWajbVg&usqp=CAU"
            style={{ width: "100px", height: "80px" }}
          />
          <br />
          <b>Sports</b>
        </div>
        <div
          onClick={handleOnClick7}
          style={{
            marginLeft: "5%",
            marginTop: "2%",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULdhvxYHLSDEpEV18oJadwRShXgT2cRorPA&usqp=CAU"
            style={{ width: "100px", height: "80px" }}
          />
          <br />
          <b>Books</b>
        </div>
        <div
          style={{
            marginLeft: "5%",
            marginTop: "2%",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            style={{ width: "100px", height: "80px" }}
          />
          <br />
          <b>Download Our App</b>
        </div>
      </div>
    </>
  );
};

const Corousal = () => {
  return (
    <>
      {" "}
      <div>
        <section class="carousel" aria-label="Gallery">
          <ol class="carousel__viewport">
            <li id="carousel__slide1" tabindex="0" class="carousel__slide">
              <div class="carousel__snapper">
                <a href="#carousel__slide4" class="carousel__prev">
                  Go to last slide
                </a>
                <a href="#carousel__slide2" class="carousel__next">
                  Go to next slide
                </a>
              </div>
            </li>
            <li id="carousel__slide2" tabindex="0" class="carousel__slide">
              <div class="carousel__snapper"></div>
              <a href="#carousel__slide1" class="carousel__prev">
                Go to previous slide
              </a>
              <a href="#carousel__slide3" class="carousel__next">
                Go to next slide
              </a>
            </li>
            <li id="carousel__slide3" tabindex="0" class="carousel__slide">
              <div class="carousel__snapper"></div>
              <a href="#carousel__slide2" class="carousel__prev">
                Go to previous slide
              </a>
              <a href="#carousel__slide4" class="carousel__next">
                Go to next slide
              </a>
            </li>
            <li id="carousel__slide4" tabindex="0" class="carousel__slide">
              <div class="carousel__snapper"></div>
              <a href="#carousel__slide3" class="carousel__prev">
                Go to previous slide
              </a>
              <a href="#carousel__slide1" class="carousel__next">
                Go to first slide
              </a>
            </li>
          </ol>
          <aside class="carousel__navigation">
            <ol class="carousel__navigation-list">
              <li class="carousel__navigation-item">
                <a href="#carousel__slide1" class="carousel__navigation-button">
                  Go to slide 1
                </a>
              </li>
              <li class="carousel__navigation-item">
                <a href="#carousel__slide2" class="carousel__navigation-button">
                  Go to slide 2
                </a>
              </li>
              <li class="carousel__navigation-item">
                <a href="#carousel__slide3" class="carousel__navigation-button">
                  Go to slide 3
                </a>
              </li>
              <li class="carousel__navigation-item">
                <a href="#carousel__slide4" class="carousel__navigation-button">
                  Go to slide 4
                </a>
              </li>
            </ol>
          </aside>
        </section>
      </div>
    </>
  );
};

function MediaCard(props) {
  const [rating, setRating] = React.useState(1.1);
  const [id, setid] = React.useState(props._id);
  const [miniPrice, setminiPrice] = React.useState(100000000);
  const [discription, setdiscription] = React.useState("Product");
  const [image, setimage] = React.useState("HII");
  for (var key in props.Sellers) {
    var obj = props.Sellers[key];
    if (parseInt(miniPrice, 10) > parseInt(obj.SellerPrice, 10)) {
      setminiPrice(obj.SellerPrice);
      setdiscription(obj.Description);
      setimage(obj.Image);
      setRating(obj.Rating.$numberDecimal);
    }
  }

  const addToCartHandler = () => {
    console.log("OKK");
    var user = "111";
    try {
      const jwtToken = localStorage.getItem("CustomerJwt");
      user = jwt.verify(jwtToken, process.env.REACT_APP_JWT_SECRET);
      }
      catch(e) {
        console.log(e);
      };
    if(1){
      console.log(user);
      fetch(
        process.env.REACT_APP_BACKEND_API + "customer/addtocart",
        {
          method:"post",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            customerId: user._id,
            productId: id,
            productName: props.Name,
            quantity: 1
          })
        }
      ).then(res=>res.json())
      .then(result=>{
        if(result.message==="Success"){
          toast.success("Successfully added to cart !",{
            position: toast.POSITION.TOP_CENTER,
          });
        }else{
          toast.error("Some error occured !", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
    }else{
      toast.error("Please enter a quantity !", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  return (
    <>
      {
        <div
          class="box-wrapper"
          style={{ margin: "10px", transform: "translate(0, 0%)" }}
        >
          <a href={"/product/" + id}>
            <img
              src={image}
              alt="rhcp"
              style={{ cursor: "pointer" }}
              width="450px"
              height="200px"
            />
          </a>
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
            <div class="desc">
              <b>{props.Category}</b> :{" "}
              {discription.length > 20
                ? discription.substring(0, 17) + "..."
                : discription}
            </div>
            <span class="price" style={{fontSize: "18px"}}>₹ {miniPrice}</span>
            <div class="ssfooter">
              <ul class="stars1">
                <Rating
                  name="read-only"
                  value={rating}
                  precision={0.1}
                  readOnly
                />
                {"(" + rating + ")"}
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
            onClick={addToCartHandler}
          >
            <p style={{ fontSize: "1.2rem" }}>🛒 Add to Cart 🛒</p>
          </Button>
        </div>
      }
    </>
  );
}

const ReviewCard = () => {
  return (
    <div>
      <div class="testimonials1">
        <div class="testimonial-inner1">
          <h1>Testimonial</h1>
          <div class="border1"></div>

          <div class="row1">
            <div class="col1">
              <div class="testimonial1">
                <img class="img1" src={nalin} alt="" />
                <div class="name1">Nalin</div>
                <div class="stars1">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <p>
                  A nice website which not only showing products in local area
                  but also giving options like bidding on my order list.Very
                  user friendly interface and cool animations.Excellent
                  innovation, keep up the good work.
                  <br /> Thank you!
                  <br />✨
                </p>
              </div>
            </div>

            <div class="col1">
              <div class="testimonial1">
                <img class="img1" src={prerit} alt="" />
                <div class="name1">Prerit</div>
                <div class="stars1">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <p>
                  Site is definitely one of the best website designs we’ve seen
                  in a while. Website tend to be highly effective in engaging
                  users. Taking advantage of positive reviews on recommendation
                  platforms/sites is a great strategy for finding customer.{" "}
                  <br />
                  Thank You !<br /> ✨
                </p>
              </div>
            </div>

            <div class="col1">
              <div class="testimonial1">
                <img class="img1" src={amit} alt="" />
                <div class="name1">Amit</div>
                <div class="stars1">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  repellat aspernatur temporibus assumenda sint odio minima.
                  Voluptate alias possimus aspernatur voluptates excepturi
                  placeat iusto cupiditate.
                </p>
              </div>
            </div>

            <div class="col1">
              <div class="testimonial1">
                <img class="img1" src={vijay} alt="" />
                <div class="name1">Vijay</div>
                <div class="stars1">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  repellat aspernatur temporibus assumenda sint odio minima.
                  Voluptate alias possimus aspernatur voluptates excepturi
                  placeat iusto cupiditate!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HomeScreen() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(true);
  const [Loading, setLoading] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div
        style={{
          right: 0,
          top: 0,
          margin: "20px",
          position: "fixed",
          color: "#000",
        }}
      >
        <FaWindowClose onClick={handleClose} />
      </div>
      <br />
      <div
        style={{
          width: "100%",
          textAlign: "center",
          transform: "translate3d(0%,10%,20px)",
          color: "#000",
        }}
      >
        <h1 id="simple-modal-title">
          <b>🔥 LOCOCART 🔥</b>
        </h1>
        <p id="simple-modal-description">
          <b>WELCOMES YOU</b>
        </p>
        <a class="pre-order-btn" href="#" onClick={handleClose}>
          <b> WE CONNECT LOCALLY </b>
        </a>
      </div>
    </div>
  );

  const [Products, setProducts] = React.useState([]);
  const address = process.env.REACT_APP_BACKEND_API + "product/allproducts";
  React.useEffect(() => {
    Axios.post(address).then((result) => {
      console.log(result);
      setProducts(result.data.products);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {!Loading && (
        <div style={{ background: "#f1f1f1" }}>
          <CategoryBar />
          <Corousal />

          <div
            style={{ marginTop: "1%", marginBottom: "1%", textAlign: "center" }}
          >
            <button class="learn-more" style={{ textAlign: "center" }}>
              <h3> ❤️‍🔥 Customers Reviews ❤️‍🔥 </h3>
            </button>
          </div>

          <div style={{ margin: "auto" }}>
            <ReviewCard />
          </div>

          <div
            style={{ marginTop: "1%", marginBottom: "1%", textAlign: "center" }}
          >
            <button class="learn-more" style={{ textAlign: "center" }}>
              <h3> ❤️‍🔥 Top Picks For You ❤️‍🔥 </h3>
            </button>
          </div>

          <div style={{ margin: "auto", width: "90%" }}>
            {Products.slice(0, 20).map((item) => {
              return (
                <>
                  <MediaCard {...item} />
                </>
              );
            })}
          </div>

          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {body}
            </Modal>
          </div>
        </div>
      )}
      {Loading && (
        <div style={{ marginBottom: "25%" }}>
          <div className="LOGO" style={{ marginLeft: "40%", marginTop: "10%" }}>
            <img src={LocoCart} style={{ width: "30%", height: "30%" }} />
          </div>
          <div style={{ marginLeft: "48%" }}>
            <CircularProgress />
          </div>
        </div>
      )}
    </div>
  );
}
