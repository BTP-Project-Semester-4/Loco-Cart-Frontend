import React,{useState} from 'react';
import ReactDOM from "react-dom";
import './Style.css';
import Axios from 'axios';

const Feedback=()=>{

  const [names,setNames]=useState({
     name:"",
     email:"",
     phone:"",
     message:""
  });
    const InputEvent=(event)=>{
            const{value,name}=event.target;
            setNames((preValue)=>{
              if(name==="name")
              {
               return{
                 name:value,
                 email:preValue.email,
                 message:preValue.message,
                 phone:preValue.phone,
               };
              }
              else if(name==="message")
              {
               return{
                 name:preValue.name,
                 email:preValue.email,
                 message:value,
                 phone:preValue.phone,
               };
              }
              else if(name==="phone")
              {
               return{
                 name:preValue.name,
                 email:preValue.email,
                 message:preValue.message,
                 phone:value,
               };
              }
              else if(name==="email")
              {
               return{
                 name:preValue.name,
                 email:value,
                 message:preValue.message,
                 phone:preValue.phone,
               };
              }
            });
          
    };

    const onSubmit=(event)=>{
      event.preventDefault();
      console.log(names.email);
      if(names.email===''||names.message===''||names.phone===''||names.name==='')
      {
          alert("Please fill all the feilds");
          window.location.reload();
      }
      else
      {
      Axios.post(
        process.env.REACT_APP_BACKEND_API + `feedback`,
        {
          email:names.email,
          message:names.message,
          name:names.name
        }
        
      )
        .then((result) => {})

    };
    alert("Thank You for your response");
    window.location.reload();
}

  
    return(
        <>
       <link href="Style.css" rel="stylesheet" />
       <div className="bodys">
        <form onSubmit={onSubmit}>
            
            
  <h1 className="feed">FEEDBACK</h1>
  <p className="feed">Please take a moment to get in touch, we will get back to you shortly.</p>
  <div className="columnss">
    <div className="the-name">Your Name</div>
    <input type="text" name="name" id="the-name"
      onChange={InputEvent} value={names.name}/>
    <div className="the-email">Email Address </div>
    <input type="email" name="email" id="the-email" onChange={InputEvent} />
    <div className="the-phone">Phone Number</div>
    <input type="tel" name="phone" id="the-phone" onChange={InputEvent} value={names.phone}/>
  </div>
  <div className="columnss">
    <label className="the-message">MESSAGE</label>
    <textarea name="message" id="the-message" defaultValue={""} onChange={InputEvent} value={names.message}/>
    <input type="submit" defaultValue="Send Message" />
  </div>
 
</form>
</div>

        </>
        )
    }
export default Feedback;
