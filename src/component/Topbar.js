import React from "react";
import { NavLink } from "react-router-dom";

const Topbar = () => {
  return (
    <nav className="navbar   navbar-expand-sm fixed-top">
    <div className="container-fluid  ">
      <NavLink className="navbar-brand" to="/"  navbar-light bg-light style={{color:"green"}}>Organic</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Organic</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/" style={{color:"green"}}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" style={{color:"green"}} >About</NavLink>
             
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/service" style={{color:"green"}} >Service</NavLink>
             
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="product" style={{color:"green"}} >Product</NavLink>
             
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" style={{color:"green"}} >Contact</NavLink>
             
            </li>
          
          
          </ul>
          {/* <form className="d-flex mt-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Topbar;
