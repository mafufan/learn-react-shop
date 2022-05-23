/*eslint-disable*/
import { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Detail(props) {
  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id;
  });
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);

  useEffect(() => {
    const a = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return clearTimeout(a);
  }, []);

  return (
    <Container>
      {alert == true ? <div className="alert alert-warning">2초이내 구매시 할인 </div> : null}
      {count}
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
    </Container>
  );
}

export default Detail;
