import React from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";

function Admin() {
  return (
    <div>
      <Row className="w-100">
        <Col className="" lg={2} md={2} sm={2} xs={2}>
          <Sidebar />
        </Col>
        <Col className="" lg={10} md={10} sm={10} xs={10}>
          <Row className="w-100">
            <Row className="text-center">
              <h6>Admin Dashboard</h6>
              <hr />
            </Row>
            <Row>
              <Col lg={4} md={4} sm={6} xs={6}>
                <div className="admin-card text-center pt-5">
                  <h1>
                    <i
                      class="fa-solid fa-user fa-xl"
                      style={{ color: "#63E6BE" }}
                    ></i>
                  </h1>
                  <b>2855</b>
                </div>
              </Col>
              <Col lg={4} md={4} sm={6} xs={6}>
                <div className="admin-card text-center pt-5">
                  <h1>
                    <i
                      class="fa-solid fa-comments"
                      style={{ color: "#e20829" }}
                    ></i>
                  </h1>
                  <b>2855</b>
                </div>
              </Col>
              <Col lg={4} md={4} sm={6} xs={6}>
                <div className="admin-card text-center pt-5">
                  <h1>
                    <i
                      class="fa-solid fa-cloud-arrow-down"
                      style={{ color: "#ffa200" }}
                    ></i>
                  </h1>
                  <b>2855</b>
                </div>
              </Col>
            </Row>
            <Row className="mt-5">
              
            </Row>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Admin;
