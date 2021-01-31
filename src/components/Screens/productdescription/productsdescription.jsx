import React from "react";
import ReactDOM from "react-dom";
import "./product.css";
import p2 from './p3.png';

const Productdesc=()=>{
return (
<>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<section>
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-5">
        <div className="thumbnail">
          <img src={p2} className="img-responsive" alt=""/>
          <div className="caption">
            <div className="row buttons">
              <button className="btn  col-sm-4 col-sm-offset-2 btn-lg" style={{backgroundColor: '#ff9f00', color: '#fff', fontSize: '1em'}}><span className="glyphicon glyphicon-shopping-cart" />&nbsp;ADD TO CART</button>
              <button className="btn col-sm-4 col-sm-offset-1 btn-lg" style={{backgroundColor: '#fb641b', color: '#fff', fontSize: '1em'}}><i className="fa fa-bolt" style={{fontSize: '1.2em'}} /> BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-7 desc">
        <div>
          <ol className="breadcrumb col-sm-12" style={{backgroundColor: 'transparent'}}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Electronics</a></li>
            <li><a href>Mobiles</a></li>
            <li><a href>iPhone</a></li>
            <li className="active">iPhone X</li>
          </ol>
          <h4>Apple iPhone X (Silver 64GB)</h4>
          <div className="row">
          </div>
          <div>
            <h3>Rs 92,400</h3> 
          </div>
          
          <br /> 
          <br />
          <div className="row">
            <div className="col-sm-6">
              <strong style={{fontWeight:'bold'}}>Color</strong>
              <br /><br />
              <button className="btn btn-default" style={{width: 50}}><img src={p2} className="img-responsive" alt=""/></button>
            </div>
           
          </div>
          <br /><br />
          <br /><br />
          <div id="highlights">
            <strong className="col-xs-3">Highlights</strong> 
            <ul className="col-xs-6">
              <li style={{fontWeight:'bold'}}> 64GB ROM</li>
              <li style={{fontWeight:'bold'}}> 5.8 inch Super Retina HD Display</li>
              <li style={{fontWeight:'bold'}}> 12MP + 12MP Dual Rear Camera | 7MP Front Camera</li>
              <li style={{fontWeight:'bold'}}> lithium-ion Battery</li>
              <li style={{fontWeight:'bold'}}> A11 Bionic Chip with 64-bit Architecture, Neural Engine, Embedded M11 Motion Co-processor</li>
              <p></p>
              <p></p>
              <button class="button button1">SELLER PROFILE</button>
            </ul>
          </div>
        </div>
        <br /><br />
        <div className="container col-xs-12" style={{marginTop: 50}}>
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="col-sm-12">
                <h3>PRODUCT DESCRIPTION</h3>
                <p style={{fontWeight:'bold'}}>Meet the iPhone X - the device that’s so smart that it responds to a tap, your voice, and even a glance. Elegantly designed with a large 14.73 cm (5.8) Super Retina screen and a durable front-and-back glass, this smartphone is designed to impress. What’s more, you can charge this iPhone wirelessly.</p>
              </div>
            </div>
            <hr />
            <div className="panel-body">
              <div className="col-sm-12">
                <div className="col-sm-8">
                  <h3>14.73 cm Super Retina Screen</h3>
                  <p style={{fontWeight:'bold'}}>Movies or games - with its Super Retina screen, you can enjoy an immersive-viewing experience that dazzles the eyes.</p>
                </div>
                <div className="col-sm-4">
                  <img src={p2} className="img-responsive" alt="" />
                </div>
              </div>
            </div>
            <hr />
            <div className="panel-body">
              <div className="col-sm-12">
                <div className="col-sm-4">
                  <img src={p2} className="img-responsive" alt=""/>
                </div>
                <div className="col-sm-8">
                  <h3>
                    Innovative Display Technology</h3>
                  <p style={{fontWeight:'bold'}}>
                  
                    Innovative Display Technology
                    The display, with new techniques and technology, follows the curves and its elegantly rounded corners.</p>
                </div>
              </div>
            </div>
           
          </div>
          <div className="panel panel-default" id="specifications">
            <div className="panel-heading" style={{backgroundColor: '#fff'}}>
              <h3>Specifications</h3>
            </div>
            <div className="panel-body">
              <h4 style={{fontWeight:'bold'}}>General</h4>
              <table className="table table-default">
                <tbody>
                  <tr style={{fontWeight:'bold'}}><td className="col-sm-4">In The Box</td> <td className="col-sm-8">
                      Handset, EarPods with Lightning Connector, Lightning to 3.5 mm Headphone Jack Adapter, Lightning to USB Cable, USB Power Adapter, Documentation</td></tr>
                  <tr style={{fontWeight:'bold'}}><td className="col-sm-4">Model Number</td>  <td className="col-sm-8">
                      MQA62HN/A</td></tr>
                  <tr style={{fontWeight:'bold'}}><td className="col-sm-4">Model Name</td>  <td className="col-sm-8">iPhone X</td></tr>
                  <tr style={{fontWeight:'bold'}}><td className="col-sm-4">Color</td>  <td className="col-sm-8">Silver</td></tr>
                  <tr style={{fontWeight:'bold'}}><td className="col-sm-4">Browse Type</td>  <td className="col-sm-8">Smartphones</td></tr>
                </tbody>
              </table>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div></section> 
<br /><br />

</>
);
};
export default Productdesc;