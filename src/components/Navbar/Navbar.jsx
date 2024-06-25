import React from "react";
import "./style.css"

export class Navbar extends React.Component{
  render(){
    return(
      <header>
        <div className="nav-bar">
          <button className="sign-up-btn">Sign up</button>
          <ul className="nav-links">
            <li><a href="">White paper</a></li>
            <li><a href="">Get started</a></li>
            <li><a href="">Resources</a></li>
            <li><a href="">Community</a></li>
          </ul>
        </div>
      </header>
    )
  }
}