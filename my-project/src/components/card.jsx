import React from "react";
import Name from "./name";
import Price from "./price";
import Description from "./description";
import Image from "./image";

const Card = () => {
  return (
    <div className="w-[500px] m-auto border-2 shadow-xl flex justify-center items-center flex-col p-10">
      <Name />
      <Price />
      <Description />
      <Image />
    </div>
  );
};

export default Card;
