/*eslint-disable*/
import { useState } from 'react';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar variant="dark" className="Navbar">
        <Container>
          <Navbar.Brand href="/">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}>
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/detail');
              }}>
              상세페이지
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/cart');
              }}>
              Cart
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/about');
              }}>
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <Container>
                <Row>
                  {shoes.map(function (a, i) {
                    return <Card key={i} shoes={shoes[i]} i={i + 1} />;
                  })}
                </Row>
              </Container>
              <Button variant="primary">Primary</Button>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>
        <Route path="/event" element={<EventPage />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>

        <Route path="*" element={<div>없는 페이지요</div>} />
      </Routes>
    </div>
  );
}

function EventPage() {
  return (
    <>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Card(props) {
  return (
    <>
      <Col>
        <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </Col>
    </>
  );
}

export default App;
