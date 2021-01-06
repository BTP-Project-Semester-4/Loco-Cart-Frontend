import React from 'react';
import './SellerProfile.css';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import StarIcon from '@material-ui/icons/Star';
import Grid from '@material-ui/core/Grid';

const SellerProfile = (props)=>{
    return(
        <Grid container className="all_content">
            <Grid item xs={12} sm={12} md={12} lg={12} className="intro">
            <Grid container>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                <img className="userImage" src="https://pbs.twimg.com/profile_images/1284557829651656705/P9L-PaCf_400x400.jpg"/>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8} className="userDetail">
                    <h1 className="name">KACHRA SETH</h1>
                    <h3 className="location">Pune, India</h3>
                    <p className="interest">Category: Fashion & Clothing, Electronics, Books</p>
                </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
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
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8} className="products">
                        <h6 className="section-heading">Products</h6>
                        <Grid container xs={12} sm={12} md={12} lg={12}>
                        <Grid item xs={12} sm={5} md={5} lg={5} className="product">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHxnUgAMTCsiH_RIXW8D6gRcYIqB9dY_jSQ&usqp=CAU"
                                className="product-img"
                            />
                            <h3 className="product-name">Shyam ka coat</h3>
                            <p className="product-price">₹3000</p>
                        </Grid>
                        <Grid item xs={12} sm={5} md={5} lg={5} className="product">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2li0nH-jB5wmghNuwg9bsjMhpFlcFEEfLDA&usqp=CAU"
                                className="product-img"
                            />
                            <h3 className="product-name">Raju ke joote</h3>
                            <p className="product-price">₹150</p>
                        </Grid>
                        <Grid item xs={12} sm={5} md={5} lg={5} className="product">
                            <img src="https://static.fratello.com/2017/06/DSC_6425-2.jpg"
                                className="product-img"
                            />
                            <h3 className="product-name">Gold watch</h3>
                            <p className="product-price">₹15000</p>
                        </Grid>
                        <Grid item xs={12} sm={5} md={5} lg={5} className="product">
                            <img src="https://cdn.shopify.com/s/files/1/1089/8530/products/TB0905-NB_large.jpg?v=1573578354"
                                className="product-img"
                            />
                            <h3 className="product-name">Bag</h3>
                            <p className="product-price">₹40 lakh</p>
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SellerProfile;