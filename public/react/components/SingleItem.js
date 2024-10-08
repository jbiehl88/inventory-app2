import React, { useState } from "react";

export const SingleItem = ({ item }) => {
    const currency = item.price.toFixed(2);

  return (
    <div className="item-card">
      <img className="image-size" src={item.image} alt={item.name}></img>  
      <ul>
        <h1>{item.name}</h1>
        <h2>${currency}</h2>
        <p>{item.category}</p>
        <p>{item.description}</p>
      </ul>
    </div>
  );
};
