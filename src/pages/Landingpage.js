import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Landingpage() {
  return (
    <div className="landingpage">
      <Row className="w-100 caroussel">
        <div className=" caroussel-sub">
          <h1 className="caroussel-sub-text text-center ">
            LMC College of Engineering
          </h1>
        </div>
      </Row>

      <Row className="text-center w-100 mt-5">
        <h4>News and Events</h4>
        <Row className="m-auto text-center mt-5">
          <Col lg={3} md={0} sm={0} xs={0}></Col>
          <Col lg={2} md={4} sm={4} xs={6}>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Geo-Technical Engineering (CE)</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={2} md={4} sm={4} xs={6}>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={2} md={4} sm={4} xs={6}>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={0} sm={0} xs={0}></Col>

          <div className="mt-5">
            <button class="custom-btn btn-3">
              <span>View all</span>
            </button>
          </div>
        </Row>
      </Row>

      <Row className="m-auto text-center">
        <Row>
          <Col lg={3} md={0} sm={0} xs={0}></Col>
          <Col lg={2} md={4} sm={4} xs={6} className="">
            <Card style={{ width: "100%" }} className="mt-5 card gradient-section-box">
              <Card.Img
                variant="top"
                src="https://i.postimg.cc/k5cx4ZyY/1589002141.jpg"
                className="card-image"
              />
              <Card.Body>
                <Card.Title>Geo-Technical Engineering (CE)</Card.Title>
                <Card.Text>
                  PG course in Geotechnical Engineering was started in the year
                  2013. The department has secured University ranks.
                </Card.Text>
                <hr className="text-dark" />
                <Row>
                  <Col lg={6} md={6} sm={6} xs={6}>
                    <p>UG Course</p>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={6}>
                    <p>60 Seats</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={2} md={4} sm={4} xs={6} className="">
            <Card style={{ width: "100%" }} className="mt-5 card gradient-section-box">
              <Card.Img
                variant="top"
                src="https://i.postimg.cc/6Qppw1bh/1582807362.jpg"
                className="card-image"
              />
              <Card.Body>
                <Card.Title>Civil Engineering</Card.Title>
                <Card.Text>
                  The Civil Engineering Department was started in the year 2006.
                  The department has secured University ranks; a department with
                  NBA Accreditation.
                </Card.Text>
                <hr className="text-dark" />
                <Row>
                  <Col lg={6} md={6} sm={6} xs={6}>
                    <p>UG Course</p>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={6}>
                    <p>60 Seats</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={2} md={4} sm={4} xs={6} className="">
            <Card style={{ width: "100%" }} className="mt-5 card gradient-section-box">
              <Card.Img
                variant="top"
                src="https://i.postimg.cc/KcHLWtzV/1585294682.jpg"
                className="card-image"
              />
              <Card.Body>
                <Card.Title>Electronics & Communication Engineering</Card.Title>
                <Card.Text>
                  The Department of Electronics and Communication Engineering
                  was established in the year 2001; a department with NBA
                  Accreditation
                </Card.Text>
                <hr className="text-dark" />
                <Row>
                  <Col lg={6} md={6} sm={6} xs={6}>
                    <p>UG Course</p>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={6}>
                    <p>60 Seats</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={0} sm={0} xs={0}></Col>
        </Row>

        <Row>
          <Col lg={3} md={0} sm={0} xs={0}></Col>
          <Col lg={2} md={4} sm={4} xs={6} className="">
            <Card style={{ width: "100%" }} className="mt-5 card gradient-section-box">
              <Card.Img
                variant="top"
                src="https://i.postimg.cc/WzTp3Nsx/1582863635.jpg"
                className="card-image"
              />
              <Card.Body>
                <Card.Title>Mechanical Engineering</Card.Title>
                <Card.Text>
                  The Department of Mechanical Engineering came into existence
                  in 2004 and has grown since then into an evergreen department;
                  a department with NBA Accreditation
                </Card.Text>
                <hr className="text-dark" />
                <Row>
                  <Col lg={6} md={6} sm={6} xs={6}>
                    <p>UG Course</p>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={6}>
                    <p>60 Seats</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={2} md={4} sm={4} xs={6} className="">
            <Card style={{ width: "100%" }} className="mt-5 card gradient-section-box">
              <Card.Img
                variant="top"
                src="https://i.postimg.cc/43cXQ7dr/1582863467.jpg"
                className="card-image"
              />
              <Card.Body>
                <Card.Title>Electrical & Electronics Engineering</Card.Title>
                <Card.Text>
                  The Electrical & Electronics Engineering Department started in
                  2013 which mould Electrical Engineers with self proficiency in
                  Education, Research, Development and Dedication.
                </Card.Text>
                <hr className="text-dark" />
                <Row>
                  <Col lg={6} md={6} sm={6} xs={6}>
                    <p>UG Course</p>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={6}>
                    <p>60 Seats</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={2} md={4} sm={4} xs={6} className="">
            <Card style={{ width: "100%" }} className="mt-5 card gradient-section-box">
              <Card.Img
                variant="top"
                src="https://i.postimg.cc/rmyYF3vQ/1669783648.jpg"
                className="card-image"
              />
              <Card.Body>
                <Card.Title>Computer Science & Engineering</Card.Title>
                <Card.Text>
                  The Department with NBA Accreditation, started in the year
                  2001 ; develops self-esteemed, creative and competent computer
                  engineers focusing on the progress of society.
                </Card.Text>
                <hr className="text-dark" />
                <Row>
                  <Col lg={6} md={6} sm={6} xs={6}>
                    <p>UG Course</p>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={6}>
                    <p>60 Seats</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={0} sm={0} xs={0}></Col>
        </Row>

        <div className="mt-5">
          <button class="custom-btn btn-3">
            <span>View all</span>
          </button>
        </div>
      </Row>

      <Row className="mt-5 text-start w-100">
        <h4 className="ps-4">About Us</h4>
        <p className="ps-4">
          LMC College of Engineering was established in 2001 and has become a
          pioneer Institute for engineering studies in Kerala. The College is
          affiliated to the APJ Abdul Kalam Technological University (KTU) and
          the University of Kerala (KU). The College has emerged as a leader in
          the Self Financing sector. The Institute stretches over 40 acre
          verdant campus in the neighbourhood of Vikram Sarabhai Space Centre,
          Techno Park, Kinfra Apparels and other renowned institutions. At
          LMC Engineering College, we certainly believe that we can prepare
          the next generation for the future. So we emphasize the 4 C's:
          Competence, Confidence, Commitment and Compassion.
        </p>
        <div className="">
          <button class="custom-btn btn-3">
            <span>View all</span>
          </button>
        </div>
      </Row>

      <Row className="gradient-section w-100">
        <Row>
          <Col lg={3} md={0} sm={0} xs={0}></Col>
          <Col lg={2} md={4} sm={4} xs={6} className="gradient-section-box2">
            <b>IEDC & Startup</b>
            <p>
              Innovation and Entrepreneurship Development Centre (IEDC) focus
              its activities in such a way that our students can achieve a
              successful career.
            </p>
          </Col>
          <Col lg={2} md={4} sm={4} xs={6} className="gradient-section-box2">
            <b>Training & Placements</b>
            <p>
              To give proper career guidance and to place students of our
              college in reputed companies in India and abroad.
            </p>
          </Col>
          <Col lg={2} md={4} sm={4} xs={6} className="gradient-section-box2">
            <b>IQAC</b>
            <p>
              The Internal Quality Assurance Cell takes the effort to maintain
              high quality work in academics and administration.
            </p>
          </Col>
          <Col lg={3} md={0} sm={0} xs={0}></Col>
        </Row>

        <Row>
          <Col lg={3} md={0} sm={0} xs={0}></Col>
          <Col lg={2} md={4} sm={4} xs={6} className="gradient-section-box2">
            <b>Associations</b>
            <p>
              Associations in our college includes IEI, IEEE,IEEE-PES, CSI, IGS,
              ISTE
            </p>
          </Col>
          <Col lg={2} md={4} sm={4} xs={6} className="gradient-section-box2">
            <b>MoUs</b>
            <p>MoUs is signed with different firms every year.</p>
          </Col>
          <Col lg={2} md={4} sm={4} xs={6} className="gradient-section-box2">
            <b>Arts & Sports</b>
            <p>
              The Arts Club takes initiative in the smooth conduct of every fest
              in the campus.
            </p>
          </Col>
          <Col lg={3} md={0} sm={0} xs={0}></Col>
        </Row>
      </Row>

      <Row className="land-students w-100">
        <div className="land-students-sub">
          <Row className="land-students-icons text-center">
            <Col lg={3} md={0} sm={0} xs={0}></Col>
            <Col lg={2} md={4} sm={4} xs={6}>
              <img
                src="https://i.postimg.cc/NMqNSG12/counter-icon1.png"
                alt=""
              />
              <h6>1840+</h6>
              <h6>Students</h6>
            </Col>
            <Col lg={2} md={4} sm={4} xs={6}>
              <img
                src="https://i.postimg.cc/wjtPtG22/counter-icon2.png"
                alt=""
              />
              <h6>48777+</h6>
              <h6>Books</h6>
            </Col>
            <Col lg={2} md={4} sm={4} xs={6}>
              <img
                src="https://i.postimg.cc/g0svGYhT/counter-icon3.png"
                alt=""
              />
              <h6>5000+</h6>
              <h6>Alumni</h6>
            </Col>
            <Col lg={3} md={0} sm={0} xs={0}></Col>
          </Row>
        </div>
      </Row>

      <Row className="w-100 mt-5 mb-5">
        <h3 className="text-center" style={{ color: "#125091" }}>
          Prominent Recruiters
        </h3>
        <Row className="mt-5 w-100">
          <Col lg={2} md={2} sm={0} xs={0}></Col>
          <Col lg={2} md={2} sm={3} xs={3}>
            <img
              src="https://i.postimg.cc/wxCNC6jg/15698193731.jpg"
              alt=""
              className="w-100"
            />
          </Col>
          <Col lg={2} md={2} sm={3} xs={3}>
            <img
              src="https://i.postimg.cc/44BMPSf6/15698193421.jpg"
              alt=""
              className="w-100"
            />
          </Col>
          <Col lg={2} md={2} sm={3} xs={3}>
            <img
              src="https://i.postimg.cc/SKk7wmVJ/15698192571.jpg"
              alt=""
              className="w-100"
            />
          </Col>
          <Col lg={2} md={2} sm={3} xs={3}>
            <img
              src="https://i.postimg.cc/C1FY2rRj/15698195811.jpg"
              alt=""
              className="w-100"
            />
          </Col>
          <Col lg={2} md={2} sm={0} xs={0}></Col>
        </Row>

        <Row className="mt-5">
          <Col lg={2} md={2} sm={0} xs={0}></Col>
          <Col lg={2} md={2} sm={3} xs={3}>
            <img
              src="https://i.postimg.cc/tTwbgqrz/15698190271.jpg"
              alt=""
              className="w-100"
            />
          </Col>
          <Col lg={2} md={2} sm={3} xs={3}>
            <img
              src="https://i.postimg.cc/SNmTM0wL/15698190361.jpg"
              alt=""
              className="w-100"
            />
          </Col>
          <Col lg={2} md={2} sm={3} xs={3}>
            <img
              src="https://i.postimg.cc/gkX3BgFX/ifgl-refractories-ltd-logo.jpg"
              alt=""
              className="w-100"
            />
          </Col>
          <Col lg={2} md={2} sm={3} xs={3}>
            <img
              src="https://i.postimg.cc/xdxK4hCm/Infosys-logo-svg.png"
              alt=""
              className="w-100"
            />
          </Col>
          <Col lg={2} md={2} sm={0} xs={0}></Col>
        </Row>
      </Row>
    </div>
  );
}

export default Landingpage;
