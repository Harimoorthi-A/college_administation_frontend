import React from "react";
import "./Request.css";
import { Col, Form, Row } from "react-bootstrap";
import Verticalbar from "./Verticalbar";

function Request() {
  return (
    <div className="request-page">
      <Row className="w-100">
        <Col lg={2} md={2} sm={2} xs={2}>
          <Verticalbar />
        </Col>
        <Col lg={10} md={10} sm={10} xs={10}>
          <Row className="w-100">
            <Row className="text-center">
              <h6>Request</h6>
              <hr />
            </Row>
            <Row>
              <Form>
                <Form.Group as={Row} className="mb-5" controlId="formPlaintext">
                  <Form.Label column sm="2">
                    Request
                  </Form.Label>
                  <Col sm="10">
                    <Form.Select aria-label="Default select example">
                      <option>select</option>
                      <option value="0">SSLC Certificate</option>
                      <option value="1">Plus two Certificate</option>
                      <option value="1">Conduct Certificate</option>
                      <option value="1">B.Tech Certificate</option>
                      <option value="1">Consolidated marksheet</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Form>
            </Row>
            <Row className="request-button">
              <Col lg={9} md={9} sm={9} xs={9}></Col>
              <Col lg={3} md={3} sm={3} xs={3}>
                <button class="custom-btn btn-3">
                  <span>Register</span>
                </button>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Request;
