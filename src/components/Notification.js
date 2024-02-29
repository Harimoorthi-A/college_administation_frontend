import React from "react";
import "./Notification.css";
import { Col, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Form from "react-bootstrap/Form";

function Notification() {
  return (
    <div className="notification-page">
      <Row className="w-100">
        <Col className="" lg={2} md={2} sm={2} xs={2}>
          <Sidebar />
        </Col>
        <Col className="" lg={10} md={10} sm={10} xs={10}>
          <Row className="w-100">
            <Row className="text-center">
              <h6>Notifications</h6>
              <hr />
            </Row>
            <Row className="m-auto w-100">
              <Form>
                <Form.Group as={Row} className="mb-5" controlId="formPlaintext">
                  <Form.Label column sm="2">
                    Notification
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" placeholder="" className="w-50" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-5" controlId="formPlaintext">
                  <Form.Label column sm="2">
                    Notification
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control as="textarea" type="text" placeholder="" className="w-50" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-5" controlId="formPlaintext">
                  <Form.Label column sm="2">
                    Photo
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="file" placeholder="" className="w-50" />
                  </Col>
                </Form.Group>
              </Form>

              <button class="custom-btn btn-3 w-50">
                <span>Add</span>
              </button>
            </Row>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Notification;
