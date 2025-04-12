import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import {Row, Container, Col} from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query,setQuery] = useSearchParams();
    const getProduct  = async()=>{
        let searchQuery = query.get('q') || "";
        console.log("쿼리 값은? ", searchQuery);
        let url = `https://my-json-server.typicode.com/lliwIWant/shoppingMall/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        // console.log(data);
        setProductList(data);
    };
    
    useEffect(()=>{
        getProduct();
    },[query])

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