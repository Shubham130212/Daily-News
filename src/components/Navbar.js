import React, { Component } from 'react'
//import PropTypes from 'prop-types'
/*import {
  Link
} from "react-router-dom";*/




  const Navbar=()=>{
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top  bg-dark" style={{textDecorationLine:'none'}}>
        <div className="container-fluid">
        <a className="navbar-brand" href="#">Daily News</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-Link active" aria-current="page" href="#">Home</a>
        </li>
       
        <li className="nav-item mx-1"><a className="nav-Link" href="Business">Business</a></li>
        <li className="nav-item mx-1"><a className="nav-Link" href="Entertainment">Entertainment</a></li>
        <li className="nav-item mx-1"><a className="nav-Link" href="General">General</a></li>
        <li className="nav-item mx-1"><a className="nav-Link" href="Health">Health</a></li>
        <li className="nav-item mx-1"><a className="nav-Link" href="Science">Science</a></li>
        <li className="nav-item mx-1"><a className="nav-Link" href="Sports">Sports</a></li>
        <li className="nav-item mx-1"><a className="nav-Link" href="Technology">Technology</a></li>
        </ul>
        
    </div>
    </div>
   </nav>
      </div>
    )
  }


export default Navbar
