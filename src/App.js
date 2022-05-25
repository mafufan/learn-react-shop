/*eslint-disable*/
import { useEffect, useState } from 'react';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';
import axios from 'axios';

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [btn, setBtn] = useState(0);
  let [alert, setAlert] = useState(false);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    const alert = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(alert);
    };
  }, [alert]);

  useEffect(() => {
    const req = setTimeout(() => {
      axios
        .get(`https://codingapple1.github.io/shop/data${btn}.json`)
        .then((결과) => {
          console.log(결과.data);
          let copy = [...shoes, ...결과.data];
          setShoes(copy);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
          clearTimeout(req);
        });
    }, 1500);
  }, [btn]);
  return (
    <div className="App">
      <Navbar variant="dark" className="Navbar">
        <Container>
          <Navbar.Brand href="/">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/detail');
              }}
            >
              상세페이지
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/cart');
              }}
            >
              Cart
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/about');
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/event');
              }}
            >
              Event
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
                    return <Card key={i} navigate={navigate} shoes={shoes[i]} i={i + 1} />;
                  })}
                  {loading == true ? <Loading /> : null}
                </Row>
              </Container>
              {alert == true ? <Alert></Alert> : null}
              <Button
                onClick={() => {
                  btn < 3 ? setBtn(btn + 1) : setAlert(true);
                  console.log({ btn });
                  setLoading(true);
                }}
                variant="primary"
              >
                더보기
              </Button>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>
        <Route path="/event" element={<EventPage navigate={navigate} />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>

        <Route path="*" element={<div>없는 페이지요</div>} />
      </Routes>
    </div>
  );
}

function Loading() {
  return (
    <>
      <div className="alert alert-warning">로딩 중 입니다.</div>
    </>
  );
}

function Alert() {
  return (
    <>
      <div className="alert alert-warning">더이상 표시할 데이터가 없습니다. </div>
    </>
  );
}

function EventPage(props) {
  return (
    <>
      <h4>오늘의 이벤트</h4>
      <Button
        onClick={() => {
          props.navigate('/event/one');
        }}
        style={{ marginRight: '20px' }}
      >
        이벤트 1
      </Button>
      <Button
        onClick={() => {
          props.navigate('/event/two');
        }}
      >
        이벤트 2
      </Button>
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
        <img
          onClick={() => {
            props.navigate(`/detail/${props.i - 1}`);
          }}
          src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'}
          width="80%"
        />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </Col>
    </>
  );
}

export default App;
