import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, []);

  let fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data.products);
    setProducts(data.products);
  };

  return (
    <div>
      <div className="grid grid-cols-4 p-4 gap-4">
        {products.slice(page * 10 - 10, page * 10).map((product) => {
          return (
            <div className="p-4 rounded-md object-contain border-2 bg-black ">
              <ProductCard product={product} key={product.id} />
            </div>
          );
        })}
      </div>

      <div className="pagination flex justify-center margin-4 pb-10 text-2xl text-white  ">
        <div
          onClick={() => {
            if (page > 1) setPage(page - 1);
          }}
          className="hover:cursor-pointer border-2 border-white p-2 text-slate-700"
        >
          ◀️
        </div>
        {[...Array(products.length / 10)].map((_, i) => {
          return (
            <div
              className={`hover:cursor-pointer border-2 border-white   p-2  ${
                page === i + 1 ? " text-black bg-white " : ""
              }`}
              onClick={() => {
                setPage(i + 1);
              }}
            >
              {i + 1}
            </div>
          );
        })}
        <div
          onClick={() => {
            if (page < products.length / 10) setPage(page + 1);
          }}
          className="hover:cursor-pointer border-2 border-white p-2"
        >
          ▶️
        </div>
      </div>
    </div>
  );
};

export default Pagination;
