import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Sections } from "./components/Section/Section";
import "./style/style.css"

export class App extends React.Component{
  render(){
    return(
      <>
      <Navbar/>
      <Sections/>
      </>
    )
  }
}
