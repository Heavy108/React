import Item from "./item";
import { useState } from "react";
const Food_items = ({ items }) => {
  let [activeItems , SetActiveItems] =useState([]);

  let onBuyButton = (item ,event) =>{
    let newItems =[...activeItems ,item];
    SetActiveItems(newItems);
  }
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} food_items={item} 
        bought ={activeItems.includes(item)}
        handleBuyButton ={(event) =>onBuyButton(item,event)}
        />
      ))}
    </ul>
  );
};
export default Food_items;
