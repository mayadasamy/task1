import React from 'react';
import './App.css';
import NavBar from './component/NavBar';
import About from './component/About';
import ContactUs from './component/ContactUs';
import Footer from './component/Footer';
import {Routes, Route} from 'react-router-dom';
import Header from './component/Header';
import ProductList from './component/ProductList';
import ProductDetails from './component/ProductDetails';




function App() {
  return (
    
 

<>
    
       <NavBar/>
       
   
      
      
      <Routes>
      <Route path="/" element={ <Header/>} />
        <Route path="/about" element={ <About/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/product/:ProductId" element={<ProductDetails/>} />
       


      </Routes>
      <ProductList/>

      <Footer/> 
      

   
     
      
      

</>
  );
}

export default App;
