import React from "react";
// import { useParams } from "react-router-dom";

const Coin = ({ name, symbol, imageSrc, price }) => {
  return (
    <div className="coin">
      <img src={imageSrc} alt={name} />
      <h1>{symbol}</h1>
      <p>{name}</p>
      <h4>₹{price}</h4>
    </div>
  );
};

export default Coin;
