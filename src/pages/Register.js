import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Button from "react-bootstrap/Button";
import axios from "axios";
import FormValidator from "../components/FormValidator";

export default function Register() {
  const [formData, setFormData] = useState({});
  const [errorData, setErrorData] = useState({});
  const [touched, setTouched] = useState({});
  let userAuthToken;
  const uP = {
    username: `94ba363d-e0ab-4649-86ce-4a4392cc00ad`,
    password: `mYebcUwE5S4FNff4pjK39vx3FtxCmZXz2Hy7XJHZ`,
  };
  const APIPostURI = `https://aincbootcampapi-ianrios529550.codeanyapp.com/?username=${
    formData.formUsername ? formData.formUsername : uP.username
  }&password=${formData.formPassword ? formData.formPassword : uP.password}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (errorData === {} && formData !== {}) {
      axios
        .post(APIPostURI, formData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const changeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.value.length);
    if (touched[e.target.name]) {
      setErrorData(FormValidator(formData,touched));
    }
  };
  const focusHandler = (e) => {
    setTouched((prevState) => ({
      ...prevState,
      [e.target.name]: true,
    }));
  };

  const usState = [
    `Alabama`,
    `Alaska`,
    `Arizona`,
    `Arkansas`,
    `California`,
    `Colorado`,
    `Connecticut`,
    `Delaware`,
    `Florida`,
    `Georgia`,
    `Hawaii`,
    `Idaho`,
    `Illinois`,
    `Indiana`,
    `Iowa`,
    `Kansas`,
    `Kentucky`,
    `Louisiana`,
    `Maine`,
    `Maryland`,
    `Massachusetts`,
    `Michigan`,
    `Minnesota`,
    `Mississippi`,
    `Missouri`,
    `Montana`,
    `Nebraska`,
    `Nevada`,
    `New Hampshire`,
    `New Jersey`,
    `New Mexico`,
    `New York`,
    `North Carolina`,
    `North Dakota`,
    `Ohio`,
    `Oklahoma`,
    `Oregon`,
    `Pennsylvania`,
    `Rhode Island`,
    `South Carolina`,
    `South Dakota`,
    `Tennessee`,
    `Texas`,
    `Utah`,
    `Vermont`,
    `Virginia`,
    `Washington`,
    `West Virginia`,
    `Wisconsin`,
    `Wyoming`,
  ];
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="display-3 mt-5">Register</h2>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={12} sm={8} md={6}>
          <Form noValidate onSubmit={handleSubmit}>
              
            <Form.Group controlId="formUsername" className="mb-3">
              <FloatingLabel controlId="formUsername" label="Username">
                <Form.Control
                  size="lg"
                  type="text"
                  name="formUsername"
                  placeholder="Enter Username"
                  value={formData.formUsername || ""}
                  onChange={changeHandler}
                  onFocus={focusHandler}
                  isValid={!errorData.formUsername && touched.formUsername && formData.formUsername}
                  isInvalid={!!errorData.formUsername && touched.formUsername}
                  required
                />
                <Form.Control.Feedback controlId="formUsername" type="invalid">
                  {errorData.formUsername || ""}
                </Form.Control.Feedback>
              </FloatingLabel>
              <Form.Text className="text-muted">
                This will be the unique name that you will use to login.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <FloatingLabel controlId="formPassword" label="Password">
                <Form.Control
                  size="lg"
                  type="password"
                  name="formPassword"
                  placeholder="Enter Password"
                  value={formData.formPassword || ""}
                  onChange={changeHandler}
                  onFocus={focusHandler}
                  isValid={!errorData.formPassword && touched.formPassword && formData.formPassword}
                  isInvalid={!!errorData.formPassword && touched.formPassword}
                  required
                />
                <Form.Control.Feedback controlId="formPassword" type="invalid">
                  {errorData.formPassword || ""}
                </Form.Control.Feedback>
              </FloatingLabel>
              <Form.Text className="text-muted">
                Password must be at least 8 characters long.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <FloatingLabel controlId="formEmail" label="Email Address">
                <Form.Control
                  size="lg"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email || ""}
                  onChange={changeHandler}
                  onFocus={focusHandler}
                  isValid={!errorData.email && touched.email && formData.email}
                  isInvalid={!!errorData.email && touched.email}
                  required
                />
                <Form.Control.Feedback controlId="formEmail" type="invalid">
                  {errorData.email || ""}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group controlId="formFirstName" className="mb-3">
              <FloatingLabel controlId="formFirstName" label="First Name">
                <Form.Control
                  size="lg"
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                  value={formData.firstName || ""}
                  onChange={changeHandler}
                  onFocus={focusHandler}
                  isValid={!errorData.firstName && touched.firstName && formData.firstName}
                  isInvalid={!!errorData.firstName && touched.firstName}
                  required
                />
                <Form.Control.Feedback controlId="formFirstName" type="invalid">
                  {errorData.firstName || ""}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group controlId="formLastName" className="mb-3">
              <FloatingLabel controlId="formLastName" label="Last Name">
                <Form.Control
                  size="lg"
                  type="text"
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={formData.lastName || ""}
                  onChange={changeHandler}
                  onFocus={focusHandler}
                  isValid={!errorData.lastName && touched.lastName && formData.lastName}
                  isInvalid={!!errorData.lastName && touched.lastName}
                  required
                />
                <Form.Control.Feedback controlId="formLastName" type="invalid">
                  {errorData.lastName || ""}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group controlId="formAddress" className="mb-3">
              <FloatingLabel controlId="formAddress" label="Address">
                <Form.Control
                  size="lg"
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                  value={formData.address || ""}
                  onChange={changeHandler}
                  onFocus={focusHandler}
                  isValid={!errorData.address && touched.address && formData.address}
                  isInvalid={!!errorData.address && touched.address}
                  required
                />
                <Form.Control.Feedback controlId="formAddress" type="invalid">
                  {errorData.address || ""}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group controlId="formAddress2" className="mb-3">
              <FloatingLabel controlId="formAddress2" label="Address 2">
                <Form.Control
                  size="lg"
                  type="text"
                  name="address2"
                  placeholder="Enter Address 2"
                  value={formData.address2 || ""}
                  onChange={changeHandler}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group controlId="formCity" className="mb-3">
              <FloatingLabel controlId="formCity" label="City">
                <Form.Control
                  size="lg"
                  type="text"
                  name="city"
                  placeholder="Enter City"
                  value={formData.city || ""}
                  onChange={changeHandler}
                  onFocus={focusHandler}
                  isValid={!errorData.city && touched.city && formData.city}
                  isInvalid={!!errorData.city && touched.city}
                  required
                />
                <Form.Control.Feedback controlId="formCity" type="invalid">
                  {errorData.city || ""}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group controlId="formState" className="mb-3">
              <FloatingLabel controlId="formState" label="Choose a State">
                <Form.Select
                  aria-label="Enter State"
                  name="state"
                  value={formData.state || ""}
                  onChange={changeHandler}
                >
                  {usState.map((state) => {
                    return <option>{state}</option>;
                  })}
                </Form.Select>
              </FloatingLabel>
            </Form.Group>
            <Form.Group controlId="formZipcode" className="mb-3">
              <FloatingLabel controlId="formZipcode" label="Zipcode">
                <Form.Control
                  size="lg"
                  type="text"
                  name="zipCode"
                  placeholder="Enter Zipcode"
                  value={formData.zipCode || ""}
                  onChange={changeHandler}
                  onFocus={focusHandler}
                  isValid={!errorData.zipCode && touched.zipCode && formData.zipCode}
                  isInvalid={!!errorData.zipCode && touched.zipCode}
                  required
                />
                <Form.Control.Feedback controlId="formZipcode" type="invalid">
                  {errorData.zipCode || ""}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Button type="submit">Register</Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
