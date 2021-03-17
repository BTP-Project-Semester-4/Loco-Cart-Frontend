import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./AddProduct.css";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import ListAltIcon from "@material-ui/icons/ListAlt";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
const jwt = require("jsonwebtoken");

toast.configure();

const AddProduct = () => {
  const [query, setQuery] = useState("");
  const [sellerId, setSellerId] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [step, setStep] = useState(0);
  const [isNew, setIsNew] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [sellerPrice, setSellerPrice] = useState(undefined);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(undefined);
  const [image, setImage] = useState(undefined);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    try {
      const decodedToken = jwt.verify(
        localStorage.getItem("sellerjwt"),
        process.env.REACT_APP_JWT_SECRET
      );
      setSellerId(decodedToken._id);
    } catch {
      toast.error("Please sign in first", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      history.push("/sellersignin");
    }
  }, []);

  useEffect(() => {
    if (query !== "") {
      setLoading(true);
      fetch(process.env.REACT_APP_BACKEND_API + "product/search", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: query,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          setLoading(false);
          console.log(result.products);
          setSearchedProducts(result.products);
        });
    }
  }, [query]);

  useEffect(() => {
    if (url !== "") {
      setLoading(true);
      fetch(process.env.REACT_APP_BACKEND_API + "product/addproduct", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productName: name,
          productCategory: category,
          sellerPrice: sellerPrice,
          sellerDescription: description,
          sellerQuantity: quantity,
          sellerId: sellerId,
          sellerImage: url,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          setLoading(false);
          if (result.message === "Success") {
            setStep(2);
          } else {
            toast.error("Some error occured!", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        });
    }
  }, [url]);

  const getMapLength = (ipMap) => {
    var ans = 0;
    var i;
    for (i in ipMap) {
      ans++;
    }
    return ans;
  };

  const PostData = () => {
    if (sellerPrice === undefined || sellerPrice === "") {
      toast.error("Please enter seller price", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (quantity === undefined || quantity === "") {
      toast.error("Please enter product quantity", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (description === "") {
      toast.error("Please enter product description", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (image === undefined) {
      toast.error("Please select a product image", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
      data.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
      fetch(process.env.REACT_APP_IMAGE_API, {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setUrl(data.url);
          if (data.url === undefined) {
            toast.error("Error occured while uploading image", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else {
            console.log(data.url);
          }
        });
    }
  };

  return (
    <>
      {loading && <LoadingScreen />}
      {!loading && (
        <div className="add_product_all_content">
          <div className="add_product_main_card">
            <Grid container>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                {step == 0 ? (
                  <SearchIcon
                    style={{
                      float: "right",
                      height: "50px",
                      width: "50px",
                      color: "gray",
                      marginRight: "50px",
                    }}
                  ></SearchIcon>
                ) : (
                  <SearchIcon
                    style={{
                      float: "right",
                      height: "50px",
                      width: "50px",
                      color: "#00cc00",
                      marginRight: "50px",
                    }}
                  ></SearchIcon>
                )}
                <br></br>
                {step == 0 ? (
                  <CheckCircleIcon
                    style={{
                      float: "right",
                      height: "20px",
                      width: "20px",
                      color: "gray",
                      marginRight: "-35px",
                      marginTop: "35px",
                    }}
                  ></CheckCircleIcon>
                ) : (
                  <CheckCircleIcon
                    style={{
                      float: "right",
                      height: "20px",
                      width: "20px",
                      color: "#00cc00",
                      marginRight: "-35px",
                      marginTop: "35px",
                    }}
                  ></CheckCircleIcon>
                )}
              </Grid>

              <Grid item xs={6} sm={6} md={6} lg={6}>
                {step <= 1 ? (
                  <ListAltIcon
                    style={{
                      height: "50px",
                      width: "50px",
                      color: "gray",
                    }}
                  ></ListAltIcon>
                ) : (
                  <ListAltIcon
                    style={{
                      height: "50px",
                      width: "50px",
                      color: "#00cc00",
                    }}
                  ></ListAltIcon>
                )}
                <br></br>
                {step <= 1 ? (
                  <CheckCircleIcon
                    style={{
                      height: "20px",
                      width: "20px",
                      color: "gray",
                      marginLeft: "15px",
                    }}
                  ></CheckCircleIcon>
                ) : (
                  <CheckCircleIcon
                    style={{
                      height: "20px",
                      width: "20px",
                      color: "#00cc00",
                      marginLeft: "15px",
                    }}
                  ></CheckCircleIcon>
                )}
              </Grid>
            </Grid>
          </div>
          <div className="add_product_main_card">
            {step == 0 ? (
              <div>
                <h1 className="step">STEP 1 OF 2</h1>
                <p className="message">Search for a product to add</p>
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <TextField
                    id="outlined-basic"
                    label="Enter product name"
                    variant="outlined"
                    onChange={(e) => {
                      setQuery(e.target.value);
                    }}
                  />
                </div>
                {query !== "" ? (
                  <div>
                    {searchedProducts.length > 0 ? (
                      <div>
                        <h1
                          style={{
                            marginLeft: "10px",
                            marginTop: "10px",
                            marginBottom: "10px",
                          }}
                        >
                          SEARCH RESULTS
                        </h1>
                        {searchedProducts.map((data) => {
                          return (
                            <Grid container>
                              <Grid item xs={12} sm={6} md={6} lg={5}>
                                <img
                                  src={
                                    data.Sellers[Object.keys(data.Sellers)[0]]
                                      .Image
                                  }
                                  style={{
                                    width: "100%",
                                    height: "250px",
                                    borderRadius: "20px",
                                    padding: "10px",
                                  }}
                                ></img>
                              </Grid>
                              <Grid item xs={12} sm={6} md={6} lg={7}>
                                <h2 className="add_product_product_detail">
                                  {data.Name.toUpperCase()}
                                </h2>
                                <h3 className="add_product_product_detail">
                                  CATEGORY : {data.Category}
                                </h3>
                                <h3 className="add_product_product_detail">
                                  Available at {getMapLength(data.Sellers)}{" "}
                                  sellers
                                </h3>
                                <div
                                  style={{
                                    backgroundColor: "#3f51b5",
                                    color: "white",
                                    width: "100px",
                                    borderRadius: "5px",
                                    padding: "2px",
                                    marginLeft: "10px",
                                    marginBottom: "10px",
                                    marginTop: "50px",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => {
                                    setStep(1);
                                    setName(data.Name);
                                    setCategory(data.Category);
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: "1.5rem",
                                      marginRight: "5px",
                                      marginLeft: "5px",
                                    }}
                                  >
                                    +
                                  </span>
                                  <span>ADD ITEM</span>
                                </div>
                              </Grid>
                              <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div
                                  style={{
                                    backgroundColor: "#538df6",
                                    height: "0.5px",
                                    width: "95%",
                                    margin: "auto",
                                    marginTop: "5px",
                                    marginBottom: "5px",
                                  }}
                                ></div>
                              </Grid>
                            </Grid>
                          );
                        })}
                      </div>
                    ) : (
                      <div style={{ textAlign: "center", marginTop: "10px" }}>
                        <ErrorIcon
                          style={{
                            width: "75px",
                            height: "75px",
                            color: "red",
                          }}
                        ></ErrorIcon>
                        <p style={{ fontSize: "1.5rem" }}>
                          Sorry, no results found!
                        </p>
                      </div>
                    )}

                    <p
                      className="register_new_message"
                      onClick={() => {
                        setIsNew(true);
                      }}
                    >
                      Couldn't find your product listed here?? Click here to
                      register a new product.
                    </p>
                  </div>
                ) : (
                  <div></div>
                )}
                {isNew ? (
                  <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                    <Grid container>
                      <Grid item xs={12} sm={6} md={6} lg={6}>
                        <TextField
                          id="outlined-basic"
                          label="Enter product name"
                          variant="outlined"
                          style={{ width: "90%", marginTop: "10px" }}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} lg={6}>
                        <TextField
                          id="outlined-basic"
                          label="Enter product category"
                          variant="outlined"
                          style={{ width: "90%", marginTop: "10px" }}
                          onChange={(e) => {
                            setCategory(e.target.value);
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <div
                          style={{
                            backgroundColor: "#3f51b5",
                            color: "white",
                            width: "100px",
                            borderRadius: "5px",
                            padding: "2px",
                            marginBottom: "10px",
                            marginTop: "10px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            if (!name) {
                              toast.error("Please enter product name", {
                                position: "top-right",
                                autoClose: 2000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                              });
                            } else if (!category) {
                              toast.error("Please enter product category", {
                                position: "top-right",
                                autoClose: 2000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                              });
                            } else {
                              setStep(1);
                            }
                          }}
                        >
                          <span
                            style={{
                              fontSize: "1.5rem",
                              marginRight: "5px",
                              marginLeft: "5px",
                            }}
                          >
                            +
                          </span>
                          <span>ADD ITEM</span>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            ) : (
              <div></div>
            )}
            {step === 1 ? (
              <div>
                <h1 className="step">STEP 2 OF 2</h1>
                <h3 className="product_name_add_product">NAME : {name}</h3>
                <h3 className="product_name_add_product">
                  CATEGORY : {category}
                </h3>
                <Grid
                  container
                  style={{
                    marginTop: "10px",
                    marginLeft: "10px",
                  }}
                >
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <TextField
                      id="outlined-basic"
                      label="Enter seller price"
                      variant="outlined"
                      style={{ width: "90%", marginTop: "10px" }}
                      onChange={(e) => {
                        setSellerPrice(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <TextField
                      id="outlined-basic"
                      label="Enter quantity"
                      variant="outlined"
                      style={{ width: "90%", marginTop: "10px" }}
                      onChange={(e) => {
                        setQuantity(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextField
                      id="outlined-basic"
                      label="Enter product description"
                      variant="outlined"
                      style={{ width: "90%", marginTop: "10px" }}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid
                    style={{ marginTop: "10px" }}
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={6}
                  >
                    <label>Product Image</label>
                    <input
                      type="file"
                      style={{
                        marginTop: "25px",
                        marginLeft: "10px",
                      }}
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                      }}
                    ></input>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6}></Grid>
                  <Grid item xs={6} sm={6} md={6} lg={6}>
                    <p
                      className="add_product_back_button"
                      onClick={() => {
                        setStep(0);
                      }}
                    >
                      {"< BACK"}
                    </p>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    onClick={() => {
                      PostData();
                    }}
                  >
                    <p className="submit_product_back_button">SUBMIT</p>
                  </Grid>
                </Grid>
              </div>
            ) : (
              <div></div>
            )}
            {step === 2 ? (
              <div style={{ textAlign: "center" }}>
                <CheckCircleIcon
                  style={{
                    height: "100px",
                    width: "100px",
                    color: "#00cc00",
                  }}
                />
                <h3 className="total_price">ADDED ITEM SUCCESSFULLY</h3>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AddProduct;
