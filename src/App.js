/*eslint-disable*/
import { useState } from 'react';
import {
  Button,
  Navbar,
  Container,
  Nav,
  Row,
  Col,
} from 'react-bootstrap';
import './App.css';
import data from './data.js';

function App() {
  let [shoes] = useState(data);
  return (
    <div className="App">
      <Navbar variant="dark" className="Navbar">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Info</Nav.Link>
            <Nav.Link href="#pricing">Product</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Container>
        <Row>
          {shoes.map(function (a, i) {
            return <Card shoes={shoes[i]} i={i + 1} />;
          })}
        </Row>
      </Container>
      <Button variant="primary">Primary</Button>
    </div>
  );
}

function Card(props) {
  return (
    <Col>
      <img
        src={
          'https://codingapple1.github.io/shop/shoes' +
          props.i +
          '.jpg'
        }
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col>
  );
}

export default App;
