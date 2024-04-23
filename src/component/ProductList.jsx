import React, { useEffect , useState } from 'react'
import './css/ProductList.css'
import Product from './Product'
import axios from 'axios'


const ProductList = () => {

  const Api_Url = 'https://fakestoreapi.com/products';
  const [Products, setProducts] = useState([]);
  const [Category, setCategory] = useState([]);




  const getProduct = () => {

    axios.get(Api_Url)
    .then((res)=>{setProducts(res.data)})
    .catch((err)=>{console.log(err)})

  }

  

  const getCategory = () => {
    axios
      .get(`${Api_Url}/categories`)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  
  useEffect(() => {
    getProduct();
    getCategory();
   

  }, []);




  return (
    <>
    

    <div className="Product-cards">
    <h2 className='product-title'>Our Products</h2>


    <div className="cards">   
      {Products.map((el) => (
        <div className='card' key={el.id}>
          <Product product={el} showButton={true}/>

        </div>


      ))}  
    </div>

    </div>

      
    </>
  )
}

export default ProductList
