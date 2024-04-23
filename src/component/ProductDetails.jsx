import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Product from './Product'

const ProductDetails = () => {
  const params = useParams();
  console.log(params);
  const [product, setProduct] = useState({});

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${params.ProductId}`)
    .then((res)=>{
      setProduct(res.data);
    }).catch((err)=>{
      console.log(err)
    })



  }, []);




  return (
    <>

<Product product={product} showButton={false}/>
      
    </>
  )
}

export default ProductDetails
