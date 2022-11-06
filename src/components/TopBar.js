import "./TopBar.css"
import globe from "../images/globe.svg"
import React from "react"

export default function TopBar(){
  return(
    <nav>
      <img className="globe" src={globe} alt="small globe"/>
      <h1>my travel journal</h1>
    </nav>
  )
}