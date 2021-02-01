import React from "react";
import ReactDOM from "react-dom";
import "./productdescription.css";
import p2 from "./p3.png";
import { Link } from "react-router-dom";

const Productdesc = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/* <title>amazon | Product Page</title> */}
  <link href="productdescription.css" rel="stylesheet" />
  <header>
    {/* replace this header with yours....... */}
  </header>
  <section id="product-info">
  
    <div className="item-image-parent" >
      <div className="item-list-vertical">
        {/* <div className="thumb-box">
          <img src="https://i.ibb.co/VJf6fXm/thumb1.jpg" alt="thumbnail" />
        </div> */}
        {/* <div className="thumb-box">
          <img src="https://i.ibb.co/Jt5zc58/thumb2.jpg" alt="thumbnail" />
        </div>
        <div className="thumb-box">
          <img src="https://i.ibb.co/Yf9LMpy/thumb3.jpg" alt="thumbnail" />
        </div>
        <div className="thumb-box">
          <img src="https://i.ibb.co/60hPGy2/thumb4.jpg" alt="thumbnail" />
        </div> */}
      </div>
      <div className="item-image-main">
        <img src={p2} alt="default" />
      </div>
    </div>
    <div className="item-info-parent">
      {/* main info */}
      <div className="main-info">
        <h3>Apple iPhone X </h3>
        {/* <div className="star-rating">
          <span>★★★★</span>★            
        </div> */}
       <h3><p>PRICE:<span id="price">₹ 449.00</span></p></h3>
      </div>
      {/* Choose */}
      <div className="select-items">
        <div className="change-color">
          {/* <label><b>Colour:</b> Black</label><br /> */}
          {/* <div className="thumb-box">
            <img src={p2} alt="thumbnail" />
          </div> */}
          {/* <div className="thumb-box">
            <img src="https://i.ibb.co/C297yD0/select2.jpg" alt="thumbnail" />
          </div> */}
        </div>
        {/* <div className="change-size">
          <label><b>Size:</b></label><br />
          <select>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>2XL</option>
          </select>
        </div> */}
        <div className="description">
          <ul>
            <li>Description:14.73 cm Super Retina Screen</li>
            <li>Display: Innovative Display Technology</li>
            <li>Model Number: MQA62HN/A</li>
            <li>Model Name:iPhone X</li>
            <li>Browse Type:Smartphones</li>
            
            <li>

            <Link to='/cart'>
            <button class="button button2">ADD TO CART</button>
            </Link>
            
            <Link to='/sellerprofile'>
            <button class="button button1">SELLER PROFILE</button>
            </Link>
            </li>
           
          </ul>
        </div>
      </div>
      {/* Description */}
    </div>
  </section>
</>
  );
};
export default Productdesc;