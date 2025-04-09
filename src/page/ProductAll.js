import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import {Row, Container, Col} from 'react-bootstrap';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const getProduct  = async()=>{
        let url = `http://my-json-server.typicode.com/lliwIWant/shoppingMall/products`;
        let response = await fetch(url);
        let data = await response.json();
        // console.log(data);
        setProductList(data);
    };
    
    useEffect(()=>{
        getProduct();
    },[])

  return (
    <div>
      <Container>
          <Row>

            {productList.map(menu =>(
              <Col  lg={3}>
                 <ProductCard item={menu}/>
              </Col>
            ))}
          </Row>
      </Container>
    </div>
  )
}

export default ProductAll