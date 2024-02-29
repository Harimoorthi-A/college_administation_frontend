import React from "react";
import "./Profile.css";
import { Col, Form, Row } from "react-bootstrap";
import Verticalbar from "./Verticalbar";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";

function Profile() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="profile-page">
      <Row className="w-100">
        <Col lg={2} md={2} sm={2} xs={2}>
          <Verticalbar />
        </Col>
        <Col lg={10} md={10} sm={10} xs={10}>
          <Row className="w-100">
            <Row className="text-center">
              <h6>Student Profile</h6>
              <hr />
            </Row>
            <Row>
              <Col lg={10} md={10} sm={10} xs={10}>
                <p>
                  Name : <b>Harimoorthi</b>
                </p>
                <p>
                  DOB : <b>07/04/1999</b>
                </p>
                <p>
                  Age : <b>24</b>
                </p>
                <p>
                  Father's Name : <b>Arjunan M</b>
                </p>
                <p>
                  Address :{" "}
                  <b>TC 22/891 Medayil veedu, Attukal, Thiruvananthapuram</b>
                </p>
              </Col>
              <Col lg={2} md={2} sm={2} xs={2}>
                <Image
                  src="https://i.postimg.cc/bw4gBQBc/rmxkvbdtrp5v0rcosrev.png"
                  width="100%"
                  thumbnail
                />
              </Col>
              <hr className="mt-3" />
            </Row>
            <Row className="w-100 mt-3">
              <p>
                Mother's Name : <b>Priya</b>
              </p>
              <p>
                Blood Group : <b>A +ve</b>
              </p>
              <p>
                SSLC Mark/% : <b>98%</b>
              </p>
              <p>
                Plus two Mark/% : <b>93.6%</b>
              </p>
              <p>
                Entrance Mark/% : <b>348</b>
              </p>
            </Row>
            <Row className="profile-button">
              <Col lg={9} md={9} sm={9} xs={9}></Col>
              <Col lg={3} md={3} sm={3} xs={3}>
                <button
                  class="custom-btn btn-3"
                  onClick={() => setModalShow(true)}
                >
                  <span>Edit</span>
                </button>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Profile;

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Form.Label column sm="2">
              Name
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="" className="w-100" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Form.Label column sm="2">
              DOB
            </Form.Label>
            <Col sm="10">
              <Form.Control type="date" placeholder="" className="w-100" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Form.Label column sm="2">
              Age
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="" className="w-100" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Form.Label column sm="2">
              Father's Name
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="" className="w-100" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Form.Label column sm="2">
              Address
            </Form.Label>
            <Col sm="10">
              <Form.Control
                as="textarea"
                type="text"
                placeholder=""
                className="w-100"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Form.Label column sm="2">
              Mother's Name
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="" className="w-100" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Form.Label column sm="2">
              Blood Group
            </Form.Label>
            <Col sm="10">
            <Form.Select aria-label="Default select example">
                      <option>select</option>
                      <option value="0">A +ve</option>
                      <option value="1">A -ve</option>
                      <option value="2">B +ve</option>
                      <option value="3">B -ve</option>
                      <option value="4">Ab +ve</option>
                      <option value="5">AB -ve</option>
                      <option value="6">O +ve</option>
                      <option value="7">O -ve</option>
                    </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Form.Label column sm="2">
              SSLC Mark
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="" className="w-100" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Form.Label column sm="2">
              Plus Two Mark
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="" className="w-100" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Form.Label column sm="2">
              Entrance
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="" className="w-100" />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button class="custom-btn btn-3" onClick={props.onHide}>
          <span>SAVE</span>
        </button>
      </Modal.Footer>
    </Modal>
  );
}
