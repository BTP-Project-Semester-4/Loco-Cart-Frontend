import React from 'react';
import './ProductDescription.css';
import Colors from './Colors';
import DetailsThumb from './DetailsThumb';

class ProductDescription extends React.Component{
  state={
       products:[
         {
           "_id":"1",
           "title":<h2 style={{padding:'0',lineHeight:0.4,fontSize:'inherit',fontWeight:'inherit',display:'inline-block',fontFamily:'Roboto,Arial,sans-serif',textDecorationLine: 'underline'}}>Boat Headphones</h2>,
           "src":[
            "2.png",
           ],
          
          
           "description":<h2 style={{fontFamily: 'Comic Sans MS',fontStyle:'oblique'}}>
           
           <p>Beautiful sound Quality</p>
           <p>Fast Charging</p>
           </h2>,
            
           "colors":["black","blue","red","green"],
           "price":450,

       
       "count":1
         }
       ],
       index:0
       
  };
  myRef=React.createRef();

  handleTab=index=>{
   this.setState({index:index})
   const images=this.myRef.current.children;
   for(let i=0; i<images.length; i++){
     images[i].className=images[i].className.replace("active","");
   }
   images[index].className="active";
  };
  componentDidMount(){
    const {index}=this.state;
    this.myRef.current.children[index].className="active";
  }
    render()
    {
      const {products,index}=this.state;
        return(
            <div className="app">
            {
              products.map(item=>(
                <div className="details" key={item._id}>
                <div className="big-img">
                  <img src={item.src[index]} alt=""/>
                </div>
                <div className="box">
                <div className="row">
                 <h2>{item.title}</h2>
                 
                  

                </div>
                <h2 style={{fontFamily: 'Comic Sans MS',fontStyle:'italic',fontWeight:'bold'}}>-Colors Available</h2>
                
               <Colors colors={item.colors}/>
               <h2 style={{fontFamily: 'Comic Sans MS',fontStyle:'italic',fontWeight:'bold'}}>-Description</h2>
                <p>{item.description}</p>
                <p>{item.content}</p>
                <h2 style={{fontFamily: 'Comic Sans MS',fontStyle:'italic',fontWeight:'bold'}}>Price-{item.price}</h2>
                {/* <p></p> */}
                  <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef}/>
                  <button className="cart"><h4 style={{fontFamily:'Cosmic Sans MS'}}>ADD TO CART</h4></button>
                </div>
                </div>
              ))
            }
              
            </div>
        )
    }
}
export default ProductDescription;