import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

let 박스 = styled.div`
  padding : 20px;
`;

let 제목 = styled.h4`
  font-size : 25px;
  font-weight : bold;
  color : ${ props => props.색상 }
`;

function Detail(props){
  
  let { id } = useParams();
  let history = useHistory();
  let 찾는상품 = props.shoes.find(x => x.id == id);

  return(
    <div className="container">
      <박스>
        <제목 색상="#ff0000">Detail</제목>
      </박스>
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes' + (찾는상품.id + 1) + '.jpg'} width="100%" alt="" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾는상품.title}</h4>
          <p>{찾는상품.content}</p>
          <p>{찾는상품.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
          <button className="btn btn-danger" onClick={()=>{
            history.goBack()
          }}>뒤로가기</button> 
        </div>
      </div>
    </div> 
  )
}


export default Detail;