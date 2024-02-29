import React from "react";
import "./Footer.css";
import { Col, Row } from "react-bootstrap";

function Footer() {
  return (
    <div className="">
      <Row className="footer" style={{ width: "100%" }}>
        <Col lg={3} md={4} sm={2} xs={2} className="text-start">
          <h5>Quick Links</h5>
          <p className="p-text">
            <i class="fa-solid fa-chevron-right"></i>Tenders
          </p>
          <p className="p-text">
            <i class="fa-solid fa-chevron-right"></i>Newsletter
          </p>
          <p className="p-text">
            <i class="fa-solid fa-chevron-right"></i>Ragging Notification
          </p>
          <p className="p-text">
            <i class="fa-solid fa-chevron-right"></i>Image Gallery
          </p>
          <p className="p-text">
            <i class="fa-solid fa-chevron-right"></i>Useful Links
          </p>
          <p className="p-text">
            <i class="fa-solid fa-chevron-right"></i>Auditors Reports
          </p>
          <p className="p-text">
            <i class="fa-solid fa-chevron-right"></i>Tenders
          </p>
          <p className="p-text">
            <i class="fa-solid fa-chevron-right"></i>Staff Login
          </p>
        </Col>
        <Col lg={3} md={4} sm={2} xs={2} className="text-start">
          <h5>Tags</h5>
          <p className="p-text">
            <i class="fa-solid fa-chevron-right"></i>Downloads
          </p>
          <p className="p-text">
            <i class="fa-solid fa-chevron-right"></i>Terms and Conditions
          </p>
          <p className="p-text">
            <i class="fa-solid fa-chevron-right"></i>Privacy and disclaimer
          </p>
        </Col>
        <Col lg={3} md={4} sm={2} xs={2} className="text-start">
          <h5>Useful Links</h5>
          <p className="p-text">
            <i class="fa-solid fa-chevron-right"></i>Governing Body
          </p>
          <p className="p-text">
            <i class="fa-solid fa-chevron-right"></i>Management
          </p>
          <p className="p-text">
            <i class="fa-solid fa-chevron-right"></i>Achievements
          </p>
          <p className="p-text">
            <i class="fa-solid fa-chevron-right"></i>Anti Ragging
          </p>
        </Col>
        <Col lg={3} md={4} sm={2} xs={2} className="text-start">
          <h5>LMC College of Engineering</h5>
          <p className="p-text">
            <i class="fa-solid fa-location-dot"></i>Manacaud,
            Thiruvananthapuram-695009
          </p>
          <p className="p-text">
            <i class="fa-solid fa-envelope"></i>mail@lmc.in
          </p>
          <p className="p-text">
            <i class="fa-solid fa-phone"></i>+91 9809873564
          </p>
          <h5>Follow Us</h5>
          <p className="p-text">
            <i class="fa-brands fa-facebook"></i> Facebook
          </p>
          <p className="p-text">
            <i class="fa-brands fa-instagram"></i> Instagram
          </p>
          <p className="p-text">
            <i class="fa-brands fa-x"></i> Twitter
          </p>
        </Col>
      </Row>
      <Row className="text-center sub-footer" style={{ width: "100%" }}>
        <h6>
          <i class="fa-solid fa-copyright"></i>
          All right reserved 2023
        </h6>
      </Row>
    </div>
  );
}

export default Footer;
