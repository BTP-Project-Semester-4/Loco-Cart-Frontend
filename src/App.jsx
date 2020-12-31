import React from "react";
import ReactDOM from "react-dom";
import './navbar.css';
// import './nav'
const App=()=>
{
  return(
  <>
    <div class ="navdiv">
        <ul class="nav">
            <li><a href="/login"  class="navbar navla" onclick="login()">Customer Login</a></li>
            <li><a href="/signup"  class="navbar navla" onclick="signup()">Sign Up</a></li>
            <li><a href="/mycart"  class="navbar navli" onclick="mycart()">My Cart</a></li>
            <li><a href="/about" class="navbar navli" onclick="aboutus()">About Us</a></li>
            <li><a href="/home" class="navbar navli" onclick="myHome()">Home</a></li>
            
        </ul>
        </div>
  </>
  );
};
export default App;