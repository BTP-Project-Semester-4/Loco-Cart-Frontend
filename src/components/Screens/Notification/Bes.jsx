import React from "react";
import ReactDOM from "react-dom";
import './Besa.css';
import amit from './amit.png'
// import moment from "moment";

const times = new Date().toLocaleTimeString();
const Notifications=()=>{
  return(
      <div>
        <div style={{height:'10px'}}></div>
<div className="container pb-4">
  <div className="row">
    <div className="col-lg-3">
      <div className="horizontal-card">
        <img src={amit} alt=""/>
        <div className="horizontal-card-body">
          
          
          <div className="orders" style={{width:'100%'}}><div ><p className="name" style={{float:'left'}} >Amit Kumar Upadhyay</p></div><div style={{float:'right'}}>Orderd At-{times}</div></div>
          <div><p  className="order">We highly recommend that you get the product installed by the brand/Flipkart authorized service engineers to prevent the warranty from getting void. To avoid any physical damage to the product while unboxing, please ensure that only an authorised Flipkart delivery/service executive or brand personnel opens the packaging</p></div>
         
         
          <div className="profile">
           
            Customer Profile
          {/* </a> */}
          </div>
        </div>
        <div className="horizontal-card-footer">
          <div></div>
        </div>
      </div>
      <div className="horizontal-card">
        <img src={amit} alt=""/>
        <div className="horizontal-card-body">
          
          
          <div className="orders" style={{width:'100%'}}><div ><p className="name" style={{float:'left'}} >Amit Kumar Upadhyay</p></div><div style={{float:'right'}}>Orderd At-{times}</div></div>
          <div><p  className="order">We highly recommend that you get the product installed by the brand/Flipkart authorized service engineers to prevent the warranty from getting void. To avoid any physical damage to the product while unboxing, please ensure that only an authorised Flipkart delivery/service executive or brand personnel opens the packaging</p></div>
         
         
          <div className="profile">
           
            Customer Profile
          {/* </a> */}
          </div>
        </div>
        <div className="horizontal-card-footer">
          <div></div>
        </div>
      </div>
      <div className="horizontal-card">
        <img src={amit} alt=""/>
        <div className="horizontal-card-body">
          
          
          <div className="orders" style={{width:'100%'}}><div ><p className="name" style={{float:'left'}} >Amit Kumar Upadhyay</p></div><div style={{float:'right'}}>Orderd At-{times}</div></div>
          <div><p  className="order">We highly recommend that you get the product installed by the brand/Flipkart authorized service engineers to prevent the warranty from getting void. To avoid any physical damage to the product while unboxing, please ensure that only an authorised Flipkart delivery/service executive or brand personnel opens the packaging</p></div>
         
         
          <div className="profile">
           
            Customer Profile
          {/* </a> */}
          </div>
        </div>
        <div className="horizontal-card-footer">
          <div></div>
        </div>
      </div>
    </div>
  </div></div>

  </div>
  );
};
export default Notifications;