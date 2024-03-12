import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import MainContent from "./Components/MainContent.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Details from "./Components/Details.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <MainContent />
              <Footer />
            </>
          }
        />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
