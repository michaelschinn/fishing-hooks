import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/ListGroup";

function App() {
  return (
    <Router>
      <Navbar bg="dark" expand={false}>
        <Navbar.Brand><Link to="/">Bill & Tom's Bait & Tackle</Link></Navbar.Brand>
        <Nav>
          <Nav.Item><Link to="/products">Products</Link></Nav.Item>
          <Nav.Item className="ml-auto"><Button>Cart</Button></Nav.Item>
          <Nav.Item><Button>Login / Logout</Button></Nav.Item>
        </Nav>
        <Navbar.Toggle aria-controls="shoppingCart" />
        <Navbar.Offcanvas
          id="shoppingCart"
          aria-labelledBy="shoppingCartLabel"
          placement="end"
        >
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
        </Navbar.Offcanvas>
      </Navbar>
      <Container>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/product">
            <Product />
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
