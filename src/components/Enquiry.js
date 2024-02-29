import React from "react";
import "./Enquiry.css";
import { Col, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Dropdown from "react-bootstrap/Dropdown";

function Enquiry() {
  return (
    <div className="enquiry-page">
      <Row className="w-100">
        <Col className="" lg={2} md={2} sm={2} xs={2}>
          <Sidebar />
        </Col>
        <Col className="" lg={10} md={10} sm={10} xs={10}>
          <Row className="w-100">
            <Row className="text-center">
              <h6>Enquiries</h6>
              <hr />
            </Row>
            <Row className="mt-5">
              <Row className="enq-box ms-3">
                <Col lg={11} md={11} sm={11} xs={11}>
                  <b>Name : Hari</b> <br />
                  <b>Address : Attukal</b> <br />
                  <b>Phone number : +91 9809873564</b> <br />
                  <b>Enquiry : "Fees structure of B.Tech Civil Engineering"</b>
                </Col>
                <Col lg={1} md={1} sm={1} xs={1}>
                  <i class="fa-solid fa-xmark btn" style={{color:'red', cursor:'pointer'}}></i>
                </Col>
              </Row>
            </Row>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Enquiry;
