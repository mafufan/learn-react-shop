/*eslint-disable*/
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let YellowBtn = styled.button`
  background: ${props => props.bg};
  color: ${props => (props.bg == 'blue' ? 'white' : 'black')};
  padding: 10px;
`;

function Detail(props) {
  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (x) {
    console.log(x);
    return x.id == id;
  });

  return (
    <Container>
      <YellowBtn bg="blue">sadasd</YellowBtn>
      <Col>
        <img src={'https://codingapple1.github.io/shop/shoes' + (Number(id) + 1) + '.jpg'} width="100%" />
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
