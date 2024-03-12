import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    console.log("clicked");
    navigate("/details"); 
  };

  return (
    <div className="navbar navbar-expand-lg navbar-dark fixed-top navbar-color">
      <div className="container-fluid nav-font pt-1">
        <div className="col-2 d-none d-sm-none d-md-none d-lg-none d-xl-block"></div>
        <div className="col-1 d-none d-sm-nonce d-md-none d-lg-block d-xl-none"></div>
        <a className="navbar-brand col-2 nav-name" href="#main">
          Kushagra Gupta
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon position-relative justify-content-sm-end"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav justify-content-center">
            <li className="nav-item services">
              <a
                className="nav-link active"
                aria-current="page"
                href="#services"
              >
                Introduction
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#project">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#about">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" onClick={handleContactClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
