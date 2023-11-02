import React, { useEffect, useState } from 'react'
import Navbar from "./Navbar";
import Navbarside from "./Navbarside";
import './singleproduct.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';



const SingleProduct = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const getProductDetailById = async (id) => {

    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    const ProductData = data;
  
    const foundProduct = ProductData.find((product) => product.id === parseInt(id));
  
    return foundProduct || null;
  }

  const {id} = useParams();
  const [ProductDetails, setProductDetails] = useState(null);

  useEffect(() => {
    getProductDetailById(id)
    .then((data) => {
      setProductDetails(data)
    })
    .catch((error) => {
      console.log("Error:", error);
    })
  });

  if(!ProductDetails) {
    return <div className='loading'>Loading...</div>
  }

  return (
    <div class="singleproduct">
    <Navbar />
    <div className="single-product-container">
      <Navbarside />
      <div className="single-product">
      <h1 className="singleproducttitle">Product Information</h1>
      <div className="single-product-box">
        <div className="single-product-img">
          <img className='s-product-img' src={ProductDetails.image} alt="single_product_img" />
        </div>
        <div className="single-product-details">
          <h4>{ProductDetails.title}</h4>
          <p>{ProductDetails.description}</p>
          <h2>Price: ${ProductDetails.price}</h2>
          <p>category: {ProductDetails.category}</p>
        </div>     
      </div>                                
      </div>
    </div>

  </div>
  )
}

export default SingleProduct