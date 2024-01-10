import React, { useEffect, useState } from "react";
import "./index.scss";
import SectionHeader from "../../SectionHeader";
import Product from "../../Product";
import axios from "axios";

const TrendingProduct = () => {
  const [allProducts, setAllProducts] = useState()
  const getAllProducts = async ()=>{
    const resp = await axios("http://localhost:3000")
    setAllProducts(resp.data)
  }
  useEffect(() => {
    getAllProducts()
  }, [])
  
  return (
    <section id="trending-product">
      <div className="container">
        <SectionHeader
          title={"Trending Product"}
          headerTopContent={"Popular Item in the market"}
        />
        <div className="products">
          <div className="row">
            {allProducts && allProducts.map(product=>(
              <Product key={product._id} category={product.category} title={product.category} price={product.price} img={product.image}/>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProduct;
