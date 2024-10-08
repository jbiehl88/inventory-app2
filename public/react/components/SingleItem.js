
import React from "react";

export const SingleItem = ({ item, deleteItem, goBack }) => {
   const currency = item.price.toFixed(2);
  return (
    <>
    <div className="container">

      <div className="item-details">
        
        <img className="image-size" src={item.image} alt={item.name}></img>  
        <h1>{item.name}</h1>
        <h2>${currency}</h2>
        <p>{item.category}</p>
        <p>{item.description}</p>
        
      </div>

      <div className="allButtons">
        <button className="backBtn" onClick={goBack}>Back</button>
        <button className="deleteBtn" onClick={() => deleteItem(item.id)}>Delete</button>
      </div>
    </div>
    </>
  );
};
