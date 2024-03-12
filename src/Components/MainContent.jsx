import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import profilePic from "../assets/PROFILE_PIC-removebg-preview.png"; // Import the image
import memoji from "../assets/memoji.png";
import memoji2 from "../assets/memoji2.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.jpg";
const MainContent = () => {
  return (
    <div style={{ background: "#26243b", padding: 0 }}>
      <div className="container-fluid background-main" id="main">
        {/* <!--Main image--> */}
        <div className="container">
          <div className="row icon-margin">
            <div className="col" align="center">
              <img
                className="img-fluid icon mt-5"
                src={profilePic} // Use the imported image as the src
                alt="Profile Pic"
              />
            </div>
          </div>
        </div>

        {/* <!--Name--> */}
        <div className="container position-relative move-name d-none d-lg-block">
          <div className="row row-cols-auto">
            <div className="col-1 d-md-block d-none d-lg-none"></div>
            <div className="col-sm-2 d-lg-block d-md-none"></div>
            <div className="row name-card">
              <div className="col-sm-1 col-sm-4">
                <h3 className="pt-4 d-none d-lg-block hand">👋</h3>
                <h3 className="pt-1 d-sm-none hand">👋</h3>
              </div>
              <div className="col-sm-1 col-sm-6 p-2">
                Hi! I am <span className="name">KUSHAGRA</span>
              </div>
            </div>
          </div>
        </div>

        {/* <!--HTML--> */}
        <div className="container position-relative d-none d-lg-block ui-design-card ">
          <div className="row row-cols-auto html">
            <div className="col-7"></div>
            <div className="col skills-bubble name-card">HTML</div>
          </div>
        </div>

        {/* <!--CSS--> */}
        <div className="container position-relative d-none d-lg-block  ">
          <div className="row row-cols-auto css">
            <div className="col-6 d-none d-sm-none d-md-block d-lg-block"></div>
            <div className="col skills-bubble name-card">CSS 🎨</div>
          </div>
        </div>
        {/* <!-- JS --> */}
        <div className="container position-relative d-none d-lg-block artist-move">
          <div className="row row-cols-auto js">
            <div className="col-6 d-none d-sm-none d-md-block d-lg-block "></div>
            <div className="col skills-bubble name-card">Java Script✒️</div>
          </div>
        </div>

        <div className="container position-relative d-none d-lg-block artist-move">
          <div className="row row-cols-auto react">
            <div
              className="col skills-bubble name-card frame"
              style={{ marginTop: "-30%", height: "3.5em" }}
            >
              ReactJS📝
            </div>
          </div>
        </div>
        <div className="container position-relative d-none d-lg-block artist-move">
          <div className="row row-cols-auto next" style={{}}>
            <div
              className="col skills-bubble name-card frame next"
              style={{ height: "3.5em" }}
            >
              NextJS📝
            </div>
          </div>
        </div>
        {/* <!--Name card for mobile--> */}
        <div className="container d-block d-lg-none">
          <div className="row row-cols-auto">
            <div className="col-3"></div>
            <div className="col-6" align="center">
              <div className="col-sm-1 col-sm-6 p-2 salute" align="center">
                👋 Hi! I am <span className="name">KUSHAGRA</span>
              </div>
            </div>
          </div>
        </div>
        {/* <!--Tittle--> */}
        <div className="container position-relative moving-tittle">
          <div className="row">
            {/* <!--Name Card for Mobile--> */}
            <div className="col-12">
              <h1
                className="tittle d-sm-block d-md-none d-lg-block"
                align="center"
              >
                Front-End Developer
              </h1>
              <h2
                className="tittle-smaller d-none d-sm-none d-md-block d-lg-none"
                align="center"
              >
                Front-End Developer
              </h2>
            </div>
            <div className="col-12 based-in" align="center">
              <h2 className="size-based">Prayagraj, Uttar Pradesh</h2>
            </div>
          </div>
        </div>

        {/* <!--Button Let's work--> */}
        <div className="container button-lets-work">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6" align="center">
              <a
                // href="/contact.html"
                className="nav-link work-link-color lets-work mb-3"
              >
                Let's work!
              </a>
            </div>

            {/* <!--Line vertical--> */}
            <div className="col-3"></div>
            <div className="container d-flex justify-content-center">
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--Quote--> */}
      <div className="container-fluid quote hide-me" id="quote">
        <div className="container d-flex justify-content-center">
          <div className="line-yellow"></div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3 align="center" className="size-quote first-part-quote">
              Is not just what it looks like and feels like.
            </h3>
          </div>
          <div className="col-12">
            <h3 align="center" className="size-quote second-part-quote">
              Is how it works.
            </h3>
            <p align="center" className="steve-jobs">
              - Steve Jobs
            </p>
          </div>
        </div>
        {/* <!--Line vertically--> */}
        <div className="container d-flex justify-content-center">
          <div className="line-purple"></div>
        </div>
      </div>
      <div className="container-fluid services-space">
        {/* <!--Line guidance--> */}
        <div className="container d-flex justify-content-start">
          <div className="col-1"></div>
          <div className="line-horizontal purple" id="services"></div>
        </div>
        <div className="container d-flex justify-content-start">
          <div className="col-1"></div>
          <div className="line-vertical purple adjust"></div>
        </div>
        {/* <!--Tittles--> */}
        <div className="row">
          <div className="col-1"></div>
          <div className="col-6">
            <h2 className="services-head pt-3">My self</h2>
          </div>
          <div className="col-5"></div>
          {/* <!--New row--> */}
          <div className="col-1"></div>
          <div className="col-6">
            <h3 className="tittle-services">Kushagra Gupta</h3>
          </div>

          {/* <!--Icon--> */}
          <div className="col-5"></div>
          <div className="col-2 ms-4"></div>
          <div className="col-6">
            <img className="img-fluid memoji" src={memoji} />
          </div>

          {/* <!--Icons around--> */}

          <div className="container icons-first d-none d-sm-block">
            <div className="row">
              <div className="col-1 me-4"></div>
              <div className="col-3">
                <i className="fas fa-code code"></i>
              </div>
              <div className="col-1 ms-1">
                <i className="fab fa-bootstrap bootstrap"></i>
              </div>
            </div>
          </div>
          <div className="container d-none d-sm-block">
            <div className="row">
              <div className="col-2"></div>
              <div className="col-2">
                <i className="fab fa-js-square js"></i>
              </div>
              <div className="col">
                <i className="fab fa-github github"></i>
              </div>
            </div>
          </div>
          {/* <!--Icons skills for mobile--> */}
          <div className="container d-block d-sm-none">
            <div className="row d-flex justify-content-center">
              <div className="col-2 size-skill-mobile">
                <i className="fas fa-code code-mobile"></i>
              </div>
              <div className="col-2 size-skill-mobile">
                <i className="fab fa-bootstrap bootstrap-mobile floating"></i>
              </div>
              <div className="col-2 size-skill-mobile">
                <i className="fab fa-js-square js-mobile"></i>
              </div>
              <div className="col-2 size-skill-mobile">
                <i className="fab fa-github github-mobile"></i>
              </div>
            </div>
          </div>
          {/* <!--Skills grid--> */}
          <div className="container-fluid">
            <div className="row">
              {/* <!--Developer skills--> */}
              <div className="col-6 ms-5"></div>
              <div className="col-sm-5 skill first-space" align="left">
                <div className="container card-skills w-75">
                  <i className="fas fa-mouse-pointer pe-1 mouse"></i>
                  <span className="developer-tittle">Developer Skills</span>
                  <div
                    className="col description-skill developer-skills"
                    align="left"
                  >
                    As a Skilled developer, I'm well-versed in front-end
                    technologies like HTML, CSS, and JavaScript, with expertise
                    in building dynamic web applications using ReactJS and
                    Next.js. I also have experience in state management with
                    Redux and Context API, along with integrating design systems
                    such as Material-UI for creating robust and visually
                    stunning user interfaces.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--Line vertically--> */}
        <div className="container">
          <div className="row">
            <div className="col-9"></div>
            <div className="col-1 ms-2">
              <div
                className="
                line-blue-vertical
                space-line-projects
                d-none d-sm-none d-md-none d-lg-block
              "
              ></div>
            </div>
            <div className="col-6"></div>
            {/* <!--Horizontal line--> */}
            <div className="col-2 d-none d-sm-none d-md-none d-lg-block">
              <div className="line-horizontal-project blue"></div>
            </div>
            {/* <!--Vertical Line--> */}
            <div className="col-10 ms-2 d-block d-sm-block d-xl-block">
              <div
                className="line-blue-vertical projects-margin"
                id="project"
              ></div>
            </div>
          </div>
        </div>
        {/* <!--Space--> */}
        <div className="container moving-project-one">
          <div className="row"></div>
        </div>
        {/* <!--My Projects container--> */}
        <div className="container-fluid moving-up-projects moving-project-one">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <h3 className="project-tittle">My projects</h3>
            </div>
            <div className="col-1"></div>
            <div className="col-sm-10 d-flex justify-content-center mt-5"></div>
            {/* <!--1st project--> */}
            <div className="col-6 d-none d-lg-block d-xl-block">
              <a href="https://fire-player.netlify.app/" target="_blank">
                <img className="project-one img-fluid" src={p1} />
              </a>
            </div>
            {/* <!--1st project mobile--> */}
            <div
              className="
              col-12
              d-flex
              justify-content-center
              d-md-block d-lg-none d-xl-none
            "
              align="center"
            >
              <a href="https://fire-player.netlify.app/" target="_blank">
                <img
                  className="project-one-mobile img-fluid"
                  src={p1}
                  alt="Image of Kushagra website"
                />
              </a>
            </div>
            {/* <!--2nd Project--> */}
            <div className="col-6 d-none d-lg-block d-xl-block">
              <a
                href="https://god-of-fire.github.io/Card-flip-game/index"
                target="_blank"
              >
                <img
                  className="project-two img-fluid"
                  src={p2}
                  alt="Image of Kushagra website"
                />
              </a>
            </div>
            {/* <!--2nd project mobile--> */}
            <div
              className="
              col-12
              d-flex
              justify-content-center
              d-md-block d-lg-none d-xl-none
            "
              align="center"
            >
              <a
                href="https://god-of-fire.github.io/Card-flip-game/index"
                target="_blank"
              >
                <img
                  className="project-two-mobile img-fluid"
                  src={p2}
                  alt="Image of Kushagra website"
                />
              </a>
            </div>
            {/* <!--Message at the bottom--> */}
            <div
              className="col-12 d-flex justify-content-center"
              align="center"
            >
              <p className="curious-message">Curious about the process?</p>
            </div>
            <div className="col-12 d-flex justify-content-center visit-position">
              <a href="https://github.com/GOD-OF-FIRE" target="_blank">
                <p className="visit-message">Visit my Github</p>
              </a>
            </div>
          </div>
        </div>

        {/* <!--Vertical Line--> */}
        <div className="container">
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
        {/* <!--About me --> */}
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <div
                className="line-yellow-vertical space-line-projects"
                id="about"
              ></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <h3 className="about-me-tittle">About me</h3>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <h3 className="tittle-services mt-3">Welcome</h3>
            </div>
            {/* <!--Cards of About me--> */}
            <div className="row margin-cards">
              <div className="col-sm-4 d-block d-sm-none d-md-none d-lg-block">
                <div className="card shadow-pink">
                  <div className="card-body" align="center">
                    <h5 className="card-title card-yellow">Education</h5>
                    <p className="card-info">
                      SRM Institute of Science and Technology
                    </p>
                    <p className="card-info">9.2 CGPA</p>
                  </div>
                </div>
              </div>
              {/* <!--Sm for landscape--> */}
              <div className="col-sm-6 d-none d-sm-block d-md-none">
                <div className="card shadow-pink">
                  <div className="card-body" align="center">
                    <h5 className="card-title card-yellow">Education</h5>
                    <p className="card-info">
                      SRM Institute of Science and Technology
                    </p>
                    <p className="card-info">9.2 CGPA</p>
                  </div>
                </div>
              </div>
              {/* <!--Mobile version --> */}
              <div className="col-sm-6 d-none d-md-block d-lg-none">
                <div className="card shadow-pink">
                  <div className="card-body landscape-padding" align="center">
                    <h5 className="card-title card-yellow">Education</h5>
                    <p className="card-info">
                      SRM Institute of Science and Technology
                    </p>
                    <p className="card-info">9.2 CGPA</p>
                  </div>
                </div>
              </div>
              {/* <!--Illustration--> */}
              <div className="col-sm-4 d-block d-sm-none d-md-none d-lg-block">
                <div className="card shadow-blue">
                  <div className="card-body" align="center">
                    <h5 id="go" className="card-title card-blue">
                      Experiance/Contribution
                    </h5>
                    <p className="card-info">
                      Software Engineer at Airtel
                      <br />
                      Github Contribution: 800+
                      <br />
                      Open Source Contribution: Hacktoberfest 2021 (Mentor +
                      Participant)
                      <br />
                      Google Cloud Ready Faciliator Participant
                    </p>
                  </div>
                </div>
              </div>
              {/* <!--Sm for landscape--> */}
              <div className="col-sm-6 d-none d-sm-block d-md-none">
                <div className="card shadow-blue">
                  <div className="card-body" align="center">
                    <h5 id="go" className="card-title card-blue">
                      Experiance/Contribution
                    </h5>
                    <p className="card-info">
                      Software Engineer at Airtel
                      <br />
                      Github Contribution: 800+
                      <br />
                      Open Source Contribution: Hacktoberfest 2021 (Mentor +
                      Participant)
                      <br />
                      Google Cloud Ready Faciliator Participant
                    </p>
                  </div>
                </div>
              </div>
              {/* <!--Mobile version--> */}
              <div className="col-sm-6 d-none d-md-block d-lg-none">
                <div className="card shadow-blue">
                  <div className="card-body" align="center">
                    <h5 id="go" className="card-title card-blue">
                      Experiance/Contribution
                    </h5>
                    <p className="card-info">
                      Software Engineer at Airtel
                      <br />
                      Github Contribution: 800+
                      <br />
                      Open Source Contribution: Hacktoberfest 2021 (Mentor +
                      Participant)
                      <br />
                      Google Cloud Ready Faciliator Participant
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-4 d-block d-sm-none d-md-none d-lg-block"
                align="center"
              ></div>
              {/* <!--2nd row of cards--> */}
              <div
                className="
                col-sm-4
                margin-second-cards
                d-block d-sm-none d-md-none d-lg-block
              "
              >
                <div className="card shadow-purple">
                  <div className="card-body" align="center">
                    <h5 className="card-title card-purple">Networking</h5>
                    <p className="card-info">
                      You can visit My LinkedIn by clicking Below
                    </p>
                  </div>
                </div>
              </div>

              {/* <!--Sm for landscape--> */}
              <div className="col-sm-6 margin-second-cards d-none d-sm-block d-md-none">
                <div className="card shadow-purple">
                  <div className="card-body" align="center">
                    <h5 className="card-title card-purple">Networking</h5>
                    <p className="card-info">
                      You can visit My LinkedIn by clicking Below
                    </p>
                  </div>
                </div>
              </div>
              {/* <!--Mobile Version--> */}
              <div className="col-sm-6 margin-second-cards d-none d-md-block d-lg-none">
                <div className="card shadow-purple">
                  <div className="card-body" align="center">
                    <h5 className="card-title card-purple">Networking</h5>
                    <p className="card-info">
                      You can visit My LinkedIn by clicking Below
                    </p>
                  </div>
                </div>
              </div>
              {/* <!--Music--> */}
              <div
                className="
                col-sm-4
                margin-second-cards
                d-block d-sm-none d-md-none d-lg-block
              "
              >
                <div className="card shadow-green">
                  <div className="card-body" align="center">
                    <h5 className="card-title card-green">Hobies</h5>
                    <p className="card-info">
                      I enjoy playing videogames as a hobby
                    </p>
                  </div>
                </div>
              </div>
              {/* <!--sm for landscape--> */}
              <div className="col-sm-6 margin-second-cards d-none d-sm-block d-md-none">
                <div className="card shadow-green">
                  <div className="card-body" align="center">
                    <h5 className="card-title card-green">Hobbies</h5>
                    <p className="card-info">
                      I enjoy playing videogames as a hobby
                    </p>
                  </div>
                </div>
              </div>
              {/* <!--Mobile Version--> */}
              <div className="col-sm-6 margin-second-cards d-none d-md-block d-lg-none">
                <div className="card shadow-green">
                  <div className="card-body" align="center">
                    <h5 className="card-title card-green">Hobbies</h5>
                    <p className="card-info">
                      I enjoy playing videogames as a hobby
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4"></div>
            </div>
          </div>
        </div>
        {/* <!--Memoji About me--> */}
        <div className="container d-none d-lg-block">
          <div className="row d-flex justify-content-end">
            <div className="col-3 moving-memoji">
              <img src={memoji2} className="memoji-about img-fluid" />
            </div>
          </div>
        </div>
        {/* <!--Memoji about me for mobile--> */}
        <div className="container">
          <div
            className="row d-flex justify-content-center d-block d-sm-block d-md-none"
            align="center"
          >
            <div className="col-12 memoji-mobile">
              <img src={memoji2} className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="container moving-quote-mobile">
          <div className="row" align="center">
            <div
              className="col-12 moving-click d-flex justify-content-center"
              align="center"
            >
              <p className="color-gradient-yellow">
                Wanna know more? Visit my
                <a
                  href="https://www.linkedin.com/in/kushagra-gupta-5a92a812a/"
                  target="_blank"
                  className="link-insta"
                >
                  LinkedIN
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
