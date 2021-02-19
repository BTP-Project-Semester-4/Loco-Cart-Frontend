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
        `http://localhost:3001/api/feedback`,
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
            
            
  <h1 style={{textAlign:'center'}}>FEEDBACK</h1>
  <p style={{textAlign:'center'}}>Please take a moment to get in touch, we will get back to you shortly.</p>
  <div className="columnss">
    <label htmlFor="the-name">Your Name</label>
    <input type="text" name="name" id="the-name"
      onChange={InputEvent} value={names.name}/>
    <label htmlFor="the-email">Email Address </label>
    <input type="email" name="email" id="the-email" onChange={InputEvent} />
    <label htmlFor="the-phone">Phone Number</label>
    <input type="tel" name="phone" id="the-phone" onChange={InputEvent} value={names.phone}/>
  </div>
  <div className="columnss">
    <label htmlFor="the-message">MESSAGE</label>
    <textarea name="message" id="the-message" defaultValue={""} onChange={InputEvent} value={names.message}/>
    <input type="submit" defaultValue="Send Message" />
  </div>
 
</form>
</div>

        </>
        )
    }
export default Feedback;
