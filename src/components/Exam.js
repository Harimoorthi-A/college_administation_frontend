import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Verticalbar from "./Verticalbar";
import './Exam.css'

function Exam() {
  return (
    <div className="exam-page">
      <Row className="w-100">
        <Col lg={2} md={2} sm={2} xs={2}>
          <Verticalbar />
        </Col>
        <Col lg={10} md={10} sm={10} xs={10}>
          <Row className="w-100">
            <Row className="text-center">
              <h6>Exam Registration</h6>
              <hr />
            </Row>
            <Row>
              <Form className="mb-3 w-100">
                <Form.Group as={Row} className="mb-5" controlId="formPlaintext">
                  <Form.Label column sm="2">
                    Semester
                  </Form.Label>
                  <Col sm="10">
                    <Form.Select aria-label="Default select example">
                      <option>select</option>
                      <option value="0">S1</option>
                      <option value="1">S2</option>
                      <option value="2">S3</option>
                      <option value="3">S4</option>
                      <option value="4">S5</option>
                      <option value="5">S6</option>
                      <option value="6">S7</option>
                      <option value="7">S8</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Form>
            </Row>
            <Row className="exam-button">
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

export default Exam;
