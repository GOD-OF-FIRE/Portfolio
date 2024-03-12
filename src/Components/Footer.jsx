import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();

  const contactGo = () => {
    navigate("/details");
  };
  return (
    <>
      <div className="container-fluid background-footer">
        <div className="row">
          <div className="container d-flex justify-content-center">
            <div className="line-footer" id="contact"></div>
          </div>
          <div className="col-12 padding-footer">
            <h3
              align="center"
              className="size-quote second-part-quote mobile-size-footer"
            >
              Let's work together!
            </h3>
            <div className="col-12" align="center">
              <form>
                <button
                  type="submit"
                  value="Go to Contact page"
                  className="btn btn-outline-primary"
                  onClick={contactGo}
                >
                  Contact me <i className="fas fa-chevron-right ps-1"></i>
                </button>
              </form>
              <form
                action="https://drive.google.com/file/d/1KxVuvt0q3nRq6xU_Itmqg0WyViH3g3PL/view?usp=sharing"
                target="_blank"
              >
                <button
                  type="submit"
                  value="Go to Contact page"
                  className="btn btn-outline-primary"
                >
                  Download Resume <i className="fas fa-chevron-right ps-1"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid border-top-footer">
        <div className="row">
          <div className="col-4">
            <p className="footer-description">
              All rights reserved by Kushagra
            </p>
          </div>
          <div className="col-2">
            <p className="footer-description">Front-End Developer</p>
          </div>
          <div className="col-6" align="center">
            <a
              href="https://wa.me/+919125322015"
              target="_blank"
              className="footer-description"
            >
              WhatsApp
            </a>
            <a
              href="https://github.com/GOD-OF-FIRE"
              target="_blank"
              className="footer-description"
            >
              Github
            </a>
            <a
              href="mailto:kushagra357@gmail.com"
              className="footer-description"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/kushagra-gupta-5a92a812a/"
              target="_blank"
              className="footer-description"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
