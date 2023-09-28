import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import Gallery from "./Gallery";

function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [formValid, setFormValid] = useState({
    email: false,
    password: false,
  });

  const [loginStatus, setLoginStatus] = useState(true);
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  const updateEmail = (event) => {
    setFormValues({ ...formValues, email: event.target.value });
  };

  const updatePassword = (event) => {
    setFormValues({ ...formValues, password: event.target.value });
    setFormValid({ ...formValid, password: event.target.value.length >= 9 });
  };

  const login = () => {
    let URL = "http://localhost:3001/login";
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: formValues.email,
        password: formValues.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setLoginStatus(true);
          console.log("Logged in, next screen loading...");
        } else {
          setLoginStatus(false);
          console.log("Login failed");
        }
      });
  };

  const loginBtnAction = () => {
    setFormValid({ ...formValid, email: true });
    if (formValid.email) {
      setShowPasswordInput(true);
    }
    if (formValid.password) {
      login();
    }
  };

  return (
    <div className="screen">
      <Container
        className="mainSquare"
        style={{ backgroundColor: "white", height: "100%", width: "100%" }}
      >
        <Row
          style={{
            width: "100%",
            minHeight: "75vh",
            display: "flex",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          
          <Col
            style={{
              minHeight: "75vh",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Form>
              <Form.Group>
                <Form.Label>
                  {showPasswordInput ? formValues.email : "Email"}
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={updateEmail}
                  value={formValues.email}
                ></Form.Control>
                <Form.Text className="text-muted">
                  We won't share your email
                </Form.Text>
              </Form.Group>
              {showPasswordInput && (
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    onChange={updatePassword}
                    value={formValues.password}
                    style={{ borderColor: formValid.password ? "" : "red" }}
                  ></Form.Control>
                  <Form.Text className="tex-muted">
                    Password must be at least 9 characters
                  </Form.Text>
                </Form.Group>
              )}
            </Form>
            <br />
            <Button onClick={loginBtnAction}>Next</Button>
            {loginStatus && <Link to="/gallery">Go to gallery</Link>}
            <br />

            {!loginStatus && (
              <Form.Text style={{ color: "red" }}>
                Login failed, try again
              </Form.Text>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
