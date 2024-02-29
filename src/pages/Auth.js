import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { loginApi, registerApi } from "../service/allApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Auth({ register }) {
  // login $ register form
  const isRegisterForm = register ? true : false;

  // navigation
  const navigate = useNavigate();

  // form values
  const [users, setUsers] = useState({
    userName: "",
    email: "",
    password: "",
  });

  // state to check validation
  const [unameValid, setUnameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [pswValid, setPswValid] = useState(false);

  const setInputs = (e) => {
    const { name, value } = e.target;

    if (name == "userName") {
      if (value.match(/^[a-zA-Z ]+$/)) {
        setUnameValid(false);
      } else {
        setUnameValid(true);
      }
    }
    if (name == "email") {
      if (
        value.match(
          /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
        )
      ) {
        setEmailValid(false);
      } else {
        setEmailValid(true);
      }
    }
    if (name == "password") {
      if (value.match(/^[0-9a-zA-Z@ ]{3,8}$/)) {
        setPswValid(false);
      } else {
        setPswValid(true);
      }
    }
    setUsers({ ...users, [name]: value });
  };
  // console.log(users);

  // Register
  const handleRegister = async (e) => {
    e.preventDefault();
    const { userName, email, password } = users;
    if (!userName || !email || !password) {
      alert("Please fill all datas");
    } else {
      const result = await registerApi(users);
      if (result.status == 200) {
        toast.success(
          `Hii, your profile has been created....Please Login to explore`,
          {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
        setUsers({ userName: "", email: "", password: "" });
        navigate("/login");
      } else {
        toast.warn(result.response.data, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setUsers({ userName: "", email: "", password: "" });
        navigate("/login");
      }
    }
  };
  // login
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = users;
    if (!email || !password) {
      alert("Please fill all data");
    } else {
      const result = await loginApi(users);
      console.log(result);
      if (result.status == 200) {
        localStorage.setItem("currentUser", JSON.stringify(result.data.user.userName));
        localStorage.setItem("currentId", JSON.stringify(result.data.user._id));
        localStorage.setItem("token", JSON.stringify(result.data.token));
        toast.success(`login success`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // reset user state
        setUsers({ email: "", password: "" });
        navigate("/student");
      } else {
        toast.error("authentication error", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setUsers({ email: "", password: "" });
      }
    }
  };
  return (
    <div className="auth-page">
      <Row className="w-100">
        <Col
          lg={4}
          md={4}
          sm={4}
          xs={4}
          style={{ backgroundColor: "#5FBDFF", height: "81vh" }}
        >
          <Row
            className="mt-5 ms-1"
            style={{ paddingTop: "10%" }}
            id="left-auth"
          >
            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              <i class="fa-solid fa-house me-3"></i>Home
            </a>
            <h6 id="glowText" className="mt-5">
              Welcome{" "}
            </h6>
            {isRegisterForm ? (
              <>
                <h6>Let's get you set up</h6>
                <p>
                  It should only take a couple of minutes to create your account
                </p>
                <b>Lets START</b>
              </>
            ) : (
              <>
                <h6>Back !!</h6>
                <h6>Let's get you set up</h6>
                <p>
                  It should only take a couple of minutes to create your account
                </p>
                <b>Lets START</b>
              </>
            )}
          </Row>
        </Col>
        <Col lg={8} md={8} sm={8} xs={8} style={{ height: "81vh" }}>
          <Row className="w-100 mt-5" id="right-auth">
            {isRegisterForm ? <h5>Sign up</h5> : <h5>Sign In</h5>}
          </Row>
          <hr />
          <Row>
            {isRegisterForm ? (
              <Form>
                <Form.Group className="mb-3 w-50">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    name="userName"
                    onChange={(e) => setInputs(e)}
                    value={users.userName}
                    type="text"
                    placeholder="Username"
                  />
                  <Form.Text className="text-muted">
                    {unameValid && (
                      <p className="text-danger" style={{ fontSize: "13px" }}>
                        *Username must contain only alphanets including space*
                      </p>
                    )}
                  </Form.Text>
                </Form.Group>
              </Form>
            ) : (
              ""
            )}
            <Form>
              <Form.Group className="mb-3 w-50">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  onChange={(e) => setInputs(e)}
                  value={users.email}
                  type="text"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  {emailValid && (
                    <p className="text-danger" style={{ fontSize: "13px" }}>
                      *email must contain only alphanets,number without symbols
                      and space*
                    </p>
                  )}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3 w-50">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  onChange={(e) => setInputs(e)}
                  value={users.password}
                  type="password"
                  placeholder="Password"
                />
                <Form.Text className="text-muted">
                  {pswValid && (
                    <p className="text-danger" style={{ fontSize: "13px" }}>
                      *Invalid password*
                    </p>
                  )}
                </Form.Text>
              </Form.Group>
              {isRegisterForm ? (
                <button
                  class="custom-btn btn-3"
                  onClick={(e) => handleRegister(e)}
                >
                  <span>Sign Up</span>
                </button>
              ) : (
                <button
                  class="custom-btn btn-3"
                  onClick={(e) => handleLogin(e)}
                >
                  <span>Sign In</span>
                </button>
              )}
              <br />
              {isRegisterForm ? (
                <>
                  <a href="/login" className="text-center ms-5">
                    Sign in
                  </a>
                </>
              ) : (
                <>
                  <a href="/register" className="text-center ms-5">
                    Sign up
                  </a>
                </>
              )}
            </Form>
          </Row>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
}

export default Auth;
