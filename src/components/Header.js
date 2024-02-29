import React, { useEffect, useState } from "react";
import "./Header.css";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("currentId")) {
      setLoggedIn(true);
    } else {
    }
  }, []);
  const LogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("currentUser");
    localStorage.removeItem("currentId");
    localStorage.removeItem("token");
    // <Link to={"/"}></Link>;
  };
  return (
    <div className="sticky ms-1">
      <Row
        className="header-first-row text-center pt-2"
        style={{ width: "100%" }}
      >
        <h6>
          Expression of interest for B.Tech 2024 Admission{" "}
          <a href="/admission">
            Click here <i class="fa-solid fa-angles-right"></i>
          </a>
        </h6>
      </Row>
      <Row style={{ width: "100%" }}>
        <Navbar
          expand="lg"
          className="bg-white"
          style={{ minHeight: "100px", width: "100%" }}
        >
          <Container className="ms-2">
            <Navbar.Brand href="/">
              <img
                src="https://i.postimg.cc/3W5tLd20/unnamed.png"
                alt=""
                width={60}
                height={60}
              />
              <b className="ms-3">LMC College of Engineering</b>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              style={{ border: "none" }}
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <div class="dropdown">
                  <Nav.Link class="dropbtn">About us</Nav.Link>
                  <div class="dropdown-content">
                    <a href="" className="a-header">
                      Preamble
                    </a>
                    <a href="" className="a-header">
                      Vision & Mission
                    </a>
                    <a href="" className="a-header">
                      Campus
                    </a>
                    <a href="" className="a-header">
                      Contact us
                    </a>
                  </div>
                </div>
                <div class="dropdown">
                  <Nav.Link class="dropbtn">Departments</Nav.Link>
                  <div class="dropdown-content">
                    <a href="" className="a-header">
                      Civil Engineering
                    </a>
                    <a href="" className="a-header">
                      Computer Science & Engineering
                    </a>
                    <a href="" className="a-header">
                      Electrical & Electronics Engineering
                    </a>
                    <a href="" className="a-header">
                      Electronics & Communication Engineering
                    </a>
                    <a href="" className="a-header">
                      Mechanical Engineering
                    </a>
                    <a href="" className="a-header">
                      Artificial intelligence and Machine Learning
                    </a>
                    <a href="" className="a-header">
                      Electronics and Computer Engineering
                    </a>
                    <a href="" className="a-header">
                      Science & Humanities
                    </a>
                    <a href="" className="a-header">
                      Physical Education
                    </a>
                    <a href="" className="a-header">
                      Office and Administration
                    </a>
                  </div>
                </div>
                <div class="dropdown">
                  <Nav.Link class="dropbtn">Admissions</Nav.Link>
                  <div class="dropdown-content">
                    <a href="" className="a-header">
                      B.Tech
                    </a>
                    <a href="" className="a-header">
                      B.Tech Lateral Entry
                    </a>
                    <a href="" className="a-header">
                      M.Tech
                    </a>
                  </div>
                </div>
                <div class="dropdown">
                  <Nav.Link class="dropbtn">Academics</Nav.Link>
                  <div class="dropdown-content">
                    <a href="" className="a-header">
                      Students Corner
                    </a>
                    <a href="" className="a-header">
                      Courses Offered
                    </a>
                    <a href="" className="a-header">
                      Minor in Engineering
                    </a>
                    <a href="" className="a-header">
                      Academic Calendar
                    </a>
                    <a href="" className="a-header">
                      Centers
                    </a>
                    <a href="" className="a-header">
                      Consultancy
                    </a>
                    <a href="" className="a-header">
                      Funded Projects and Workshop
                    </a>
                    <a href="" className="a-header">
                      Patents
                    </a>
                    <a href="" className="a-header">
                      MoU
                    </a>
                  </div>
                </div>
                <div class="dropdown">
                  <Nav.Link class="dropbtn">Placement</Nav.Link>
                  <div class="dropdown-content">
                    <a href="" className="a-header">
                      Notification
                    </a>
                    <a href="" className="a-header">
                      Placement
                    </a>
                    <a href="" className="a-header">
                      Placement providers
                    </a>
                    <a href="" className="a-header">
                      Training
                    </a>
                    <a href="" className="a-header">
                      IEDC
                    </a>
                    <a href="" className="a-header">
                      TBIC
                    </a>
                  </div>
                </div>
                <div class="dropdown">
                  <Nav.Link class="dropbtn">Associations</Nav.Link>
                  <div class="dropdown-content">
                    <a href="" className="a-header">
                      ASCE
                    </a>
                    <a href="" className="a-header">
                      IEI
                    </a>
                    <a href="" className="a-header">
                      IEEE
                    </a>
                    <a href="" className="a-header">
                      IEEE-PES
                    </a>
                    <a href="" className="a-header">
                      CSI
                    </a>
                    <a href="" className="a-header">
                      IGS
                    </a>
                    <a href="" className="a-header">
                      ISTE
                    </a>
                    <a href="" className="a-header">
                      GDSC
                    </a>
                  </div>
                </div>
                <div class="dropdown">
                  <Nav.Link class="dropbtn">General</Nav.Link>
                  <div class="dropdown-content">
                    <a href="" className="a-header">
                      Alumni
                    </a>
                    <a href="" className="a-header">
                      Online Alumni Feedback
                    </a>
                    <a href="" className="a-header">
                      Online PTA Feedback
                    </a>
                    <a href="" className="a-header">
                      Facilities
                    </a>
                    <a href="" className="a-header">
                      Marian Moments
                    </a>
                    <a href="" className="a-header">
                      College Magazine
                    </a>
                    <a href="" className="a-header">
                      Books Published by Faculty
                    </a>
                    <a href="" className="a-header">
                      Career
                    </a>
                    <a href="" className="a-header">
                      Feedback AICTE Web-Portal
                    </a>
                  </div>
                </div>
                {isLoggedIn ? (
                  <>
                    <b
                      className="mt-2"
                      style={{ textDecoration: "none", color: "black" }}
                      onClick={(e) => LogOut(e)}
                    >
                      Logout
                      <span class="text-danger">
                        <i class="fa-solid fa-right-from-bracket fa-xs"></i>
                      </span>
                    </b>
                  </>
                ) : (
                  <>
                    <Nav.Link class="" href="/login">
                      Login
                    </Nav.Link>
                    <Nav.Link class="" href="/register">
                      Register
                    </Nav.Link>
                    <Nav.Link class="" href="/admin">
                      Admin
                    </Nav.Link>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      <div>
        <Row className="header-second-row ">
          <b className="mt-2">
            <marquee>
              <i class="fa-solid fa-bell fa-shake me-3"></i>
              Admission opens
            </marquee>
          </b>
        </Row>
      </div>
    </div>
  );
}

export default Header;
