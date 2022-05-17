import React, { useState } from "react";

function Item({ name, category }) {
  const [itemState, setItemState] = useState("")
  let buttonText = () => {
    if (itemState === "in-cart") {
      return "Remove From Cart"
    } else {
      return "Add to Cart"
    }
  }

  return (
    <li className={itemState}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => stateToggle("in-cart")}>{buttonText()}</button>
    </li>
  );

  function stateToggle() {
    if (itemState === "") {
      setItemState("in-cart")
    } else {
      setItemState("")
    }
  }


}
export default Item;
