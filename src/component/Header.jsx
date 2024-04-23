import React from 'react'
import './css/Header.css'
import ProductList from './ProductList'
import Footer from './Footer'
import Contact from './Contact'
import About from './About'

const Header = () => {
  return (

    <>
    <div className='header' data-aos="zoom-in">
        <div className='header-content'>

        <h1>welcome to our Store</h1>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, nam.</p>
        <button>Shop Now</button>


        </div>
    
      
    </div>
    <About/>
    <ProductList/>
    <Contact/> 
    <Footer/>

    </>
  )
}

export default Header
