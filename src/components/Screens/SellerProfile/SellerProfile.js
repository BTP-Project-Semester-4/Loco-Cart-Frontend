import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './SellerProfile.css';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import StarIcon from '@material-ui/icons/Star';
import Grid from '@material-ui/core/Grid';

const SellerProfile = (props)=>{
    const history = useHistory();
    const [firstName, setFirstName] = useState("Loading...");
    const [lastName, setLastName] = useState("Loading...");
    const [email, setEmail] = useState("Loading...");
    const [pic, setPic] = useState("Loading...");
    const [city, setCity] = useState("Loading...");
    const [state, setState] = useState("Loading...");
    const [country, setCountry] = useState("Loading...");
    const [phoneNo, setPhoneNo] = useState("Loading...");
    const [rating,setRating] = useState("Loading...");
    const [category,setCategory] = useState("Loading...");

    useEffect(()=>{
        fetch(
            `http://localhost:3001/api/seller/${props.location.pathname.substring(15)}`
            ,{
                method:"get",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
            if(result.message === "Success"){
                setFirstName(result.seller.firstName);
                setLastName(result.seller.lastName);
                setEmail(result.seller.email);
                setPic(result.seller.profilePictureUrl);
                setPhoneNo(result.seller.phoneNo);
                setCity(result.seller.city);
                setState(result.seller.state);
                setCountry(result.seller.country);
                setRating(result.seller.rating);
                setCategory(result.seller.category);
            }else{
                history.push('/error')
            }
        })
    },[]);
    return(
        <Grid container className="all_content">
            <Grid item xs={12} sm={12} md={12} lg={12} className="intro">
            <Grid container>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                <img className="userImage" src={pic}/>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8} className="userDetail">
                    <h1 className="name">{firstName + " " + lastName}</h1>
                    <h3 className="location">{city + ", " + state + ", " + country}</h3>
                    <p className="interest">Category: {category}</p>
                </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <h6 className="section-heading">Other Details</h6>
                        <div className="allExtra" >
                        <EmailIcon color="primary"/> <span className="extra-info">{email}</span>
                         <br></br>
                         <PhoneIcon color="primary"/><span className="extra-info">{phoneNo}</span>
                         <br></br>
                         <AssignmentTurnedInIcon color="primary"/><span className="extra-info">12 Orders till now</span>
                         <br></br>
                         <StarIcon color="primary"/><span className="extra-info">{rating} average rating</span>
                         </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8} className="products">
                        <h6 className="section-heading">Products</h6>
                        <Grid container xs={12} sm={12} md={12} lg={12}>
                        <Grid item xs={12} sm={5} md={5} lg={5} className="product">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHxnUgAMTCsiH_RIXW8D6gRcYIqB9dY_jSQ&usqp=CAU"
                                className="product-img"
                            />
                            <h3 className="product-name">Formal Blazer</h3>
                            <p className="product-price">₹3000</p>
                        </Grid>
                        <Grid item xs={12} sm={5} md={5} lg={5} className="product">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2li0nH-jB5wmghNuwg9bsjMhpFlcFEEfLDA&usqp=CAU"
                                className="product-img"
                            />
                            <h3 className="product-name">Sports Shoes</h3>
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