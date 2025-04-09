import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () =>{
    navigate(`/product/${item.id}`);  
  }
  
  return (
    <div className='productCardImage-wrap' onClick={showDetail}>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={item?.img}/>
            <div className='product-infoText'>
              <div className='choice'>{item?.choice?'Conscious choice': ''}</div>
              <div>{item?.title}</div>
              <div>{item?.price} 원</div>
              <div style={{color: '#CD0118'}}>{item?.new === true? '신제품': ''}</div>
            </div>
          </div>

          <div className='card-back'>

            <div
                  className="bg-layer"
                  style={{
                    backgroundImage: `url(${item?.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.3,
                  }}
                />
                  <div className="card-content">
                    <div>{item?.choice ? 'Conscious choice' : ''}</div>
                    <div>{item?.title}</div>
                    <div>{item?.price} 원</div>
                    <div>{item?.new === true ? '신제품' : ''}</div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default ProductCard