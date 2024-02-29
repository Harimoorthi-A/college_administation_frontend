import React from "react";
import "./Result.css";
import { Row, Col } from "react-bootstrap";
import Verticalbar from "./Verticalbar";

function Result() {
  return (
    <div className="result-page">
      <Row className="w-100">
        <Col lg={2} md={2} sm={2} xs={2}>
          <Verticalbar />
        </Col>
        <Col lg={10} md={10} sm={10} xs={10}>
          <Row className="w-100">
            <Row className="text-center">
              <h6>Result</h6>
              <hr />
            </Row>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Result;
