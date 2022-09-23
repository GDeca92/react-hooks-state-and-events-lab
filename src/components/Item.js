import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(true)
  const color = inCart ? "#eded20" : "#d233d2"
  function handleClick(){
    setInCart((inCart) => !inCart)
  }

  return (
    <li className={inCart ? "" : "in-cart" }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" style={{background: color}} onClick={handleClick}>{inCart ? "Add to Cart" : "Remove from Cart" }</button>
    </li>
  );
}

export default Item;
