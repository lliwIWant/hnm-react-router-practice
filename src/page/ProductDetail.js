import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {Container, Row, Col, Dropdown } from 'react-bootstrap';

const ProductDetail = () => {

    let{id} = useParams();
    const [product, setProduct] = useState(null);
    const getProductDetail= async()=>{
      let url = `https://my-json-server.typicode.com/lliwIWant/shoppingMall/products/${id}`
      let response = await fetch(url)
      let data = await response.json();
      console.log(data);
      setProduct(data);
    }

    useEffect(()=>{
      getProductDetail();
    },[])

  
  return (
    <Container>
        <Row>
          <Col className='product-img'>
            <img src={product?.img}/>
          </Col>

          <Col className='productDetailSection'>
            <div>
              <div className='productDetailTitle'>{product?.title}</div>
              <div className='price-area'>{product?.price} 원</div>
              <div className='mark-area'>
              {product?.choice?<div>Conscious choice</div>:''}
              {product?.new?<div>신제품</div>:''}

              </div>

              <Dropdown className='dropdown-area'>
                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                  사이즈 선택
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">L</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            
            <button id="product-detail-btn">추가</button>
          </Col>
        </Row>
    </Container>
  )
}

export default ProductDetail