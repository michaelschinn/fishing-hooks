import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/ListGroup";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand={true} className="px-3">
        <Navbar.Brand><Link to="/">Bill & Tom's Bait & Tackle</Link></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="">
          <Nav.Item><Nav.Link><Link to="/products">Products</Link></Nav.Link></Nav.Item>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Item><Nav.Link onClick={handleShow}>Cart</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link>Login / Logout</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="shoppingCartLabel">Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup id="cartList">

          </ListGroup>
          <ListGroup>
            <ListGroup.Item id="subTotal">Sub-Total: <span></span></ListGroup.Item>
            <ListGroup.Item id="taxes">Taxes: <span></span></ListGroup.Item>
            <ListGroup.Item id="total">Total: <span></span></ListGroup.Item>
          </ListGroup>
          <Button>Checkout</Button>
        </Offcanvas.Body>
      </Offcanvas>
      <Container>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
