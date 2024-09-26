import React from "react";
import product from "./product";

const Image = () => {
  return (
    <div className="text-center w-52">
      <img src={product.image} alt={product.name} srcset="" />
    </div>
  );
};

export default Image;
