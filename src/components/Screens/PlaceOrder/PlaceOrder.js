import {useState} from 'react';
import './PlaceOrder.css';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import DescriptionIcon from '@material-ui/icons/Description';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';

const PlaceOrder = ()=>{
    const [status, setStatus] = useState(0);
    return(
        <div className="place_order_all_content">
            <div className="top_section">
                <Grid container>
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                        {status==0?
                        <LocationCityIcon
                            style={{
                                height:"50px",
                                width:"50px",
                                color:"gray"
                            }}
                        />
                        :
                        <LocationCityIcon
                        style={{
                            height:"50px",
                            width:"50px",
                            color:"#00cc00"
                        }}
                        />
                    }
                    <br></br>
                    {status==0?
                        <CheckCircleIcon
                            style={{
                                height:"20px",
                                width:"20px",
                                color:"gray"
                            }}
                        />
                        :
                        <CheckCircleIcon
                        style={{
                            height:"20px",
                            width:"20px",
                            color:"#00cc00"
                        }}
                        />
                    }
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                        {status<=1?
                        <DescriptionIcon
                            style={{
                                height:"50px",
                                width:"50px",
                                color:"gray"
                            }}
                        />
                        :
                        <DescriptionIcon
                        style={{
                            height:"50px",
                            width:"50px",
                            color:"#00cc00"
                        }}
                        />
                    }
                    <br></br>
                    {status<=1?
                        <CheckCircleIcon
                            style={{
                                height:"20px",
                                width:"20px",
                                color:"gray"
                            }}
                        />
                        :
                        <CheckCircleIcon
                        style={{
                            height:"20px",
                            width:"20px",
                            color:"#00cc00"
                        }}
                        />
                    }
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                        {status<=2?
                        <VerifiedUserIcon
                            style={{
                                height:"50px",
                                width:"50px",
                                color:"gray"
                            }}
                        />
                        :
                        <VerifiedUserIcon
                        style={{
                            height:"50px",
                            width:"50px",
                            color:"#00cc00"
                        }}
                        />
                    }
                    <br></br>
                    {status<=2?
                        <CheckCircleIcon
                            style={{
                                height:"20px",
                                width:"20px",
                                color:"gray"
                            }}
                        />
                        :
                        <CheckCircleIcon
                        style={{
                            height:"20px",
                            width:"20px",
                            color:"#00cc00"
                        }}
                        />
                    }
                    </Grid>
                </Grid>
                
            </div>
            <div className="main_content">
                {status==0?
                <div>
                    <h1 className="step">STEP 1 OF 3</h1>
                    <p className="message">Enter you location to proceed further</p>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                        <div style={{margin:"10px"}}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Address Line 1</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                labelWidth={110}
                            />
                        </FormControl>
                        </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                        <div style={{margin:"10px"}}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Address Line 2</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                labelWidth={110}
                            />
                        </FormControl>
                        </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                        <div style={{margin:"10px"}}>
                        <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">City Name</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                labelWidth={75}
                            />
                        </FormControl>
                        </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                        <div style={{margin:"10px"}}>
                        <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Pin Code</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                labelWidth={65}
                            />
                        </FormControl>
                        </div>
                        </Grid>
                    </Grid>
                    <div style={{textAlign:"center",margin:"10px"}}>
                    <Button variant="contained" color="primary"
                    style={{
                        height:"40px",
                        fontSize:"1rem"
                    }}
                    onClick={()=>{
                        setStatus(1);
                    }}>
                        SAVE AND PROCEED
                    </Button>
                    </div>
                </div>
                :
                <div></div>}
                {status == 1?
                <div>
                    <h1 className="step">STEP 2 OF 3</h1>
                    <p className="message">LIST OF PRODUCTS IN THE CART</p>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={6} lg={4}>
                            <img src="https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80"
                            className="product_image"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={8}
                        >
                            <h3 className="product_detail">FORMAL COAT</h3>
                            <p className="product_detail">CATEGORY : CLOTHING AND APPARELS</p>
                            <p className="product_detail">MINIMUM PRICE WITHOUT BID : ₹3500</p>
                            <p className="product_detail">QUANTITY : 1</p>
                            <p className="product_detail_total_price">TOTAL PRICE : ₹3500</p>
                        </Grid>
                    </Grid>
                    <div 
                    style={{backgroundColor:"#538df6",height:"0.5px",width:"95%",margin:"auto",marginTop:"5px"}}>
                    </div>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={6} lg={4}>
                            <img src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            className="product_image"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={8}
                        >
                            <h3 className="product_detail">WATCH</h3>
                            <p className="product_detail">CATEGORY : CLOTHING AND APPARELS</p>
                            <p className="product_detail">MINIMUM PRICE WITHOUT BID : ₹5000</p>
                            <p className="product_detail">QUANTITY : 2</p>
                            <p className="product_detail_total_price">TOTAL PRICE : ₹10000</p>
                        </Grid>
                    </Grid>
                    <div 
                    style={{backgroundColor:"#538df6",height:"0.5px",width:"95%",margin:"auto",marginTop:"5px"}}>
                    </div>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={6} lg={4}>
                            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGZvcm1hbCUyMHNob2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            className="product_image"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={8}
                        >
                            <h3 className="product_detail">SPORTS SHOES</h3>
                            <p className="product_detail">CATEGORY : FOOTWEAR</p>
                            <p className="product_detail">MINIMUM PRICE WITHOUT BID : ₹8500</p>
                            <p className="product_detail">QUANTITY : 1</p>
                            <p className="product_detail_total_price">TOTAL PRICE : ₹8500</p>
                        </Grid>
                    </Grid>
                    <div 
                    style={{backgroundColor:"#538df6",height:"0.5px",width:"95%",margin:"auto",marginTop:"5px"}}>
                    </div>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={6} lg={4}>
                            <img src="https://images.unsplash.com/photo-1578808244173-0479a163eb8d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                            className="product_image"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={8}
                        >
                            <h3 className="product_detail">SMART PHONE</h3>
                            <p className="product_detail">CATEGORY : ELECTRONICS</p>
                            <p className="product_detail">MINIMUM PRICE WITHOUT BID : ₹13500</p>
                            <p className="product_detail">QUANTITY : 1</p>
                            <p className="product_detail_total_price">TOTAL PRICE : ₹13500</p>
                        </Grid>
                    </Grid>
                    <div 
                    style={{backgroundColor:"#538df6",height:"0.5px",width:"95%",margin:"auto",marginTop:"5px"}}>
                    </div>
                    <h3 className="total_price">TOTAL PRICE OF ALL ITEMS : ₹35500</h3>
                    <p className="note">Note : This is the maximum price that you may pay for your order and it may fall whenever a new seller makes a bid.</p>
                    <h3 className="total_price">SELLER WITH LOWEST PRICE BEFORE BIDDING PHASE</h3>
                    <Grid container>
                        <Grid item xs={12} sm={12} sm={6} lg={4}>
                        <img src="https://avatars0.githubusercontent.com/u/67575900?s=400&u=a87b16f58b6cf169801a1f7c97237b039dc2bf76&v=4"
                            className="product_image"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={8}
                        >
                            <h3 className="product_detail">PRERIT RETAILERS</h3>
                            <p className="product_detail">CITY : PATNA, INDIA</p>
                            <p className="product_detail">ADDRESS : STREET 10, PATNA</p>
                            <p className="product_detail">INTEREST : CLOTHING, ELECTRONICS</p>
                            <p className="product_detail">ORDERS DELIVERED TILL NOW : 125</p>
                        </Grid>
                    </Grid>
                    <Button variant="contained" color="primary"
                    style={{
                        height:"40px",
                        fontSize:"1rem",
                        margin:"10px"
                    }}
                    onClick={
                        ()=>{
                            setStatus(0);
                        }
                    }>
                         PREVIOUS
                    </Button>
                    <Button variant="contained" color="primary"
                    style={{
                        height:"40px",
                        fontSize:"1rem",
                        float:"right",
                        margin:"10px"
                    }}
                    onClick={
                        ()=>{
                            setStatus(2);
                        }
                    }>
                        NEXT
                    </Button>
                </div>
                :
                <div></div>}
                {status==2?
                <div>
                <h1 className="step">STEP 3 OF 3</h1>
                <h3 className="total_price">ENTER THE OTP SENT TO YOUR MOBILE NO.</h3>
                <div style={{margin:"10px",maxWidth:"768px"}}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">ENTER OTP</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                labelWidth={85}
                            />
                        </FormControl>
                        </div>
                        <Button variant="contained" color="primary"
                    style={{
                        height:"40px",
                        fontSize:"1rem",
                        margin:"10px"
                    }}
                    onClick={
                        ()=>{
                            setStatus(1);
                        }
                    }>
                         PREVIOUS
                    </Button>
                    <Button variant="contained" color="primary"
                    style={{
                        height:"40px",
                        fontSize:"1rem",
                        float:"right",
                        margin:"10px"
                    }}
                    onClick={
                        ()=>{
                            setStatus(3);
                        }
                    }>
                        SUBMIT
                    </Button>
                </div>
                :
                <div></div>}
                {status==3?
                <div style={{textAlign:"center"}}>
                <CheckCircleIcon
                            style={{
                                height:"100px",
                                width:"100px",
                                color:"#00cc00"
                            }}
                />
                <h3 className="total_price">ORDER PLACED SUCCESSFULLY</h3>
                <p className="product_detail">Your order has been successfully placed and addded to the bidding window.
                Sellers within your city can now see your order in the bidding section and bid for the lowest price</p>
                </div>
                :
                <div></div>}
            </div>
        </div>
    )
}

export default PlaceOrder;