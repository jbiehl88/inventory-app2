import React from "react";

export const SingleItem = ({ item, deleteItem, goBack }) => {
  return (
    <>
    <div className="container">

      <div className="item-details">
        <ul>
          <li>Name:{item.name}</li>
          <li>Price:{item.price}</li>
          <li>Category:{item.category}</li>
          <li>Description:{item.description}</li>
        </ul>
      </div>

      <div className="allButtons">
        <button className="backBtn" onClick={goBack}>Back</button>
        <button className="deleteBtn" onClick={() => deleteItem(item.id)}>Delete</button>
      </div>
    </div>
    </>
  );
};
