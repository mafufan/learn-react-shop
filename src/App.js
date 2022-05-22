/*eslint-disable*/
import {
  Button,
  Navbar,
  Container,
  Nav,
  Row,
  Col,
} from 'react-bootstrap';
import './App.css';

function App() {
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
          <Col>
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="80%"
            />
            <h4>상품명</h4>
            <p>상품정보</p>
          </Col>
          <Col>
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="80%"
            />
            <h4>상품명</h4>
            <p>상품정보</p>
          </Col>
          <Col>
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="80%"
            />
            <h4>상품명</h4>
            <p>상품정보</p>
          </Col>
        </Row>
      </Container>
      <Button variant="primary">Primary</Button>
    </div>
  );
}

export default App;
