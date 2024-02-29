import React from "react";
import "./Review.css";
import { Col, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";

function Review() {
  return (
    <div className="review-page">
      <Row className="w-100">
        <Col lg={2} md={2} sm={2} xs={2}>
          <Sidebar />
        </Col>
        <Col lg={10} md={10} sm={10} xs={10}>
          <Row className="w-100">
            <Row className="text-center">
              <h6>Reviews</h6>
              <hr />
            </Row>
            <Row className="mt-5">
              <Row className="review-box ms-3">
                <Col lg={11} md={11} sm={11} xs={11}>
                  <b>Name : Hari</b> <br />
                  <b>Phone number : +91 9809873564</b> <br />
                  <b>Reviews : "Super college"</b>
                </Col>
                <Col lg={1} md={1} sm={1} xs={1}>
                  <i
                    class="fa-solid fa-xmark btn"
                    style={{ color: "red", cursor: "pointer" }}
                  ></i>
                </Col>
              </Row>
            </Row>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Review;
