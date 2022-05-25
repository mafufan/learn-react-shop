/*eslint-disable*/
import { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Detail(props) {
  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id;
  });
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [탭, 탭변경] = useState(0);

  useEffect(() => {
    const a = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(a);
    };
  }, []);

  let [num, setNum] = useState('');
  useEffect(() => {
    if (isNaN(num) == true) {
      alert('그러지마세요');
    }
  }, [num]);

  return (
    <Container>
      {alert == true ? <div className="alert alert-warning">2초이내 구매시 할인 </div> : null}
      {count}
      <input
        onChange={(e) => {
          setNum(e.target.value);
        }}
        placeholder="입력하세요."
      ></input>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </Button>
      <Col>
        <img
          src={'https://codingapple1.github.io/shop/shoes' + (Number(id) + 1) + '.jpg'}
          width="100%"
        />
      </Col>
      <Col>
        <h4 className="pt-5">{찾은상품.title}</h4>
        <p>{찾은상품.content}</p>
        <p>{찾은상품.price}원</p>
        <Button variant="danger">주문하기</Button>
      </Col>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭} />
    </Container>
  );
}

function TabContent({ 탭 }) {
  return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭];
}

export default Detail;
