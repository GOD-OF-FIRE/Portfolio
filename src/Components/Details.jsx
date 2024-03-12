import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import memoji2 from "../assets/memoji2.png";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="background-contact-me">
      <div className="container-fluid">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-color">
          <div className="container-fluid nav-font pt-1">
            <div className="col-2 d-none d-sm-none d-md-none d-lg-none d-xl-block"></div>
            <div className="col-1 d-none d-sm-none d-md-none d-lg-block d-xl-none"></div>
            <a className="navbar-brand col-2 nav-name" onClick={handleGoBack}>
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
              <span
                className="
                navbar-toggler-icon
                position-relative
                justify-content-sm-end
              "
              ></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav justify-content-center">
                <li className="nav-item work-link d-none d-lg-block">
                  <a
                    className="nav-link work-link-color"
                    onClick={handleGoBack}
                  >
                    <i className="fas fa-chevron-left pe-1"></i> Back to main
                    page
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Image Memoji */}
        <div className="row">
          <div className="col-12" align="center">
            <div className="card padding-contact padding-body-contact">
              <div className="card-body">
                <div className="col-12 exit d-lg-none d-xl-none" align="end">
                  <a
                    href="/index.html"
                    className="link-email"
                    onClick={handleGoBack}
                  >
                    <i className="fas fa-times"></i>
                  </a>
                </div>
                <div className="col-12" align="center">
                  <img
                    src={memoji2}
                    className="image-contact img-fluid"
                    alt="Memoji"
                  />
                </div>
              </div>
              {/* Email */}
              <div className="container">
                <div className="row" align="center">
                  <div className="col-12">
                    <h3 className="email-contact">
                      <a
                        className="link-email"
                        href="mailto:kushagra357@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        kushagra357@gmail.com
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              {/* Another contact option */}
              <div >
                <div className="row icons-contact" align="center">
                  <div className="col-4">
                    <a
                      className="link-email"
                      href="https://www.linkedin.com/in/kushagra-gupta-5a92a812a/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                  <div className="col-4 margin-mobile-instagram">
                    <a
                      className="link-email"
                      href="https://www.instagram.com/kushagra._.99/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                  <div className="col-4">
                    <a
                      className="link-email"
                      href="https://github.com/GOD-OF-FIRE"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
