import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import Product from "./Product";
import { Link } from "react-router-dom";
import "./css/productDetails.css";

const ProductDetails = () => {
  const params = useParams();
  console.log(params);
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.ProductId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    //     <>

    // <Product product={product} showButton={false}/>

    //     </>

    <>
      <div className="container" >
        <img src={product.image} className="card__image" alt={product.title} />

        <h3 className="card__title">{product.title}</h3>
        <span className="card__status">${product.price}</span>

        <p className="card__description">{product.description}</p>

        <Link className="card_button" to={`/`}>
          Back
        </Link>
      </div>
    </>
  );
};

export default ProductDetails;
