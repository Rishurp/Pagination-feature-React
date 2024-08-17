import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div>
      <img src={product.thumbnail} alt={product.title} />
      <p className="text-center text-lg text-white  ">{product.title}</p>
    </div>
  );
};

export default ProductCard;
