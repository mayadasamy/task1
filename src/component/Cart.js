import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

const Cart = () => {
  const [carts, setCarts] = useState();
  const CartProduct = useSelector((state) => state.Product.item);
  // useEffect(() => {
  //   setCarts(CartProduct);
  // });

  useEffect(() => {
    setCarts(CartProduct);
  }, [CartProduct]);

  return (
    <div className="container_cart">
      
      {carts?.map((el) => (
        <div className="users" key={el.id}>
          <img src={el.image} alt="" />
          <h3>
            {el.firstName} {el.lastName}
          </h3>
          <h3>{el.email}</h3>
          <h3>{el.phone}</h3>
        </div>
      ))}
    </div>
    
  );
};

export default Cart;
