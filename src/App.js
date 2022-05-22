/*eslint-disable*/
import { useState } from 'react';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  let [shoes] = useState(data);
  return (
    <div className="App">
      <Navbar variant="dark" className="Navbar">
        <Container>
          <Navbar.Brand href="/">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">홈</Nav.Link>
            <Nav.Link href="/detail">상세페이지</Nav.Link>
            <Nav.Link href="#pricing">Product</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main shoes={shoes} />} />
        <Route path="/detail" element={<div>상세페이지임</div>} />
      </Routes>
    </div>
  );
}

function Main(props) {
  return (
    <>
      <div className="main-bg"></div>
      <Container>
        <Row>
          {props.shoes.map(function (a, i) {
            return <Card key={i} shoes={props.shoes[i]} i={i + 1} />;
          })}
        </Row>
      </Container>
      <Button variant="primary">Primary</Button>
    </>
  );
}

function Card(props) {
  return (
    <Col key={props.i}>
      <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col>
  );
}

export default App;
