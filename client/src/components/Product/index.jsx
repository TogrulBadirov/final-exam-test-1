import React from "react";
import "./index.scss";
const Product = ({category,title,price,img}) => {
  return (
    <div className="product col-lg-3 col-md-4 col-sm-6 col-12">
      {" "}
      <img
        src={img}
        alt=""
      />
      <p className="product-category">{category}</p>
      <h4 className="product-title">{title}</h4>
      <span className="product-price">${price}</span>
    </div>
  );
};

export default Product;
