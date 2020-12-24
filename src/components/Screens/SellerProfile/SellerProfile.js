import React from 'react';
import './SellerProfile.css';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import StarIcon from '@material-ui/icons/Star';

const SellerProfile = (props)=>{
    return(
        <div className="container">
            <div className="row intro">
                <div className="col s12 m6 l4">
                    <img className="userImage" src="https://pbs.twimg.com/profile_images/1284557829651656705/P9L-PaCf_400x400.jpg"/>
                </div>
                <div className="col s12 m6 l8 userDetail">
                    <h1 className="name">KACHRA SETH</h1>
                    <h3 className="location">Pune, India</h3>
                    <p className="interest">Category: Fashion & Clothing, Electronics, Books</p>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m3 l3 extra-data">
                    <h6 className="section-heading">Other Details</h6>
                    <div className="allExtra" >
                    <EmailIcon color="primary"/> <span className="extra-info">email@email.com</span>
                    <br></br>
                    <PhoneIcon color="primary"/><span className="extra-info">+91 9999999999</span>
                    <br></br>
                    <AssignmentTurnedInIcon color="primary"/><span className="extra-info">12 Orders till now</span>
                    <br></br>
                    <StarIcon color="primary"/><span className="extra-info">4.3 average rating</span>
                    </div>
                </div>
                <h6 className="section-heading">Products</h6>
                <div className="products">
                    <div className="col s12 m4 l4 product">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHxnUgAMTCsiH_RIXW8D6gRcYIqB9dY_jSQ&usqp=CAU"
                            className="product-img"
                        />
                        <h3 className="product-name">Shyam ka coat</h3>
                        <p className="product-price">₹3000</p>
                    </div>
                    <div className="col s12 m4 l4 product">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2li0nH-jB5wmghNuwg9bsjMhpFlcFEEfLDA&usqp=CAU"
                            className="product-img"
                        />
                        <h3 className="product-name">Raju ke joote</h3>
                        <p className="product-price">₹150</p>
                    </div>
                    <div className="col s12 m3 l3"></div>
                    <div className="col s12 m4 l4 product">
                        <img src="https://static.fratello.com/2017/06/DSC_6425-2.jpg"
                            className="product-img"
                        />
                        <h3 className="product-name">Gold watch</h3>
                        <p className="product-price">₹15000</p>
                    </div>
                    <div className="col s12 m4 l4 product">
                        <img src="https://static.toiimg.com/photo/msid-71362507/71362507.jpg"
                            className="product-img"
                        />
                        <h3 className="product-name">Jersey</h3>
                        <p className="product-price">₹1200</p>
                    </div>
                    <div className="col s12 m3 l3"></div>
                    <div className="col s12 m4 l4 product">
                        <img src="https://cdn.shopify.com/s/files/1/1089/8530/products/TB0905-NB_large.jpg?v=1573578354"
                            className="product-img"
                        />
                        <h3 className="product-name">Bag</h3>
                        <p className="product-price">₹40 lakh</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerProfile;