import React from "react";
import "./Post.css";
import { Col, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Form from "react-bootstrap/Form";

function Post() {
  return (
    <div className="post-page">
      <Row className="w-100">
        <Col lg={2} md={2} sm={2} xs={2}>
          <Sidebar />
        </Col>
        <Col lg={10} md={10} sm={10} xs={10}>
          <Row className="w-100">
            <Row className="text-center">
              <h6>Post</h6>
              <hr />
            </Row>
            <Row>
              <Form>
                <Form.Group as={Row} className="mb-5" controlId="formPlaintext">
                  <Form.Label column sm="2">
                    Post name
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" placeholder="" className="w-50" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-5" controlId="formPlaintext">
                  <Form.Label column sm="2">
                    Description
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      as="textarea"
                      type="text"
                      placeholder=""
                      className="w-50"
                    />
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
                <Form.Group as={Row} className="mb-5" controlId="formPlaintext">
                  <Form.Label column sm="2">
                    Video
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="file" placeholder="" className="w-50" />
                  </Col>
                </Form.Group>
              </Form>

              <button class="custom-btn btn-3 w-50">
                <span>Post</span>
              </button>
            </Row>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Post;
