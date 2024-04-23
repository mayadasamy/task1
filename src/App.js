import React  , {useEffect} from 'react';
import './App.css';
import NavBar from './component/NavBar';
import About from './component/About';
import ContactUs from './component/ContactUs';
import {Routes, Route} from 'react-router-dom';
import Header from './component/Header';

import ProductDetails from './component/ProductDetails';
import UserCompleteData from './component/UserCompleteData';
import UserData from './component/UserData';
import SingleUserData from './component/SingleUserData';
import ProductList from './component/ProductList';


import Cart from './component/Cart'
import Aos from 'aos';
import 'aos/dist/aos.css';





function App() {

  useEffect(()=>{
    Aos.init();
  })
  return (
    
 

<>
    
       <NavBar/>
       
   
      
      
      <Routes>
      <Route path="/" element={ <Header/>} />
        <Route path="/about" element={ <About/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/product" element={<ProductList/>} />
        <Route path="/product/:ProductId" element={<ProductDetails/>} />
        <Route path="/contact/:contactName" element={<UserCompleteData/>} />


        <Route path="/user" element={<UserData/>} />
        <Route path="/user/:id" element={<SingleUserData/>} />


        
        <Route path="/cart" element={<Cart/>} />

      </Routes>
     

      

   
     
      
      

</>
  );
}

export default App;
