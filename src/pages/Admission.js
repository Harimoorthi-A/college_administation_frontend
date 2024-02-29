import React from "react";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Admission() {
  return (
    <div className="admission-page">
      <Row className=" w-100 text-center p-3">
        <h3>Expression of Interest for B.Tech Admission 2024</h3>
        <hr />
      </Row>
      <Row className="w-100">
        <Row className="w-100 ms-2">
          <Row className="w-100 p-2" style={{ backgroundColor: "grey" }}>
            <h6>Personal Details</h6>
          </Row>
          <Form>
            <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
              <Form.Label>Candidate Name (as per SSLC Book)</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>
          </Form>
          <Form className="mb-3 w-25">
            <Form.Label>Gender</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>select</option>
              <option value="1">Male</option>
              <option value="0">Female</option>
              <option value="2">Transgender</option>
            </Form.Select>
          </Form>
          <Form>
            <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" placeholder="dd-mm-yyyy" />
            </Form.Group>
          </Form>
          <Form>
            <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
              <Form.Label>Mother Tongue</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Form>
          <Form>
            <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
              <Form.Label>Nationality</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Form>
        </Row>

        <Row className="ms-2 w-100">
          <Row className="w-100 p-2" style={{ backgroundColor: "grey" }}>
            <h6>Admission Details</h6>
          </Row>
          <Form className="mb-3 w-25">
            <Form.Label>Admission for</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>select</option>
              <option value="1">B.Tech</option>
              <option value="0">M.Tech</option>
            </Form.Select>
          </Form>
          <Form>
            <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
              <Form.Label>academic year</Form.Label>
              <Form.Control type="text" placeholder="Year" />
            </Form.Group>
          </Form>
          <Row className="w-25 p-2" style={{ backgroundColor: "grey" }}>
            <h6>Course Preference</h6>
          </Row>
          <Row>
            <br />
          </Row>
          <Form className="mb-3 w-25">
            <Form.Label>Priority 1</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>select course</option>
              <option value="0">CIVIL</option>
              <option value="1">COMPUTER SCIENCE</option>
              <option value="2">ELECTRRICAL & ELECTRONICS</option>
              <option value="3">ELECTRONICS & COMMUNICATION</option>
              <option value="4">MECHANICAL</option>
              <option value="5">
                ARTIFICIAL INTELLIGENCE & MACHINE LEARNING
              </option>
            </Form.Select>
          </Form>
          <Form className="mb-3 w-25">
            <Form.Label>Priority 2</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>select course</option>
              <option value="0">CIVIL</option>
              <option value="1">COMPUTER SCIENCE</option>
              <option value="2">ELECTRRICAL & ELECTRONICS</option>
              <option value="3">ELECTRONICS & COMMUNICATION</option>
              <option value="4">MECHANICAL</option>
              <option value="5">
                ARTIFICIAL INTELLIGENCE & MACHINE LEARNING
              </option>
            </Form.Select>
          </Form>
          <Form className="mb-3 w-25">
            <Form.Label>Priority 3</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>select course</option>
              <option value="0">CIVIL</option>
              <option value="1">COMPUTER SCIENCE</option>
              <option value="2">ELECTRRICAL & ELECTRONICS</option>
              <option value="3">ELECTRONICS & COMMUNICATION</option>
              <option value="4">MECHANICAL</option>
              <option value="5">
                ARTIFICIAL INTELLIGENCE & MACHINE LEARNING
              </option>
            </Form.Select>
          </Form>
          <Form className="mb-3 w-25">
            <Form.Label>Type</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>select course</option>
              <option value="0">Spot</option>
              <option value="1">NRI</option>
              <option value="2">Management Quota</option>
              <option value="3">Govt. Quota</option>
              <option value="4">Merit</option>
              <option value="5">Others</option>
            </Form.Select>
          </Form>
        </Row>
        <Row className="ms-2 w-100">
          <Row className="w-100 p-2" style={{ backgroundColor: "grey" }}>
            <h6>contact Details</h6>
          </Row>
          <Form>
            <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
              <Form.Label>Father's Name :</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
              <Form.Label>Mother's Name :</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
              <Form.Label>Adress :</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
              <Form.Label>Phone number :</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
              <Form.Label>Email :</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>
          </Form>
        </Row>
        <Row className="ms-2 w-100">
          <Row className="w-100 p-2" style={{ backgroundColor: "grey" }}>
            <h6>Enter the code as shown in the image below</h6>
          </Row>
          <div className="w-100">
            <Form>
              <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
                <Form.Label>Verify Code</Form.Label>
                <div>

                </div>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </Form>
          </div>
        </Row>
        <Row className="ms-2 w-100">
          <Row className="w-100 p-2" style={{ backgroundColor: "grey" }}>
            <h6>Declaration</h6>
          </Row>
          <Form>
            <Form.Check aria-label="option 1" />
          </Form>
          <p>
            I agree ,The above mentioned facts are true and correct to the best
            of my knowledge and belief.
          </p>
        </Row>
        <Row className="m-auto text-center w-25">
          <button class="custom-btn btn-3">
            <span>Submit</span>
          </button>
        </Row>
      </Row>
    </div>
  );
}

export default Admission;
