import React from "react";
import Card from "./components/card";

const App = () => {
  const firstName = "Temi";

  return (
    <div className="text-black">
      <Card />

      <h1 className="font-extrabold text-2xl text-center">
        {firstName ? `Hello ${firstName}` : `Hello there!`}
      </h1>

      {firstName && (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT35VRkcQQejvKnunHUnXd5jF5c4FQhkq4s2A&s"
          className="w-[100px] h-[100px] rounded-full mx-auto object-cover"
        ></img>
      )}
    </div>
  );
};

export default App;
