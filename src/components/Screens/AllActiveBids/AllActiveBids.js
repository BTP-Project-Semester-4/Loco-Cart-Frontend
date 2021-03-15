import React from "react";
import {useHistory} from 'react-router-dom';
import "./AllActiveBids.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import GavelIcon from "@material-ui/icons/Gavel";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import Link from 'react-router-dom/Link';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const jwt = require('jsonwebtoken');

toast.configure();

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// function sleep(time) {
//   return new Promise((resolve) => setTimeout(resolve, time));
// }
export default function AllActiveBids() {
  const [bidArray, setBidArray] = React.useState([]);
  const [itemArray, setItemArray] = React.useState([]);
  //const [dateTime, setDateTime] = React.useState(new Date());
  const history = useHistory();
  const[ready, setReady] = React.useState(0);
  //const id = setInterval(() => setDateTime(new Date()), 1000);

  React.useEffect(()=>{
    try{
        const decodedToken = jwt.verify(localStorage.getItem("sellerjwt"), process.env.REACT_APP_JWT_SECRET);
        fetch(
            process.env.REACT_APP_BACKEND_API + 'bid/getactivebids',
            {
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    id: decodedToken._id
                })
            }
        ).then(res=>res.json())
        .then(result=>{
            console.log(result)
            if(result.message==="Success"){
                setBidArray(result.bids);
                setItemArray(result.bidItems);
                setReady(1);
            }
        })
    }catch(err){
        console.log(err);
        toast.error("Please login first !", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          });
        history.push("/sellersignin")
    }
  },[]);

  return(
      <div>
          {
              ready==1
              ?
              <div className="BiddingScreenBody">
      {
          bidArray.map((data,index)=>{
              return(
                <div className="container">
                    <div className="BiddingSellerTitle" style={{ display: "flex" }}>
                    <div style={{ width: "30%" }}>
                        <h2 className="BiddingScreenh2">Order Id: {index+1}</h2>
                    </div>
                    {/* <div style={{ width: "70%" }}>
                        <div style={{ float: "right" }}>
                        <var>
                            <AccessAlarmIcon />
                        </var>{" "}
                        <sup>{`${dateTime.toLocaleTimeString()}`}</sup>
                        </div>
                    </div> */}
                    </div>
                    <div className="d-flex">
                    <div style={{ display: "block" }}>
                        <div className="BiddingScreenLeft">
                        <div
                            style={{
                            width: "100%",
                            }}
                        >
                            <b>
                            <div className="orders" style={{ width: "100%" }}>
                                <div>
                                <p style={{ float: "left" }}>Name</p>
                                </div>
                                <div style={{ float: "right" }}>Qty</div>
                            </div>
                            </b>
                        </div>
                        </div>
                        {itemArray[index].map((item)=>{
                            return(
                                <div className="BiddingScreenLeft">
                                <div
                                    style={{
                                    width: "100%",
                                    }}
                                >
                                    <div className="orders" style={{ width: "100%" }}>
                                    <div>
                                        <p style={{ float: "left" }}>{item.name}</p>
                                    </div>
                                    <div style={{ float: "right" }}>{item.quantity}</div>
                                    </div>
                                </div>
                                </div>
                            )
                        })}
                        
                    </div>
                    <div className="Yorder">
                        <div style={{ textAlign: "center" }}>
                        <h3>Bidding Summary</h3>
                        </div>
                        <div
                        style={{
                            width: "100%",
                        }}
                        >
                        {console.log(Date.now()-new Date(data.orderedAt).getTime())}
                        <div className="orders" style={{ width: "100%" }}>
                            <div>
                            <p style={{ float: "left" }}>Present Bid</p>
                            </div>
                            <div style={{ float: "right" }}>Rs. {data.bids[data.bids.length-1].biddingPrice}</div>
                        </div>
                        </div>
                        <div
                        style={{
                            width: "100%",
                        }}
                        >
                        <div className="orders" style={{ width: "100%" }}>
                            <div>
                            <p style={{ float: "left" }}>Date Created</p>
                            </div>
                            <div style={{ float: "right" }}>{months[new Date(data.orderedAt).getMonth()]+" "+new Date(data.orderedAt).getDate()+", "+new Date(data.orderedAt).getFullYear()}</div>
                        </div>
                        </div>
                        <div
                        style={{
                            width: "100%",
                        }}
                        >
                        <div className="orders" style={{ width: "100%" }}>
                            <div>
                            <p style={{ float: "left" }}>Expires in</p>
                            </div>
                            <div style={{ float: "right" }}>{180-((Date.now()-new Date(data.orderedAt))/(1000*60)).toFixed(0)+" minutes"}</div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div style={{ backgroundColor: "#ffffff", width: "100%" }}>
                    <div style={{ padding: "10px", display: "flex", width: "100%" }}>
                        <div
                        style={{
                            width: "100%",
                        }}
                        >
                        <div className="orders" style={{ width: "100%" }}>
                            <div>
                            </div>
                            <div style={{ float: "right" }}>
                            <Link to={"/bids/"+data._id}>
                            <Button variant="contained" color="primary">
                                <p>
                                <GavelIcon /> Bid Now
                                </p>
                            </Button>
                            </Link>
                            
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
              )
          })
      }
      
    </div>
              :
                <div></div>
          }
      </div>
  )
  
}
