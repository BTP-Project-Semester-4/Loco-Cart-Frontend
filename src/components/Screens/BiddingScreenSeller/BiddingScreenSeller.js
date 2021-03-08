import './BiddingScreenSeller.css';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import GavelIcon from '@material-ui/icons/Gavel';

export default function BiddingScreenSeller(){
    return(
        <div style={{paddingLeft:"10px",paddingRight:"10px"}}>
        <div className="bidding_screen_all_content">
            <div className="bidding_screen_heading">
                <h1>BIDDING SCREEN</h1>
            </div>
            <div className="bidding_screen_body">
                <h1 
                style={{
                    marginTop:"10px",
                    marginBottom:"10px"}}
                >BID SUMMARY</h1>
                <Grid container
                style={{padding:"8px"}}>
                    <Grid item xs={12} sm={12} md={6} md={6}
                    style={{
                        textAlign:"left",
                        borderBottom:"1px solid gray",
                        padding:"5px",
                    }}>
                        <h3 className="bid_summary">TOTAL ITEMS : 5</h3>
                        <h3 className="bid_summary">CURRENT MIN BID: ₹300</h3>
                        <h3 className="bid_summary">BID STATUS: ONGOING</h3>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} md={6}
                    style={{
                        textAlign:"left",
                        borderBottom:"1px solid gray",
                        padding:"5px",
                    }}>
                        <h3 className="bid_summary">BID DATE : MARCH 8, 2021</h3>
                        <h3 className="bid_summary">TIME REMAINING : 150 minutes</h3>
                        <Grid container
                        style={{marginTop:"10px",marginBottom:"10px"}}>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <TextField
                                type="number"
                                variant="outlined"
                                label="Enter bid amount"
                                style={{width:"100%"}}></TextField>
                            </Grid>
                            <Grid
                            style={{padding:"8px"}} item xs={6} sm={6} md={6} lg={6}>
                                <div
                                className="bid_button">
                                    <GavelIcon></GavelIcon>
                                    Bid Now
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                
                <h1>LIST OF ITEMS</h1>
                <Grid container
                style={{padding:"5px"}}>
                <Grid
                style={{
                    borderBottom:"1.5px solid gray"
                }} 
                item xs={12} sm={12} md={6} lg={4}>
                    <img src="https://images.pexels.com/photos/1025585/pexels-photo-1025585.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{
                            borderRadius:"10px",
                            width:"100%",
                            height:"220px",
                            marginTop:"10px",
                            marginLeft:"auto",
                            marginRight:"auto",
                        }}
                    />
                </Grid>
                <Grid style={{
                    textAlign:"left",
                    padding:"10px",
                    borderBottom:"1.5px solid gray"}} 
                    item xs={12} sm={12} md={6} lg={8}>
                    <h2 className="item_details">NAME : PEN</h2>
                    <h2 className="item_details">CATEGORY : STATIONERY</h2>
                    <h2 className="item_details">QUANTITY : 2</h2>
                </Grid>

                <Grid
                style={{
                    borderBottom:"1.5px solid gray"
                }} 
                item xs={12} sm={12} md={6} lg={4}>
                    <img src="https://images.pexels.com/photos/1025585/pexels-photo-1025585.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{
                            borderRadius:"10px",
                            width:"100%",
                            height:"220px",
                            marginTop:"10px",
                            marginLeft:"auto",
                            marginRight:"auto",
                        }}
                    />
                </Grid>
                <Grid style={{
                    textAlign:"left",
                    padding:"10px"
                    ,borderBottom:"1.5px solid gray"}} item xs={12} sm={12} md={6} lg={8}>
                    <h2 className="item_details">NAME : PEN</h2>
                    <h2 className="item_details">CATEGORY : STATIONERY</h2>
                    <h2 className="item_details">QUANTITY : 2</h2>
                </Grid>
                <Grid
                style={{
                    borderBottom:"1.5px solid gray"
                }} 
                item xs={12} sm={12} md={6} lg={4}>
                    <img src="https://images.pexels.com/photos/1025585/pexels-photo-1025585.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{
                            borderRadius:"10px",
                            width:"100%",
                            height:"220px",
                            marginTop:"10px",
                            marginLeft:"auto",
                            marginRight:"auto",
                        }}
                    />
                </Grid>
                <Grid style={{
                    textAlign:"left",
                    padding:"10px"
                    ,borderBottom:"1.5px solid gray"}} item xs={12} sm={12} md={6} lg={8}>
                    <h2 className="item_details">NAME : PEN</h2>
                    <h2 className="item_details">CATEGORY : STATIONERY</h2>
                    <h2 className="item_details">QUANTITY : 2</h2>
                </Grid>
                <Grid
                style={{
                    borderBottom:"1.5px solid gray"
                }} 
                item xs={12} sm={12} md={6} lg={4}>
                    <img src="https://images.pexels.com/photos/1025585/pexels-photo-1025585.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{
                            borderRadius:"10px",
                            width:"100%",
                            height:"220px",
                            marginTop:"10px",
                            marginLeft:"auto",
                            marginRight:"auto",
                        }}
                    />
                </Grid>
                <Grid style={{
                    textAlign:"left",
                    padding:"10px"
                    ,borderBottom:"1.5px solid gray"}} item xs={12} sm={12} md={6} lg={8}>
                    <h2 className="item_details">NAME : PEN</h2>
                    <h2 className="item_details">CATEGORY : STATIONERY</h2>
                    <h2 className="item_details">QUANTITY : 2</h2>
                </Grid>
                <Grid
                style={{
                    borderBottom:"1.5px solid gray"
                }} 
                item xs={12} sm={12} md={6} lg={4}>
                    <img src="https://images.pexels.com/photos/1025585/pexels-photo-1025585.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{
                            borderRadius:"10px",
                            width:"100%",
                            height:"220px",
                            marginTop:"10px",
                            marginLeft:"auto",
                            marginRight:"auto",
                        }}
                    />
                </Grid>
                <Grid style={{
                    textAlign:"left",
                    padding:"10px"
                    ,borderBottom:"1.5px solid gray"}} item xs={12} sm={12} md={6} lg={8}>
                    <h2 className="item_details">NAME : PEN</h2>
                    <h2 className="item_details">CATEGORY : STATIONERY</h2>
                    <h2 className="item_details">QUANTITY : 2</h2>
                </Grid>
                <Grid
                style={{
                    borderBottom:"1.5px solid gray"
                }} 
                item xs={12} sm={12} md={6} lg={4}>
                    <img src="https://images.pexels.com/photos/1025585/pexels-photo-1025585.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        style={{
                            borderRadius:"10px",
                            width:"100%",
                            height:"220px",
                            marginTop:"10px",
                            marginLeft:"auto",
                            marginRight:"auto",
                        }}
                    />
                </Grid>
                <Grid style={{
                    textAlign:"left",
                    padding:"10px"
                    ,borderBottom:"1.5px solid gray"}} item xs={12} sm={12} md={6} lg={8}>
                    <h2 className="item_details">NAME : PEN</h2>
                    <h2 className="item_details">CATEGORY : STATIONERY</h2>
                    <h2 className="item_details">QUANTITY : 2</h2>
                </Grid>

                </Grid>
                <h1>LIST OF BIDDING SELLERS</h1>
                <Grid
                style={{maxWidth:"560px",
                marginLeft:"auto",
                marginRight:"auto",
                paddingLeft:"10px",
                paddingRight:"10px"}}
                container>
                    <Grid 
                    style={{borderBottom:"1px solid gray"}} 
                    item xs={3} sm={3} md={3} lg={3}>
                        <img src="https://avatars.githubusercontent.com/u/54065357?s=400&u=e02a7adcdfffa13bf8ca5a935793139752b1a4ff&v=4"
                        style={{
                            borderRadius:"50%",
                            width:"60px",
                            height:"60px",
                            marginTop:"10px"
                        }}/>
                    </Grid>
                    <Grid 
                    style={{borderBottom:"1px solid gray",
                    textAlign:"left"}}  
                    item xs={9} sm={9} md={9} lg={9}>
                        <h3
                        style={{
                            marginTop:"10px"
                        }}>NALIN SELLERS</h3>
                        <h4
                        style={{
                            marginTop:"10px"
                        }}>BIDDING PRICE : ₹35000</h4>
                    </Grid>

                    <Grid 
                    style={{borderBottom:"1px solid gray"}} 
                    item xs={3} sm={3} md={3} lg={3}>
                        <img src="https://avatars.githubusercontent.com/u/54065357?s=400&u=e02a7adcdfffa13bf8ca5a935793139752b1a4ff&v=4"
                        style={{
                            borderRadius:"50%",
                            width:"60px",
                            height:"60px",
                            marginTop:"10px"
                        }}/>
                    </Grid>
                    <Grid 
                    style={{borderBottom:"1px solid gray",
                    textAlign:"left"}}  
                    item xs={9} sm={9} md={9} lg={9}>
                        <h3
                        style={{
                            marginTop:"10px"
                        }}>NALIN SELLERS</h3>
                        <h4
                        style={{
                            marginTop:"10px"
                        }}>BIDDING PRICE : ₹37000</h4>
                    </Grid>

                    <Grid 
                    style={{borderBottom:"1px solid gray"}} 
                    item xs={3} sm={3} md={3} lg={3}>
                        <img src="https://avatars.githubusercontent.com/u/54065357?s=400&u=e02a7adcdfffa13bf8ca5a935793139752b1a4ff&v=4"
                        style={{
                            borderRadius:"50%",
                            width:"60px",
                            height:"60px",
                            marginTop:"10px"
                        }}/>
                    </Grid>
                    <Grid 
                    style={{borderBottom:"1px solid gray",
                    textAlign:"left"}}  
                    item xs={9} sm={9} md={9} lg={9}>
                        <h3
                        style={{
                            marginTop:"10px"
                        }}>NALIN SELLERS</h3>
                        <h4
                        style={{
                            marginTop:"10px"
                        }}>BIDDING PRICE : ₹38000</h4>
                    </Grid>

                    <Grid 
                    style={{borderBottom:"1px solid gray"}} 
                    item xs={3} sm={3} md={3} lg={3}>
                        <img src="https://avatars.githubusercontent.com/u/54065357?s=400&u=e02a7adcdfffa13bf8ca5a935793139752b1a4ff&v=4"
                        style={{
                            borderRadius:"50%",
                            width:"60px",
                            height:"60px",
                            marginTop:"10px"
                        }}/>
                    </Grid>
                    <Grid 
                    style={{borderBottom:"1px solid gray",
                    textAlign:"left"}}  
                    item xs={9} sm={9} md={9} lg={9}>
                        <h3
                        style={{
                            marginTop:"10px"
                        }}>NALIN SELLERS</h3>
                        <h4
                        style={{
                            marginTop:"10px"
                        }}>BIDDING PRICE : ₹40000</h4>
                    </Grid>

                    <Grid 
                    style={{borderBottom:"1px solid gray"}} 
                    item xs={3} sm={3} md={3} lg={3}>
                        <img src="https://avatars.githubusercontent.com/u/54065357?s=400&u=e02a7adcdfffa13bf8ca5a935793139752b1a4ff&v=4"
                        style={{
                            borderRadius:"50%",
                            width:"60px",
                            height:"60px",
                            marginTop:"10px"
                        }}/>
                    </Grid>
                    <Grid 
                    style={{borderBottom:"1px solid gray",
                    textAlign:"left"}}  
                    item xs={9} sm={9} md={9} lg={9}>
                        <h3
                        style={{
                            marginTop:"10px"
                        }}>NALIN SELLERS</h3>
                        <h4
                        style={{
                            marginTop:"10px"
                        }}>BIDDING PRICE : ₹42000</h4>
                    </Grid>
                    
                </Grid>
                    
            </div>
        </div>
        </div>
    )
}