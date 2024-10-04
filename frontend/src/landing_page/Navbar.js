import React from "react";
import {Link} from "react-router-dom";
function Navbar() {
  return (
      <nav className="navbar fixed-top navbar-expand-lg bg-white border-bottom px-5 py-3">
        <div className="container-fluid px-5">
          <Link className="navbar-brand ms-5" to="/">
          <img src="media/logo.svg" style={{width:"25%"}} alt="logo_image" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           
          </div>
          <form className="d-flex">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-medium">
              <li className="nav-item me-4">
                <Link className="nav-link" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              
              <li className="nav-item me-4">
                <Link to="/products" className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link to="/pricing" className="nav-link">
                  Pricing
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link to="/support" className="nav-link">
                  Support
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link">
                <i className="fa fa-bars" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </nav>
    
  );
}

export default Navbar;
