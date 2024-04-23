import React from 'react'
import './css/ProductList.css'
import { Link } from 'react-router-dom'


const Product = (props) => {
        const {product , showButton} = props;
       
  
  return (
    <>
   
          <img src={product.image} className="card__image" alt={product.title} />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>
              <img className="card__thumb" src={product.image} alt="" />
              <div className="card__header-text">
                <h3 className="card__title">{product.title}</h3>
                <span className="card__status">${product.price}</span>
              </div>
            </div>
            {/* <p className="card__description">{product.description}</p> */}
            {showButton ? (
            <Link
              className="card_button"
                to={`/product/${product.id}`}
            >
              Details
            </Link>
          ) : (
            <Link className="card_button" to={`/product`}>
              Back
            </Link>
          )}
          </div>
      

         
      
    </>
    
   
  )

}


export default Product
 