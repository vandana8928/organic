import React, { useEffect } from 'react';
import { FaLeaf, FaShoppingBasket, FaUtensils, FaPeopleCarry, FaSeedling, FaTree } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Product = () => {

  useEffect(()=>{
    AOS.init({
      duration:3000
    });
      },[])
  const product = [
    {
      id: 1,
      title: "EcoPure Essentials",
      description: "Offers essential organic products for eco-conscious consumers",
      icon: <FaLeaf className="product-icon" />
    },
    {
      id: 2,
      title: "Nature's Finest Delights",
      description: "Delivers the finest organic delights sourced from nature.",
      icon: <FaShoppingBasket className="product-icon" />
    },
    {
      id: 3,
      title: "Green Earth Gourmet",
      description: "Gourmet organic selections that are friendly to the environment.",
      icon: <FaUtensils className="product-icon" />
    },
    {
      id: 4,
      title: "FarmFresh Naturals",
      description: "Provides naturally fresh products straight from the farm.",
      icon: <FaPeopleCarry className="product-icon" />
    },
    {
      id: 5,
      title: "PureOrganica Provisions",
      description: "Offers pure organic provisions for a healthy lifestyle",
      icon: <FaSeedling className="product-icon" />
    },
    {
      id: 6,
      title: "Harmony Harvest Goods",
      description: "Harvested goods promoting harmony with nature and sustainability.",
      icon: <FaTree className="product-icon" />
    },
    // Add more product objects as needed
  ];

  return (
    <div className="container product-sec" data-aos="fade-up" >
      <h1>Product</h1>
      <div className="row"data-aos="fade-right"  >
        {product.map(product => (
          <div className="col-md-4" key={product.id}>
            <div className="card">
              <div className="card-body">
                <div className="icon">{product.icon}</div>
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
