import React from "react";
import product from "./product";

const Description = () => {
  return (
    <h3 className="text-center p-3 font-bold">
      Description: {product.description}
    </h3>
  );
};

export default Description;
